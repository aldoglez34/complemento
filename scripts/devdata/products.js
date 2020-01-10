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
    price: {
      salePrice: 230,
      latestPurchasePrice: 180,
      discount: {
        hasDiscount: false
      }
    },
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: [
      "Inflamación en las articulaciones",
      "Somnolencia",
      "Distermia",
      "Dolor de pecho",
      "Pérdida de cabello"
    ],
    ingredients: [
      "Lecitina de soya",
      "Poliglicerol de polirricinoleato",
      "Vainilla"
    ],
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: brand[0],
    name: "Neurocerebryl",
    content: content[Math.floor(Math.random() * 10)],
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 75,
      latestPurchasePrice: 180,
      discount: {
        hasDiscount: true,
        percentage: 15,
        newPrice: 63.75
      }
    },
    stock: Math.floor(Math.random() * 10),
    priority: priority[Math.floor(Math.random() * 2)],
    sufferings: [
      "Infección de la piel",
      "Bronquiolitis",
      "Dolor",
      "Resfriado común"
    ],
    ingredients: [
      "Alcohol Bencilico",
      "Etilexil gliceril",
      "Fragancia",
      "Ácido cítrico"
    ],
    provider: providers[0]
  }
];

module.exports = products;
