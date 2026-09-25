# Sidequest design system

Sidequest is a personal design system for a more intentional, curious and adventurous life: trip plans, game prototypes, dashboards, wiki pages and small tools for work and play. It runs on a late-night palette lit by one golden-hour color. It should feel colorful, rounded and warm, never corporate, with enough structure to hold a dashboard together.

This file is the complete reference: rules, every token with its value in both themes, and an HTML recipe for every component. It is written for people and for AI assistants alike. When building anything for Matt (a page, app, dashboard, slide or document), follow it exactly, and only invent new patterns when nothing here fits.

## Setup

**Local or repo pages.** Link the stylesheet; it loads the bundled fonts from `assets/fonts/`.
```html
<html data-theme="night">  <!-- or "day" -->
<link rel="stylesheet" href="assets/sidequest.css">
```

**Single-file pages** (artifacts, emails, anything that can't reference local files). Paste `assets/sidequest.css` into a `<style>` tag, delete its three `@font-face` rules, and load the same fonts from Google Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Caveat:wght@700&display=swap">
```

**Other stacks** (Tailwind, native apps, charts). Read the token tables below or `references/tokens.json`. Use the token names as they are (`--sunset`, `--text-muted`, `--radius-lg`), and switch themes by swapping the Night and Day values.

`assets/starter.html` is a complete page using every component in both themes. Copy it as the starting point for anything new.

## Principles

- **Golden hour is the primary.** `sunset` fills the one primary button in a view, the active tab, checked boxes and switches that are on. If two things on screen glow, one of them is wrong.
- **Color means category.** Each area of life keeps one hue wherever it appears: Work `purple`, Travel `teal`, Play and Gaming `sky`, Health `sage`, Finance `sunset`, Ideas `pink`, Home and Personal neutral. Tag and Card pick the hue from a `category` prop, so pass the category, not a color.
- **Press pills, read rectangles.** Buttons, tags and switches use `radius-full`. Cards, inputs and alerts are soft rectangles (`radius-md`, `radius-lg`).
- **One handwritten moment.** The `hand` style signs off a hero, an empty state or the back of a card ("Same curious human."), once per page. Never on labels, buttons or data.
- **Night first.** Night is the default theme and Day is its twin. Build in Night, then check Day.

## Voice

- Warm, direct and curious. Second person, short sentences, plain verbs.
- Buttons lead with the verb in sentence case: "Plan a trip", "Save idea", "Skip for now".
- Display lines may be title case and a little aspirational ("Explore Further", "Build a Life You Like"). Everything else is sentence case.
- Alerts pair a short title ("Need attention") with a message that says what happened and what to do next ("Sync failed. Check your connection and try again.").
- No emoji in the interface. The sparkle and the hand lettering carry the personality.

## Color

Two themes, Night (default) and Day. Every hue keeps its reference value as a fill and has two twins: `-text` for text and small marks, `-soft` for tinted backgrounds.

- **Grounds.** `bg` is the page. `surface` holds cards, inputs and the nav bar. `panel` groups sections and neutral tags. `hover` answers the pointer. `border` draws card edges and dividers; controls use `control-border`, which meets 3:1.
- **Text.** `text` for content, `text-muted` for descriptions, placeholders and inactive tabs. By day, muted text drops below 4.5:1 on `hover` and the `-soft` tints, so use `text` there.
- **Hues.** Use a base hue (`sunset`, `purple`, `teal`, `sky`, `pink`, `sage`, `coral`) only as a fill, with `on-accent` for anything on top of it. Text in a hue uses its `-text` token.
- **Status.** Success is `sage`, info is `purple`, danger is `coral`. Each alert also carries its own icon and title, so status never rests on color alone.
- **Glow.** `glow-1` to `glow-3` make the golden-hour gradient (`sq-glow-text`) for a wordmark or one hero word at 40px or larger. Nothing smaller glows.
- **Focus.** `focus` is violet on purpose, so the ring shows on a sunset button. `focus-ring` is a 2px `bg` gap, then 2px of `focus`. Never remove it.
- **One known near-miss.** `on-accent` on `purple` is 4.47:1, a hair under AA. Keep solid purple pills to one short word.

| Token | Night | Day | Use |
|---|---|---|---|
| `bg` | `#0b1020` | `#ffffff` | Page background. Midnight at night, white by day. |
| `surface` | `#111827` | `#ffffff` | Cards, modals, inputs and the nav bar. By day it matches `bg`, so give it a `border` or `shadow-card`. |
| `panel` | `#1a2233` | `#f8fafc` | Grouped sections and neutral tags, one step up from `bg` (Slate at night, Surface by day). |
| `hover` | `#1f2937` | `#f1f5f9` | Hover and pressed backgrounds on rows, ghost buttons and icon buttons. |
| `border` | `#334155` | `#cbd5e1` | Card edges and dividers. Decorative; never the only boundary of a control. |
| `control-border` | `#64748b` | `#7b8798` | Outlines of inputs, selects, unchecked checkboxes and the off switch track. 3.3:1 or better on `bg`, `surface` and `panel` in both themes (an addition: the source's `border` is too faint for controls). |
| `text` | `#e6eaf2` | `#0b1020` | Primary text (Ink at night, Midnight by day) on `bg`, `surface`, `panel`, `hover` and every `-soft` tint, 12:1 or better in both themes. |
| `text-muted` | `#9ca3af` | `#6b7280` | Secondary text, placeholders and inactive nav items on `bg`, `surface` and `panel` (4.6:1 or better). Not on `hover` or `-soft` tints by day; use `text` there. |
| `disabled` | `#4b5563` | `#94a3b8` | Fills and borders of disabled controls. Disabled states are exempt from contrast minimums; never use it for live text. |
| `focus` | `#a78bfa` | `#8b5cf6` | The keyboard focus ring (the source's Focus). 4:1 or better on `bg`, `surface` and `panel` in both themes. Kept violet so focus stays visible on a sunset button. |
| `on-accent` | `#0b1020` | `#0b1020` | Text, checks and switch knobs on a solid hue fill (primary button, solid pills, checked box). Midnight in both themes: 8.8:1 on `sunset`, 7:1 or better on every other hue except `purple`, where it is 4.47:1, a hair under AA. Keep solid purple pills to one short word, or use `purple-soft` with `purple-text` where legibility matters. |
| `sunset` | `#f59e0b` | `#f59e0b` | The primary. Fills for the one primary button per view, the active nav bar, checked boxes and switches that are on, and the Balance and Finance pills. Too light for text or small marks by day; use `sunset-text`. |
| `sunset-text` | `#f59e0b` | `#b45309` | Sunset as text or a small mark: the active nav item, links, Finance tags. 4.5:1 or better on `bg`, `surface`, `hover` and `sunset-soft` in both themes. |
| `sunset-soft` | `#2a1e0b` | `#fef3c7` | Tinted background for Finance tags and warm highlights. |
| `glow-1` | `#f59e0b` | `#d97706` | First stop of the golden-hour gradient on a wordmark or one hero word (`sq-glow-text`). Large text only: every stop passes 3:1 on `bg` in both themes. |
| `glow-2` | `#f87171` | `#ef4444` | Middle stop of the golden-hour gradient. |
| `glow-3` | `#f472b6` | `#ec4899` | Last stop of the golden-hour gradient. |
| `purple` | `#8b5cf6` | `#8b5cf6` | The Work category and the Curiosity pill. Fills only; text goes in `purple-text`. |
| `purple-text` | `#a78bfa` | `#6d28d9` | Purple as text or a mark: Work tags, the info alert. 6:1 or better on `bg`, `surface` and `purple-soft`. |
| `purple-soft` | `#221a3d` | `#ede9fe` | Background of Work tags and info alerts. |
| `teal` | `#2dd4bf` | `#14b8a6` | The Travel category. Fills only; text goes in `teal-text`. |
| `teal-text` | `#2dd4bf` | `#0f766e` | Teal as text or a mark: Travel tags and card eyebrows. 4.8:1 or better on `bg`, `surface` and `teal-soft`. |
| `teal-soft` | `#0f2a2b` | `#ccfbf1` | Background of Travel tags. |
| `sky` | `#60a5fa` | `#60a5fa` | The Play category (gaming, hobbies) and the Adventure pill. An addition: it appears in the source's pills and tags but not its token list. |
| `sky-text` | `#60a5fa` | `#1d4ed8` | Sky as text or a mark: Play and Gaming tags. 5.4:1 or better on `bg`, `surface` and `sky-soft`. |
| `sky-soft` | `#0f1f3a` | `#dbeafe` | Background of Play tags. |
| `pink` | `#f472b6` | `#ec4899` | The Ideas category and highlights; the favorite heart. Fills only; text goes in `pink-text`. |
| `pink-text` | `#f472b6` | `#be185d` | Pink as text or a mark: Ideas tags, the filled heart. 5.1:1 or better on `bg`, `surface` and `pink-soft`. |
| `pink-soft` | `#2e1528` | `#fce7f3` | Background of Ideas tags. |
| `sage` | `#86efac` | `#10b981` | Success and the Health category; the Creativity pill. Fills only; text goes in `sage-text`. |
| `sage-text` | `#86efac` | `#047857` | Sage as text or a mark: success alerts, Health tags. 4.8:1 or better on `bg`, `surface` and `sage-soft`. |
| `sage-soft` | `#10291c` | `#d1fae5` | Background of success alerts and Health tags. |
| `coral` | `#f87171` | `#f87171` | Errors and destructive actions. Fills only; text goes in `coral-text`. |
| `coral-text` | `#f87171` | `#b91c1c` | Coral as text or a mark: the danger alert, field errors. 5.3:1 or better on `bg`, `surface` and `coral-soft`. |
| `coral-soft` | `#2d1418` | `#fee2e2` | Background of danger alerts. |

## Type

Sora for display, Inter for everything in the product, Caveat for the one handwritten note.

- `hero` for the wordmark and one hero line, `display` for page titles, `section` for section headers on long pages.
- `title` for screen titles, `heading` for card titles and groups, `body` by default, `small` for descriptions, alert messages and hints, `label` for buttons, field labels and alert titles.
- `overline` is the only uppercase style: section labels and the hero tagline ("EXPLORE · BUILD · PLAY · GROW"). Never on buttons or body copy.
- `hand` is Caveat Bold at 30px, once per page. `code` is for code and frontmatter only.

| Style (class `sq-type-<name>`) | Family | Size / line | Weight | Use |
|---|---|---|---|---|
| `hero` | Sora | 72px / 72px, -0.03em | 800 | The wordmark and one hero line per page. |
| `display` | Sora | 40px / 44px, -0.02em | 700 | Page titles and hero statements. Title case is fine here. |
| `section` | Sora | 24px / 32px, -0.01em | 700 | Section headers on long pages. |
| `title` | Inter | 28px / 34px, -0.01em | 700 | Screen titles in apps and dashboards. |
| `heading` | Inter | 18px / 24px | 700 | Card titles and group headings. |
| `body` | Inter | 16px / 24px | 400 | Default text and field values. |
| `small` | Inter | 14px / 20px | 400 | Descriptions, alert messages and hints. |
| `label` | Inter | 14px / 20px | 600 | Buttons, field labels, alert titles. |
| `overline` | Inter | 12px / 16px, 0.14em | 700 | Set in uppercase. Section labels and the hero tagline only, never body copy or buttons. |
| `hand` | Caveat | 30px / 32px | 700 | A sign-off on a hero, an empty state or a card back. Once per page, never for labels. |
| `code` | ui-monospace | 13px / 20px | 400 | Code and frontmatter only. |

## Space and shape

- A 4px grid, `space-1` to `space-12`. Controls are 40px tall (32px small), cards and alerts pad on `space-4`, sections sit `space-12` apart.
- `radius-full` for everything you press, `radius-md` for inputs, alerts and card media, `radius-lg` for cards and the nav bar, `radius-sm` for checkboxes.
- `shadow-card` lifts cards and the nav bar. `shadow-glow` is the primary button's hover; nothing else glows.
- Motion is quick and answers a person: the switch knob slides, the primary button glows, buttons press down 1px. Reduced motion turns it off.

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Icon to label inside tight controls. |
| `space-2` | 8px | Icon to label in buttons and inputs; gap between tags. |
| `space-3` | 12px | Input and tag side padding; gap inside alerts. |
| `space-4` | 16px | Card and alert padding; gap between stacked controls. |
| `space-5` | 20px | Button side padding. |
| `space-6` | 24px | Gap between cards; preview padding. |
| `space-8` | 32px | Between groups inside a section. |
| `space-12` | 48px | Between page sections. |
| `radius-sm` | 6px | Checkboxes and small icon wells. |
| `radius-md` | 10px | Inputs, selects, alerts, color swatches. |
| `radius-lg` | 16px | Cards, the nav bar, card media. |
| `radius-full` | 999px | Buttons, tags, pills, switches, the nav indicator. |

| Token | Night | Day | Use |
|---|---|---|---|
| `shadow-card` | `0 12px 32px -16px #000000cc` | `0 1px 2px #0b10200f, 0 12px 28px -16px #0b102033` | Cards and the nav bar. |
| `shadow-glow` | `0 8px 24px -8px #f59e0b99` | `0 8px 20px -8px #f59e0bb3` | The primary button on hover: a little golden hour. Nothing else glows. |
| `focus-ring` | `0 0 0 2px #0b1020, 0 0 0 4px #a78bfa` | `0 0 0 2px #ffffff, 0 0 0 4px #8b5cf6` | Keyboard focus on every control: a 2px `bg` gap, then 2px of solid `focus`. Never remove it. |

## Imagery

Warm, golden-hour travel photography: wide landscapes, low sun, a person small in the frame. Crop to 16:9 inside `radius-md`. Without a photo, draw a flat scene from the hue tokens (a gradient sky from `purple` through `pink` to `coral`, a `sunset` sun, `on-accent` silhouettes), like the Kyoto card.

## Iconography

Icons are Phosphor (MIT), bundled in the Icon component. Use the fill weight for navigation and status (home, work, travel, play, growth, check-circle, info, warning, heart-fill) and the bold weight for utility glyphs (search, chevron-down, close, check, plus, heart). Icons are 24px in the nav bar and alerts, 18 to 20px in controls, and always take `currentColor`. The four-point sparkle beside the wordmark is the only decorative mark. There is no logo yet; set the name in `hero` type with "quest" in the glow gradient. The SVG files are in `assets/icons/`: `check`, `check-circle`, `chevron-down`, `close`, `growth`, `heart`, `heart-fill`, `home`, `info`, `play`, `plus`, `search`, `sparkle`, `sunset`, `travel`, `warning`, `work`.

## Components

Every component is plain HTML plus `sq-` classes from `assets/sidequest.css`, so it works in any page. React users can load `assets/sidequest.js` after React 18 and use `window.Sidequest.<Component>` (props in `references/sidequest.d.ts`). Icons are inline SVGs from `assets/icons/` (Phosphor, `fill="currentColor"`, `viewBox="0 0 256 256"`); the recipes below mark where each one goes.

### Button
Secondary by default; one primary (sunset) per view. Verb first, sentence case.
```html
<button class="sq-btn sq-btn--primary">Plan a trip</button>
<button class="sq-btn sq-btn--secondary">Save idea</button>
<button class="sq-btn sq-btn--ghost">Skip for now</button>
<button class="sq-btn sq-btn--ghost sq-btn--icon" aria-label="Add"><svg class="sq-icon" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/plus.svg --></svg></button>
<!-- small: add sq-btn--sm (32px tall) -->
```

### Tag
Category pills take the category's hue: Work `purple`, Travel `teal`, Play/Gaming `sky`, Health `sage`, Finance `sunset`, Ideas `pink`, Home/Personal `neutral`. Solid pills are the four values.
```html
<span class="sq-tag sq-tag--purple">Work</span>
<span class="sq-tag sq-tag--teal">Travel</span>
<span class="sq-tag sq-tag--neutral">Home</span>
<span class="sq-tag sq-tag--solid sq-tag--purple">Curiosity</span>
<span class="sq-tag sq-tag--solid sq-tag--sky">Adventure</span>
<span class="sq-tag sq-tag--solid sq-tag--sage">Creativity</span>
<span class="sq-tag sq-tag--solid sq-tag--sunset">Balance</span>
```

### Card
A place, project or idea: 16:9 media inset, category eyebrow in the category's `-text` hue, title, one line of description, favorite heart.
```html
<article class="sq-card">
  <div class="sq-card__media"><img src="kyoto.jpg" alt="A torii gate at sunset"></div>
  <div class="sq-card__body">
    <div class="sq-card__top">
      <span class="sq-card__eyebrow sq-tone-text--teal">Travel</span>
      <button class="sq-card__fav" aria-pressed="false" aria-label="Favorite"><svg class="sq-icon" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/heart.svg --></svg></button>
    </div>
    <h3 class="sq-card__title">Kyoto, Japan</h3>
    <div class="sq-card__desc">New places. Same curious human.</div>
  </div>
</article>
<!-- favorited: aria-pressed="true", class "is-on", icon heart-fill -->
```

### Alert
Success (`sage`, check-circle), info (`purple`, info, title "Heads up"), danger (`coral`, warning, title "Need attention", `role="alert"`).
```html
<div class="sq-alert sq-alert--success" role="status">
  <svg class="sq-icon sq-alert__icon" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/check-circle.svg --></svg>
  <div><p class="sq-alert__title">Success</p><div class="sq-alert__msg">Your changes have been saved.</div></div>
  <button class="sq-alert__close" aria-label="Dismiss"><svg class="sq-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/close.svg --></svg></button>
</div>
```

### Input and Select
```html
<div class="sq-field">
  <label class="sq-field__label" for="trip">Trip name</label>
  <div class="sq-field__box"><input id="trip" class="sq-field__control" placeholder="Type something…"></div>
  <p class="sq-field__hint">Shows on the card and in search.</p>
</div>

<div class="sq-field">
  <label class="sq-field__label" for="q">Search</label>
  <div class="sq-field__box sq-field__box--icon">
    <svg class="sq-icon sq-field__icon" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/search.svg --></svg>
    <input id="q" type="search" class="sq-field__control" placeholder="Search…">
  </div>
</div>

<div class="sq-field">
  <label class="sq-field__label" for="cat">Category</label>
  <div class="sq-field__box">
    <select id="cat" class="sq-field__control sq-select is-empty"><option value="" disabled selected>Select an option…</option><option>Work</option><option>Travel</option></select>
    <svg class="sq-icon sq-select__chevron" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/chevron-down.svg --></svg>
  </div>
</div>
<!-- error: add sq-field--error to .sq-field, aria-invalid="true" to the control, and <p class="sq-field__error"> in place of the hint -->
```

### Switch and Checkbox
```html
<span class="sq-switch">
  <button id="sync" class="sq-switch__track is-on" role="switch" aria-checked="true"><span class="sq-switch__knob"></span></button>
  <label class="sq-switch__label" for="sync">Sync to vault</label>
</span>
<script>/* toggle */ document.querySelectorAll('.sq-switch__track').forEach(b => b.addEventListener('click', () => { const on = b.getAttribute('aria-checked') !== 'true'; b.setAttribute('aria-checked', on); b.classList.toggle('is-on', on); }));</script>

<label class="sq-check">
  <input type="checkbox" class="sq-check__input" checked>
  <span class="sq-check__box" aria-hidden="true"><svg class="sq-icon" width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/check.svg --></svg></span>
  <span class="sq-check__label">Selected</span>
</label>
```

### NavBar
```html
<nav class="sq-nav" aria-label="Main"><ul class="sq-nav__list">
  <li><a class="sq-nav__item is-active" aria-current="page" href="#home"><svg class="sq-icon" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/home.svg --></svg><span>Home</span></a></li>
  <li><a class="sq-nav__item" href="#work"><svg class="sq-icon" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/work.svg --></svg><span>Work</span></a></li>
  <li><a class="sq-nav__item" href="#travel"><svg class="sq-icon" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/travel.svg --></svg><span>Travel</span></a></li>
  <li><a class="sq-nav__item" href="#play"><svg class="sq-icon" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/play.svg --></svg><span>Play</span></a></li>
  <li><a class="sq-nav__item" href="#growth"><svg class="sq-icon" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><!-- paths from assets/icons/growth.svg --></svg><span>Growth</span></a></li>
</ul></nav>
```

### Wordmark and hero accents
```html
<h1 class="sq-type-hero">Side<span class="sq-glow-text">quest</span></h1>
<p class="sq-type-overline">Explore · Build · Play · Grow</p>
<p class="sq-type-hand">Same curious human.</p>
```

## Before you ship

- One `sunset` primary per view; everything else secondary or ghost.
- Category hues match the map (Work purple, Travel teal, Play sky, Health sage, Finance sunset, Ideas pink, Home and Personal neutral).
- Hue text uses the `-text` token, hue fills use the base token, anything on a fill uses `on-accent`.
- Text meets 4.5:1 in both themes; check Day especially (use `text`, not `text-muted`, on tints and `hover`).
- Every control shows `focus-ring` on keyboard focus.
- Pills for things you press, `radius-md`/`radius-lg` rectangles for things you read.
- At most one `sq-glow-text` word and one `sq-type-hand` line per page. No emoji in the interface.
- Sentence case everywhere except display lines; buttons start with a verb.
