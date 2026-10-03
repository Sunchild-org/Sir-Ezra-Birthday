# Birthday Keepsake

A plain HTML/CSS/JS site — no build step, no database. Edit, push, done.

## Files
| File | What it does |
| --- | --- |
| `config.js` | **Edit this.** Name, the 3 videos, and every memory on the wall |
| `assets/` | Posters and your video files |
| `style.css` | Colors and fonts (see `:root` at the top) |
| `app.js` | Page logic and text people see |
| `index.html` | Page title and link preview text |

## Edit
1. Set `name` in `config.js`.
2. Drop videos in `assets/` and set each `src`, e.g. `"assets/elders.mp4"`.
3. Replace the sample memories in `config.js` (one line each).
4. Optional: paste a Google Form link into `memoryFormUrl` so people can send memories to you; copy the replies into `config.js`.

Preview locally: open `index.html` in a browser, or run `npx serve`.

## Deploy on GitHub Pages
```bash
git init && git add . && git commit -m "Birthday keepsake"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.**
Your link will be `https://<you>.github.io/<repo>/`.

## Video tips
- GitHub blocks single files over 100 MB. Compress with HandBrake (H.264 MP4, ~720p) first.
- Keep the whole repo under ~1 GB.
- For long films, upload elsewhere and put that direct `.mp4` URL in `src`.
