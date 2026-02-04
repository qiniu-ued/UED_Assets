---
name: marker-master
description: Use the local marker-master repo to convert PDFs/images into Markdown/JSON/HTML/chunks with CLI workflows, including OCR and LLM-enhanced modes.
---

# Marker Master Skill

Use this skill when the user wants to extract or convert documents (PDF/image/PPTX/DOCX/XLSX/HTML/EPUB) to Markdown/JSON/HTML/chunks using the local `marker-master` repo.

## Quick Start (Local Repo)

1. Ensure Python 3.10+ is available (`python3 --version`).
2. From the repo root (`skill_1/marker-master`), install deps if needed:
   - `python3 -m pip install -e .`
3. Convert a single file:
   - `python3 convert_single.py /path/to/file.pdf`
4. Or use the helper script:
   - `./scripts/convert_pdf.sh /path/to/file.pdf /path/to/output_dir`

If the environment lacks Python 3.10+ or dependencies, pause and ask the user to approve installation steps.

## Common Conversion Patterns

- **Default (Markdown output)**:
  - `python3 convert_single.py /path/to/file.pdf`
- **Specify output format**:
  - `python3 convert_single.py /path/to/file.pdf --output_format markdown`
- **Target output directory**:
  - `python3 convert_single.py /path/to/file.pdf --output_dir /path/to/out`
- **Limit pages**:
  - `python3 convert_single.py /path/to/file.pdf --page_range "0,5-10"`
- **Force OCR** (use for image-based PDFs or bad text):
  - `python3 convert_single.py /path/to/file.pdf --force_ocr`
- **Disable image extraction**:
  - `python3 convert_single.py /path/to/file.pdf --disable_image_extraction`

## LLM-Enhanced Mode (Optional)

Use `--use_llm` for higher accuracy (tables/inline math). This requires configuring an LLM backend (Gemini/Ollama). Only enable if the user asks for higher accuracy or the output is clearly low-quality.

## Guidance

- Prefer OCR for scanned or image-heavy PDFs.
- For large files, consider narrowing with `--page_range` first.
- Keep SKILL.md lean; use references for detailed options.

## References

- For CLI options and flags, read: `references/marker_cli.md`.
