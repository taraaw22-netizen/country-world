# Country Schema

## Purpose

This document defines the content structure for one country entry in the app.

The schema should support:

- gameplay
- content curation
- future expansion
- consistent editorial quality

It should be easy to store in JSON, a CMS, a database, or flat content files later.

## Design Principles

- structured enough for product logic
- flexible enough for rich culture content
- editorially consistent
- able to expand without breaking old entries

## High-Level Structure

Each country entry should contain:

- identity data
- quiz clue data
- reveal data
- cultural cards
- media and links
- metadata

## Suggested Schema

```json
{
  "id": "lebanon",
  "name": "Lebanon",
  "officialName": "Lebanese Republic",
  "region": "Middle East",
  "subregion": "Western Asia",
  "capital": {
    "name": "Beirut",
    "shortDescription": "A coastal capital known for its nightlife, publishing history, food culture, and layered urban character."
  },
  "aliases": ["Liban"],
  "quiz": {
    "clueTypes": ["shape", "flag", "monument", "food", "music", "text"],
    "prompts": [
      {
        "type": "text",
        "prompt": "Which country is associated with Fairuz, mezze, and the Jeita Grotto?",
        "correctAnswerId": "lebanon",
        "distractorIds": ["jordan", "syria", "greece"]
      }
    ]
  },
  "reveal": {
    "intro": "A small country with a huge cultural footprint, Lebanon is known for its music, food, publishing, design, and layered Mediterranean life.",
    "heroImage": {
      "src": "/images/countries/lebanon/hero.jpg",
      "alt": "View over Beirut and the Mediterranean coast"
    },
    "funFacts": [
      "Lebanon has a long history of publishing and literary culture in Arabic and French.",
      "Its cuisine is known around the world for mezze, grilling traditions, and fresh herbs.",
      "The country’s cultural influence extends through music, diaspora communities, design, and hospitality."
    ]
  },
  "cards": {
    "food": {
      "title": "Taste of Lebanon",
      "items": [
        {
          "name": "Fattoush",
          "description": "A bright salad with toasted bread, herbs, and sumac.",
          "whyItMatters": "It reflects the freshness and balance that define much of Levantine cooking.",
          "recipeLink": "https://example.com/fattoush"
        }
      ]
    },
    "music": {
      "title": "Sounds of Lebanon",
      "items": [
        {
          "name": "Fairuz",
          "era": "classic",
          "description": "One of the most beloved voices in Arabic music.",
          "listenLink": "https://youtube.com/example"
        },
        {
          "name": "Nancy Ajram",
          "era": "modern",
          "description": "A major contemporary pop figure in the Arab world.",
          "listenLink": "https://youtube.com/example"
        }
      ]
    },
    "book": {
      "title": "Read from Lebanon",
      "items": [
        {
          "name": "The Prophet",
          "creator": "Kahlil Gibran",
          "description": "A short poetic classic by one of Lebanon’s most internationally known writers.",
          "buyLink": "https://amazon.com/example"
        }
      ]
    },
    "monument": {
      "title": "Landmark",
      "items": [
        {
          "name": "Jeita Grotto",
          "description": "A dramatic cave system known for its natural formations and underground river.",
          "whyItMatters": "It is one of the country’s most visually iconic natural landmarks."
        }
      ]
    },
    "art": {
      "title": "Art and Design",
      "items": [
        {
          "name": "Saloua Raouda Choucair",
          "type": "sculpture",
          "description": "A pioneering modern artist known for abstract work and sculptural form."
        }
      ]
    },
    "capitalSpotlight": {
      "title": "Capital Spotlight",
      "items": [
        {
          "name": "Beirut",
          "description": "A city shaped by publishing, nightlife, food, the sea, and layered history."
        }
      ]
    }
  },
  "media": {
    "gallery": [
      {
        "src": "/images/countries/lebanon/gallery-1.jpg",
        "alt": "Cedar landscape in Lebanon"
      }
    ]
  },
  "meta": {
    "status": "draft",
    "difficulty": 2,
    "popularity": 4,
    "lastReviewed": "2026-07-11",
    "tags": ["mediterranean", "music", "food", "mountains", "literature"]
  }
}
```

## Required Top-Level Fields

### Identity

- `id`
- `name`
- `officialName`
- `region`
- `subregion`
- `aliases`

### Capital

- `capital.name`
- `capital.shortDescription`

### Quiz

- at least one prompt
- at least one clue type

### Reveal

- short intro
- hero image
- three short fun facts

### Cards

- `food`
- `music`
- `book`
- `monument`
- `art`
- `capitalSpotlight`

### Meta

- `status`
- `lastReviewed`
- tags

## V1 Minimum Content Rules

For every country in the MVP:

- at least 1 clue per clue type used
- at least 1 item in each core card
- at least 3 fun facts
- at least 1 hero image
- at least 1 gallery image

## Card Definitions

### Food

Required fields per item:

- `name`
- `description`
- `whyItMatters`
- `recipeLink`

Optional:

- region within country
- vegetarian flag
- spice level
- preparation difficulty

### Music

Required fields per item:

- `name`
- `era`
- `description`
- `listenLink`

Optional:

- genre
- featured song
- streaming links

Recommendation for V1:

- include one classic artist
- include one modern artist

### Book

Required fields per item:

- `name`
- `creator`
- `description`
- `buyLink`

Optional:

- genre
- year
- translation note

### Monument

Required fields per item:

- `name`
- `description`
- `whyItMatters`

Optional:

- city
- year / era
- official site

### Art

Required fields per item:

- `name`
- `type`
- `description`

Optional:

- artist
- movement
- image
- museum link

### Capital Spotlight

Required fields per item:

- `name`
- `description`

Optional:

- neighborhood
- landmark
- local food note
- music note

## Prompt Structure

Each prompt should support:

- clue type
- prompt text or media
- correct answer
- distractors

Suggested structure:

```json
{
  "type": "food",
  "prompt": "This country is often associated with adobo, jeepneys, and more than 7,000 islands. Which is it?",
  "media": null,
  "correctAnswerId": "philippines",
  "distractorIds": ["indonesia", "japan", "mexico"],
  "difficulty": 2
}
```

## Editorial Style Rules

All content should be:

- concise
- warm
- vivid
- respectful
- non-patronizing
- free from lazy stereotypes

### Preferred Tone

Write like a smart, curious cultural guide.

### Avoid

- textbook language
- overclaiming
- flattening a whole country into one trait
- “people in this country are…” generalizations

## Link Types

The schema should eventually support:

- recipe links
- YouTube or music listening links
- book purchase links
- museum or monument links
- internal app deep links later

## Status Values

Suggested `meta.status` values:

- `draft`
- `review`
- `approved`
- `published`

## File Strategy Recommendation

For early development, each country can live in its own JSON or Markdown-backed data file.

Suggested path pattern:

```text
data/countries/lebanon.json
data/countries/japan.json
data/countries/mexico.json
```

This keeps the content modular and easy to review.

## First Implementation Advice

Do not fully optimize the schema before testing the product.

Start by building:

1. one content model
2. three country entries
3. one quiz-to-reveal flow

Then refine the schema once real content exposes what is missing.
