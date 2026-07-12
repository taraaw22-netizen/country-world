# MVP Spec: Cultural Discovery Game

## Purpose

This document translates the app vision into a buildable MVP.

The goal of V1 is to prove that a quiz-driven cultural discovery experience can feel magical, replayable, and emotionally rich with a relatively small but highly curated country set.

## V1 Correction

The first prototype proved that the concept works better as a game when:

- clues are fast and direct
- the visual language is bright and playful
- the reveal is readable at a glance
- the five discoveries are obvious enough to click immediately

V1 should optimize for game feel before atmospheric subtlety.

Superseded note:

If later sections mention a primary illustrated scene, hidden hotspot discovery, or a world-first reveal model, treat that language as archived. The active MVP is media-first after the guess.

Active MVP flow:

1. show one simple, discriminative clue
2. offer four plausible options
3. reveal the country
4. switch to a discovery page with `TASTE`, `LISTEN`, `READ`, `SEE`, `CREATE`
5. replace the main pane with dominant real media when a category is selected

## Product Summary

The app is a dreamy, cartoon-forward cultural discovery game.

Players answer mixed-clue country quiz questions and unlock a curated country world after each round. The quiz creates momentum. The world creates depth. The visual environment creates emotional attachment.

## MVP Goal

Ship a polished first version that makes players want to:

- keep guessing
- keep collecting
- keep exploring countries

Success for the MVP is not “cover the whole world.” Success is:

- the game feels delightful
- the reveal feels cinematic and rewarding
- the cultural sequence feels genuinely worth staying with
- players understand the concept immediately
- players want to listen, cook, read, save, or visit after a reveal

## Core Experience

### Main Loop

1. User starts a round.
2. User sees a clue about a country.
3. User chooses from 4 answers.
4. The app reveals correct or incorrect.
5. The country world opens.
6. The user notices embedded discovery elements in the scene.
7. The user chooses what to open and in what order.
8. Discoveries are saved into the passport as they are opened.

### Game Feel Requirements

The experience should feel:

- dreamy
- playful
- cartoony
- smart
- globally curious
- stylish rather than school-like

Country worlds should function as emotional geographies rather than accurate dioramas.

## V1 Quiz System

### Clue Strategy

V1 will use mixed clues from the start.

Supported clue types:

- country silhouette
- flag
- monument / landmark image
- food image
- artist or cultural figure clue
- short cultural hint

This mixed structure keeps the game fresh and supports different kinds of recognition and curiosity.

Mixed clues should also teach something even before the reveal. A round is successful if the player leaves with at least one memorable association even when they guess incorrectly.

### Answer Format

- 4 multiple-choice options
- 1 correct answer
- 3 plausible distractors

Distractors should be selected carefully. They should not feel random.

Good distractor logic:

- same region
- visually similar flag or shape
- culturally adjacent references
- comparable scale or familiarity

## V1 Reveal Experience

After each correct answer, the app should open a country world.

This world should include:

- country name
- capital and region as quiet metadata
- short welcoming intro
- one primary illustrated scene
- five embedded discovery elements
- a clear sense that the user can wander rather than click through a fixed sequence
- a clear way to continue to the next round

The scene does not need to be geographically accurate. It needs to be emotionally true to the country and coherent as a small explorable world.

### Optional Incorrect Flow

If the player answers incorrectly, the app can still reveal the country world but unlock a lighter version of the experience. This keeps the app generous rather than punishing.

Recommended default:

- show correct answer
- still reveal a short country moment
- allow some exploration even on incorrect rounds
- reserve full discovery credit for correct answers

## V1 Card Types

These are the fixed content categories for the MVP, framed as verbs:

- `TASTE`
- `LISTEN`
- `READ`
- `SEE`
- `CREATE`

Rule:

- one discovery = one primary recommendation

### Capital In V1

Recommendation:

- include capital data in the content model from the start
- show it as subtle context in the reveal
- do not build `Guess the Capital` as a main MVP mode

## V1 Country Set

The selected launch countries are:

- Syria
- Lebanon
- France
- Spain
- Italy
- Philippines
- United States
- Mexico
- United Kingdom
- Russia
- China
- Japan

## Country Naming Note

The original list included `England`. For product and data consistency, the app should model this as `United Kingdom` unless the app is explicitly designed to treat England as a separate playable entity.

Recommendation for V1:

- use `United Kingdom` in the data model
- allow England-specific content to appear inside the UK entry where relevant

This avoids avoidable geography confusion in the product structure.

## Geographic Balance

This set is not perfectly region-symmetrical, but it is broad enough for an MVP and reflects a mix of personal meaning and global reach.

Regional spread:

- Middle East: Syria, Lebanon
- Europe: France, Spain, Italy, United Kingdom, Russia
- Asia: Philippines, China, Japan
- North America: United States, Mexico

If later we want a more visibly balanced launch, the first expansion set should prioritize Africa, South America, and Oceania.

## First Expansion Countries

When expanding after launch, likely priorities should include:

- Nigeria
- South Africa
- Brazil
- Argentina
- India
- South Korea
- Turkey
- Morocco
- Australia
- New Zealand

## Content Requirements Per Country

Each MVP country should include:

- one short intro
- one `TASTE` entry
- one `LISTEN` entry
- one `READ` entry
- one `SEE` entry
- one `CREATE` entry
- capital metadata
- three short fun facts
- at least one hero image
- at least one clue asset for multiple clue categories

Architecture note:

- every launch country should be modeled to support deeper pools later
- only Lebanon, Japan, and Mexico need deep first-pass curation now
- a first-visit bundle should be coherent, not randomly assembled

### Stretch Content

Nice to have, not required for first playable:

- second food item
- second music recommendation
- modern and classic artist pairing
- extra art or sculpture entry
- additional image gallery

## Recommendation Rules

All recommendations should meet a quality threshold.

They should also work together as a bundle.

### Food

- recognizable or compelling
- ideally tied to a recipe
- not the only dish people know from that country forever
- worth making or seeking out

### Music

- include one classic artist and one modern artist where possible
- include listening links
- include one sentence on why each recommendation matters
- choose artists people may genuinely want to keep listening to

In a given visit, select one primary music recommendation rather than splitting the slot across multiple artists.

### Books

- author from that country
- good entry point for a general audience
- not necessarily about the country itself
- genuinely excellent on its own merit

### SEE

- can be a neighborhood, landscape, monument, museum, street, district, or natural wonder
- visually strong
- emotionally legible
- explain why it matters in one to three short sentences

### CREATE

- can include fine art, sculpture, architecture, craft, design, or contemporary visual work
- should broaden the player’s sense of the country rather than repeat the monument card
- should feel worth looking up, not merely dutifully representative

## UX Requirements

### Home

The home screen should communicate:

- this is a game
- this is about discovery
- this is about the world
- this is beautiful and welcoming

### Quiz Screen

The quiz screen should prioritize:

- clarity
- quick interaction
- strong clue framing
- obvious answer choices

### Reveal Screen

The reveal screen should prioritize:

- delight
- emotional payoff
- visual richness
- spatial curiosity
- embedded discoveries
- easy branching into deeper exploration
- a feeling of curation rather than information dump

The world should tempt curiosity through environmental behavior:

- sound drift
- page movement
- steam
- light shifts
- visual oddity

### Passport / Collection

The passport should track discoveries, not only countries:

- countries explored
- cultural items unlocked
- artists discovered later
- books saved later
- dishes saved later
- region patterns over time

## Motion Requirements

Motion should support the dreamy-cartoon identity.

Priority animation moments:

- round start
- answer reveal
- correct answer celebration
- country unlock
- passport stamping
- card flip / card reveal

Avoid excessive motion everywhere. Save the strongest effects for reward moments.

## Art Direction Requirements

The MVP visual world should combine:

- dreamy atmosphere
- cartoon warmth
- collectible objects
- map and travel symbolism
- editorial curation

Recommended visual mix:

- magical atlas
- postcard textures
- soft cartoon guides
- luminous gradients
- tactile cards

## MVP Non-Goals

Do not include these in the first build:

- donation or crisis flows
- social network features
- multiplayer
- classroom management
- dozens of quiz modes
- full world coverage
- user-generated content

## MVP Success Signals

The MVP is working if:

- players want to play multiple rounds in one session
- reveal screens feel worth staying on
- users remember countries through cultural associations
- the experience feels charming enough that people describe it to others

## Build Order

1. Define the country schema.
2. Build one complete sample country entry.
3. Build the quiz and reveal loop.
4. Build 3 fully polished countries.
5. Test whether the loop feels rewarding.
6. Expand to the full 12-country set.
7. Add passport and collection progress.

## Launch Content Strategy

Build the architecture for all 12 launch countries, but deeply curate only:

- Lebanon
- Japan
- Mexico

These three should function as the quality benchmark before broader scaling.

## Recommended First Three Build Countries

To test the range of the content system, start with:

- Lebanon
- Japan
- Mexico

This gives the MVP an early mix of:

- strong food culture
- strong music options
- recognizable visual symbols
- rich art and monument possibilities
- clearly different tones across countries

## Open Product Decisions

These should be answered early in design and implementation:

- Does a wrong answer still unlock the full reveal or a lighter version?
- Is the first clue shown as text, image, or mixed media?
- Is the reveal swipable, scroll-based, or step-based?
- Should the first unlocked item always be `Listen`, or should it vary by country?
- Should players be able to browse countries outside quiz mode in V1?

## Recommendation

For V1, the strongest product choice is:

- mixed clues
- one unlocked country world after each correct answer
- a coherent tasting-world bundle instead of a grid-first layout
- quiet geography metadata instead of capital quiz mode
- a passport that trends toward discovery tracking over time
- architecture for 12 countries with deep curation concentrated in the first 3

That gives both momentum and meaning.
