# Design Contract: Country World

## Context

- Surface: web application
- Primary user: curious people discovering countries through play
- Primary job: answer a light quiz, then follow a compelling cultural trail
- Product promise: make a country feel approachable, specific, and alive
- Existing facts: the prototype is a no-build vanilla web app with local media
- Assumptions: the passport should feel like a keepsake, not a literal atlas

## Direction

- Emotional signal: playful field notebook with real places and recommendations
- Visual thesis: bright paper, bold type, and photographic evidence turn curiosity into a souvenir
- Signature detail: real destination photography framed like a passport keepsake
- Anti-goals: fake geography, generated-looking silhouettes, and decorative UI that competes with discovery

## System

### Typography

- Display: existing display face
- Heading: existing display face
- Body: existing body face
- Label / metadata: existing uppercase eyebrow treatment
- Numeric / code: existing bold numeric treatment

### Color roles

- Canvas: warm cream
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

- Source and crop logic: use authentic local photography with `object-fit: cover` only for contextual destination photography; use `contain` for maps, flags, books, and artwork
- Icon family: text and native controls for now
- Prohibited substitutions: hand-drawn country silhouettes when a sourced map is available

### Motion

- Timing vocabulary: short interaction feedback only
- Easing vocabulary: existing CSS transitions
- Reduced-motion behavior: preserve readable static states

## Responsive and platform behavior

- Narrow: stack the passport photo and stats; preserve the photo focal point
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
- Primary flow: unlock country -> open passport -> revisit country
- Accessibility checks: button labels, image alt text, focus order, reduced-motion-safe layout
