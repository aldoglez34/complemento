const categories = [
  "5e3877be924a4142303714cf",
  "5e3877be924a4142303714d0",
  "5e3877be924a4142303714d1",
  "5e3877be924a4142303714d2",
  "5e3877be924a4142303714d3",
  "5e3877be924a4142303714d4",
  "5e3877be924a4142303714d5",
  "5e3877be924a4142303714d6",
  "5e3877be924a4142303714d7"
];

const providers = [
  "5e3877be924a4142303714ca",
  "5e3877be924a4142303714cb",
  "5e3877be924a4142303714cc",
  "5e3877be924a4142303714cd",
  "5e3877be924a4142303714ce"
];

const products = [
  {
    category: categories[0],
    brand: "Pronamed",
    name: "Ginkgo Biloba",
    content: "100 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 150,
      latestPurchasePrice: 135,
      discount: {
        hasDiscount: false
      }
    },
    stock: 7,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[1],
    brand: "Pronamed",
    name: "Actikroll",
    content: "50 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 140,
      latestPurchasePrice: 125,
      discount: {
        hasDiscount: false
      }
    },
    stock: 9,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: "Pronamed",
    name: "Neurocerebryl",
    content: "100 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 130,
      latestPurchasePrice: 115,
      discount: {
        hasDiscount: true,
        percentage: 15,
        newPrice: 110.5
      }
    },
    stock: 19,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: "Pronamed",
    name: "Glutamax Gold",
    content: "70 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 120,
      latestPurchasePrice: 105,
      discount: {
        hasDiscount: true,
        percentage: 30,
        newPrice: 84
      }
    },
    stock: 2,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[4],
    brand: "Pronamed",
    name: "Acido Glutamico",
    content: "80 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 110,
      latestPurchasePrice: 95,
      discount: {
        hasDiscount: true,
        percentage: 20,
        newPrice: 88
      }
    },
    stock: 4,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[5],
    brand: "Benlaifh",
    name: "Ginseng Sanjing Royal Jelly",
    content: "50 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 100,
      latestPurchasePrice: 85,
      discount: {
        hasDiscount: true,
        percentage: 20,
        newPrice: 80
      }
    },
    stock: 2,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[6],
    brand: "Benlaifh",
    name: "Ginseng Sanjing Panax",
    content: "65 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 90,
      latestPurchasePrice: 75,
      discount: {
        hasDiscount: true,
        percentage: 20,
        newPrice: 72
      }
    },
    stock: 5,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[7],
    brand: "Benlaifh",
    name: "Jalea Real Bee",
    content: "80 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 80,
      latestPurchasePrice: 65,
      discount: {
        hasDiscount: true,
        percentage: 30,
        newPrice: 56
      }
    },
    stock: 4,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[8],
    brand: "Benlaifh",
    name: "Vinguifor",
    content: "70 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 70,
      latestPurchasePrice: 55,
      discount: {
        hasDiscount: true,
        percentage: 15,
        newPrice: 59.5
      }
    },
    stock: 1,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[0],
    brand: "Benlaifh",
    name: "Tiamina",
    content: "100 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 60,
      latestPurchasePrice: 45,
      discount: {
        hasDiscount: true,
        percentage: 15,
        newPrice: 51
      }
    },
    stock: 6,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[1],
    brand: "Bio-Logium",
    name: "Jalea Real",
    content: "90 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 50,
      latestPurchasePrice: 35,
      discount: {
        hasDiscount: true,
        percentage: 15,
        newPrice: 42.5
      }
    },
    stock: 20,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[2],
    brand: "Bio-Logium",
    name: "Omega 3 6 9",
    content: "100 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 40,
      latestPurchasePrice: 25,
      discount: {
        hasDiscount: true,
        percentage: 10,
        newPrice: 36
      }
    },
    stock: 2,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[3],
    brand: "Bio-Logium",
    name: "Omega 3 De Salmon",
    content: "50 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 30,
      latestPurchasePrice: 15,
      discount: {
        hasDiscount: true,
        percentage: 10,
        newPrice: 27
      }
    },
    stock: 3,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[4],
    brand: "Bio-Logium",
    name: "Lecitina De Soya",
    content: "100 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 150,
      latestPurchasePrice: 135,
      discount: {
        hasDiscount: false
      }
    },
    stock: 8,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[5],
    brand: "Bio-Logium",
    name: "Chia",
    content: "70 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 140,
      latestPurchasePrice: 125,
      discount: {
        hasDiscount: false
      }
    },
    stock: 9,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[6],
    brand: "Marcoper",
    name: "Omega 3 Plus Aceite De Salmon",
    content: "80 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 130,
      latestPurchasePrice: 115,
      discount: {
        hasDiscount: false
      }
    },
    stock: 11,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[7],
    brand: "Marcoper",
    name: "Alfalfa",
    content: "50 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 120,
      latestPurchasePrice: 105,
      discount: {
        hasDiscount: false
      }
    },
    stock: 11,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[8],
    brand: "Marcoper",
    name: "Lecitina De Soya 2",
    content: "65 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 110,
      latestPurchasePrice: 95,
      discount: {
        hasDiscount: false
      }
    },
    stock: 17,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[0],
    brand: "Marcoper",
    name: "Hierba Del Sapo",
    content: "80 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 100,
      latestPurchasePrice: 85,
      discount: {
        hasDiscount: false
      }
    },
    stock: 2,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[1],
    brand: "Marcoper",
    name: "Raiz De Nopal Extracto",
    content: "70 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 90,
      latestPurchasePrice: 75,
      discount: {
        hasDiscount: false
      }
    },
    stock: 10,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[2],
    brand: "Precious Nature",
    name: "Megaplex Apn Chocolate Blanco",
    content: "100 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 80,
      latestPurchasePrice: 65,
      discount: {
        hasDiscount: false
      }
    },
    stock: 14,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[3],
    brand: "Precious Nature",
    name: "Barra Protein",
    content: "90 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 70,
      latestPurchasePrice: 55,
      discount: {
        hasDiscount: false
      }
    },
    stock: 19,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[4],
    brand: "Precious Nature",
    name: "Suero De Leche Lebasi",
    content: "100 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 60,
      latestPurchasePrice: 45,
      discount: {
        hasDiscount: false
      }
    },
    stock: 18,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[5],
    brand: "Precious Nature",
    name: "Chromium 400 Con L Carnitina",
    content: "50 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 50,
      latestPurchasePrice: 35,
      discount: {
        hasDiscount: false
      }
    },
    stock: 12,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[6],
    brand: "Precious Nature",
    name: "Thermogel L Carnitina",
    content: "100 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 40,
      latestPurchasePrice: 25,
      discount: {
        hasDiscount: false
      }
    },
    stock: 15,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[7],
    brand: "Ecocert",
    name: "Testobolan",
    content: "70 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 30,
      latestPurchasePrice: 15,
      discount: {
        hasDiscount: false
      }
    },
    stock: 18,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[8],
    brand: "Ecocert",
    name: "Max Protein",
    content: "80 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 150,
      latestPurchasePrice: 135,
      discount: {
        hasDiscount: false
      }
    },
    stock: 18,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[0],
    brand: "Ecocert",
    name: "Pomada De Calendula",
    content: "50 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 140,
      latestPurchasePrice: 125,
      discount: {
        hasDiscount: false
      }
    },
    stock: 6,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[1],
    brand: "Ecocert",
    name: "Arnica Crema Para Masajes",
    content: "65 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 130,
      latestPurchasePrice: 115,
      discount: {
        hasDiscount: false
      }
    },
    stock: 14,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[2],
    brand: "Ecocert",
    name: "Pomada De Tepezcohuite",
    content: "80 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 120,
      latestPurchasePrice: 105,
      discount: {
        hasDiscount: false
      }
    },
    stock: 14,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[3],
    brand: "Love Nature",
    name: "Arnica Extracto",
    content: "70 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 110,
      latestPurchasePrice: 95,
      discount: {
        hasDiscount: false
      }
    },
    stock: 15,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[4],
    brand: "Love Nature",
    name: "Pomada De Calendula 2",
    content: "100 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 100,
      latestPurchasePrice: 85,
      discount: {
        hasDiscount: false
      }
    },
    stock: 12,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[5],
    brand: "Love Nature",
    name: "Calendula Spray",
    content: "90 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 90,
      latestPurchasePrice: 75,
      discount: {
        hasDiscount: false
      }
    },
    stock: 14,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[6],
    brand: "Love Nature",
    name: "Balsamo Reumadyn",
    content: "100 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 80,
      latestPurchasePrice: 65,
      discount: {
        hasDiscount: false
      }
    },
    stock: 8,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[7],
    brand: "Love Nature",
    name: "Gel Saludol",
    content: "50 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 70,
      latestPurchasePrice: 55,
      discount: {
        hasDiscount: false
      }
    },
    stock: 12,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[8],
    brand: "MGL",
    name: "Cineraria Maritima",
    content: "100 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 60,
      latestPurchasePrice: 45,
      discount: {
        hasDiscount: false
      }
    },
    stock: 10,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[0],
    brand: "MGL",
    name: "Vitamina A 1000mg",
    content: "70 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 50,
      latestPurchasePrice: 35,
      discount: {
        hasDiscount: false
      }
    },
    stock: 19,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[1],
    brand: "MGL",
    name: "Bio Meliponum",
    content: "80 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 40,
      latestPurchasePrice: 25,
      discount: {
        hasDiscount: false
      }
    },
    stock: 4,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[2],
    brand: "MGL",
    name: "Perfec Vision Gotas",
    content: "50 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 30,
      latestPurchasePrice: 15,
      discount: {
        hasDiscount: false
      }
    },
    stock: 15,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[3],
    brand: "MGL",
    name: "Aceite De Coco",
    content: "65 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 150,
      latestPurchasePrice: 135,
      discount: {
        hasDiscount: false
      }
    },
    stock: 5,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[4],
    brand: "Vitalé",
    name: "Vinagre De Manzana",
    content: "80 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 140,
      latestPurchasePrice: 125,
      discount: {
        hasDiscount: false
      }
    },
    stock: 1,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[5],
    brand: "Vitalé",
    name: "Ginkgo Biloba 2",
    content: "70 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 130,
      latestPurchasePrice: 115,
      discount: {
        hasDiscount: false
      }
    },
    stock: 17,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[6],
    brand: "Vitalé",
    name: "Actikroll 2",
    content: "100 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 120,
      latestPurchasePrice: 105,
      discount: {
        hasDiscount: false
      }
    },
    stock: 9,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[7],
    brand: "Vitalé",
    name: "Neurocerebryl 2",
    content: "90 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 110,
      latestPurchasePrice: 95,
      discount: {
        hasDiscount: false
      }
    },
    stock: 9,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[8],
    brand: "Vitalé",
    name: "Glutamax Gold 2",
    content: "100 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 100,
      latestPurchasePrice: 85,
      discount: {
        hasDiscount: false
      }
    },
    stock: 11,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[0],
    brand: "Bardana",
    name: "Acido Glutamico 2",
    content: "50 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 90,
      latestPurchasePrice: 75,
      discount: {
        hasDiscount: false
      }
    },
    stock: 3,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[1],
    brand: "Bardana",
    name: "Ginseng Sanjing Royal Jelly 2",
    content: "100 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 80,
      latestPurchasePrice: 65,
      discount: {
        hasDiscount: false
      }
    },
    stock: 9,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[2],
    brand: "Bardana",
    name: "Ginseng Sanjing Panax 2",
    content: "70 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 70,
      latestPurchasePrice: 55,
      discount: {
        hasDiscount: false
      }
    },
    stock: 17,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[3],
    brand: "Bardana",
    name: "Jalea Real Bee 2",
    content: "80 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 60,
      latestPurchasePrice: 45,
      discount: {
        hasDiscount: false
      }
    },
    stock: 17,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[4],
    brand: "Bardana",
    name: "Vinguifor 2",
    content: "50 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 50,
      latestPurchasePrice: 35,
      discount: {
        hasDiscount: false
      }
    },
    stock: 7,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  },
  {
    category: categories[5],
    brand: "TodoSaludyMás",
    name: "Tiamina 2",
    content: "65 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 40,
      latestPurchasePrice: 25,
      discount: {
        hasDiscount: false
      }
    },
    stock: 19,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[0]
  },
  {
    category: categories[6],
    brand: "TodoSaludyMás",
    name: "Jalea Real 2",
    content: "80 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 30,
      latestPurchasePrice: 15,
      discount: {
        hasDiscount: false
      }
    },
    stock: 20,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[1]
  },
  {
    category: categories[7],
    brand: "TodoSaludyMás",
    name: "Bio Meliponum 2",
    content: "70 mililitros",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 150,
      latestPurchasePrice: 135,
      discount: {
        hasDiscount: false
      }
    },
    stock: 15,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[2]
  },
  {
    category: categories[8],
    brand: "TodoSaludyMás",
    name: "Perfec Vision Gotas 2",
    content: "100 gramos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 140,
      latestPurchasePrice: 125,
      discount: {
        hasDiscount: false
      }
    },
    stock: 11,
    priority: true,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[3]
  },
  {
    category: categories[0],
    brand: "TodoSaludyMás",
    name: "Aceite De Coco 2",
    content: "90 comprimidos",
    comments:
      "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
    price: {
      salePrice: 130,
      latestPurchasePrice: 115,
      discount: {
        hasDiscount: false
      }
    },
    stock: 17,
    priority: false,
    sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
    ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
    provider: providers[4]
  }
];

module.exports = products;
