#!/bin/sh
set -eu

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 /path/to/file.pdf [output_dir]"
  exit 1
fi

INPUT="$1"
OUTDIR="${2:-}"

if [ -n "$OUTDIR" ]; then
  python3 convert_single.py "$INPUT" --output_format markdown --output_dir "$OUTDIR"
else
  python3 convert_single.py "$INPUT" --output_format markdown
fi
