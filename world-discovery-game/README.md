# World Discovery Game Prototype

This is a no-build Lebanon-first prototype for the cultural discovery game concept.

## What It Includes

- one fast visual quiz limited to `shape`, `flag`, and `capital`
- one media-first discovery page per country
- five discovery categories:
  - `TASTE`
  - `LISTEN`
  - `READ`
  - `SEE`
  - `CREATE`
- real media in the main pane for each category
- lightweight passport tracking in `localStorage`
- alternate discoveries for each country so the passport can reopen deeper content later

## Run It

Serve the folder with a local web server.

Example:

```bash
cd "/Users/taraawad/Documents/Vibe Coding/Codex/Country World"
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/world-discovery-game/
```

## Notes

- The prototype currently includes Lebanon, Mexico, and Japan.
- Country media is stored in `world-discovery-game/assets/media/`.
- The quiz and discovery experience live in `world-discovery-game/`.
- Passport state is stored locally in the browser.
- Image and video cards use contained sizing so the source media stays visible in full.
