#!/usr/bin/env node
// Regenerates the js/data/*.js <script> tag block in index.html so that
// adding/removing a chapter data file never requires hand-editing index.html.
// Run after adding a new file under js/data/:
//   node scripts/generate-script-tags.js
// Fails (exit 1) if index.html is out of date, so it can also run in CI as a check:
//   node scripts/generate-script-tags.js --check

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "js", "data");
const indexHtmlPath = path.join(root, "index.html");

const START = "<!-- DATA_SCRIPTS_START -->";
const END = "<!-- DATA_SCRIPTS_END -->";

function listDataFiles() {
  return fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".js") && f !== "index.js")
    .sort((a, b) => a.localeCompare(b, "en"))
    .concat(["index.js"]);
}

function buildBlock(files) {
  const lines = files.map((f) => `<script src="js/data/${f}"></script>`);
  return [START, ...lines, END].join("\n");
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const html = fs.readFileSync(indexHtmlPath, "utf8");

  const startIdx = html.indexOf(START);
  const endIdx = html.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.error(
      `Could not find ${START} / ${END} markers in index.html. ` +
      "Add them around the js/data/*.js <script> tags."
    );
    process.exit(1);
  }

  const files = listDataFiles();
  const newBlock = buildBlock(files);
  const newHtml = html.slice(0, startIdx) + newBlock + html.slice(endIdx + END.length);

  if (newHtml === html) {
    console.log(`index.html already up to date (${files.length} data files).`);
    return;
  }

  if (checkOnly) {
    console.error(
      "index.html is out of date with js/data/. Run `node scripts/generate-script-tags.js` and commit the result."
    );
    process.exit(1);
  }

  fs.writeFileSync(indexHtmlPath, newHtml);
  console.log(`Updated index.html with ${files.length} data file(s).`);
}

main();
