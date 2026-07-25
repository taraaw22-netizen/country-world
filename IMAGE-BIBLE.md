# Country World Image Bible

## Core direction

Country World is a collection of illustrated travel postcards with the energy of a smart, funny comic book.

The visual thesis:

> A curious friend mails you a vivid postcard from somewhere you have never been.

The images should feel authored, collectible, and culturally specific—not like generic stock illustrations or polished tourism ads.

## Illustration style

### Name

**Comic Postcard Atlas**

### Medium

- Bold expressive ink contours
- Flat gouache-like color blocks
- Screen-print or risograph texture
- Slightly imperfect registration and paper grain
- Simple, readable shapes that survive a small phone screen
- Exaggerated perspective and personality, but grounded in real cultural details

### Emotional signal

- Warm
- Curious
- Witty
- Slightly mischievous
- Welcoming rather than educational or institutional

### Avoid

- Generic anime or mascot styles
- Glossy 3D renders
- Photorealism
- Overly cute babyish characters
- Tourist-brochure imagery
- Cultural caricature or exaggerated ethnic features
- Busy scenes where the country clue disappears

## Postcard composition

Every generated postcard front should use the same basic structure:

- Portrait 4:5 composition
- One dominant subject or scene
- One secondary cultural detail
- Clear foreground, middle ground, and background
- Generous quiet space near the top for UI labels
- Warm paper-colored edge or border added by the interface
- Strong silhouette and readable focal point at thumbnail size
- No words, lettering, flags, logos, or fake postage printed inside the generated image

The interface adds the country name, discovery type, stamp, caption, and collection metadata. The image should remain useful without relying on generated text.

## Palette system

Each country gets a small palette rather than a full rainbow treatment:

- 1 ink color
- 1 paper/background color
- 2 main colors
- 1 unexpected accent
- 1 quiet shadow color

Lebanon example:

- Ink: deep cedar green or navy
- Paper: warm limestone
- Main colors: Mediterranean blue and cedar green
- Accent: pomegranate red
- Shadow: dusty mauve

Mexico example:

- Ink: espresso brown
- Paper: marigold cream
- Main colors: cactus green and terracotta
- Accent: hot pink
- Shadow: dusty violet

Japan example:

- Ink: sumi black
- Paper: rice white
- Main colors: indigo and vermilion
- Accent: persimmon orange
- Shadow: muted moss

## Image roles

### Postcard front

Generated illustration. This is the emotional hook and collectible object.

Good subjects:

- A meal on a table with a distinctive local object
- A city scene with a recognizable architectural or environmental cue
- A landscape interpreted with comic exaggeration
- A creative practice shown through tools, materials, and gesture
- A musical mood represented through scene and movement rather than literal notation

### Discovery media

Prefer authentic media for factual depth:

- Real food photography
- Real music videos or artist links
- Real book covers
- Real landmarks and places
- Real artworks and museum sources

Generated images may sit alongside these as atmosphere, but should not impersonate documentary evidence.

### Decorative system

Generated or illustrated supporting elements may include:

- Postmarks
- Doodles
- Ticket shapes
- Border patterns
- Tiny travel objects
- Abstract sound, taste, or texture motifs

These should repeat across the product so the world feels coherent.

## Prompt template

Use this structure for generated postcard art:

> Portrait comic travel postcard illustration for Country World, depicting [specific subject] in [specific cultural context]. Bold expressive ink contours, flat gouache color blocks, subtle risograph grain, imperfect screen-print registration, warm paper texture, playful editorial composition, strong readable silhouette, one dominant focal point, one secondary local detail, generous quiet space at the top, culturally specific but respectful, no text, no lettering, no logos, no flags, no border, no watermark, no photorealism, no 3D rendering.

Then append the country-specific palette and art direction.

## Consistency rules for generated images

- Generate in batches using the same style block and palette rules.
- Keep the interface border and postcard framing outside the image prompt.
- Do not depend on recurring characters until the image system proves it can maintain them.
- Prefer recurring objects, textures, and composition patterns over recurring faces.
- Review every image at phone thumbnail size before accepting it.
- Reject images with invented text, incorrect flags, distorted landmarks, or culturally generic details.
- Use factual source media when accuracy matters more than mood.

## Mobile-first art direction

The image must read at 390px wide before it reads at desktop size.

- Use portrait compositions first.
- Keep the focal subject inside the center 70% of the frame.
- Avoid important details at the extreme edges.
- Use large shapes and high contrast.
- Let the postcard occupy most of the first screen.
- Keep captions and actions below the image, not over important visual details.

## Discovery flow principle

Discovery is always present, but never compulsory.

After a correct answer, the user sees the postcard reveal and one clear invitation:

**Open the country**

The user can:

- Continue directly into the swipeable discoveries
- Save the postcard and leave
- Skip to another country

The swipeable screen should be the natural deeper layer, not a gate. The first postcard should feel satisfying on its own; the discovery deck rewards users who want more context.

## Flow hierarchy

1. **Guess** — quick, playful, low commitment
2. **Reveal** — emotional postcard payoff
3. **Explore** — optional deeper swipeable discoveries
4. **Collect** — save the postcard and discoveries into the passport

The product should never make users feel punished for stopping after the reveal.
