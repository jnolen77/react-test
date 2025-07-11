const wordTranslations: { [key: string]: string } = {
  // Articles
  der: "the (masculine)",
  die: "the (feminine/plural)",
  das: "the (neuter)",
  ein: "a/an (masculine/neuter)",
  eine: "a/an (feminine)",
  einen: "a/an (accusative masculine)",

  // Common verbs
  bin: "am",
  ist: "is",
  sind: "are",
  habe: "have",
  hat: "has",
  haben: "have",
  wohne: "live",
  wohnt: "lives",
  arbeite: "work",
  arbeitet: "works",
  gehe: "go",
  geht: "goes",
  esse: "eat",
  isst: "eats",
  trinke: "drink",
  trinkt: "drinks",
  mache: "do/make",
  macht: "does/makes",
  studiere: "study",
  studiert: "studies",
  kann: "can",
  können: "can",
  möchte: "would like",
  möchten: "would like",
  sehe: "see",
  sieht: "sees",
  koche: "cook",
  kocht: "cooks",
  schlafe: "sleep",
  schläft: "sleeps",
  stehe: "stand",
  steht: "stands",
  fahre: "drive",
  fährt: "drives",
  kaufe: "buy",
  kauft: "buys",
  bezahle: "pay",
  bezahlt: "pays",
  koste: "cost",
  kostet: "costs",
  dauert: "lasts/takes",
  nehme: "take",
  nimmt: "takes",
  komme: "come",
  kommt: "comes",
  heißt: "is called",
  heiße: "am called",

  // Pronouns
  ich: "I",
  du: "you (informal)",
  er: "he",
  sie: "she/they",
  es: "it",
  wir: "we",
  ihr: "you (plural)",
  mein: "my (masculine/neuter)",
  meine: "my (feminine/plural)",
  dein: "your",
  sein: "his",
  Ihr: "her",
  unser: "our",

  // Numbers
  eins: "one",
  zwei: "two",
  drei: "three",
  vier: "four",
  fünf: "five",
  sechs: "six",
  sieben: "seven",
  acht: "eight",
  neun: "nine",
  zehn: "ten",
  zwanzig: "twenty",
  dreißig: "thirty",
  vierzig: "forty",
  fünfzig: "fifty",

  // Family
  Familie: "family",
  Vater: "father",
  Mutter: "mother",
  Bruder: "brother",
  Schwester: "sister",
  Eltern: "parents",
  Kind: "child",
  Kinder: "children",

  // Common nouns
  Jahre: "years",
  Jahr: "year",
  alt: "old",
  Haus: "house",
  Wohnung: "apartment",
  Zimmer: "room",
  Küche: "kitchen",
  Bad: "bathroom",
  Schlafzimmer: "bedroom",
  Wohnzimmer: "living room",
  Bett: "bed",
  Tisch: "table",
  Stuhl: "chair",
  Sofa: "sofa",
  Fernseher: "television",
  Auto: "car",
  Bus: "bus",
  Zug: "train",
  Arbeit: "work",
  Büro: "office",
  Schule: "school",
  Universität: "university",
  Lehrer: "teacher",
  Arzt: "doctor",
  Beruf: "profession",
  Geld: "money",
  Euro: "euro",
  Zeit: "time",
  Tag: "day",
  Woche: "week",
  Monat: "month",
  Morgen: "morning",
  Mittag: "noon",
  Abend: "evening",
  Nacht: "night",
  heute: "today",
  morgen: "tomorrow",
  gestern: "yesterday",

  // Food & Drink
  Essen: "food",
  Brot: "bread",
  Butter: "butter",
  Käse: "cheese",
  Fleisch: "meat",
  Fisch: "fish",
  Gemüse: "vegetables",
  Obst: "fruit",
  Apfel: "apple",
  Banane: "banana",
  Orange: "orange",
  Wasser: "water",
  Kaffee: "coffee",
  Tee: "tea",
  Bier: "beer",
  Wein: "wine",
  Milch: "milk",
  Pizza: "pizza",
  Salat: "salad",
  Suppe: "soup",
  Restaurant: "restaurant",
  Café: "café",
  Supermarkt: "supermarket",

  // Places
  Stadt: "city",
  Land: "country",
  Deutschland: "Germany",
  Berlin: "Berlin",
  München: "Munich",
  Hamburg: "Hamburg",
  Park: "park",
  Kino: "cinema",
  Theater: "theater",
  Museum: "museum",
  Bahnhof: "train station",
  Flughafen: "airport",
  Hotel: "hotel",

  // Weather
  Wetter: "weather",
  Sonne: "sun",
  Regen: "rain",
  Schnee: "snow",
  Wind: "wind",
  warm: "warm",
  kalt: "cold",
  heiß: "hot",
  kühl: "cool",
  sonnig: "sunny",
  regnerisch: "rainy",

  // Common adjectives
  gut: "good",
  schlecht: "bad",
  groß: "big",
  klein: "small",
  neu: "new",
//   alt: "old",
  schön: "beautiful",
  hässlich: "ugly",
  schnell: "fast",
  langsam: "slow",
  teuer: "expensive",
  billig: "cheap",
  einfach: "easy",
  schwer: "difficult",
  interessant: "interesting",
  langweilig: "boring",

  // Common words
  und: "and",
  oder: "or",
  aber: "but",
  mit: "with",
  ohne: "without",
  für: "for",
  von: "from/of",
  zu: "to",
  in: "in",
  auf: "on",
  unter: "under",
  über: "over/about",
  vor: "before/in front of",
  nach: "after/to",
  bei: "at/with",
  um: "around/at (time)",
  sehr: "very",
  auch: "also",
  nicht: "not",
  nur: "only",
  schon: "already",
  noch: "still",
  immer: "always",
  jeden: "every",
  hallo: "hello",
  nie: "never",
  oft: "often",
  manchmal: "sometimes",
  hier: "here",
  dort: "there",
  wo: "where",
  wie: "how",
  was: "what",
  wer: "who",
  wann: "when",
  warum: "why",
  ja: "yes",
  nein: "no",
  bitte: "please",
  danke: "thank you",
  gern: "gladly",
  gerne: "gladly",
  Hallo: "hello",
  Tschüss: "bye",
  Entschuldigung: "excuse me",
  pro: "per",
  etwa: "about/approximately",
  zusammen: "together",
  allein: "alone",
  Freund: "friend",
  Freunde: "friends",
  Leute: "people",
  Mann: "man",
  Frau: "woman",
  Herr: "Mr.",
  Name: "name",
  Telefonnummer: "phone number",
  Adresse: "address",
  Straße: "street",
  Nummer: "number",
  Uhr: "o'clock",
  Stunde: "hour or lesson",
  Minute: "minute",
  Sekunde: "second",
  Hund: "dog",
  Katze: "cat",
  Tier: "animal",
  Hobby: "hobby",
  Sport: "sport",
  Musik: "music",
  Buch: "book",
  Film: "movie",
  Foto: "photo",
  Bild: "picture",
  Farbe: "color",
  rot: "red",
  blau: "blue",
  grün: "green",
  gelb: "yellow",
  schwarz: "black",
  weiß: "white",
  Miete: "rent",
  Kühlschrank: "refrigerator",
  Schrank: "closet",
  Schreibtisch: "desk",
  Fenster: "window",
  Tür: "door",
  Wand: "wall",
  Boden: "floor",
  Decke: "ceiling",
  Licht: "light",
  Lampe: "lamp",
  Computer: "computer",
  Handy: "mobile phone",
  Internet: "internet",
  "E-Mail": "email",
  Brief: "letter",
  Post: "mail",
  Paket: "package",
  Geschenk: "gift",
  Geburtstag: "birthday",
  Party: "party",
  Fest: "festival",
  Urlaub: "vacation",
  Reise: "trip",
  Flugzeug: "airplane",
  Schiff: "ship",
  Fahrrad: "bicycle",
  Motorrad: "motorcycle",
  Straßenbahn: "tram",
  "U-Bahn": "subway",
  Taxi: "taxi",
  Ticket: "ticket",
  Karte: "card/map",
  Kreditkarte: "credit card",
  Bargeld: "cash",
  Rechnung: "bill",
  Preis: "price",
  Angebot: "offer",
  Verkauf: "sale",
  Kunde: "customer",
  Verkäufer: "salesperson",
  Geschäft: "store",
  Laden: "shop",
  Markt: "market",

  

  

  // Common words
 
  Gemütlichkeit: "comfort or coziness",
  Gesundheit: "health",
  Zentrum: "center",
  Stadtmitte: "city center",
  Nähe: "vicinity",
  Ecke: "corner",
  Platz: "square/place",
  Weg: "way",
  Richtung: "direction",
  links: "left",
  rechts: "right",
  geradeaus: "straight ahead",
  zurück: "back",
  weiter: "further",
  nah: "near",
  weit: "far",
  Entfernung: "distance",
  Kilometer: "kilometer",
  Meter: "meter",
  Zentimeter: "centimeter",
  Gramm: "gram",
  Kilogramm: "kilogram",
  Liter: "liter",
  Stück: "piece",
  Packung: "package",
  Flasche: "bottle",
  Dose: "can",
  Tüte: "bag",
  Korb: "basket",
  Einkaufswagen: "shopping cart",
  Kasse: "checkout",
  Quittung: "receipt",
  Wechselgeld: "change",
  Rabatt: "discount",
  Sonderangebot: "special offer",
  Öffnungszeiten: "opening hours",
  geschlossen: "closed",
  geöffnet: "open",
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
  Wochenende: "weekend",
  Feiertag: "holiday",
  Termin: "appointment",
  Verabredung: "date/meeting",
  Treffen: "meeting",
  Besuch: "visit",
  Gast: "guest",
  Gastgeber: "host",
  Einladung: "invitation",
  Feier: "celebration",
  Hochzeit: "wedding",
  Taufe: "baptism",
  Beerdigung: "funeral",
  Konzert: "concert",
  Ausstellung: "exhibition",
  Veranstaltung: "event",
  Programm: "program",
  Plan: "plan",
  Idee: "idea",
  Vorschlag: "suggestion",
  Meinung: "opinion",
  Gedanke: "thought",
  Gefühl: "feeling",
  Emotion: "emotion",
  Liebe: "love",
  Hass: "hate",
  Angst: "fear",
  Freude: "joy",
  Trauer: "sadness",
  Wut: "anger",
  Überraschung: "surprise",
  Hoffnung: "hope",
  Traum: "dream",
  Wunsch: "wish",
  Ziel: "goal",
  Erfolg: "success",
  Misserfolg: "failure",
  Glück: "luck/happiness",
  Pech: "bad luck",
  Zufall: "coincidence",
  Schicksal: "fate",
  Leben: "life",
  Tod: "death",
  Geburt: "birth",
  Kindheit: "childhood",
  Jugend: "youth",
  Erwachsene: "adults",
  Alter: "age",
  Generation: "generation",
  Vergangenheit: "past",
  Gegenwart: "present",
  Zukunft: "future",
  Geschichte: "history/story",
  Ereignis: "event",
  Erfahrung: "experience",
  Erinnerung: "memory",
  Vergessen: "forgetting",
  Lernen: "learning",
  Lehren: "teaching",
  Wissen: "knowledge",
  Bildung: "education",
  Schüler: "student",
  Student: "university student",
  Professor: "professor",
  Kurs: "course",
  Unterricht: "lesson",
  Prüfung: "exam",
  Test: "test",
  Hausaufgabe: "homework",
  Übung: "exercise",
  Aufgabe: "task",
  Lösung: "solution",
  Antwort: "answer",
  Frage: "question",
  Problem: "problem",
  Schwierigkeit: "difficulty",
  Hilfe: "help",
  Unterstützung: "support",
  Rat: "advice",
  Tipp: "tip",
  Information: "information",
  Nachricht: "message/news",
  Neuigkeit: "news",
  Zeitung: "newspaper",
  Zeitschrift: "magazine",
  Artikel: "article",
  Bericht: "report",
  Interview: "interview",
  Gespräch: "conversation",
  Diskussion: "discussion",
  Streit: "argument",
  Konflikt: "conflict",
  Frieden: "peace",
  Krieg: "war",
  Politik: "politics",
  Politiker: "politician",
  Regierung: "government",
  Staat: "state",
  Nation: "nation",
  Volk: "people",
  Gesellschaft: "society",
  Kultur: "culture",
  Tradition: "tradition",
  Brauch: "custom",
  Gewohnheit: "habit",
  Regel: "rule",
  Gesetz: "law",
  Recht: "right/law",
  Pflicht: "duty",
  Verantwortung: "responsibility",
  Schuld: "guilt/debt",
  Unschuld: "innocence",
  Wahrheit: "truth",
  Lüge: "lie",
  Ehrlichkeit: "honesty",
  Vertrauen: "trust",
  Respekt: "respect",
  Höflichkeit: "politeness",
  Freundlichkeit: "friendliness",
  Nettigkeit: "niceness",
  Güte: "kindness",
  Böse: "evil",
  Gut: "good",
  Richtig: "correct",
  Falsch: "wrong",
  Wahr: "true",
  Unwahr: "untrue",
  Möglich: "possible",
  Unmöglich: "impossible",
  Wahrscheinlich: "probably",
  Sicher: "sure/safe",
  Unsicher: "unsure/unsafe",
  Gefahr: "danger",
  Risiko: "risk",
  Chance: "chance",
  Gelegenheit: "opportunity",
  Moment: "moment",
  Augenblick: "moment",
  Jahrhundert: "century",
  Jahrtausend: "millennium",
  Ewigkeit: "eternity",
  Dauer: "duration",
  Länge: "length",
  Breite: "width",
  Höhe: "height",
  Tiefe: "depth",
  Größe: "size",
  Gewicht: "weight",
  Masse: "mass",
  Volumen: "volume",
  Temperatur: "temperature",
  Grad: "degree",
  Celsius: "Celsius",
  Fahrenheit: "Fahrenheit",
  Kelvin: "Kelvin",
  Hitze: "heat",
  Kälte: "cold",
  Eis: "ice",
  Feuer: "fire",
  Luft: "air",
  Erde: "earth",
  Himmel: "sky",
  Wolke: "cloud",
  Stern: "star",
  Mond: "moon",
  Planet: "planet",
  Universum: "universe",
  Welt: "world",
  Natur: "nature",
  Umwelt: "environment",
  Landschaft: "landscape",
  Berg: "mountain",
  Tal: "valley",
  Fluss: "river",
  See: "lake",
  Meer: "sea",
  Ozean: "ocean",
  Strand: "beach",
  Insel: "island",
  Kontinent: "continent",
  Wald: "forest",
  Baum: "tree",
  Blume: "flower",
  Gras: "grass",
  Blatt: "leaf",
  Wurzel: "root",
  Stamm: "trunk",
  Ast: "branch",
  Frucht: "fruit",
  Samen: "seed",
  Pflanze: "plant",
  Garten: "garden",
  Feld: "field",
  Wiese: "meadow",
  Bauernhof: "farm",
  Bauer: "farmer",
  Landwirt: "farmer",
  Ernte: "harvest",
  Getreide: "grain",
  Weizen: "wheat",
  Reis: "rice",
  Mais: "corn",
  Kartoffel: "potato",
  Tomate: "tomato",
  Gurke: "cucumber",
  Karotte: "carrot",
  Zwiebel: "onion",
  Knoblauch: "garlic",
  Pfeffer: "pepper",
  Salz: "salt",
  Zucker: "sugar",
  Honig: "honey",
  Öl: "oil",
  Essig: "vinegar",
  Gewürz: "spice",
  Kräuter: "herbs",
  Rezept: "recipe",
  Kochen: "cooking",
  Backen: "baking",
  Braten: "roasting/frying",
  Grillen: "grilling",
  Kochtopf: "pot",
  Pfanne: "pan",
  Ofen: "oven",
  Herd: "stove",
  Mikrowelle: "microwave",
  Gefrierschrank: "freezer",
  Spülmaschine: "dishwasher",
  Waschmaschine: "washing machine",
  Trockner: "dryer",
  Staubsauger: "vacuum cleaner",
  Bügeleisen: "iron",
  Putzen: "cleaning",
  Waschen: "washing",
  Trocknen: "drying",
  Bügeln: "ironing",
  Aufräumen: "tidying up",
  Ordnung: "order",
  Unordnung: "disorder",
  Sauber: "clean",
  Schmutzig: "dirty",
  Staub: "dust",
  Schmutz: "dirt",
  Müll: "garbage",
  Abfall: "waste",
  Recycling: "recycling",
  Umweltschutz: "environmental protection",
  Verschmutzung: "pollution",
  Energie: "energy",
  Strom: "electricity",
  Gas: "gas",
  Benzin: "gasoline",
  Diesel: "diesel",
  Kohle: "coal",
  Atom: "atom",
  Solar: "solar",
  Kraftwerk: "power plant",
  Fabrik: "factory",
  Industrie: "industry",
  Produktion: "production",
  Herstellung: "manufacturing",
  Produkt: "product",
  Ware: "goods",
  Gegenstand: "object",
  Ding: "thing",
  Sache: "thing/matter",
  Zeug: "stuff",
  Material: "material",
  Stoff: "fabric/substance",
  Holz: "wood",
  Metall: "metal",
  Eisen: "iron",
  Stahl: "steel",
  Gold: "gold",
  Silber: "silver",
  Kupfer: "copper",
  Aluminium: "aluminum",
  Plastik: "plastic",
  Glas: "glass",
  Keramik: "ceramic",
  Stein: "stone",
  Beton: "concrete",
  Ziegel: "brick",
  Sand: "sand",
  Lehm: "clay",
  Ton: "clay/sound",
  Lack: "varnish",
  Kleber: "glue",
  Leim: "glue",
  Nagel: "nail",
  Schraube: "screw",
  Hammer: "hammer",
  Säge: "saw",
  Bohrer: "drill",
  Werkzeug: "tool",
  Maschine: "machine",
  Motor: "engine",
  Rad: "wheel",
  Reifen: "tire",
  Bremse: "brake",
  Lenkrad: "steering wheel",
  Sitz: "seat",
  Gurt: "belt",
  Sicherheit: "safety",
  Unfall: "accident",
  Verletzung: "injury",
  Schmerz: "pain",
  Weh: "pain",
  Krankheit: "illness",
  Medizin: "medicine",
  Arznei: "medication",
  Tablette: "tablet",
  Pille: "pill",
  Spritze: "injection",
  Verband: "bandage",
  Pflaster: "band-aid",
  Krankenhaus: "hospital",
  Klinik: "clinic",
  Praxis: "practice",
  Apotheke: "pharmacy",
  Zahnarzt: "dentist",
  Tierarzt: "veterinarian",
  Krankenschwester: "nurse",
  Patient: "patient",
  Behandlung: "treatment",
  Operation: "operation",
  Untersuchung: "examination",
  Diagnose: "diagnosis",
  Therapie: "therapy",
  Heilung: "healing",
  Genesung: "recovery",
  Fitness: "fitness",
  Training: "training",
  Gymnastik: "gymnastics",
  Yoga: "yoga",
  Laufen: "running",
  Joggen: "jogging",
  Schwimmen: "swimming",
  Radfahren: "cycling",
  Wandern: "hiking",
  Klettern: "climbing",
  Skifahren: "skiing",
  Snowboard: "snowboard",
  Fußball: "football/soccer",
  Basketball: "basketball",
  Tennis: "tennis",
  Golf: "golf",
  Volleyball: "volleyball",
  Handball: "handball",
  Baseball: "baseball",
  Hockey: "hockey",
  Boxen: "boxing",
  Kampfsport: "martial arts",
  Tanz: "dance",
  Tanzen: "dancing",
  Ballett: "ballet",
  Lied: "song",
  Melodie: "melody",
  Rhythmus: "rhythm",
  Takt: "beat",
  Note: "note",
  Klang: "sound",
  Geräusch: "noise",
  Lärm: "noise",
  Stille: "silence",
  Ruhe: "quiet",
  Laut: "loud",
  Leise: "quiet",
  Hören: "hearing",
  Zuhören: "listening",
  Sprechen: "speaking",
  Reden: "talking",
  Sagen: "saying",
  Erzählen: "telling",
  Berichten: "reporting",
  Erklären: "explaining",
  Beschreiben: "describing",
  Fragen: "asking",
  Antworten: "answering",
  Diskutieren: "discussing",
  Streiten: "arguing",
  Schreien: "shouting",
  Flüstern: "whispering",
  Lachen: "laughing",
  Weinen: "crying",
  Seufzen: "sighing",
  Husten: "coughing",
  Niesen: "sneezing",
  Atmen: "breathing",
  Sauerstoff: "oxygen",
  Kohlendioxid: "carbon dioxide",
  Atem: "breath",
  Lunge: "lung",
  Herz: "heart",
  Blut: "blood",
  Gehirn: "brain",
  Kopf: "head",
  Gesicht: "face",
  Auge: "eye",
  Nase: "nose",
  Mund: "mouth",
  Zahn: "tooth",
  Zunge: "tongue",
  Lippe: "lip",
  Ohr: "ear",
  Hals: "neck",
  Schulter: "shoulder",
  Arm: "arm",
  Hand: "hand",
  Finger: "finger",
  Daumen: "thumb",
  Brust: "chest",
  Rücken: "back",
  Bauch: "belly",
  Bein: "leg",
  Fuß: "foot",
  Zehe: "toe",
  Knie: "knee",
  Haut: "skin",
  Haar: "hair",
  Bart: "beard",
  Schnurrbart: "mustache",
  Frisur: "hairstyle",
  Friseur: "hairdresser",
  Kosmetik: "cosmetics",
  Parfüm: "perfume",
  Seife: "soap",
  Shampoo: "shampoo",
  Zahnbürste: "toothbrush",
  Zahnpasta: "toothpaste",
  Handtuch: "towel",
  Spiegel: "mirror",
  Kamm: "comb",
  Bürste: "brush",
  Rasieren: "shaving",
  Rasierer: "razor",
  Schaum: "foam",
  Creme: "cream",
  Lotion: "lotion",
  Dusche: "shower",
  Badewanne: "bathtub",
  Toilette: "toilet",
  Klo: "toilet (informal)",
  WC: "toilet",
  Papier: "paper",
  Toilettenpapier: "toilet paper",
  Handschuhe: "gloves",
  Socken: "socks",
  Strümpfe: "stockings",
  Unterwäsche: "underwear",
  BH: "bra",
  Slip: "underwear",
  Hemd: "shirt",
  "T-Shirt": "t-shirt",
  Pullover: "sweater",
  Jacke: "jacket",
  Mantel: "coat",
  Hose: "pants",
  Jeans: "jeans",
  Rock: "skirt",
  Kleid: "dress",
  Anzug: "suit",
  Kostüm: "costume/suit",
  Krawatte: "tie",
  Schal: "scarf",
  Mütze: "cap",
  Hut: "hat",
  Schuhe: "shoes",
  Stiefel: "boots",
  Sandalen: "sandals",
  Turnschuhe: "sneakers",
  Sportschuhe: "sports shoes",
  Kleidung: "clothing",
  Mode: "fashion",
  Stil: "style",
  Geschmack: "taste",
  Muster: "pattern",
  Passform: "fit",
  Anprobe: "fitting",
  Umkleidekabine: "changing room",
  Service: "service",
  Bedienung: "service",
  Kellner: "waiter",
  Kellnerin: "waitress",
  Koch: "cook",
  Küchenchef: "chef",
  Speisekarte: "menu",
  Trinkgeld: "tip",
  Reservierung: "reservation",
  Bank: "bench",
  Sessel: "armchair",
  Matratze: "mattress",
  Kissen: "pillow",
  Bettwäsche: "bed linen",
  Laken: "sheet",
  Kopfkissen: "pillow",
  Bettdecke: "comforter",
  Schlafen: "sleeping",
  Träumen: "dreaming",
  Aufwachen: "waking up",
  Aufstehen: "getting up",
  Anziehen: "getting dressed",
  Ausziehen: "getting undressed",
  Duschen: "showering",
  Baden: "bathing",
  Zähneputzen: "brushing teeth",
  Kämmen: "combing",
  Schminken: "putting on makeup",
  Frühstücken: "having breakfast",
  Mittagessen: "having lunch",
  Abendessen: "having dinner",
  Snack: "snack",
  Zwischenmahlzeit: "snack",
  Hunger: "hunger",
  Durst: "thirst",
  Satt: "full",
  Lecker: "delicious",
  Süß: "sweet",
  Sauer: "sour",
  Salzig: "salty",
  Bitter: "bitter",
  Scharf: "spicy",
  Mild: "mild",
  Heiß: "hot",
  Kalt: "cold",
  Warm: "warm",
  Kühl: "cool",
  Frisch: "fresh",
  Alt: "old",
  Neu: "new",
  Jung: "young",
  Erwachsen: "adult",
  Baby: "baby",
  Junge: "boy",
  Mädchen: "girl",
  Teenager: "teenager",
  Jugendlicher: "teenager",
  Erwachsener: "adult",
  Senior: "senior",
  Rentner: "retiree",
  Opa: "grandpa",
  Oma: "grandma",
  Großvater: "grandfather",
  Großmutter: "grandmother",
  Großeltern: "grandparents",
  Enkel: "grandson",
  Enkelin: "granddaughter",
  Enkelkind: "grandchild",
  Onkel: "uncle",
  Tante: "aunt",
  Cousin: "cousin (male)",
  Cousine: "cousin (female)",
  Neffe: "nephew",
  Nichte: "niece",
  Schwiegervater: "father-in-law",
  Schwiegermutter: "mother-in-law",
  Schwiegersohn: "son-in-law",
  Schwiegertochter: "daughter-in-law",
  Ehemann: "husband",
  Ehefrau: "wife",
  Partner: "partner",
  Partnerin: "partner (female)",
  Freundin: "girlfriend/friend",
  Verlobter: "fiancé",
  Verlobte: "fiancée",
  Bräutigam: "groom",
  Braut: "bride",
  Ehe: "marriage",
  Heirat: "marriage",
  Heiraten: "to marry",
  Scheidung: "divorce",
  Single: "single",
  Ledig: "single",
  Verheiratet: "married",
  Geschieden: "divorced",
  Verwitwet: "widowed",
  Beziehung: "relationship",
  Lieben: "to love",
  Mögen: "to like",
  Hassen: "to hate",
  Eifersucht: "jealousy",
  Eifersüchtig: "jealous",
  Misstrauen: "distrust",
  Lügen: "to lie",
  Korrekt: "correct",
  Inkorrekt: "incorrect",
  Fehler: "mistake",
  Irrtum: "error",
  Versehen: "oversight",
  Absicht: "intention",
  Absichtlich: "intentional",
  Unabsichtlich: "unintentional",
  Zufällig: "by chance",
  Glücklich: "happy",
  Unglücklich: "unhappy",
  Traurig: "sad",
  Fröhlich: "cheerful",
  Lustig: "funny",
  Witzig: "funny",
  Ernst: "serious",
  Spaß: "fun",
  Humor: "humor",
  Lächeln: "to smile",
  Träne: "tear",
  Stimmung: "mood",
  Laune: "mood",
  Charakter: "character",
  Persönlichkeit: "personality",
  Eigenschaft: "characteristic",
  Verhalten: "behavior",
  Benehmen: "behavior",
  Höflich: "polite",
  Unhöflich: "impolite",
  Freundlich: "friendly",
  Unfreundlich: "unfriendly",
  Nett: "nice",
  Gemein: "mean",
  Schlecht: "bad",
  Besser: "better",
  Schlechter: "worse",
  Best: "best",
  Schlechteste: "worst",
  Mehr: "more",
  Weniger: "less",
  Viel: "much/many",
  Wenig: "little/few",
  Alle: "all",
  Einige: "some",
  Manche: "some",
  Andere: "others",
  Jeder: "everyone",
  Niemand: "nobody",
  Jemand: "somebody",
  Etwas: "something",
  Nichts: "nothing",
  Alles: "everything",
  Überall: "everywhere",
  Nirgendwo: "nowhere",
  Irgendwo: "somewhere",
  Immer: "always",
  Nie: "never",
  Manchmal: "sometimes",
  Oft: "often",
  Selten: "rarely",
  Häufig: "frequently",
  Regelmäßig: "regularly",
  Unregelmäßig: "irregularly",
  Täglich: "daily",
  Wöchentlich: "weekly",
  Monatlich: "monthly",
  Jährlich: "yearly",
  Stündlich: "hourly",
  Minütlich: "every minute",
  Sekündlich: "every second",
  Sofort: "immediately",
  Gleich: "right away",
  Bald: "soon",
  Später: "later",
  Früher: "earlier",
  Vorher: "before",
  Nachher: "afterwards",
  Dann: "then",
  Danach: "after that",
  Davor: "before that",
  Während: "during",
  Gleichzeitig: "simultaneously",
  Zuerst: "first",
  Zuletzt: "last",
  Endlich: "finally",
  Schließlich: "finally",
  "Am Ende": "in the end",
  Anfang: "beginning",
  Ende: "end",
  Mitte: "middle",
  Rand: "edge",
  Seite: "side/page",
  Oben: "above",
  Unten: "below",
  Links: "left",
  Rechts: "right",
  Vorne: "front",
  Hinten: "back",
  Innen: "inside",
  Außen: "outside",
  Drinnen: "inside",
  Draußen: "outside",
  Hier: "here",
  Da: "there",
  Dort: "there",
  Nirgends: "nowhere",
  Hin: "to (direction)",
  Her: "to here",
  Zurück: "back",
  Vorwärts: "forward",
  Rückwärts: "backward",
  Aufwärts: "upward",
  Abwärts: "downward",
  Seitwärts: "sideways",
  Geradeaus: "straight ahead",
  Rundherum: "around",
  Durch: "through",
  Über: "over",
  Unter: "under",
  Neben: "next to",
  Zwischen: "between",
  Hinter: "behind",
  Vor: "in front of",
  An: "at/on",
  Auf: "on",
  In: "in",
  Aus: "out of",
  Von: "from",
  Zu: "to",
  Nach: "to/after",
  Wegen: "because of",
  Trotz: "despite",
  Statt: "instead of",
  Anstatt: "instead of",
  Außer: "except",
  Bis: "until",
  Seit: "since",
  Ab: "from",
  Um: "around/at",
  Etwa: "about",
  Circa: "approximately",
  Ungefähr: "approximately",
  Genau: "exactly",
  Präzise: "precise",
  Exakt: "exact",
  Perfekt: "perfect",
  Vollkommen: "perfect",
  Komplett: "complete",
  Ganz: "whole",
  Halb: "half",
  Teil: "part",
  Portion: "portion",
  Anteil: "share",
  Prozent: "percent",
  Hälfte: "half",
  Drittel: "third",
  Viertel: "quarter",
  Fünftel: "fifth",
  Zehntel: "tenth",
  Hundert: "hundred",
  Tausend: "thousand",
  Million: "million",
  Milliarde: "billion",
  Zahl: "number",
  Ziffer: "digit",
  Rechnen: "calculating",
  Mathematik: "mathematics",
  Plus: "plus",
  Minus: "minus",
  Mal: "times",
  Geteilt: "divided",
  Ergebnis: "result",
  Summe: "sum",
  Differenz: "difference",
  Quotient: "quotient",
  Bruch: "fraction",
  Dezimal: "decimal",
  Komma: "comma",
  Punkt: "point",
  Linie: "line",
  Kreis: "circle",
  Quadrat: "square",
  Rechteck: "rectangle",
  Dreieck: "triangle",
  Form: "shape",
  Figur: "figure",
  Design: "design",
  Kunst: "art",
  Künstler: "artist",
  Maler: "painter",
  Gemälde: "painting",
  Zeichnung: "drawing",
  Skizze: "sketch",
  Fotografie: "photography",
  Kamera: "camera",
  Video: "video",
  Fernsehen: "television",
  TV: "TV",
  Radio: "radio",
  Laptop: "laptop",
  Tablet: "tablet",
  Smartphone: "smartphone",
  Telefon: "telephone",
  Website: "website",
  SMS: "text message",
  Chat: "chat",
  "Social Media": "social media",
  Facebook: "Facebook",
  Instagram: "Instagram",
  Twitter: "Twitter",
  YouTube: "YouTube",
  Google: "Google",
  App: "app",
  Software: "software",
  Spiel: "game",
  Videospiel: "video game",
  Mannschaft: "team",
  Spieler: "player",
  Trainer: "coach",
  Schiedsrichter: "referee",
  Stadion: "stadium",
  Ball: "ball",
  Tor: "goal",
  Sieg: "victory",
  Niederlage: "defeat",
  Unentschieden: "tie",
  Gewinner: "winner",
  Verlierer: "loser",
  Champion: "champion",
  Meister: "master/champion",
  Meisterschaft: "championship",
  Turnier: "tournament",
  Wettkampf: "competition",
  Konkurrenz: "competition",
  Rival: "rival",
  Gegner: "opponent",
  Feind: "enemy",
  Kumpel: "buddy",
  Kollege: "colleague",
  Nachbar: "neighbor",
  Bekannter: "acquaintance",
  Fremder: "stranger",
  Besucher: "visitor",
  Tourist: "tourist",
  Reisender: "traveler",
  Passagier: "passenger",
  Fahrer: "driver",
  Pilot: "pilot",
  Kapitän: "captain",
  Matrose: "sailor",
  Soldat: "soldier",
  Polizist: "police officer",
  Feuerwehrmann: "firefighter",
  Rettungssanitäter: "paramedic",
  Richter: "judge",
  Anwalt: "lawyer",
  Notar: "notary",
  Beamter: "civil servant",
  Bürgermeister: "mayor",
  Minister: "minister",
  Präsident: "president",
  König: "king",
  Königin: "queen",
  Prinz: "prince",
  Prinzessin: "princess",
  Adel: "nobility",
  Bürger: "citizen",
  Einwohner: "resident",
  Bevölkerung: "population",
  Gemeinschaft: "community",
  Gruppe: "group",
  Team: "team",
  Verein: "club",
  Organisation: "organization",
  Firma: "company",
  Unternehmen: "enterprise",
  Shop: "shop",
  Kaufhaus: "department store",
  Einkaufszentrum: "shopping center",
  Mall: "mall",
  Boutique: "boutique",
  Bäckerei: "bakery",
  Metzgerei: "butcher shop",
  Drogerie: "drugstore",
  Kosmetikstudio: "beauty salon",
  Fitnessstudio: "gym",
  Schwimmbad: "swimming pool",
  Sauna: "sauna",
  Spa: "spa",
  Wellness: "wellness",
  Massage: "massage",
  Entspannung: "relaxation",
  Stress: "stress",
  Oper: "opera",
  Schauspieler: "actor",
  Schauspielerin: "actress",
  Regisseur: "director",
  Produzent: "producer",
  Drehbuch: "screenplay",
  Rolle: "role",
  Held: "hero",
  Heldin: "heroine",
  Bösewicht: "villain",
  Märchen: "fairy tale",
  Roman: "novel",
  Autor: "author",
  Schriftsteller: "writer",
  Dichter: "poet",
  Gedicht: "poem",
  Vers: "verse",
  Reim: "rhyme",
  Prosa: "prose",
  Literatur: "literature",
  Bibliothek: "library",
  Buchhandlung: "bookstore",
  Verlag: "publisher",
  Journalist: "journalist",
  Reporter: "reporter",
  Redakteur: "editor",
  Nachrichten: "news",
  Kindergarten: "kindergarten",
  Grundschule: "elementary school",
  Gymnasium: "high school",
  Hochschule: "college",
  Fachhochschule: "university of applied sciences",
  Studium: "studies",
  Dozent: "lecturer",
  Direktor: "director",
  Rektor: "rector",
  Klasse: "class",
  Fach: "subject",
  Pause: "break",
  Ferien: "holidays",
  Semester: "semester",
  Trimester: "trimester",
  Schuljahr: "school year",
  Abschluss: "graduation",
  Diplom: "diploma",
  Zeugnis: "certificate",
  Klausur: "written exam",
  Projekt: "project",
  Referat: "presentation",
  Vortrag: "lecture",
  Präsentation: "presentation",
  Forschung: "research",
  Wissenschaft: "science",
  Experiment: "experiment",
  Labor: "laboratory",
  Theorie: "theory",
  Methode: "method",
  Technik: "technique",
  Technologie: "technology",
  Innovation: "innovation",
  Erfindung: "invention",
  Entdeckung: "discovery",
  Fortschritt: "progress",
  Entwicklung: "development",
  Verbesserung: "improvement",
  Veränderung: "change",
  Reform: "reform",
  Revolution: "revolution",
  Evolution: "evolution",
  Wachstum: "growth",
  Expansion: "expansion",
  Reduktion: "reduction",
  Verringerung: "decrease",
  Erhöhung: "increase",
  Steigerung: "increase",
  Vergrößerung: "enlargement",
  Verkleinerung: "reduction",
  Verstärkung: "strengthening",
  Schwächung: "weakening",
  Verschlechterung: "deterioration",
  Gewinn: "profit",
  Verlust: "loss",
  Vorteil: "advantage",
  Nachteil: "disadvantage",
  Nutzen: "benefit",
  Schaden: "damage",
  Möglichkeit: "possibility",
  Wahrscheinlichkeit: "probability",
  Unsicherheit: "uncertainty",
  Bedrohung: "threat",
  Schutz: "protection",
  Verteidigung: "defense",
  Angriff: "attack",
  Kampf: "fight",
  Zweifel: "doubt",
  Gewissheit: "certainty",
  Sorge: "worry",
  Zufriedenheit: "satisfaction",
  Unzufriedenheit: "dissatisfaction",
  Enttäuschung: "disappointment",
  Schock: "shock",
  Erstaunen: "amazement",
  Bewunderung: "admiration",
  Achtung: "respect",
  Verachtung: "contempt",
  Zuneigung: "affection",
  Sympathie: "sympathy",
  Antipathie: "antipathy",
  Interesse: "interest",
  Desinteresse: "disinterest",
  Neugier: "curiosity",
  Langeweile: "boredom",
  Aufregung: "excitement",
  Anspannung: "tension",
  Druck: "pressure",
  Belastung: "burden",
  Entlastung: "relief",
  Beistand: "assistance",
  Empfehlung: "recommendation",
  Warnung: "warning",
  Mahnung: "reminder",
  Gedächtnis: "memory",
  Erinnern: "remembering",
  Denken: "thinking",
  Einfall: "idea",
  Inspiration: "inspiration",
  Kreativität: "creativity",
  Fantasie: "fantasy",
  Vorstellung: "imagination",
  Albtraum: "nightmare",
  Realität: "reality",
  Wirklichkeit: "reality",
  Täuschung: "deception",
  Betrug: "fraud",
  Aufrichtigkeit: "sincerity",
  Offenheit: "openness",
  Geheimnis: "secret",
  Mysterium: "mystery",
  Rätsel: "puzzle",
  Schlüssel: "key",
  Eingang: "entrance",
  Ausgang: "exit",
  Gasse: "alley",
  als: "as",
  wenn: "if/when",
  dann: "then",
  jetzt: "now",
  früh: "early",
  spät: "late",
  richtig: "correct",
  falsch: "wrong",
  wichtig: "important",
  möglich: "possible",
  unmöglich: "impossible",
  schwierig: "difficult",
  leicht: "easy/light",
  stark: "strong",
  schwach: "weak",
  ruhig: "quiet/calm",
  laut: "loud",
  hell: "bright",
  dunkel: "dark",
  sauber: "clean",
  schmutzig: "dirty",
  ordentlich: "tidy",
  unordentlich: "messy",
  pünktlich: "punctual",
  verspätet: "late",
  früher: "earlier",
  später: "later",
  zuerst: "first",
  danach: "afterwards",
  schließlich: "finally",
  plötzlich: "suddenly",
  normalerweise: "usually",
  meistens: "mostly",
  selten: "rarely",
  niemals: "never",
  überall: "everywhere",
  nirgendwo: "nowhere",
  irgendwo: "somewhere",
  draußen: "outside",
  drinnen: "inside",
  oben: "above/upstairs",
  unten: "below/downstairs",
  vorwärts: "forward",
  rückwärts: "backward",
  neben: "next to",
  zwischen: "between",
  hinter: "behind",
  durch: "through",
  gegen: "against",
  an: "at/on",
  seit: "since",
  bis: "until",
  während: "during",
  wegen: "because of",
  trotz: "despite",
  statt: "instead of",
  außer: "except",
  innerhalb: "within",
  außerhalb: "outside of",
  oberhalb: "above",
  unterhalb: "below",
  diesmal: "this time",
  nächstes: "next",
  letztes: "last",
  vorige: "previous",
  kommende: "coming",
  vergangene: "past",
  zukünftige: "future",
  aktuelle: "current",
  moderne: "modern",
  alte: "old",
  neue: "new",
  junge: "young",
  erwachsene: "adult",
  kleine: "small",
  große: "big",
  mittlere: "medium",
  beste: "best",
  schlechteste: "worst",
  erste: "first",
  zweite: "second",
  dritte: "third",
  letzte: "last",
  einzige: "only",
  ganze: "whole",
  halbe: "half",
  doppelte: "double",
  mehrere: "several",
  wenige: "few",
  viele: "many",
  alle: "all",
  beide: "both",
  andere: "other",
  verschiedene: "different",
  gleiche: "same",
  ähnliche: "similar",
  unterschiedliche: "different",
  besondere: "special",
  normale: "normal",
  gewöhnliche: "ordinary",
  außergewöhnliche: "extraordinary",
  interessante: "interesting",
  langweilige: "boring",
  spannende: "exciting",
  ruhige: "quiet",
  laute: "loud",
  stille: "silent",
  lebendige: "lively",
  tote: "dead",
  lebende: "living",
  gesunde: "healthy",
  kranke: "sick",
  müde: "tired",
  wache: "awake",
  schlafende: "sleeping",
  arbeitende: "working",
  spielende: "playing",
  lernende: "learning",
  lehrende: "teaching",
  helfende: "helping",
  suchende: "searching",
  findende: "finding",
  verlierenden: "losing",
  gewinnende: "winning",
  kaufende: "buying",
  verkaufende: "selling",
  gebende: "giving",
  nehmende: "taking",
  bringende: "bringing",
  holende: "fetching",
  gehende: "going",
  fahrende: "driving",
  laufende: "running",
  stehende: "standing",
  sitzende: "sitting",
  liegende: "lying",
  wartende: "waiting",
  hoffende: "hoping",
  denkende: "thinking",
  fühlende: "feeling",
  liebende: "loving",
  hassende: "hating",
  fürchtende: "fearing",
  träumende: "dreaming",
  wünschende: "wishing",
  wollende: "wanting",
  sollende: "should",
  müssende: "must",
  könnende: "can",
  dürfende: "may",
};

export default wordTranslations;