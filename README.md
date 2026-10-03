# MoStyle

**Stylized Video Generation via Decoupled Data Synthesis and Gated Style Token Injection**

Accepted to **ECCV 2026**.

[Project Page](https://sixi111.github.io/MoStyle/)

MoStyle generates stylized videos from a reference image and a text prompt. It combines decoupled content-motion data synthesis, Implicit Gated Style Token Injection (IGST), hybrid image-video training, and Diffusion-DPO refinement.

## Release status

This repository currently contains the project website and qualitative results. Training and inference code, model weights, and the MoStyle-5K dataset are not yet available here. Release links and usage instructions will be added when these resources are published.

## Repository structure

```text
MoStyle/
├── README.md                # Paper overview and release status
├── LICENSE                  # Website license and attribution
├── docs/                    # Project website
│   ├── index.html
│   ├── styles.css
│   ├── montages.js
│   └── assets/              # Figures, videos, and fonts
└── .github/workflows/       # GitHub Pages deployment
```

## Preview the website locally

From the repository root, run:

```bash
python3 -m http.server 8000 --directory docs
```

Then open <http://localhost:8000>.

## Website deployment

The included GitHub Actions workflow publishes `docs/` to GitHub Pages on a push to the default branch. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**. The project URL remains <https://sixi111.github.io/MoStyle/>.

Alternatively, GitHub Pages can publish directly from the default branch's `/docs` folder; use only one deployment method.

## License

The existing license covers the website code. See [LICENSE](LICENSE) for attribution and [the font license](docs/assets/fonts/OFL.txt) for the bundled fonts. Licenses for future code, weights, and dataset releases will be specified with those releases.
