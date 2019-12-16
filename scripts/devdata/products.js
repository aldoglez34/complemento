const categories = [
  "5df7cc2e255d2f3ed4a7367d",
  "5df7cc2e255d2f3ed4a7367e",
  "5df7cc2e255d2f3ed4a7367f",
  "5df7cc2e255d2f3ed4a73680",
  "5df7cc2e255d2f3ed4a73681",
  "5df7cc2e255d2f3ed4a73682",
  "5df7cc2e255d2f3ed4a73683",
  "5df7cc2e255d2f3ed4a73684",
  "5df7cc2e255d2f3ed4a73685"
];

const providers = [
  "5df7cc2e255d2f3ed4a73678",
  "5df7cc2e255d2f3ed4a73679",
  "5df7cc2e255d2f3ed4a7367a",
  "5df7cc2e255d2f3ed4a7367b",
  "5df7cc2e255d2f3ed4a7367c"
];

const brand = [
  "Pronamed",
  "Benlaifh",
  "Bio-Logium",
  "Marcoper",
  "Precious Nature",
  "Ecocert",
  "Love Nature",
  "MGL",
  "Vitalé"
];

const ingredients = [
  "Agua Bidestilada",
  "Doradilla",
  "Lauril sulfato de amonio",
  "Lauramida DEA",
  "Lauril glucósido",
  "Betaína de coco",
  "Gliserina",
  "Alcohol Bencilico",
  "Etilexil gliceril",
  "Fragancia",
  "Ácido cítrico",
  "Ácidos grasos Omega 3",
  "Ácido nicotínico",
  "Vitamina B3, E Y A",
  "Vitamina B1",
  "Leche entera en polvo",
  "Manteca de cacao",
  "Lecitina de soya",
  "Poliglicerol de polirricinoleato",
  "Vainilla",
  "Sal",
  "Germen de trigo",
  "Grenetina",
  "Vitamina E"
];

const sufferings = [
  "Dolor de garganta",
  "Dolor de oído",
  "Infección en las vías urinarias",
  "Infección de la piel",
  "Bronquiolitis",
  "Dolor",
  "Resfriado común",
  "Sinusitis bacteriana",
  "Tos",
  "Insomnio",
  "Disfunción eréctil",
  "Dolor de muelas",
  "Dolor de estómago",
  "Migraña",
  "Fatiga extrema",
  "Fiebre",
  "Anemia",
  "Inflamación en las articulaciones",
  "Hinchazón de pies, piernas o manos",
  "Mareos",
  "Somnolencia",
  "Distermia",
  "Dolor de pecho",
  "Pérdida de cabello"
];

const content = [
  "100 comprimidos",
  "50 gramos",
  "100 mililitros",
  "70 gramos",
  "80 comprimidos",
  "50 comprimidos",
  "65 gramos",
  "80 mililitros",
  "70 mililitros",
  "100 gramos",
  "90 comprimidos"
];

const priority = [true, false];

const products = [
  // =====================================================================================
  // category 0
  {
    category: categories[0],
    brand: brand[0],
    name: "Ginkgo Biloba",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 180,
    salePrice: 230,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Actikroll",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 100,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 20,
      newPrice: 80
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Neurocerebryl",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 180,
    salePrice: 230,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Glutamax Gold",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 75,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 15,
      newPrice: 63.75
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Acido Glutamico",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 100,
    salePrice: 130,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Ginseng Sanjing Royal Jelly",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 30,
    salePrice: 60,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Ginseng Sanjing Panax",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 80,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Jalea Real Bee",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 100,
    salePrice: 150,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Vinguifor",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 130,
    salePrice: 200,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Tiamina",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 30,
      newPrice: 59.5
    },
    provider: providers[0]
  },
  // =====================================================================================
  // category 1
  {
    category: categories[1],
    brand: brand[1],
    name: "Jalea Real",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[1],
    brand: brand[1],
    name: "Omega 3, 6, 9",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 100,
    salePrice: 130,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[1],
    brand: brand[1],
    name: "Omega 3 De Salmón",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 150,
    salePrice: 250,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[1],
    brand: brand[1],
    name: "Lecitina De Soya",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 150,
    salePrice: 200,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[1],
    brand: brand[1],
    name: "Chia",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 30,
    salePrice: 75,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  // =====================================================================================
  // category 2
  {
    category: categories[2],
    brand: brand[2],
    name: "Omega 3 Plus Aceite De Salmón",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 100,
    salePrice: 195,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Alfalfa",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 80.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Lecitina De Soya",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 55.7,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Hierba Del Sapo",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 30,
    salePrice: 75,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Raiz De Nopal Extracto",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 75.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 10,
      newPrice: 67.95
    },
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Megaplex Apn Chocolate Blanco",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 45,
    salePrice: 85.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Barra Protein",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 5,
    salePrice: 15,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[2],
    brand: brand[2],
    name: "Suero De Leche Lebasi",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 40,
    salePrice: 65.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 30,
      newPrice: 45.85
    },
    provider: providers[2]
  },
  // =====================================================================================
  // category 3
  {
    category: categories[3],
    brand: brand[3],
    name: "Chromium 400 Con L Carnitina",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 80,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: brand[3],
    name: "Thermogel L Carnitina",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 40,
    salePrice: 55,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: brand[3],
    name: "Testobolan",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 70,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 20,
      newPrice: 56
    },
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: brand[3],
    name: "Max Protein",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 65,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: brand[3],
    name: "Pomada De Calendula",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 80,
    salePrice: 95.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: brand[3],
    name: "Árnica Crema Para Masajes",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 50,
      newPrice: 42.5
    },
    provider: providers[2]
  },
  // =====================================================================================
  // category 4
  {
    category: categories[4],
    brand: brand[4],
    name: "Pomada De Tepezcohuite",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 65,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Árnica Extracto",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Pomada De Caléndula",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Caléndula Spray",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 80,
    salePrice: 115,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Bálsamo Reumadyn",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Gel Saludol",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 95.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Cineraria Maritima",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 45.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Vitamina A 1000mg",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 65.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: brand[4],
    name: "Bio Meliponum",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 100.5,
    salePrice: 130.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  // =====================================================================================
  // category 5
  {
    category: categories[5],
    brand: brand[5],
    name: "Perfect Visión Gotas",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 45,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Aceite De Coco",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 45,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[2]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Vinagre De Manzana",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 65,
    salePrice: 105,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 40,
      newPrice: 63
    },
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Espirulina Máxima",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 40,
    salePrice: 65,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Aceite De Pepita De Uva",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 65,
    salePrice: 95.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Omega 3",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 120,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Lecitina De Soya",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 45,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Carbón Activado",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: brand[5],
    name: "Ácido Hialurónico",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 85,
    salePrice: 120,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  // =====================================================================================
  // category 6
  {
    category: categories[6],
    brand: brand[6],
    name: "Proteina Vegetal Sabor Vainilla",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 55,
    salePrice: 85,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: brand[6],
    name: "Jalea Real Con Tiamina",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 55,
    salePrice: 95,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: brand[6],
    name: "Proteína Vegetal En Polvo",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 250,
    salePrice: 350,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 20,
      newPrice: 280
    },
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: brand[6],
    name: "Barra De Amaranto",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 45.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: brand[6],
    name: "Ácido Fólico Con Vitamina E",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 35,
    salePrice: 65,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: brand[6],
    name: "Bebida De Litchi",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 35,
    salePrice: 55,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: brand[6],
    name: "Arándano Con Chocolate",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 25,
    salePrice: 45.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  // =====================================================================================
  // category 7
  {
    category: categories[7],
    brand: brand[7],
    name: "Néctar De Litchi",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 65,
    salePrice: 95,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[7],
    brand: brand[7],
    name: "Jengibre Orgánico",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 85,
    salePrice: 116.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[7],
    brand: brand[7],
    name: "Tostaditas De Arroz Integral",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 65,
    salePrice: 97.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 30,
      newPrice: 68.25
    },
    provider: providers[3]
  },
  {
    category: categories[7],
    brand: brand[7],
    name: "Golden Milk Late",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 200,
    salePrice: 284.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[7],
    brand: brand[7],
    name: "Multi Balance",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 65,
    salePrice: 88.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  {
    category: categories[7],
    brand: brand[7],
    name: "Goji Berry Cubierto De Chocolate",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 40,
    salePrice: 45.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[3]
  },
  // =====================================================================================
  // category 8
  {
    category: categories[8],
    brand: brand[8],
    name: "Miel De Abeja 100% Artesanal",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 120,
    salePrice: 150.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Cúrcuma Orgánica",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 95.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Sal Del Himalaya",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 85.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 10,
      newPrice: 76.95
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Isopure Zero Carb Cookies",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 350,
    salePrice: 580,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Omega 3 Y Vitamins Kids",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 100.5,
    salePrice: 116.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Pre Y Probióticos",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 78.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Maxibiloba",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 60,
    salePrice: 128.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Cafe Soluble Con Mct En Polvo",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 250,
    salePrice: 323.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Miel Cremosa",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 85,
    salePrice: 145.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: false
    },
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: brand[8],
    name: "Sal De Mar Ahumada Molida",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    purchasePrice: 50,
    salePrice: 74.5,
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: sufferings[Math.floor(Math.random() * 23)],
    ingredients: ingredients[Math.floor(Math.random() * 23)],
    discount: {
      hasDiscount: true,
      percentage: 30,
      newPrice: 52.15
    },
    provider: providers[4]
  }
];

module.exports = products;
