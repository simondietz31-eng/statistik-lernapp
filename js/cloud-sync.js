// Synchronisiert den Lernfortschritt (aus storage.js) geraete-/browserübergreifend
// über Firebase Auth (Benutzername+Passwort) und Firestore.
//
// Strategie: localStorage bleibt die synchron gelesene Quelle für die UI (unveraendert).
// Bei Anmeldung wird der Cloud-Stand mit dem lokalen Stand verglichen (per "updatedAt"
// Zeitstempel, "last write wins") und der neuere Stand gewinnt. Danach wird jede lokale
// Aenderung (via saveProgress-Hook) mit kurzer Verzoegerung in Firestore gesichert.

(function () {
  var auth = null;
  var db = null;
  var currentUser = null;
  var pushTimer = null;
  var applyingRemote = false;

  function emailForUsername(username) {
    var safe = String(username).trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
    return safe + "@statistik-lernapp.local";
  }

  function docRefFor(uid) {
    return db.collection("progress").doc(uid);
  }

  function schedulePush(progress) {
    if (!currentUser || applyingRemote) return;
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      docRefFor(currentUser.uid).set(progress).catch(function (e) {
        console.error("Cloud-Sync: Speichern fehlgeschlagen", e);
        setStatus("Sync-Fehler: " + e.message, true);
      });
    }, 800);
  }

  function pullAndMerge(user) {
    setStatus("Synchronisiere...");
    docRefFor(user.uid).get().then(function (snap) {
      var local = loadProgress();
      var remote = snap.exists ? snap.data() : null;
      var winner;
      if (!remote || (local.updatedAt || 0) >= (remote.updatedAt || 0)) {
        winner = local;
      } else {
        winner = remote;
      }
      applyingRemote = true;
      saveProgress(winner);
      applyingRemote = false;
      docRefFor(user.uid).set(winner).catch(function (e) {
        console.error("Cloud-Sync: Initialer Upload fehlgeschlagen", e);
      });
      if (typeof applyDarkModePref === "function") applyDarkModePref();
      if (typeof setView === "function") setView(state.view);
      setStatus("Angemeldet als " + (user.displayName || user.email));
    }).catch(function (e) {
      console.error("Cloud-Sync: Laden fehlgeschlagen", e);
      setStatus("Sync-Fehler: " + e.message, true);
    });
  }

  function setStatus(text, isError) {
    var el = document.getElementById("account-status");
    if (el) {
      el.textContent = text;
      el.classList.toggle("account-status-error", !!isError);
    }
  }

  function updateAccountButton() {
    var btn = document.getElementById("btn-account");
    if (!btn) return;
    if (currentUser) {
      btn.textContent = "👤 " + (currentUser.displayName || currentUser.email.split("@")[0]);
      btn.title = "Konto verwalten";
    } else {
      btn.textContent = "👤 Anmelden";
      btn.title = "Anmelden, um Fortschritt zwischen Browsern zu synchronisieren";
    }
  }

  function buildModal() {
    if (document.getElementById("account-modal")) return;
    var overlay = document.createElement("div");
    overlay.id = "account-modal";
    overlay.className = "account-modal-overlay";
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="account-modal">' +
      '  <button type="button" class="account-modal-close" id="account-modal-close" aria-label="Schließen">✕</button>' +
      '  <div id="account-modal-signed-out">' +
      '    <h2>Anmelden</h2>' +
      '    <p class="account-modal-hint">Mit Benutzername anmelden, um deinen Lernfortschritt zwischen Browsern und Geräten zu synchronisieren.</p>' +
      '    <input id="account-username" type="text" placeholder="Benutzername" autocomplete="username">' +
      '    <input id="account-password" type="password" placeholder="Passwort" autocomplete="current-password">' +
      '    <div id="account-error" class="account-error"></div>' +
      '    <div class="account-modal-actions">' +
      '      <button type="button" id="account-btn-signin" class="primary-btn">Anmelden</button>' +
      '      <button type="button" id="account-btn-signup" class="footer-link-btn">Neu registrieren</button>' +
      '    </div>' +
      '  </div>' +
      '  <div id="account-modal-signed-in" hidden>' +
      '    <h2>Konto</h2>' +
      '    <p id="account-status" aria-live="polite"></p>' +
      '    <div class="account-modal-actions">' +
      '      <button type="button" id="account-btn-signout" class="primary-btn">Abmelden</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(overlay);

    document.getElementById("account-modal-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });

    document.getElementById("account-btn-signin").addEventListener("click", function () {
      handleAuth("signin");
    });
    document.getElementById("account-btn-signup").addEventListener("click", function () {
      handleAuth("signup");
    });
    document.getElementById("account-btn-signout").addEventListener("click", function () {
      auth.signOut();
      closeModal();
    });
  }

  function handleAuth(mode) {
    var username = document.getElementById("account-username").value;
    var password = document.getElementById("account-password").value;
    var errorEl = document.getElementById("account-error");
    errorEl.textContent = "";
    if (!username.trim() || password.length < 6) {
      errorEl.textContent = "Benutzername angeben und Passwort mit mindestens 6 Zeichen wählen.";
      return;
    }
    var email = emailForUsername(username);
    var action = mode === "signup"
      ? auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
          return cred.user.updateProfile({ displayName: username.trim() });
        })
      : auth.signInWithEmailAndPassword(email, password);

    action.then(function () {
      closeModal();
    }).catch(function (e) {
      errorEl.textContent = translateAuthError(e);
    });
  }

  function translateAuthError(e) {
    switch (e.code) {
      case "auth/email-already-in-use": return "Dieser Benutzername ist bereits vergeben.";
      case "auth/user-not-found": return "Unbekannter Benutzername.";
      case "auth/wrong-password": return "Falsches Passwort.";
      case "auth/weak-password": return "Passwort zu schwach (mind. 6 Zeichen).";
      default: return "Fehler: " + e.message;
    }
  }

  function openModal() {
    buildModal();
    document.getElementById("account-modal").hidden = false;
    document.getElementById("account-modal-signed-out").hidden = !!currentUser;
    document.getElementById("account-modal-signed-in").hidden = !currentUser;
    if (currentUser) setStatus("Angemeldet als " + (currentUser.displayName || currentUser.email));
  }

  function closeModal() {
    var overlay = document.getElementById("account-modal");
    if (overlay) overlay.hidden = true;
  }

  function init() {
    if (!window.firebase || !window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === "REPLACE_ME") {
      console.warn("Cloud-Sync: Firebase-Konfiguration fehlt (js/firebase-config.js) – Sync ist deaktiviert, Fortschritt bleibt lokal.");
      return;
    }
    firebase.initializeApp(window.FIREBASE_CONFIG);
    auth = firebase.auth();
    db = firebase.firestore();
    if (typeof firebase.analytics === "function") {
      firebase.analytics();
    }

    window.__onProgressSaved = schedulePush;

    var btn = document.getElementById("btn-account");
    if (btn) btn.addEventListener("click", openModal);

    auth.onAuthStateChanged(function (user) {
      currentUser = user;
      updateAccountButton();
      if (user) {
        pullAndMerge(user);
      } else {
        setStatus("");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
