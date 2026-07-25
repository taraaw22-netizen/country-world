const COUNTRY_DATA = {
  Lebanon: {
    region: "Western Asia",
    capital: "Beirut",
    flagHasCedar: true,
    landmark: "Jeita Grotto",
    borders: ["Syria", "Israel"],
    coast: "Mediterranean",
  },
  Mexico: {
    region: "North America",
    capital: "Mexico City",
    flagHasCactus: true,
    landmark: "Palacio de Bellas Artes",
    borders: ["United States", "Guatemala", "Belize"],
    coast: "Pacific Ocean",
  },
  Japan: {
    region: "East Asia",
    capital: "Tokyo",
    flagHasCircle: true,
    landmark: "Naoshima",
    borders: [],
    coast: "Pacific Ocean",
  },
  Jordan: {
    region: "Western Asia",
    capital: "Amman",
    flagHasCedar: false,
    landmark: "Petra",
    borders: ["Syria", "Iraq", "Saudi Arabia", "Israel"],
    coast: "Red Sea",
  },
  Syria: {
    region: "Western Asia",
    capital: "Damascus",
    flagHasCedar: false,
    landmark: "Umayyad Mosque",
    borders: ["Turkey", "Iraq", "Jordan", "Israel", "Lebanon"],
    coast: "Mediterranean",
  },
  Greece: {
    region: "Southern Europe",
    capital: "Athens",
    flagHasCedar: false,
    landmark: "Acropolis",
    borders: ["Albania", "North Macedonia", "Bulgaria", "Turkey"],
    coast: "Mediterranean",
  },
  Cyprus: {
    region: "Eastern Mediterranean",
    capital: "Nicosia",
    flagHasCedar: false,
    landmark: "Petra tou Romiou",
    borders: [],
    coast: "Mediterranean",
  },
};

const QUESTION_BANK = [
  {
    type: "postcard",
    prompt: "Which country does this postcard belong to?",
    options: ["Lebanon", "Jordan", "Mexico", "Greece"],
    answerCountry: "Lebanon",
    render: () => `
      <div class="clue-card-region clue-postcard">
        <img class="clue-postcard-image" src="./assets/media/lebanon-postcard-clue-v1.png" alt="Comic postcard scene with a Mediterranean city, cedar tree, man'oushe, and tea" />
      </div>`,
    test: (country) => country === "Lebanon",
  },
  {
    type: "flag",
    prompt: "Which country's flag is this?",
    options: ["Lebanon", "Jordan", "Syria", "Greece"],
    answerCountry: "Lebanon",
    render: () => `
      <div class="clue-card-region">
        <img class="clue-flag-image" src="./assets/media/flag-lebanon.svg" alt="Flag of Lebanon" />
      </div>`,
    test: (country) => COUNTRY_DATA[country].flagHasCedar,
  },
  {
    type: "capital",
    prompt: "Which country has Beirut as its capital?",
    options: ["Lebanon", "Jordan", "Syria", "Greece"],
    answerCountry: "Lebanon",
    render: () => `
      <div class="clue-card-text capital">
        <div>
          <span class="eyebrow">Capital</span>
          <div class="clue-big-word">Beirut</div>
          <p class="clue-subline">A capital-city clue should feel immediate.</p>
        </div>
      </div>`,
    test: (country) => COUNTRY_DATA[country].capital === "Beirut",
  },
  {
    type: "shape",
    prompt: "Which country's outline is this?",
    options: ["Lebanon", "Jordan", "Syria", "Cyprus"],
    answerCountry: "Lebanon",
    render: () => `
      <div class="clue-card-region shape">
        <img class="clue-map-image" src="./assets/media/lebanon-region-map.svg" alt="Map showing the outline and regions of Lebanon" />
      </div>`,
    test: (country) => country === "Lebanon",
  },
  {
    type: "flag",
    prompt: "Which country's flag is this?",
    options: ["Mexico", "Spain", "Peru", "Colombia"],
    answerCountry: "Mexico",
    render: () => `
      <div class="clue-card-region">
        <img class="clue-flag-image" src="./assets/media/flag-mexico.png" alt="Flag of Mexico" />
      </div>`,
    test: (country) => country === "Mexico",
  },
  {
    type: "capital",
    prompt: "Which country has Mexico City as its capital?",
    options: ["Mexico", "Spain", "Argentina", "Brazil"],
    answerCountry: "Mexico",
    render: () => `
      <div class="clue-card-text capital">
        <div>
          <span class="eyebrow">Capital</span>
          <div class="clue-big-word">Mexico City</div>
          <p class="clue-subline">A capital clue should be obvious at a glance.</p>
        </div>
      </div>`,
    test: (country) => COUNTRY_DATA[country]?.capital === "Mexico City" || country === "Mexico",
  },
  {
    type: "shape",
    prompt: "Which country's outline is this?",
    options: ["Mexico", "Brazil", "Chile", "Peru"],
    answerCountry: "Mexico",
    render: () => `
      <div class="clue-card-region shape">
        <img class="clue-flag-image" src="./assets/media/mexico-outline.png" alt="Mexico outline map" />
      </div>`,
    test: (country) => country === "Mexico",
  },
  {
    type: "flag",
    prompt: "Which country's flag is this?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    answerCountry: "Japan",
    render: () => `
      <div class="clue-card-region">
        <img class="clue-flag-image" src="./assets/media/flag-japan.svg" alt="Flag of Japan" />
      </div>`,
    test: (country) => country === "Japan",
  },
  {
    type: "capital",
    prompt: "Which country has Tokyo as its capital?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    answerCountry: "Japan",
    render: () => `
      <div class="clue-card-text capital">
        <div>
          <span class="eyebrow">Capital</span>
          <div class="clue-big-word">Tokyo</div>
          <p class="clue-subline">One city, many layers.</p>
        </div>
      </div>`,
    test: (country) => COUNTRY_DATA[country]?.capital === "Tokyo" || country === "Japan",
  },
  {
    type: "shape",
    prompt: "Which country's outline is this?",
    options: ["Japan", "South Korea", "China", "Thailand"],
    answerCountry: "Japan",
    render: () => `
      <div class="clue-card-region shape">
        <svg viewBox="0 0 220 240" width="220" height="240" aria-label="Japan outline">
          <path
            d="M112 22 L126 40 L131 62 L121 78 L125 95 L115 114 L122 132 L117 149 L104 160 L98 177 L86 192 L69 204 L52 188 L55 167 L47 148 L54 132 L50 112 L60 95 L58 78 L67 61 L80 43 L95 31 Z"
            fill="#6ab7ff"
            stroke="#16385a"
            stroke-width="6"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            d="M137 64 L153 74 L160 90 L152 105 L155 120 L145 133 L133 128 L129 109 L132 92 L130 78 Z"
            fill="#6ab7ff"
            stroke="#16385a"
            stroke-width="6"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            d="M154 136 L170 144 L176 160 L170 172 L158 168 L152 153 Z"
            fill="#6ab7ff"
            stroke="#16385a"
            stroke-width="6"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
      </div>`,
    test: (country) => country === "Japan",
  },
];

const DISCOVERIES = {
  taste: {
    verb: "TASTE",
    title: "Man'oushe",
    copy:
      "Warm, folded, and often eaten on the go, man'oushe is one of the quickest ways into everyday Lebanon. The za'atar version is herby, tangy, and olive-oil rich, with a soft chew and crisp edges when it is fresh from the oven.",
    note: "Why this pick: it feels immediate, local, and actually craveable.",
    externalLabel: "Watch how it's made",
    externalUrl:
      "https://www.youtube.com/results?search_query=zaatar+manakish+recipe",
    saveItem: "dish · Man'oushe",
    media: () => `
      <div class="media-card">
        <img src="./assets/media/manoushe.jpg" alt="Za'atar man'oushe" />
        <div class="media-meta">
          <strong>Breakfast, not a special occasion.</strong>
          <p>This is the kind of food that makes a country feel lived in instead of presented.</p>
          <div class="recipe-mini">
            <p><strong>Simple version</strong></p>
            <p>1. Make or buy soft flatbread dough and let it rise.</p>
            <p>2. Mix za'atar with olive oil into a loose spread.</p>
            <p>3. Press the dough flat with your fingertips.</p>
            <p>4. Spread the za'atar mix almost to the edges.</p>
            <p>5. Bake very hot until the bread puffs and the edges turn golden.</p>
          </div>
          <a class="inline-link" href="https://www.youtube.com/results?search_query=zaatar+manakish+recipe" target="_blank" rel="noreferrer noopener">
            Watch recipe videos
          </a>
        </div>
      </div>`,
  },
  listen: {
    verb: "LISTEN",
    title: "Mashrou' Leila",
    copy:
      "Mashrou' Leila was formed in Beirut in 2008 and became one of the most distinctive Lebanese bands of its generation. Their sound is sharp, emotional, and urban, and it immediately shifts Lebanon away from postcard nostalgia and into a living, contemporary city.",
    note: "Why this pick: it brings contemporary energy and a point of view.",
    externalLabel: "Open in YouTube",
    externalUrl:
      "https://www.youtube.com/watch?v=NF__cpsDmZk",
    saveItem: "artist · Mashrou' Leila",
    media: () => `
      <div class="media-card">
        <iframe
          src="https://www.youtube-nocookie.com/embed/NF__cpsDmZk"
          title="Mashrou' Leila on YouTube"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="media-meta">
          <strong>"Roman" (Official Music Video)</strong>
          <p>A good first entry point if you want the bundle to keep its restless, city-lit energy.</p>
          <a class="inline-link" href="https://www.youtube.com/watch?v=NF__cpsDmZk" target="_blank" rel="noreferrer noopener">
            Open in YouTube
          </a>
        </div>
      </div>`,
  },
  read: {
    verb: "READ",
    title: "An Unnecessary Woman",
    copy:
      "Aaliya Saleh, a seventy-two-year-old translator in Beirut, spends her life translating books no one has asked for and observing the world with ferocious intelligence. The novel is funny, lonely, sharp, and deeply tuned to the emotional texture of Beirut.",
    note: "Why this pick: it feels like a real recommendation, not assigned reading.",
    externalLabel: "Open book link",
    externalUrl:
      "https://openlibrary.org/search?q=An+Unnecessary+Woman+Rabih+Alameddine",
    saveItem: "book · An Unnecessary Woman",
    media: () => `
      <div class="media-card">
        <img src="./assets/media/an-unnecessary-woman.jpg" alt="An Unnecessary Woman book cover" />
        <div class="media-meta">
          <strong>Rabih Alameddine</strong>
          <p>Lebanese novelist, painter, and one of the strongest literary routes into contemporary Beirut mood and voice.</p>
          <a class="inline-link" href="https://openlibrary.org/search?q=An+Unnecessary+Woman+Rabih+Alameddine" target="_blank" rel="noreferrer noopener">
            Open book link
          </a>
        </div>
      </div>`,
  },
  see: {
    verb: "SEE",
    title: "Jeita Grotto",
    copy:
      "Jeita Grotto expands Lebanon beyond city associations into water, stone, scale, and surprise. It is one of those places that immediately changes the mental image of a country.",
    note: "Why this pick: it is visually unforgettable and not the most obvious poster cliché.",
    externalLabel: "Learn more",
    externalUrl:
      "http://www.jeitagrotto.com/",
    saveItem: "place · Jeita Grotto",
    media: () => `
      <div class="media-card">
        <img src="./assets/media/jeita-grotto.jpg" alt="Jeita Grotto" />
        <div class="media-meta">
          <strong>Stone, water, and scale.</strong>
          <p>Jeita adds wonder to the bundle and keeps Lebanon from collapsing into only one urban mood.</p>
          <a class="inline-link" href="http://www.jeitagrotto.com/" target="_blank" rel="noreferrer noopener">
            Learn more
          </a>
        </div>
      </div>`,
  },
  create: {
    verb: "CREATE",
    title: "Saloua Raouda Choucair",
    copy:
      "Saloua Raouda Choucair was one of the pioneers of abstraction in Lebanon. Her work links geometry, Arabic visual rhythm, architecture, and sculpture in a way that makes the whole Lebanon bundle feel smarter and more formally alive.",
    note: "Why this pick: it raises the taste level of the whole bundle.",
    externalLabel: "Learn more",
    externalUrl:
      "https://www.tate.org.uk/whats-on/tate-modern/exhibition/saloua-raouda-choucair",
    saveItem: "artist · Saloua Raouda Choucair",
    media: () => `
      <div class="media-card">
        <img src="./assets/media/choucair.jpg" alt="Artwork by Saloua Raouda Choucair" />
        <div class="media-meta">
          <strong>Work by Saloua Raouda Choucair</strong>
          <p>The source image does not name the exact piece, but it shows the abstract language that made her work so influential.</p>
          <a class="inline-link" href="https://www.tate.org.uk/whats-on/tate-modern/exhibition/saloua-raouda-choucair" target="_blank" rel="noreferrer noopener">
            See more work
          </a>
        </div>
      </div>`,
  },
};

const COUNTRY_EXTRAS = {
  Lebanon: [
    {
      type: "listen",
      title: "Fairuz",
      verb: "LISTEN",
      copy:
        "Fairuz gives you another Lebanon entirely: warmer, older, softer, and deeply tied to everyday memory. She is less about tension and more about atmosphere.",
      note: "Why this pick: it adds the iconic, morning-lit side of Lebanon without replacing the sharper first recommendation.",
      externalLabel: "Listen on YouTube",
      externalUrl: "https://www.youtube.com/watch?v=n4CP1eVRDHk",
      media: () => `
        <div class="media-card">
          <iframe
            src="https://www.youtube-nocookie.com/embed/n4CP1eVRDHk"
            title="Fairuz - Nassam Alayna El Hawa"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        <div class="media-meta">
          <strong>Start with "Nassam Alayna El Hawa."</strong>
          <p>This is the Lebanon of morning air, memory, and songs people actually live with.</p>
          <a class="inline-link" href="https://www.youtube.com/watch?v=n4CP1eVRDHk" target="_blank" rel="noreferrer noopener">
            Open in YouTube
          </a>
        </div>
      </div>`,
    },
    {
      type: "see",
      title: "Raouche Rocks",
      verb: "SEE",
      copy:
        "Raouche gives you a more public, social, sea-edge version of Beirut. It is iconic, but it still feels inhabited rather than museum-like.",
      note: "Why this pick: it adds an urban coastal mood to balance Jeita's underground wonder.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Raouche+Rocks+Beirut",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/raouche-rocks.jpg" alt="Raouche Rocks in Beirut" />
        <div class="media-meta">
          <strong>Beirut on the water.</strong>
          <p>Less secret than Jeita, but more tied to the social feeling of the city.</p>
          <a class="inline-link" href="https://www.google.com/maps/search/Raouche+Rocks+Beirut" target="_blank" rel="noreferrer noopener">
            Open map
          </a>
        </div>
      </div>`,
    },
    {
      type: "taste",
      title: "Knefeh",
      verb: "TASTE",
      copy:
        "Knefeh is molten, syrupy, sweet-salty, and a little theatrical. It gives Lebanon a richer, more indulgent food mood than man'oushe.",
      note: "Why this pick: it broadens the food picture without overwhelming the app with too much text.",
      externalLabel: "Watch how it's made",
      externalUrl: "https://www.youtube.com/results?search_query=lebanese+knefeh+recipe",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/knefeh.jpg" alt="Knefeh" />
          <div class="media-meta">
            <strong>Hot, cheesy, syrupy.</strong>
            <p>Dessert as spectacle, but still very everyday in feeling.</p>
            <div class="recipe-mini">
              <p><strong>Simple version</strong></p>
              <p>1. Layer sweet cheese with shredded pastry.</p>
              <p>2. Bake until deeply golden.</p>
              <p>3. Pour over fragrant syrup and finish with pistachios.</p>
            </div>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=lebanese+knefeh+recipe" target="_blank" rel="noreferrer noopener">
              Watch how it's made
            </a>
          </div>
        </div>`,
    },
    {
      type: "read",
      title: "The Rock of Tanios",
      verb: "READ",
      copy:
        "The Rock of Tanios is by Amin Maalouf, a different Lebanese writer with a more historical, fable-like approach. It gives you village intrigue, political pressure, and a more mythic literary Lebanon.",
      note: "Why this pick: it adds a second literary voice rather than repeating the same author.",
      externalLabel: "Open book link",
      externalUrl: "https://openlibrary.org/search?q=The+Rock+of+Tanios+Amin+Maalouf",
      media: () => `
      <div class="media-card">
        <img src="./assets/media/the-rock-of-tanios.jpg" alt="The Rock of Tanios book cover" />
        <div class="media-meta">
          <strong>Amin Maalouf</strong>
          <p>Prix Goncourt-winning novel with a more historical, windswept, legend-shaped mood.</p>
          <a class="inline-link" href="https://openlibrary.org/search?q=The+Rock+of+Tanios+Amin+Maalouf" target="_blank" rel="noreferrer noopener">
            Open book link
          </a>
        </div>
      </div>`,
    },
    {
      type: "create",
      title: "Etel Adnan",
      verb: "CREATE",
      copy:
        "Etel Adnan opens a different creative route into Lebanon: painting, writing, color, and compressed landscape. The work feels clear, modern, and distilled.",
      note: "Why this pick: it gives CREATE a lighter, more chromatic second voice than Choucair.",
      externalLabel: "See the artwork source",
      externalUrl: "https://galerielelong.com/news/671-etel-adnan-colour-as-language/",
      media: () => `
      <div class="media-card">
        <img src="./assets/media/etel-adnan-art.jpg" alt="Artwork by Etel Adnan" />
        <div class="media-meta">
          <strong>Etel Adnan, artwork from "Colour as Language"</strong>
          <p>Color, horizon, and reduced geometry carry more emotion than explanation here.</p>
          <a class="inline-link" href="https://galerielelong.com/news/671-etel-adnan-colour-as-language/" target="_blank" rel="noreferrer noopener">
            See the artwork source
          </a>
        </div>
      </div>`,
    },
  ],
  Mexico: [
    {
      type: "taste",
      title: "Mole Poblano",
      verb: "TASTE",
      copy:
        "Mole poblano is layered, dark, and celebratory, with chiles, chocolate, nuts, and spice pulling in different directions at once.",
      note: "Why this pick: it gives Mexico's food story a deeper, more ceremonial second note.",
      externalLabel: "Watch how it's made",
      externalUrl: "https://www.youtube.com/results?search_query=mole+poblano+recipe",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/mole-poblano.jpg" alt="Mole poblano" />
          <div class="media-meta">
            <strong>Mole as a second food mood.</strong>
            <p>It is rich, layered, and a little mysterious in the best way.</p>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=mole+poblano+recipe" target="_blank" rel="noreferrer noopener">
              Watch how it's made
            </a>
          </div>
        </div>`,
    },
    {
      type: "listen",
      title: "Chavela Vargas",
      verb: "LISTEN",
      copy:
        "Chavela Vargas is spare, raw, and unforgettable. Her voice strips Mexican song down to feeling, edge, and emotional weather.",
      note: "Why this pick: it gives Mexico a classic voice with real staying power.",
      externalLabel: "Open in YouTube",
      externalUrl: "https://www.youtube.com/results?search_query=Chavela+Vargas",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/chavela-vargas.jpg" alt="Chavela Vargas" />
          <div class="media-meta">
            <strong>Chavela Vargas</strong>
            <p>Listen for the stripped-back, lived-in feeling she brings to ranchera.</p>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=Chavela+Vargas" target="_blank" rel="noreferrer noopener">
              Open in YouTube
            </a>
          </div>
        </div>`,
    },
    {
      type: "read",
      title: "Aura",
      verb: "READ",
      copy:
        "Aura is short, eerie, and elegant, with a voice that feels like it is pulling you into a room that may not want you there.",
      note: "Why this pick: it adds a more uncanny literary register to Mexico.",
      externalLabel: "Open book link",
      externalUrl: "https://openlibrary.org/search?q=Aura+Carlos+Fuentes",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/aura.jpg" alt="Aura book cover" />
          <div class="media-meta">
            <strong>Carlos Fuentes</strong>
            <p>A second great Mexican book that keeps the reading lane sharp and atmospheric.</p>
            <a class="inline-link" href="https://openlibrary.org/search?q=Aura+Carlos+Fuentes" target="_blank" rel="noreferrer noopener">
              Open book link
            </a>
          </div>
        </div>`,
    },
    {
      type: "see",
      title: "Coyoacán",
      verb: "SEE",
      copy:
        "Coyoacán gives you a neighborhood-scale Mexico City: leafy, creative, social, and full of markets, houses, cafes, and lived-in art memory.",
      note: "Why this pick: it is more tactile than a monument and feels close to how people actually move through the city.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Coyoacan+Mexico+City",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/coyoacan.jpg" alt="Coyoacán" />
          <div class="media-meta">
            <strong>Mexico City texture.</strong>
            <p>Bright streets, cultural density, and a neighborhood feel that stays with you.</p>
            <a class="inline-link" href="https://www.google.com/maps/search/Coyoacan+Mexico+City" target="_blank" rel="noreferrer noopener">
              Open map
            </a>
          </div>
        </div>`,
    },
    {
      type: "create",
      title: "Diego Rivera",
      verb: "CREATE",
      copy:
        "Rivera brings Mexico into public scale. His murals make art feel civic, large, and impossible to ignore.",
      note: "Why this pick: it gives CREATE a second strong Mexican axis beyond Frida.",
      externalLabel: "See more work",
      externalUrl: "https://www.google.com/search?q=Diego+Rivera+murals",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/diego-rivera.jpg" alt="Diego Rivera" />
          <div class="media-meta">
            <strong>Diego Rivera</strong>
            <p>Public art that changed the scale of what a country can look like.</p>
            <a class="inline-link" href="https://www.google.com/search?q=Diego+Rivera+murals" target="_blank" rel="noreferrer noopener">
              See more work
            </a>
          </div>
        </div>`,
    },
  ],
  Japan: [
    {
      type: "taste",
      title: "Ramen",
      verb: "TASTE",
      copy:
        "Ramen is comfort, craft, and obsession in one bowl. It is intensely regional and still somehow globally recognizable.",
      note: "Why this pick: it gives Japan a second food lane that feels more city-stall and less minimalist.",
      externalLabel: "Watch how it's made",
      externalUrl: "https://www.youtube.com/results?search_query=japanese+ramen+recipe",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/onigiri.jpg" alt="Ramen-inspired Japanese food" />
          <div class="media-meta">
            <strong>A second comfort food mood.</strong>
            <p>Warm, concentrated, and built for repeat visits.</p>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=japanese+ramen+recipe" target="_blank" rel="noreferrer noopener">
              Watch how it's made
            </a>
          </div>
        </div>`,
    },
    {
      type: "listen",
      title: "Hikaru Utada",
      verb: "LISTEN",
      copy:
        "Hikaru Utada is one of the most durable modern Japanese pop voices, with songs that stay emotionally legible over time.",
      note: "Why this pick: it is contemporary, catchy, and worth revisiting.",
      externalLabel: "Open in YouTube",
      externalUrl: "https://www.youtube.com/watch?v=8LHe6aB36Dg",
      media: () => `
        <div class="media-card">
          <iframe
            src="https://www.youtube-nocookie.com/embed/8LHe6aB36Dg"
            title="Hikaru Utada - First Love"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="media-meta">
            <strong>First Love</strong>
            <p>A strong modern Japan entry point.</p>
            <a class="inline-link" href="https://www.youtube.com/watch?v=8LHe6aB36Dg" target="_blank" rel="noreferrer noopener">
              Open in YouTube
            </a>
          </div>
        </div>`,
    },
    {
      type: "read",
      title: "Convenience Store Woman",
      verb: "READ",
      copy:
        "A strange, precise, and funny novel that turns ordinary retail into a sharp lens on expectation and belonging.",
      note: "Why this pick: it brings a more contemporary Japanese literary voice into the reading lane.",
      externalLabel: "Open book link",
      externalUrl: "https://openlibrary.org/search?q=Convenience+Store+Woman+Sayaka+Murata",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/convenience-store-woman.png" alt="Convenience Store Woman book cover" />
          <div class="media-meta">
            <strong>Sayaka Murata</strong>
            <p>Short, strange, and sharply observed.</p>
            <a class="inline-link" href="https://openlibrary.org/search?q=Convenience+Store+Woman+Sayaka+Murata" target="_blank" rel="noreferrer noopener">
              Open book link
            </a>
          </div>
        </div>`,
    },
    {
      type: "see",
      title: "Tokyo",
      verb: "SEE",
      copy:
        "Tokyo is not one image. It is neighborhoods, train lines, lights, tiny bars, shrines, design, and speed changing block by block.",
      note: "Why this pick: it keeps the capital close and makes the city itself part of the discovery.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Tokyo",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/naoshima.jpg" alt="Tokyo city and Japan context" />
          <div class="media-meta">
            <strong>Tokyo as a world of neighborhoods.</strong>
            <p>It is a place that keeps changing while staying recognizably itself.</p>
            <a class="inline-link" href="https://www.google.com/maps/search/Tokyo" target="_blank" rel="noreferrer noopener">
              Open map
            </a>
          </div>
        </div>`,
    },
    {
      type: "create",
      title: "Yayoi Kusama",
      verb: "CREATE",
      copy:
        "Kusama turns repetition, color, and pattern into a total visual world. She is immediate, memorable, and unmistakably contemporary.",
      note: "Why this pick: it gives Japan a bold, globally legible creative anchor.",
      externalLabel: "See more work",
      externalUrl: "https://www.google.com/search?q=Yayoi+Kusama+art",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/yayoi-kusama.jpg" alt="Yayoi Kusama" />
          <div class="media-meta">
            <strong>Yayoi Kusama</strong>
            <p>Pattern, obsession, and color become the point of view.</p>
            <a class="inline-link" href="https://www.google.com/search?q=Yayoi+Kusama+art" target="_blank" rel="noreferrer noopener">
              See more work
            </a>
          </div>
      </div>`,
    },
  ],
  Mexico: [
    {
      type: "taste",
      title: "Mole Poblano",
      verb: "TASTE",
      copy:
        "Mole poblano is layered, dark, and celebratory, with chiles, chocolate, nuts, and spice pulling in different directions at once.",
      note: "Why this pick: it gives Mexico a second food mood that feels deeper and more ceremonial.",
      externalLabel: "Watch how it's made",
      externalUrl: "https://www.youtube.com/results?search_query=mole+poblano+recipe",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/mole-poblano.jpg" alt="Mole poblano" />
          <div class="media-meta">
            <strong>Mole poblano</strong>
            <p>Rich, layered, and a little mysterious in the best way.</p>
            <div class="recipe-mini">
              <p><strong>Simple version</strong></p>
              <p>1. Toast and blend chiles, seeds, and spices.</p>
              <p>2. Simmer with broth, nuts, and a little chocolate.</p>
              <p>3. Spoon over chicken or turkey and serve with rice.</p>
            </div>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=mole+poblano+recipe" target="_blank" rel="noreferrer noopener">
              Watch recipe videos
            </a>
          </div>
        </div>`,
    },
    {
      type: "listen",
      title: "Chavela Vargas",
      verb: "LISTEN",
      copy:
        "Chavela Vargas is spare, raw, and unforgettable. Her voice strips Mexican song down to feeling, edge, and emotional weather.",
      note: "Why this pick: it gives Mexico a classic voice with real staying power.",
      externalLabel: "Open in YouTube",
      externalUrl: "https://www.youtube.com/results?search_query=Chavela+Vargas",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/chavela-vargas.jpg" alt="Chavela Vargas" />
          <div class="media-meta">
            <strong>Chavela Vargas</strong>
            <p>Listen for the stripped-back, lived-in feeling she brings to ranchera.</p>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=Chavela+Vargas" target="_blank" rel="noreferrer noopener">
              Open in YouTube
            </a>
          </div>
        </div>`,
    },
    {
      type: "read",
      title: "Aura",
      verb: "READ",
      copy:
        "Aura is short, eerie, and elegant, with a voice that feels like it is pulling you into a room that may not want you there.",
      note: "Why this pick: it adds a more uncanny literary register to Mexico.",
      externalLabel: "Open book link",
      externalUrl: "https://openlibrary.org/search?q=Aura+Carlos+Fuentes",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/aura.jpg" alt="Aura book cover" />
          <div class="media-meta">
            <strong>Carlos Fuentes</strong>
            <p>A second great Mexican book that keeps the reading lane sharp and atmospheric.</p>
            <a class="inline-link" href="https://openlibrary.org/search?q=Aura+Carlos+Fuentes" target="_blank" rel="noreferrer noopener">
              Open book link
            </a>
          </div>
        </div>`,
    },
    {
      type: "see",
      title: "Coyoacán",
      verb: "SEE",
      copy:
        "Coyoacán gives you a neighborhood-scale Mexico City: leafy, creative, social, and full of markets, houses, cafes, and lived-in art memory.",
      note: "Why this pick: it is more tactile than a monument and feels close to how people actually move through the city.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Coyoacan+Mexico+City",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/coyoacan.jpg" alt="Coyoacán" />
          <div class="media-meta">
            <strong>Mexico City texture.</strong>
            <p>Bright streets, cultural density, and a neighborhood feel that stays with you.</p>
            <a class="inline-link" href="https://www.google.com/maps/search/Coyoacan+Mexico+City" target="_blank" rel="noreferrer noopener">
              Open map
            </a>
          </div>
        </div>`,
    },
    {
      type: "create",
      title: "Diego Rivera",
      verb: "CREATE",
      copy:
        "Rivera brings Mexico into public scale. His murals make art feel civic, large, and impossible to ignore.",
      note: "Why this pick: it gives CREATE a second strong Mexican axis beyond Frida.",
      externalLabel: "See more work",
      externalUrl: "https://www.google.com/search?q=Diego+Rivera+murals",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/diego-rivera.jpg" alt="Diego Rivera" />
          <div class="media-meta">
            <strong>Diego Rivera</strong>
            <p>Public art that changed the scale of what a country can look like.</p>
            <a class="inline-link" href="https://www.google.com/search?q=Diego+Rivera+murals" target="_blank" rel="noreferrer noopener">
              See more work
            </a>
          </div>
        </div>`,
    },
  ],
  Japan: [
    {
      type: "see",
      title: "Tokyo Tower",
      verb: "SEE",
      copy:
        "Tokyo Tower gives Japan a second place lane that feels iconic, urban, and easy to recognize at a glance.",
      note: "Why this pick: it adds a clear second city image to Naoshima's art-island mood.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Tokyo+Tower",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/tokyo-tower.jpg" alt="Tokyo Tower" />
          <div class="media-meta">
            <strong>Tokyo Tower</strong>
            <p>A bold city landmark that reads immediately.</p>
            <a class="inline-link" href="https://www.google.com/maps/search/Tokyo+Tower" target="_blank" rel="noreferrer noopener">
              Open map
            </a>
          </div>
        </div>`,
    },
    {
      type: "listen",
      title: "Haruomi Hosono",
      verb: "LISTEN",
      copy:
        "Haruomi Hosono helped shape the sound of Japanese pop and still feels playful, elegant, and influential.",
      note: "Why this pick: it gives Japan a classic voice with a long afterlife.",
      externalLabel: "Open in YouTube",
      externalUrl: "https://www.youtube.com/results?search_query=Haruomi+Hosono",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/haruomi-hosono.jpg" alt="Haruomi Hosono" />
          <div class="media-meta">
            <strong>Haruomi Hosono</strong>
            <p>A foundational Japanese pop figure with a long afterlife.</p>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=Haruomi+Hosono" target="_blank" rel="noreferrer noopener">
              Open in YouTube
            </a>
          </div>
        </div>`,
    },
    {
      type: "create",
      title: "Takashi Murakami",
      verb: "CREATE",
      copy:
        "Murakami turns bright surfaces, repetition, and commercial fluency into a distinctly Japanese contemporary art language.",
      note: "Why this pick: it gives Japan a more pop-forward creative route beyond Kusama.",
      externalLabel: "See more work",
      externalUrl: "https://www.google.com/search?q=Takashi+Murakami+art",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/takashi-murakami.jpg" alt="Takashi Murakami" />
          <div class="media-meta">
            <strong>Takashi Murakami</strong>
            <p>Bright, glossy, and unmistakably contemporary.</p>
            <a class="inline-link" href="https://www.google.com/search?q=Takashi+Murakami+art" target="_blank" rel="noreferrer noopener">
              See more work
            </a>
          </div>
        </div>`,
    },
  ],
};

const COUNTRY_LIBRARY = {
  Lebanon: DISCOVERIES,
  Mexico: {
    taste: {
      verb: "TASTE",
      title: "Tacos al pastor",
      copy:
        "Thin-sliced pork, pineapple, salsa, and tortillas make tacos al pastor one of the most immediate and beloved everyday foods in Mexico.",
      note: "Why this pick: it is bold, street-level, and instantly recognizable once you see it.",
      externalLabel: "Watch how it's made",
      externalUrl: "https://www.youtube.com/results?search_query=tacos+al+pastor+recipe",
      saveItem: "dish · Tacos al pastor",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/tacos-al-pastor.jpg" alt="Tacos al pastor" />
          <div class="media-meta">
            <strong>Street food with pull.</strong>
            <p>It carries city life, migration, and craveability in one bite.</p>
            <div class="recipe-mini">
              <p><strong>Simple version</strong></p>
              <p>1. Marinate pork with chile, spice, and citrus.</p>
              <p>2. Cook on a hot grill or spit.</p>
              <p>3. Serve on warm tortillas with pineapple, onion, and salsa.</p>
            </div>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=tacos+al+pastor+recipe" target="_blank" rel="noreferrer noopener">
              Watch recipe videos
            </a>
          </div>
        </div>`,
    },
    listen: {
      verb: "LISTEN",
      title: "Natalia Lafourcade",
      copy:
        "Natalia Lafourcade makes intimate, carefully arranged pop and folk that still feels easy to keep coming back to.",
      note: "Why this pick: it is contemporary, melodic, and genuinely re-listenable.",
      externalLabel: "Open in YouTube",
      externalUrl: "https://www.youtube.com/watch?v=4WPA7-24KfM",
      saveItem: "artist · Natalia Lafourcade",
      media: () => `
        <div class="media-card">
          <iframe
            src="https://www.youtube-nocookie.com/embed/4WPA7-24KfM"
            title="Natalia Lafourcade - Hasta la Raiz"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="media-meta">
            <strong>Hasta la Raiz</strong>
            <p>A modern entry point that feels warm, intimate, and easy to keep listening to.</p>
            <a class="inline-link" href="https://www.youtube.com/watch?v=4WPA7-24KfM" target="_blank" rel="noreferrer noopener">
              Open in YouTube
            </a>
          </div>
        </div>`,
    },
    read: {
      verb: "READ",
      title: "Pedro Páramo",
      copy:
        "A brief, eerie, influential novel that helped define the atmosphere of modern Latin American literature.",
      note: "Why this pick: it is compact but has enormous afterlife.",
      externalLabel: "Open book link",
      externalUrl: "https://openlibrary.org/search?q=Pedro+Paramo+Juan+Rulfo",
      saveItem: "book · Pedro Páramo",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/pedro-paramo.jpg" alt="Pedro Páramo book cover" />
          <div class="media-meta">
            <strong>Juan Rulfo</strong>
            <p>One of the great short reads of Mexican literature.</p>
            <a class="inline-link" href="https://openlibrary.org/search?q=Pedro+Paramo+Juan+Rulfo" target="_blank" rel="noreferrer noopener">
              Open book link
            </a>
          </div>
        </div>`,
    },
    see: {
      verb: "SEE",
      title: "Palacio de Bellas Artes",
      copy:
        "A monumental cultural building in Mexico City that ties architecture, performance, and civic identity together.",
      note: "Why this pick: it is a strong public-space anchor for the country.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Palacio+de+Bellas+Artes",
      saveItem: "place · Palacio de Bellas Artes",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/palacio-de-bellas-artes.jpg" alt="Palacio de Bellas Artes" />
          <div class="media-meta">
            <strong>Mexico City landmark energy.</strong>
            <p>It is a building that acts like a cultural stage.</p>
            <a class="inline-link" href="https://www.google.com/maps/search/Palacio+de+Bellas+Artes" target="_blank" rel="noreferrer noopener">
              Open map
            </a>
          </div>
        </div>`,
    },
    create: {
      verb: "CREATE",
      title: "Frida Kahlo",
      copy:
        "Frida Kahlo turns self-image, symbolism, and emotion into something that is both personal and globally legible.",
      note: "Why this pick: it is iconic without being empty.",
      externalLabel: "See more work",
      externalUrl: "https://www.google.com/search?q=Frida+Kahlo+art",
      saveItem: "artist · Frida Kahlo",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/frida-kahlo.jpg" alt="Frida Kahlo" />
          <div class="media-meta">
            <strong>Frida Kahlo</strong>
            <p>Self-fashioning, symbolism, and pain made visual.</p>
            <a class="inline-link" href="https://www.google.com/search?q=Frida+Kahlo+art" target="_blank" rel="noreferrer noopener">
              See more work
            </a>
          </div>
        </div>`,
    },
  },
  Japan: {
    taste: {
      verb: "TASTE",
      title: "Onigiri",
      copy:
        "Hand-shaped rice with fillings or seasoning, onigiri is a portable and deeply everyday Japanese food.",
      note: "Why this pick: it is simple, direct, and emotionally specific.",
      externalLabel: "Watch how it's made",
      externalUrl: "https://www.youtube.com/results?search_query=onigiri+recipe",
      saveItem: "dish · Onigiri",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/onigiri.jpg" alt="Onigiri" />
          <div class="media-meta">
            <strong>Comfort in a triangle.</strong>
            <p>Portable, precise, and quietly beloved.</p>
            <div class="recipe-mini">
              <p><strong>Simple version</strong></p>
              <p>1. Cook short-grain rice and let it cool slightly.</p>
              <p>2. Add a filling or seasoning.</p>
              <p>3. Shape into a triangle with lightly salted hands.</p>
            </div>
            <a class="inline-link" href="https://www.youtube.com/results?search_query=onigiri+recipe" target="_blank" rel="noreferrer noopener">
              Watch recipe videos
            </a>
          </div>
        </div>`,
    },
    listen: {
      verb: "LISTEN",
      title: "Hikaru Utada",
      copy:
        "Hikaru Utada is one of the most durable modern Japanese pop voices, with songs that stay emotionally legible over time.",
      note: "Why this pick: it is contemporary, catchy, and worth revisiting.",
      externalLabel: "Open in YouTube",
      externalUrl: "https://www.youtube.com/watch?v=8LHe6aB36Dg",
      saveItem: "artist · Hikaru Utada",
      media: () => `
        <div class="media-card">
          <iframe
            src="https://www.youtube-nocookie.com/embed/8LHe6aB36Dg"
            title="Hikaru Utada - First Love"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="media-meta">
            <strong>First Love</strong>
            <p>A strong modern Japan entry point.</p>
            <a class="inline-link" href="https://www.youtube.com/watch?v=8LHe6aB36Dg" target="_blank" rel="noreferrer noopener">
              Open in YouTube
            </a>
          </div>
        </div>`,
    },
    read: {
      verb: "READ",
      title: "Kitchen",
      copy:
        "Banana Yoshimoto's Kitchen is tender, spare, and quietly transformative.",
      note: "Why this pick: it is one of those books people actually keep recommending.",
      externalLabel: "Open book link",
      externalUrl: "https://openlibrary.org/search?q=Kitchen+Banana+Yoshimoto",
      saveItem: "book · Kitchen",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/kitchen.jpg" alt="Kitchen book cover" />
          <div class="media-meta">
            <strong>Banana Yoshimoto</strong>
            <p>Small, tender, and unexpectedly durable.</p>
            <a class="inline-link" href="https://openlibrary.org/search?q=Kitchen+Banana+Yoshimoto" target="_blank" rel="noreferrer noopener">
              Open book link
            </a>
          </div>
        </div>`,
    },
    see: {
      verb: "SEE",
      title: "Naoshima",
      copy:
        "Naoshima is an art island where landscape, architecture, and contemporary art feel woven together.",
      note: "Why this pick: it gives Japan a less obvious but highly memorable place to explore.",
      externalLabel: "Open map",
      externalUrl: "https://www.google.com/maps/search/Naoshima",
      saveItem: "place · Naoshima",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/naoshima.jpg" alt="Naoshima" />
          <div class="media-meta">
            <strong>Art island mood.</strong>
            <p>A place where the museum and the landscape feel almost continuous.</p>
            <a class="inline-link" href="https://www.google.com/maps/search/Naoshima" target="_blank" rel="noreferrer noopener">
              Open map
            </a>
          </div>
        </div>`,
    },
    create: {
      verb: "CREATE",
      title: "Yayoi Kusama",
      copy:
        "Yayoi Kusama turns repetition and color into an entire world of feeling.",
      note: "Why this pick: it is unmistakably Japanese and visually immediate.",
      externalLabel: "See more work",
      externalUrl: "https://www.google.com/search?q=Yayoi+Kusama+art",
      saveItem: "artist · Yayoi Kusama",
      media: () => `
        <div class="media-card">
          <img src="./assets/media/yayoi-kusama.jpg" alt="Yayoi Kusama" />
          <div class="media-meta">
            <strong>Yayoi Kusama</strong>
            <p>Pattern, color, and total visual commitment.</p>
            <a class="inline-link" href="https://www.google.com/search?q=Yayoi+Kusama+art" target="_blank" rel="noreferrer noopener">
              See more work
            </a>
          </div>
        </div>`,
    },
  },
};

const storageKey = "country-world-media-passport";

const POSTCARD_DATA = {
  Lebanon: {
    image: "./assets/media/lebanon-postcard-concept-v1.png",
    alt: "Comic-style illustrated postcard of Beirut's coast and Raouché Rocks",
    stamp: "LB",
    caption: "Raouché Rocks · Beirut",
  },
  Mexico: {
    image: "./assets/media/coyoacan.jpg",
    alt: "Colorful street in Coyoacán, Mexico City",
    stamp: "MX",
    caption: "Coyoacán · Mexico City",
  },
  Japan: {
    image: "./assets/media/naoshima.jpg",
    alt: "Naoshima island landscape in Japan",
    stamp: "JP",
    caption: "Naoshima · Japan",
  },
};

const state = {
  question: null,
  questionQueue: [],
  answered: false,
  missedQuestion: false,
  roundScore: null,
  unlockedCountries: new Set(loadState().unlockedCountries),
  activeKey: "taste",
  activeCountry: "Lebanon",
  openingQuestion: true,
  activeIndexByCategory: {
    taste: 0,
    listen: 0,
    read: 0,
    see: 0,
    create: 0,
  },
};

const ui = {
  answerGrid: document.querySelector("#answer-grid"),
  contentCopy: document.querySelector("#content-copy"),
  contentNote: document.querySelector("#content-note"),
  contentTitle: document.querySelector("#content-title"),
  contentVerb: document.querySelector("#content-verb"),
  alternateStrip: document.querySelector("#alternate-strip"),
  discoveryView: document.querySelector("#discovery-view"),
  mediaFrame: document.querySelector("#media-frame"),
  nextButton: document.querySelector("#next-button"),
  passportButton: document.querySelector("#passport-button"),
  passportMap: document.querySelector("#passport-map"),
  passportScreen: document.querySelector("#passport-screen"),
  closePassportButton: document.querySelector("#close-passport-button"),
  passportCountryCount: document.querySelector("#passport-country-count"),
  passportActiveCountry: document.querySelector("#passport-active-country"),
  passportDiscoveryCount: document.querySelector("#passport-discovery-count"),
  passportNote: document.querySelector("#passport-note"),
  passportLibraryList: document.querySelector("#passport-library-list"),
  passportAtlasPhoto: document.querySelector("#passport-atlas-photo"),
  passportAtlasTitle: document.querySelector("#passport-atlas-title"),
  passportPhotoCaption: document.querySelector("#passport-photo-caption"),
  countryName: document.querySelector("#country-name"),
  quizClue: document.querySelector("#quiz-clue"),
  scoreValue: document.querySelector("#score-value"),
  quizView: document.querySelector("#quiz-view"),
  quizFlip: document.querySelector("#postcard-flip"),
  quizType: document.querySelector("#quiz-type"),
  quizHeading: document.querySelector("#quiz-heading"),
  flagHintButton: document.querySelector("#flag-hint-button"),
  capitalHintButton: document.querySelector("#capital-hint-button"),
  hintContent: document.querySelector("#hint-content"),
  postcardArt: document.querySelector("#postcard-art"),
  postcardStamp: document.querySelector("#postcard-stamp"),
  postcardCountry: document.querySelector("#postcard-country"),
  postcardCaption: document.querySelector("#postcard-caption"),
  exploreButton: document.querySelector("#explore-button"),
  savePostcardButton: document.querySelector("#save-postcard-button"),
  newCountryButton: document.querySelector("#new-country-button"),
  revealPassportButton: document.querySelector("#reveal-passport-button"),
  resultLine: document.querySelector("#result-line"),
  chips: [...document.querySelectorAll(".discovery-chip")],
};

boot();

function boot() {
  pickQuestion();
  renderQuestion();
  renderPassport();

  ui.nextButton.addEventListener("click", resetRound);
  ui.exploreButton.addEventListener("click", () => openCountry(state.activeCountry));
  ui.savePostcardButton.addEventListener("click", () => {
    ui.savePostcardButton.textContent = "Saved to passport";
    ui.savePostcardButton.classList.add("saved");
  });
  ui.newCountryButton.addEventListener("click", resetRound);
  ui.flagHintButton.addEventListener("click", () => showHint("flag"));
  ui.capitalHintButton.addEventListener("click", () => showHint("capital"));
  ui.revealPassportButton.addEventListener("click", openPassport);
  ui.passportButton.addEventListener("click", openPassport);
  ui.closePassportButton.addEventListener("click", closePassport);
  ui.chips.forEach((chip) =>
    chip.addEventListener("click", () => selectDiscovery(chip.dataset.key)),
  );
  ui.alternateStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category][data-index]");
    if (!button) return;
    selectAlternate(button.dataset.category, Number(button.dataset.index));
  });
  ui.passportMap.addEventListener("click", (event) => {
    const button = event.target.closest("[data-country]");
    if (!button) return;
    openCountry(button.dataset.country);
  });
}

function pickQuestion() {
  if (state.openingQuestion) {
    state.question = QUESTION_BANK[0];
    state.openingQuestion = false;
    return;
  }

  if (!state.questionQueue.length) {
    state.questionQueue = shuffle(QUESTION_BANK.filter(isValidQuestion));
  }

  state.question = state.questionQueue.shift();
}

function isValidQuestion(question) {
  const satisfied = question.options.filter((country) => question.test(country));
  return satisfied.length === 1 && satisfied[0] === question.answerCountry;
}

function renderQuestion() {
  ui.scoreValue.textContent = state.roundScore === null ? "-" : String(state.roundScore);
  ui.quizType.textContent = state.question.type === "postcard" ? "Postcard clue" : state.question.type;
  ui.quizHeading.textContent = state.question.prompt;
  ui.quizClue.innerHTML = state.question.render();
  ui.hintContent.innerHTML = "";
  ui.flagHintButton.disabled = false;
  ui.capitalHintButton.disabled = false;

  ui.answerGrid.innerHTML = "";
  shuffle(state.question.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = option;
    button.addEventListener("click", () => answer(option));
    ui.answerGrid.appendChild(button);
  });
}

function showHint(type) {
  const country = state.question.answerCountry;
  const hintData = {
    Lebanon: {
      flag: {
        label: "The flag has a cedar tree at its center.",
        content: '<img class="hint-flag" src="./assets/media/flag-lebanon.svg" alt="Flag of Lebanon" />',
      },
      capital: { label: "The capital is Beirut.", content: '<strong class="hint-capital">Beirut</strong>' },
    },
    Mexico: {
      flag: {
        label: "The flag has a coat of arms in its center.",
        content: '<img class="hint-flag" src="./assets/media/flag-mexico.png" alt="Flag of Mexico" />',
      },
      capital: { label: "The capital is Mexico City.", content: '<strong class="hint-capital">Mexico City</strong>' },
    },
    Japan: {
      flag: {
        label: "The flag is a red sun on white.",
        content: '<img class="hint-flag" src="./assets/media/flag-japan.svg" alt="Flag of Japan" />',
      },
      capital: { label: "The capital is Tokyo.", content: '<strong class="hint-capital">Tokyo</strong>' },
    },
  };
  const hint = hintData[country]?.[type];
  if (!hint) return;
  ui.hintContent.innerHTML = `<span>${hint.label}</span>${hint.content}`;
  if (type === "flag") ui.flagHintButton.disabled = true;
  if (type === "capital") ui.capitalHintButton.disabled = true;
}

function answer(option) {
  if (state.answered) return;
  const answerCountry = state.question.answerCountry;
  if (option !== answerCountry) {
    state.missedQuestion = true;
    state.roundScore = 0;
    ui.scoreValue.textContent = "0";

    [...ui.answerGrid.children].forEach((button) => {
      if (button.textContent === option) {
        button.disabled = true;
        button.classList.add("incorrect");
      }
    });

    ui.resultLine.textContent = "Score 0. Not quite. Try again.";
    return;
  }

  state.answered = true;
  state.roundScore = state.missedQuestion ? 0 : 1;
  ui.scoreValue.textContent = String(state.roundScore);

  [...ui.answerGrid.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === answerCountry) button.classList.add("correct");
  });

  ui.resultLine.textContent =
    state.roundScore === 1
      ? `Correct. Score 1. Welcome to ${answerCountry}.`
      : `Correct on retry. Score 0. Welcome to ${answerCountry}.`;

  state.unlockedCountries.add(answerCountry);
  persist();

  setTimeout(() => {
    openPostcard(answerCountry);
  }, 700);
}

function selectDiscovery(key) {
  state.activeKey = key;
  const data = getCategoryItems(key)[state.activeIndexByCategory[key] || 0];

  ui.chips.forEach((chip) => chip.classList.toggle("active", chip.dataset.key === key));
  ui.contentVerb.textContent = data.verb;
  ui.contentTitle.textContent = data.title;
  ui.contentCopy.textContent = data.copy;
  ui.contentNote.textContent = data.note;
  ui.mediaFrame.innerHTML = data.media();
  renderAlternates(key);
}

function selectAlternate(category, index) {
  state.activeIndexByCategory[category] = index;
  selectDiscovery(category);
}

function openCountry(country) {
  state.activeCountry = country;
  closePassport();
  ui.quizView.classList.add("hidden");
  ui.quizFlip.classList.remove("flipped");
  ui.discoveryView.classList.add("visible");
  if (ui.countryName) ui.countryName.textContent = country;
  resetCategoryIndexes();
  selectDiscovery("taste");
  renderPassport();
}

function openPostcard(country) {
  state.activeCountry = country;
  closePassport();
  const postcard = POSTCARD_DATA[country] || POSTCARD_DATA.Lebanon;
  ui.postcardArt.src = postcard.image;
  ui.postcardArt.alt = postcard.alt;
  ui.postcardStamp.textContent = postcard.stamp;
  ui.postcardCountry.textContent = country;
  ui.postcardCaption.textContent = postcard.caption;
  ui.savePostcardButton.textContent = "Keep postcard";
  ui.savePostcardButton.classList.remove("saved");
  ui.quizView.classList.remove("hidden");
  ui.discoveryView.classList.remove("visible");
  ui.quizFlip.classList.add("flipped");
  renderPassport();
}

function renderPassport() {
  const countries = [...state.unlockedCountries];
  const passportPhotos = {
    Lebanon: {
      src: "./assets/media/lebanon-postcard-concept-v1.png",
      alt: "Comic postcard illustration of Lebanon's Mediterranean coast",
      caption: "Raouché Rocks · Lebanon",
    },
    Mexico: {
      src: "./assets/media/coyoacan.jpg",
      alt: "A colorful street in Coyoacán, Mexico City",
      caption: "Coyoacán · Mexico",
    },
    Japan: {
      src: "./assets/media/naoshima.jpg",
      alt: "Naoshima island landscape in Japan",
      caption: "Naoshima · Japan",
    },
  };
  const passportPhoto = passportPhotos[state.activeCountry] || passportPhotos.Lebanon;
  ui.passportAtlasPhoto.src = passportPhoto.src;
  ui.passportAtlasPhoto.alt = passportPhoto.alt;
  ui.passportPhotoCaption.textContent = passportPhoto.caption;
  ui.passportCountryCount.textContent = String(countries.length);
  ui.passportActiveCountry.textContent = state.activeCountry;
  ui.passportDiscoveryCount.textContent = String(getCountryDiscoveryCount(state.activeCountry));
  ui.passportNote.textContent = countries.length
    ? `${state.activeCountry} currently has ${getCountryDiscoveryCount(state.activeCountry)} curated discovery options in the app.`
    : "Your passport will fill out as more countries are unlocked.";

  if (!countries.length) {
    ui.passportMap.innerHTML = '<p class="passport-empty">Unlock a country to add it to your passport.</p>';
    ui.passportLibraryList.innerHTML = '<p class="passport-empty">No country library yet.</p>';
    return;
  }

  ui.passportMap.innerHTML = countries
    .map(
      (country) => `
        <button class="passport-country ${country === state.activeCountry ? "active" : ""}" data-country="${country}" type="button">
          ${country}
        </button>`,
    )
    .join("");

  renderPassportLibrary();
}

function renderAlternates(category) {
  const items = getCategoryItems(category);
  if (items.length <= 1) {
    ui.alternateStrip.innerHTML = "";
    return;
  }

  ui.alternateStrip.innerHTML = items
    .map(
      (item, index) => `
        <button class="alternate-chip ${index === (state.activeIndexByCategory[category] || 0) ? "active" : ""}" data-category="${category}" data-index="${index}" type="button">
          ${item.title}
        </button>`,
    )
    .join("");
}

function getCategoryItems(category) {
  const primary = COUNTRY_LIBRARY[state.activeCountry]?.[category];
  const extras = (COUNTRY_EXTRAS[state.activeCountry] || []).filter((item) => item.type === category);
  return [primary, ...extras];
}

function resetCategoryIndexes() {
  state.activeIndexByCategory = {
    taste: 0,
    listen: 0,
    read: 0,
    see: 0,
    create: 0,
  };
}

function resetRound() {
  state.answered = false;
  state.missedQuestion = false;
  state.roundScore = null;
  closePassport();
  ui.discoveryView.classList.remove("visible");
  ui.quizFlip.classList.remove("flipped");
  ui.quizView.classList.remove("hidden");
  ui.resultLine.textContent = "";
  pickQuestion();
  renderQuestion();
}

function openPassport() {
  renderPassport();
  ui.passportScreen.classList.remove("hidden");
  ui.passportScreen.setAttribute("aria-hidden", "false");
}

function closePassport() {
  ui.passportScreen.classList.add("hidden");
  ui.passportScreen.setAttribute("aria-hidden", "true");
}

function renderPassportLibrary() {
  const items = Object.entries(groupCountryLibrary(state.activeCountry));
  ui.passportLibraryList.innerHTML = items
    .map(
      ([category, values]) => `
        <div class="passport-library-item">
          <strong>${category.toUpperCase()}</strong>
          <span>${values.join(" · ")}</span>
        </div>`,
    )
    .join("");
}

function groupCountryLibrary(country) {
  const library = {};
  ["taste", "listen", "read", "see", "create"].forEach((category) => {
    library[category] = getCategoryItems(category).map((item) => item.title);
  });
  return library;
}

function getCountryDiscoveryCount(country) {
  return ["taste", "listen", "read", "see", "create"].reduce(
    (sum, category) => sum + getCategoryItems(category).length,
    0,
  );
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return { unlockedCountries: [] };
  try {
    return JSON.parse(raw);
  } catch {
    return { unlockedCountries: [] };
  }
}

function persist() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      unlockedCountries: [...state.unlockedCountries],
    }),
  );
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
