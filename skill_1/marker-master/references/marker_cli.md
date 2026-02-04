# Marker CLI Reference (Local Repo)

## Convert a single file

```shell
python3 convert_single.py /path/to/file.pdf
```

## Options (common)

- `--page_range "0,5-10"`: Process specific pages/ranges.
- `--output_format markdown|json|html|chunks`: Choose output format.
- `--output_dir /path/to/out`: Output directory.
- `--paginate_output`: Add page separators in output.
- `--use_llm`: Enable LLM assistance (requires configured backend).
- `--force_ocr`: Force OCR for all pages.
- `--strip_existing_ocr`: Remove existing OCR and re-run OCR.
- `--disable_image_extraction`: Skip image extraction.
- `--debug`: Verbose logging.
- `--converter_cls marker.converters.pdf.PdfConverter|marker.converters.table.TableConverter`: Full PDF vs tables only.

## LLM backend

If `--use_llm` is requested, configure an LLM backend (Gemini/Ollama) per the repo docs.
