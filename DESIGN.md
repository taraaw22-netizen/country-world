# Design Contract: Country World

## Context

- Surface: web application
- Primary user: curious people discovering countries through play
- Primary job: answer a light quiz, then follow a compelling cultural trail
- Product promise: make a country feel approachable, specific, and alive
- Existing facts: the prototype is a no-build vanilla web app with local media
- Assumptions: the passport should feel like a keepsake, not a literal atlas; the postcard reveal is the main mobile payoff

## Direction

- Emotional signal: curious, witty, hand-printed, and collectible
- Visual thesis: a French-comic travel postcard turns a correct answer into an object worth keeping
- Signature detail: one portrait postcard object that flips from an illustrated mystery scene into a stamped collectible reward
- Anti-goals: generic cartoon clip art, dashboard-like card grids, and making the deeper content mandatory

## System

### Typography

- Display: serif editorial face with comic-poster scale
- Heading: serif editorial face with compact, expressive line breaks
- Body: existing body face
- Label / metadata: existing uppercase eyebrow treatment
- Numeric / code: existing bold numeric treatment

### Color roles

- Canvas: warm paper with subtle print grain
- Surface: white
- Elevated surface: white with soft blue shadow
- Text: deep navy
- Muted text: slate blue
- Border: translucent white
- Accent: yellow, sky blue, and coral used sparingly
- Destructive / warning / success: existing semantic colors

### Geometry and spacing

- Base spacing unit: 8px
- Content widths: existing centered app shell
- Radius vocabulary: 20px controls, 30px panels, 34px primary frames
- Border and elevation model: white borders plus one soft offset shadow

### Imagery and icons

- Source and crop logic: use generated postcard illustration for the emotional reveal; use authentic local photography with `object-fit: contain` for factual media; use `contain` for maps, flags, books, and artwork
- Icon family: text and native controls for now
- Prohibited substitutions: hand-drawn country silhouettes when a sourced map is available

### Motion

- Timing vocabulary: short interaction feedback only
- Easing vocabulary: existing CSS transitions
- Reduced-motion behavior: preserve readable static states

## Responsive and platform behavior

- Narrow: postcard reveal first, swipeable discovery deck second; preserve the portrait focal point and keep actions reachable
- Medium: use the existing one-column breakpoint
- Wide: photo-led passport hero with stats alongside
- Input modes: keyboard and touch
- Accessibility settings: retain visible focus and meaningful image alt text

## Required states

- Loading: browser-native image loading
- Empty: existing empty passport copy
- Error: browser image fallback should not block passport navigation
- Success: active country photo and library update together
- Disabled: existing button states
- Offline / interrupted: local photography remains available

## Verification

- Target routes or screens: quiz, discovery, passport
- Viewports or devices: wide desktop and narrow mobile
- Primary flow: mystery scene -> optional flag/capital hint -> guess -> postcard flip -> optional discoveries -> collect -> next country
- Accessibility checks: button labels, image alt text, focus order, reduced-motion-safe layout
