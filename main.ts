// gta6-meme-x-01 entry: check POST.json is a real X post address, then copy it
// to the output directory where the house reads it. Refusing a missing or
// malformed POST.json here makes a bad entry fail loudly instead of handing
// the judge an empty dossier. No network, no clock, no files outside the repo.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(`error: POST.json not found in ${BOT_DIR}`);
  process.exit(1);
}

let postUrl: string;
try {
  const parsed = JSON.parse(readFileSync(source, 'utf-8')) as { url?: unknown };
  if (typeof parsed.url !== 'string' || parsed.url.length === 0) {
    console.error('error: POST.json has no "url" string');
    process.exit(1);
  }
  let checked: URL;
  try {
    checked = new URL(parsed.url);
  } catch {
    console.error(`error: POST.json url is not a valid URL: ${parsed.url}`);
    process.exit(1);
  }
  if (checked.protocol !== 'https:' || !checked.hostname.endsWith('x.com') || !/^\/[^/]+\/status\/\d+$/.test(checked.pathname)) {
    console.error(`error: POST.json url is not an X post address: ${parsed.url}`);
    process.exit(1);
  }
  postUrl = parsed.url;
} catch (err) {
  console.error(`error: POST.json could not be read or parsed: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`error: could not copy POST.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`copied POST.json: ${postUrl}`);
