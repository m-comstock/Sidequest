---
name: sidequest-design
description: Matt's personal design system, Sidequest (night-first palette, sunset primary, Sora + Inter, pill buttons, category colors). Use it whenever you build or style anything visual for Matt, including web pages, apps, dashboards, HTML artifacts, React components, slides, diagrams, charts, mockups, email templates or Obsidian pages, even if he doesn't mention Sidequest or ask for a particular style.
license: Design system content by Matt Comstock. Fonts under SIL OFL 1.1, icons under MIT; see LICENSES.md.
---

# Sidequest design system

Sidequest is a colorful, rounded, warm system: a late-night palette lit by one golden-hour color. Apply it to anything visual you make for Matt unless he asks for a different look.

## How to use it

1. Read `DESIGN.md` before designing. It holds every rule, every token with its Night and Day value, and an HTML recipe for each component.
2. Start from `assets/starter.html` for any new page. It already wires up the stylesheet, both themes and every component.
3. Style with `assets/sidequest.css` (tokens, type classes, `sq-` component classes, bundled fonts). For a single self-contained file, inline that CSS and load the fonts from Google Fonts as `DESIGN.md` → Setup describes.
4. For React, load `assets/sidequest.js` after React 18 and use `window.Sidequest` (props in `references/sidequest.d.ts`).
5. For other stacks, read values from `references/tokens.json`.
6. Check the "Before you ship" list at the end of `DESIGN.md`.

## Rules that matter most

- Night theme first (`data-theme="night"`), then check Day (`data-theme="day"`).
- `sunset` is the primary: one primary button per view, the active tab, checked and on states. Text on it is `on-accent`.
- Color means category: Work `purple`, Travel `teal`, Play and Gaming `sky`, Health `sage`, Finance `sunset`, Ideas `pink`, Home and Personal neutral.
- Base hues are fills only. Hue-colored text uses the `-text` token; tinted backgrounds use `-soft`.
- Pills (`radius-full`) for things you press; `radius-md` and `radius-lg` rectangles for things you read.
- Sora for display, Inter for the interface, Caveat for at most one handwritten line per page.
- One `sq-glow-text` gradient word per page, 40px or larger. No emoji in interfaces.
- Sentence case except display lines; buttons start with a verb ("Plan a trip").
- Icons are Phosphor from `assets/icons/`, in `currentColor`. Keep `focus-ring` on every control.

## Files

| Path | What it is |
|---|---|
| `DESIGN.md` | The full reference: principles, voice, token tables, component recipes, ship checklist |
| `assets/sidequest.css` | Drop-in stylesheet: fonts, tokens for both themes, `sq-type-*` classes, components |
| `assets/starter.html` | Complete example page in both themes; copy it to start |
| `assets/sidequest.js` | React 18 components as `window.Sidequest` |
| `assets/fonts/` | Sora, Inter and Caveat variable fonts (woff2) |
| `assets/icons/` | The 17 Phosphor icons the system uses (SVG) |
| `references/tokens.json` | Machine-readable tokens |
| `references/sidequest.d.ts` | Component props |
