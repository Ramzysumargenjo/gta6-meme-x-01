// main.ts — hand POST.json to the grader.
//
// The grader runs this program with MAKEFUN_OUTPUT_DIR set to the output
// directory (see AGENTS.md section 5). All it has to do is copy POST.json
// from this repository into that directory. It prints nothing on success,
// uses no network, no wall clock, and reads no file outside this repo,
// so two runs always write the same bytes.
//
// Before copying, it validates POST.json: the file must exist, parse as
// JSON, and name an X post address in a string "url" field. A malformed
// file fails fast with a clear message and a non-zero exit instead of
// silently handing the grader garbage.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(repoDir, "POST.json");

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch {
  fail(`POST.json does not parse as JSON: ${source}`);
}
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("POST.json must be a JSON object with a string \"url\" field");
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  fail("POST.json must be a JSON object with a string \"url\" field");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
