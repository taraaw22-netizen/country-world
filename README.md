# Country World

Country World is a playful cultural discovery game. The quiz is the hook, but the product is a media-first way to get curious about countries through real food, music, books, places, and art.

The current playable prototype lives in `world-discovery-game/`, and all local media assets are stored in `world-discovery-game/assets/media/`.

## Core Loop

1. The player sees a fast, visual clue and guesses a country.
2. A correct answer unlocks that country.
3. The country opens into five discovery types:
   - `TASTE`
   - `LISTEN`
   - `READ`
   - `SEE`
   - `CREATE`
4. Each discovery is backed by authentic media:
   - real food imagery and recipe links
   - embedded or linked music
   - real book covers and book links
   - real places, landmarks, and map links
   - real artists and artworks
5. The player can keep exploring that country or move to the next one.

## Product Principles

- The quiz must be fast, visual, and immediately understandable.
- Every clue must be discriminative: only one answer should fully satisfy it.
- Mixed clues should teach something even when the user guesses wrong.
- The cultural content should feel curated, not generic or tourist-board obvious.
- Every recommendation should pass the test: “Would I tell a friend about this?”
- Books should be genuinely excellent books by authors from the country, even if they are not about the country.
- Music should be something the player may actually want to keep listening to.
- The interface can be playful and illustrated, but the cultural media should be real and prominent.

## Country Architecture

The app is built around deep country content pools rather than a fixed list of five items forever.

- A country has a larger library across the five discovery types.
- A visit selects a coherent bundle of five items.
- Future visits can surface different bundles from the same country.
- The bundle should have chemistry, not random coverage.

## Current V1 Scope

The current playable prototype focuses on:

- Lebanon
- Mexico
- Japan

The app also includes the foundational structure for the larger country library.

## Lebanon Bundle

The Lebanon experience is tuned for a slow Mediterranean morning inside a city that never fully went to sleep.

Primary discoveries:

- `TASTE` - Man'oushe
- `LISTEN` - Mashrou' Leila
- `READ` - An Unnecessary Woman
- `SEE` - Jeita Grotto
- `CREATE` - Saloua Raouda Choucair

Alternates currently include:

- Fairuz
- Raouche Rocks
- Knefeh
- The Rock of Tanios
- Etel Adnan

## Mexico Bundle

Primary discoveries:

- `TASTE` - Tacos al pastor
- `LISTEN` - Natalia Lafourcade
- `READ` - Pedro Páramo
- `SEE` - Palacio de Bellas Artes
- `CREATE` - Frida Kahlo

Alternates currently include:

- Mole Poblano
- Chavela Vargas
- Aura
- Coyoacán
- Diego Rivera

## Japan Bundle

Primary discoveries:

- `TASTE` - Onigiri
- `LISTEN` - Hikaru Utada
- `READ` - Kitchen
- `SEE` - Naoshima
- `CREATE` - Yayoi Kusama

Alternates currently include:

- Haruomi Hosono
- Takashi Murakami

## Passport

The passport is not just a collection log. It is a map of countries the player has unlocked and a way to jump back into each country’s deeper library.

- Each unlocked country appears in the passport.
- Clicking a country opens it back in the app.
- The passport also shows the broader country library for that country.

## Implementation Notes

- The quiz currently validates that the clue points to exactly one answer.
- Wrong answers do not unlock the country.
- Countries are rendered from local media assets when possible.
- The app currently lives in `world-discovery-game/`.

## Status

This repository contains the current prototype and the working content/docs foundation for the broader Country World product.

## Recent Changes

- The quiz is now restricted to three clue types only:
  - `shape`
  - `flag`
  - `capital`
- Every quiz question is validated so only one answer fully satisfies the clue.
- The prototype uses real media in the main content pane instead of text-only placeholders.
- Media sizing has been adjusted so book covers, artwork, flags, and video embeds show fully instead of being awkwardly cropped.
- The passport behaves like a country map of unlocked places, not a duplicate log of the same country.
- The bottom "more from Lebanon" experience was folded into the country discovery flow so the content stays in one place.
- The local image folder is:
  - `world-discovery-game/assets/media/`

## Current Content Snapshot

### Lebanon

- Quiz clues: Lebanon flag, Lebanon outline, Beirut capital
- Discovery categories:
  - `TASTE` - Man'oushe
  - `LISTEN` - Mashrou' Leila
  - `READ` - An Unnecessary Woman
  - `SEE` - Jeita Grotto
  - `CREATE` - Saloua Raouda Choucair
- Alternates currently include:
  - Fairuz
  - Raouche Rocks
  - Knefeh
  - The Rock of Tanios
  - Etel Adnan

### Mexico

- Quiz clues: Mexico flag, Mexico outline, Mexico City capital
- Discovery categories:
  - `TASTE` - Tacos al pastor
  - `LISTEN` - Natalia Lafourcade
  - `READ` - Pedro Páramo
  - `SEE` - Palacio de Bellas Artes
  - `CREATE` - Frida Kahlo
- Alternates currently include:
  - Mole Poblano
  - Chavela Vargas
  - Aura
  - Coyoacán
  - Diego Rivera

### Japan

- Quiz clues: Japan flag, Japan outline, Tokyo capital
- Discovery categories:
  - `TASTE` - Onigiri
  - `LISTEN` - Hikaru Utada
  - `READ` - Kitchen
  - `SEE` - Naoshima
  - `CREATE` - Yayoi Kusama
- Alternates currently include:
  - Haruomi Hosono
  - Takashi Murakami
