#!/usr/bin/env bash
# Rebuild public/assets/jakubwaller_resume.pdf from resume.html with headless Chromium.
# Override the browser with CHROME=/path/to/chrome (macOS: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-$(command -v chromium || command -v chromium-browser || command -v google-chrome || true)}"
[ -n "$CHROME" ] || { echo "set CHROME=/path/to/chrome" >&2; exit 1; }
OUT="$PWD/../../public/assets/jakubwaller_resume.pdf"
"$CHROME" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="$OUT" "file://$PWD/resume.html" 2>/dev/null
echo "wrote $OUT"
