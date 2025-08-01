const INITIAL_VEHICLES_DATA = [
  {
    id: "1",
    vehicle: {
      imageLink:
        "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13488/2021-Toyota-Corolla-front_13488_032_1809x771_1F7_cropped.png",
      make: "Toyota",
      model: "Corolla",
      year: 2021,
      color: "Silver",
      registrationNumber: "CA123456",
      mileage: 45000,
      owner: {
        fullName: "Ethan Walton",
        idNumber: "0307220000001",
        address: {
          street: "123 Main Road",
          city: "Cape Town",
          province: "Western Cape",
          postalCode: "8000",
          country: "South Africa",
        },
      },
    },
    insurancePlan: {
      policyNumber: "INS-1",
      planType: "Bronze",
      premium: 850.0,
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      excess: 3000.0,
      insuredValue: 210000.0,
      paymentMethod: "Debit Order",
      status: "Active",
    },
  },
];

const INITIAL_VEHICLES_DATA_FLAT = [
  {
    id: "1",
    imageLink:
      "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13488/2021-Toyota-Corolla-front_13488_032_1809x771_1F7_cropped.png",
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Silver",
    registrationNumber: "CA1234567",
    mileage: 45000,
    ownerFullName: "Ethan Walton",
    ownerIdNumber: "0307220000001",
    street: "123 Main Road",
    city: "Cape Town",
    province: "Western Cape",
    postalCode: "8000",
    country: "South Africa",
    policyNumber: "INS-1",
    planType: "Bronze",
    premium: 850,
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    excess: 3000,
    insuredValue: 210000,
    paymentMethod: "Debit Order",
    status: "Active",
  },
];

const today = new Date().toISOString().split("T")[0];

const newVehicleTemplate = {
  imageLink: "",
  make: "",
  model: "",
  year: "",
  color: "",
  registrationNumber: "",
  mileage: "",
  FullName: "",
  IdNumber: "",
  street: "",
  city: "",
  province: "",
  postalCode: "",
  country: "",
  planType: "",
  premium: 0.0,
  startDate: today,
  insuredValue: 0.0,
};

const PLAN_INFO = [
  { name: "Bronze", adjustment: 1, content: ["This is the Bronze plan"] },
  { name: "Silver", adjustment: 1.5, content: ["This is the Silver plan"] },
  { name: "Diamond", adjustment: 2, content: ["This is the Diamond plan"] },
];

const VEHICLE_INFO = [
  {
    brand: "Seat",
    models: [
      "Alhambra",
      "Altea",
      "Altea XL",
      "Arosa",
      "Cordoba",
      "Cordoba Vario",
      "Exeo",
      "Ibiza",
      "Ibiza ST",
      "Exeo ST",
      "Leon",
      "Leon ST",
      "Inca",
      "Mii",
      "Toledo",
    ],
    value: 100000,
  },
  {
    brand: "Renault",
    models: [
      "Captur",
      "Clio",
      "Clio Grandtour",
      "Espace",
      "Express",
      "Fluence",
      "Grand Espace",
      "Grand Modus",
      "Grand Scenic",
      "Kadjar",
      "Kangoo",
      "Kangoo Express",
      "Koleos",
      "Laguna",
      "Laguna Grandtour",
      "Latitude",
      "Mascott",
      "Mégane",
      "Mégane CC",
      "Mégane Combi",
      "Mégane Grandtour",
      "Mégane Coupé",
      "Mégane Scénic",
      "Scénic",
      "Talisman",
      "Talisman Grandtour",
      "Thalia",
      "Twingo",
      "Wind",
      "Zoé",
    ],
    value: 110000,
  },
  {
    brand: "Peugeot",
    models: [
      "1007",
      "107",
      "106",
      "108",
      "2008",
      "205",
      "205 Cabrio",
      "206",
      "206 CC",
      "206 SW",
      "207",
      "207 CC",
      "207 SW",
      "306",
      "307",
      "307 CC",
      "307 SW",
      "308",
      "308 CC",
      "308 SW",
      "309",
      "4007",
      "4008",
      "405",
      "406",
      "407",
      "407 SW",
      "5008",
      "508",
      "508 SW",
      "605",
      "806",
      "607",
      "807",
      "Bipper",
      "RCZ",
    ],
    value: 130000,
  },
  {
    brand: "Dacia",
    models: [
      "Dokker",
      "Duster",
      "Lodgy",
      "Logan",
      "Logan MCV",
      "Logan Van",
      "Sandero",
      "Solenza",
    ],
    value: 130000,
  },
  {
    brand: "Citroën",
    models: [
      "Berlingo",
      "C-Crosser",
      "C-Elissée",
      "C-Zero",
      "C1",
      "C2",
      "C3",
      "C3 Picasso",
      "C4",
      "C4 Aircross",
      "C4 Cactus",
      "C4 Coupé",
      "C4 Grand Picasso",
      "C4 Sedan",
      "C5",
      "C5 Break",
      "C5 Tourer",
      "C6",
      "C8",
      "DS3",
      "DS4",
      "DS5",
      "Evasion",
      "Jumper",
      "Jumpy",
      "Saxo",
      "Nemo",
      "Xantia",
      "Xsara",
    ],
    value: 140000,
  },
  {
    brand: "Opel",
    models: [
      "Agila",
      "Ampera",
      "Antara",
      "Astra",
      "Astra cabrio",
      "Astra caravan",
      "Astra coupé",
      "Calibra",
      "Campo",
      "Cascada",
      "Corsa",
      "Frontera",
      "Insignia",
      "Insignia kombi",
      "Kadett",
      "Meriva",
      "Mokka",
      "Movano",
      "Omega",
      "Signum",
      "Vectra",
      "Vectra Caravan",
      "Vivaro",
      "Vivaro Kombi",
      "Zafira",
    ],
    value: 150000,
  },
  {
    brand: "Alfa Romeo",
    models: [
      "145",
      "146",
      "147",
      "155",
      "156",
      "156 Sportwagon",
      "159",
      "159 Sportwagon",
      "164",
      "166",
      "4C",
      "Brera",
      "GTV",
      "MiTo",
      "Crosswagon",
      "Spider",
      "GT",
      "Giulietta",
      "Giulia",
    ],
    value: 300000,
  },
  {
    brand: "Škoda",
    models: [
      "Favorit",
      "Felicia",
      "Citigo",
      "Fabia",
      "Fabia Combi",
      "Fabia Sedan",
      "Felicia Combi",
      "Octavia",
      "Octavia Combi",
      "Roomster",
      "Yeti",
      "Rapid",
      "Rapid Spaceback",
      "Superb",
      "Superb Combi",
    ],
    value: 100000,
  },
  {
    brand: "Chevrolet",
    models: [
      "Alero",
      "Aveo",
      "Camaro",
      "Captiva",
      "Corvette",
      "Cruze",
      "Cruze SW",
      "Epica",
      "Equinox",
      "Evanda",
      "HHR",
      "Kalos",
      "Lacetti",
      "Lacetti SW",
      "Lumina",
      "Malibu",
      "Matiz",
      "Monte Carlo",
      "Nubira",
      "Orlando",
      "Spark",
      "Suburban",
      "Tacuma",
      "Tahoe",
      "Trax",
    ],
    value: 180000,
  },
  {
    brand: "Porsche",
    models: [
      "911 Carrera",
      "911 Carrera Cabrio",
      "911 Targa",
      "911 Turbo",
      "924",
      "944",
      "997",
      "Boxster",
      "Cayenne",
      "Cayman",
      "Macan",
      "Panamera",
    ],
    value: 2000000,
  },
  {
    brand: "Honda",
    models: [
      "Accord",
      "Accord Coupé",
      "Accord Tourer",
      "City",
      "Civic",
      "Civic Aerodeck",
      "Civic Coupé",
      "Civic Tourer",
      "Civic Type R",
      "CR-V",
      "CR-X",
      "CR-Z",
      "FR-V",
      "HR-V",
      "Insight",
      "Integra",
      "Jazz",
      "Legend",
      "Prelude",
    ],
    value: 200000,
  },
  {
    brand: "Subaru",
    models: [
      "BRZ",
      "Forester",
      "Impreza",
      "Impreza Wagon",
      "Justy",
      "Legacy",
      "Legacy Wagon",
      "Legacy Outback",
      "Levorg",
      "Outback",
      "SVX",
      "Tribeca",
      "Tribeca B9",
      "XV",
    ],
    value: 400000,
  },
  {
    brand: "Mazda",
    models: [
      "121",
      "2",
      "3",
      "323",
      "323 Combi",
      "323 Coupé",
      "323 F",
      "5",
      "6",
      "6 Combi",
      "626",
      "626 Combi",
      "B-Fighter",
      "B2500",
      "BT",
      "CX-3",
      "CX-5",
      "CX-7",
      "CX-9",
      "Demio",
      "MPV",
      "MX-3",
      "MX-5",
      "MX-6",
      "Premacy",
      "RX-7",
      "RX-8",
      "Xedox 6",
    ],
    value: 500000,
  },
  {
    brand: "Mitsubishi",
    models: [
      "3000 GT",
      "ASX",
      "Carisma",
      "Colt",
      "Colt CC",
      "Eclipse",
      "Fuso canter",
      "Galant",
      "Galant Combi",
      "Grandis",
      "L200",
      "L200 Pick up",
      "L200 Pick up Allrad",
      "L300",
      "Lancer",
      "Lancer Combi",
      "Lancer Evo",
      "Lancer Sportback",
      "Outlander",
      "Pajero",
      "Pajeto Pinin",
      "Pajero Pinin Wagon",
      "Pajero Sport",
      "Pajero Wagon",
      "Space Star",
    ],
    value: 160000,
  },
  {
    brand: "Lexus",
    models: [
      "CT",
      "GS",
      "GS 300",
      "GX",
      "IS",
      "IS 200",
      "IS 250 C",
      "IS-F",
      "LS",
      "LX",
      "NX",
      "RC F",
      "RX",
      "RX 300",
      "RX 400h",
      "RX 450h",
      "SC 430",
    ],
    value: 600000,
  },
  {
    brand: "Toyota",
    models: [
      "4-Runner",
      "Auris",
      "Avensis",
      "Avensis Combi",
      "Avensis Van Verso",
      "Aygo",
      "Camry",
      "Carina",
      "Celica",
      "Corolla",
      "Corolla Combi",
      "Corolla sedan",
      "Corolla Verso",
      "FJ Cruiser",
      "GT86",
      "Hiace",
      "Hiace Van",
      "Highlander",
      "Hilux",
      "Land Cruiser",
      "MR2",
      "Paseo",
      "Picnic",
      "Prius",
      "RAV4",
      "Sequoia",
      "Starlet",
      "Supra",
      "Tundra",
      "Urban Cruiser",
      "Verso",
      "Yaris",
      "Yaris Verso",
    ],
    value: 100000,
  },
  {
    brand: "BMW",
    models: [
      "i3",
      "i8",
      "M3",
      "M4",
      "M5",
      "M6",
      "Rad 1",
      "Rad 1 Cabrio",
      "Rad 1 Coupé",
      "Rad 2",
      "Rad 2 Active Tourer",
      "Rad 2 Coupé",
      "Rad 2 Gran Tourer",
      "Rad 3",
      "Rad 3 Cabrio",
      "Rad 3 Compact",
      "Rad 3 Coupé",
      "Rad 3 GT",
      "Rad 3 Touring",
      "Rad 4",
      "Rad 4 Cabrio",
      "Rad 4 Gran Coupé",
      "Rad 5",
      "Rad 5 GT",
      "Rad 5 Touring",
      "Rad 6",
      "Rad 6 Cabrio",
      "Rad 6 Coupé",
      "Rad 6 Gran Coupé",
      "Rad 7",
      "Rad 8 Coupé",
      "X1",
      "X3",
      "X4",
      "X5",
      "X6",
      "Z3",
      "Z3 Coupé",
      "Z3 Roadster",
      "Z4",
      "Z4 Roadster",
    ],
    value: 1000000,
  },
  {
    brand: "Volkswagen",
    models: [
      "Amarok",
      "Beetle",
      "Bora",
      "Bora Variant",
      "Caddy",
      "Caddy Van",
      "Life",
      "California",
      "Caravelle",
      "CC",
      "Crafter",
      "Crafter Van",
      "Crafter Kombi",
      "CrossTouran",
      "Eos",
      "Fox",
      "Golf",
      "Golf Cabrio",
      "Golf Plus",
      "Golf Sportvan",
      "Golf Variant",
      "Jetta",
      "LT",
      "Lupo",
      "Multivan",
      "New Beetle",
      "New Beetle Cabrio",
      "Passat",
      "Passat Alltrack",
      "Passat CC",
      "Passat Variant",
      "Passat Variant Van",
      "Phaeton",
      "Polo",
      "Polo Van",
      "Polo Variant",
      "Scirocco",
      "Sharan",
      "T4",
      "T4 Caravelle",
      "T4 Multivan",
      "T5",
      "T5 Caravelle",
      "T5 Multivan",
      "T5 Transporter Shuttle",
      "Tiguan",
      "Touareg",
      "Touran",
    ],
    value: 300000,
  },
  {
    brand: "Suzuki",
    models: [
      "Alto",
      "Baleno",
      "Baleno kombi",
      "Grand Vitara",
      "Grand Vitara XL-7",
      "Ignis",
      "Jimny",
      "Kizashi",
      "Liana",
      "Samurai",
      "Splash",
      "Swift",
      "SX4",
      "SX4 Sedan",
      "Vitara",
      "Wagon R+",
    ],
    value: 150000,
  },
  {
    brand: "Mercedes-Benz",
    models: [
      "100 D",
      "115",
      "124",
      "126",
      "190",
      "190 D",
      "190 E",
      "200 - 300",
      "200 D",
      "200 E",
      "210 Van",
      "210 kombi",
      "310 Van",
      "310 kombi",
      "230 - 300 CE Coupé",
      "260 - 560 SE",
      "260 - 560 SEL",
      "500 - 600 SEC Coupé",
      "Trieda A",
      "A",
      "A L",
      "AMG GT",
      "Trieda B",
      "Trieda C",
      "C",
      "C Sportcoupé",
      "C T",
      "Citan",
      "CL",
      "CL",
      "CLA",
      "CLC",
      "CLK Cabrio",
      "CLK Coupé",
      "CLS",
      "Trieda E",
      "E",
      "E Cabrio",
      "E Coupé",
      "E T",
      "Trieda G",
      "G Cabrio",
      "GL",
      "GLA",
      "GLC",
      "GLE",
      "GLK",
      "Trieda M",
      "MB 100",
      "Trieda R",
      "Trieda S",
      "S",
      "S Coupé",
      "SL",
      "SLC",
      "SLK",
      "SLR",
      "Sprinter",
    ],
    value: 1500000,
  },
  {
    brand: "Saab",
    models: [
      "9-3",
      "9-3 Cabriolet",
      "9-3 Coupé",
      "9-3 SportCombi",
      "9-5",
      "9-5 SportCombi",
      "900",
      "900 C",
      "900 C Turbo",
      "9000",
    ],
    value: 100000,
  },
  {
    brand: "Audi",
    models: [
      "100",
      "100 Avant",
      "80",
      "80 Avant",
      "80 Cabrio",
      "90",
      "A1",
      "A2",
      "A3",
      "A3 Cabriolet",
      "A3 Limuzina",
      "A3 Sportback",
      "A4",
      "A4 Allroad",
      "A4 Avant",
      "A4 Cabriolet",
      "A5",
      "A5 Cabriolet",
      "A5 Sportback",
      "A6",
      "A6 Allroad",
      "A6 Avant",
      "A7",
      "A8",
      "A8 Long",
      "Q3",
      "Q5",
      "Q7",
      "R8",
      "RS4 Cabriolet",
      "RS4/RS4 Avant",
      "RS5",
      "RS6 Avant",
      "RS7",
      "S3/S3 Sportback",
      "S4 Cabriolet",
      "S4/S4 Avant",
      "S5/S5 Cabriolet",
      "S6/RS6",
      "S7",
      "S8",
      "SQ5",
      "TT Coupé",
      "TT Roadster",
      "TTS",
    ],
    value: 300000,
  },
  {
    brand: "Kia",
    models: [
      "Avella",
      "Besta",
      "Carens",
      "Carnival",
      "Cee`d",
      "Cee`d SW",
      "Cerato",
      "K 2500",
      "Magentis",
      "Opirus",
      "Optima",
      "Picanto",
      "Pregio",
      "Pride",
      "Pro Cee`d",
      "Rio",
      "Rio Combi",
      "Rio sedan",
      "Sephia",
      "Shuma",
      "Sorento",
      "Soul",
      "Sportage",
      "Venga",
    ],
    value: 100000,
  },
  {
    brand: "Land Rover",
    models: [
      "109",
      "Defender",
      "Discovery",
      "Discovery Sport",
      "Freelander",
      "Range Rover",
      "Range Rover Evoque",
      "Range Rover Sport",
    ],
    value: 1000000,
  },
  {
    brand: "Dodge",
    models: [
      "Avenger",
      "Caliber",
      "Challenger",
      "Charger",
      "Grand Caravan",
      "Journey",
      "Magnum",
      "Nitro",
      "RAM",
      "Stealth",
      "Viper",
    ],
    value: 1000000,
  },
  {
    brand: "Chrysler",
    models: [
      "300 C",
      "300 C Touring",
      "300 M",
      "Crossfire",
      "Grand Voyager",
      "LHS",
      "Neon",
      "Pacifica",
      "Plymouth",
      "PT Cruiser",
      "Sebring",
      "Sebring Convertible",
      "Stratus",
      "Stratus Cabrio",
      "Town & Country",
      "Voyager",
    ],
    value: 1200000,
  },
  {
    brand: "Ford",
    models: [
      "Aerostar",
      "B-Max",
      "C-Max",
      "Cortina",
      "Cougar",
      "Edge",
      "Escort",
      "Escort Cabrio",
      "Escort kombi",
      "Explorer",
      "F-150",
      "F-250",
      "Fiesta",
      "Focus",
      "Focus C-Max",
      "Focus CC",
      "Focus kombi",
      "Fusion",
      "Galaxy",
      "Grand C-Max",
      "Ka",
      "Kuga",
      "Maverick",
      "Mondeo",
      "Mondeo Combi",
      "Mustang",
      "Orion",
      "Puma",
      "Ranger",
      "S-Max",
      "Sierra",
      "Street Ka",
      "Tourneo Connect",
      "Tourneo Custom",
      "Transit",
      "Transit",
      "Transit Bus",
      "Transit Connect LWB",
      "Transit Courier",
      "Transit Custom",
      "Transit kombi",
      "Transit Tourneo",
      "Transit Valnik",
      "Transit Van",
      "Transit Van 350",
      "Windstar",
    ],
    value: 200000,
  },
  { brand: "Hummer", models: ["H2", "H3"] },
  {
    brand: "Hyundai",
    models: [
      "Accent",
      "Atos",
      "Atos Prime",
      "Coupé",
      "Elantra",
      "Galloper",
      "Genesis",
      "Getz",
      "Grandeur",
      "H 350",
      "H1",
      "H1 Bus",
      "H1 Van",
      "H200",
      "i10",
      "i20",
      "i30",
      "i30 CW",
      "i40",
      "i40 CW",
      "ix20",
      "ix35",
      "ix55",
      "Lantra",
      "Matrix",
      "Santa Fe",
      "Sonata",
      "Terracan",
      "Trajet",
      "Tucson",
      "Veloster",
    ],
    value: 2000000,
  },
  {
    brand: "Infiniti",
    models: ["EX", "FX", "G", "G Coupé", "M", "Q", "QX"],
    value: 400000,
  },
  {
    brand: "Jaguar",
    models: [
      "Daimler",
      "F-Pace",
      "F-Type",
      "S-Type",
      "Sovereign",
      "X-Type",
      "X-type Estate",
      "XE",
      "XF",
      "XJ",
      "XJ12",
      "XJ6",
      "XJ8",
      "XJ8",
      "XJR",
      "XK",
      "XK8 Convertible",
      "XKR",
      "XKR Convertible",
    ],
    value: 2500000,
  },
  {
    brand: "Jeep",
    models: [
      "Cherokee",
      "Commander",
      "Compass",
      "Grand Cherokee",
      "Patriot",
      "Renegade",
      "Wrangler",
    ],
    value: 800000,
  },
  {
    brand: "Nissan",
    models: [
      "100 NX",
      "200 SX",
      "350 Z",
      "350 Z Roadster",
      "370 Z",
      "Almera",
      "Almera Tino",
      "Cabstar E - T",
      "Cabstar TL2 Valnik",
      "e-NV200",
      "GT-R",
      "Insterstar",
      "Juke",
      "King Cab",
      "Leaf",
      "Maxima",
      "Maxima QX",
      "Micra",
      "Murano",
      "Navara",
      "Note",
      "NP300 Pickup",
      "NV200",
      "NV400",
      "Pathfinder",
      "Patrol",
      "Patrol GR",
      "Pickup",
      "Pixo",
      "Primastar",
      "Primastar Combi",
      "Primera",
      "Primera Combi",
      "Pulsar",
      "Qashqai",
      "Serena",
      "Sunny",
      "Terrano",
      "Tiida",
      "Trade",
      "Vanette Cargo",
      "X-Trail",
    ],
    value: 900000,
  },
  {
    brand: "Volvo",
    models: [
      "240",
      "340",
      "360",
      "460",
      "850",
      "850 kombi",
      "C30",
      "C70",
      "C70 Cabrio",
      "C70 Coupé",
      "S40",
      "S60",
      "S70",
      "S80",
      "S90",
      "V40",
      "V50",
      "V60",
      "V70",
      "V90",
      "XC60",
      "XC70",
      "XC90",
    ],
    value: 200000,
  },
  {
    brand: "Daewoo",
    models: [
      "Espero",
      "Kalos",
      "Lacetti",
      "Lanos",
      "Leganza",
      "Lublin",
      "Matiz",
      "Nexia",
      "Nubira",
      "Nubira kombi",
      "Racer",
      "Tacuma",
      "Tico",
    ],
    value: 60000,
  },
  {
    brand: "Fiat",
    models: [
      "1100",
      "126",
      "500",
      "500L",
      "500X",
      "850",
      "Barchetta",
      "Brava",
      "Cinquecento",
      "Coupé",
      "Croma",
      "Doblo",
      "Doblo Cargo",
      "Doblo Cargo Combi",
      "Ducato",
      "Ducato Van",
      "Ducato Kombi",
      "Ducato Podvozok",
      "Florino",
      "Florino Combi",
      "Freemont",
      "Grande Punto",
      "Idea",
      "Linea",
      "Marea",
      "Marea Weekend",
      "Multipla",
      "Palio Weekend",
      "Panda",
      "Panda Van",
      "Punto",
      "Punto Cabriolet",
      "Punto Evo",
      "Punto Van",
      "Qubo",
      "Scudo",
      "Scudo Van",
      "Scudo Kombi",
      "Sedici",
      "Seicento",
      "Stilo",
      "Stilo Multiwagon",
      "Strada",
      "Talento",
      "Tipo",
      "Ulysse",
      "Uno",
      "X1/9",
    ],
    value: 100000,
  },
  {
    brand: "MINI",
    models: [
      "Cooper",
      "Cooper Cabrio",
      "Cooper Clubman",
      "Cooper D",
      "Cooper D Clubman",
      "Cooper S",
      "Cooper S Cabrio",
      "Cooper S Clubman",
      "Countryman",
      "Mini One",
      "One D",
    ],
    value: 350000,
  },
  {
    brand: "Rover",
    models: ["200", "214", "218", "25", "400", "414", "416", "620", "75"],
    value: 1000000,
  },
  {
    brand: "Smart",
    models: [
      "Cabrio",
      "City-Coupé",
      "Compact Pulse",
      "Forfour",
      "Fortwo cabrio",
      "Fortwo coupé",
      "Roadster",
    ],
    value: 220000,
  },
];

export { newVehicleTemplate, VEHICLE_INFO, PLAN_INFO, today };
