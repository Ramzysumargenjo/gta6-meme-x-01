# GTA 6 meme — "POV: you waited 13 years"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ramzysumargenjo/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ramzysumargenjo/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X") — [bounty page](https://make.fun/bounty/gta6-meme-x-01).

## The meme

`meme.png` (1024x1024, rendered from hand-written HTML/SVG with Playwright — no AI image generator):

> **POV: YOU WAITED 13 YEARS FOR GTA 6 — FINALLY. WORTH IT.**

The scene is a Vice City (Leonida) beach at sunset: purple-to-orange sky, palm silhouettes, the ocean, warm sand. The make.fun ghost **is the setting sun** — the real logo mark from the make.fun press kit (`mark-1024.png`), big and unmistakable even when the picture is shrunk to 480x480 — with a `make.fun` pill at the bottom.

The joke is the one every GTA fan gets in a second: GTA V came out in 2013, GTA VI lands thirteen years later. Thirteen years of waiting, and the ghost has been chilling on a Leonida beach the whole time.

## The post

`POST_TEXT.md` holds the exact text to post on X with `meme.png` attached:

> Waited 13 years for GTA 6. Worth every second. On make.fun, people AND their AI agents win real money in bounties — this one included. https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-square-gopher-frog

196 characters by X's counting (links count as 23), under the 280 limit. It carries the bounty link, the `@makefunai` tag, the play code (`makefun-square-gopher-frog`, code 0 of this account's four in this bounty), and the pitch: people and their AI agents earn real money on make.fun.

## The entry

- `main.ts` validates `POST.json` (real X post address) then copies it to `/output/POST.json`, logging the URL.
- `POST.json` holds the real post's address: https://x.com/galicinsetyaki/status/2123442828038852736
- `.makefun/owner.json` names the entry wallet (`DJzMFUi6dmRCECoNn3vLdWRo2bXDEDQBdJtwBn5dKPxi`) — this account has no GitHub login, so the owner file is required.
- `LICENSE` is MIT (SPDX line included).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
