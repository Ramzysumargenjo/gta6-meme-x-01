#!/bin/sh
# Render meme.png from meme.html with the Playwright-bundled Chromium.
# (The system /opt/meta-chromium/chrome does not run headless standalone.)
set -eu
cd "$(dirname "$0")"
CHROME="$HOME/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome"
"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --virtual-time-budget=3000 \
  --screenshot=meme.png --window-size=1024,1024 "file://$PWD/meme.html"
