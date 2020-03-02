const models = require("../../models");

module.exports = providersList => {
  const products = [
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Cártilago de Tiburón",
      content: "10x10 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 112,
        latestPurchasePrice: 95,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "cartilago.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "Glutamina",
      content: "250 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 215,
        latestPurchasePrice: 205,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "glutamina.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "BCAAS Aminoácidos",
      content: "120 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 207,
        latestPurchasePrice: 195,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "bcaas.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "Kuups",
      name: "Barra de proteína",
      content: "4.9 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 400,
        latestPurchasePrice: 380,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "barrarandano.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "Hippercuts XTreme",
      content: "100 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 171,
        latestPurchasePrice: 165,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "hippercuts.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "Carboure",
      content: "1 kilogramo",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 169,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "carbopure.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Antiestrés",
      brand: "Marcoper",
      name: "Gotas Me Vale Madre",
      content: "60 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 15,
        latestPurchasePrice: 8,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: true,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "gotasmevale.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Antiestrés",
      brand: "Marcoper",
      name: "Altapress",
      content: "100 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 186,
        latestPurchasePrice: 175,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "altapress.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Antiestrés",
      brand: "Marcoper",
      name: "Pasiflorina Extracto",
      content: "75 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 36,
        latestPurchasePrice: 43,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "pasiflorina.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Ácido Glutámico",
      content: "10x10 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 106,
        latestPurchasePrice: 90,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "acidoGlut.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Neurocerebryl",
      content: "10x10 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 133,
        latestPurchasePrice: 105,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "neurocerebryl.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Vitacebrol",
      content: "240 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 130,
        latestPurchasePrice: 95,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "vitacebrol.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Insomnio",
      brand: "Vitalé",
      name: "Aromatizante Ambiental",
      content: "50 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 77,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "aromatizante.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Insomnio",
      brand: "Vitalé",
      name: "Aceite de Melisa",
      content: "10 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 85,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "acemelisa.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Insomnio",
      brand: "Vitalé",
      name: "Romero Aceite",
      content: "10 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 186,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "romeroaceite.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Gel De Jengibre",
      content: "475 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 71.5,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "jengibre.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Raíz De Tejocote",
      content: "60 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 59,
        latestPurchasePrice: 45,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "raiz.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Cetonas De Frambuesa",
      content: "60 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 79,
        latestPurchasePrice: 55,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "cetonas.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "GN+V",
      name: "Raíz de Nopal y Toronja",
      content: "45 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 94,
        latestPurchasePrice: 70,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "raiznopal.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Gel Mango Africano",
      content: "125 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 26,
        latestPurchasePrice: 15,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "mangoaf.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "GN+V",
      name: "Piñalife",
      content: "30 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 205,
        latestPurchasePrice: 170,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "piñalife.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "Big Size For Men",
      content: "60 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 193,
        latestPurchasePrice: 160,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "bsfm.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "Alpha Male",
      content: "1 pieza",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 137,
        latestPurchasePrice: 98,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "alpha.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "Big Size For Women",
      content: "60 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 196,
        latestPurchasePrice: 165,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "bsfw.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Desinflamatorios",
      brand: "Anahuac",
      name: "Árnica",
      content: "75 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 81,
        latestPurchasePrice: 56,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "arnica.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Desinflamatorios",
      brand: "Vidanat",
      name: "Pomada De Manzana",
      content: "125 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 28,
        latestPurchasePrice: 15,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "pomada.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Desinflamatorios",
      brand: "Vidanat",
      name: "Gel Cloruro de Magnesio",
      content: "475 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 86,
        latestPurchasePrice: 60,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "cloruromag.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Anahuac",
      name: "Neo Omega 3",
      content: "100 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 267,
        latestPurchasePrice: 225,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "omega3.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Anahuac",
      name: "Aceite De Krill",
      content: "30 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 235,
        latestPurchasePrice: 195,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "aceitekrill.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Vidanat",
      name: "Chía",
      content: "60 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 58,
        latestPurchasePrice: 35,
        discount: {
          hasDiscount: false
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "chia.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Gelcaps",
      name: "KolestriL plus",
      content: "50 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 84,
        latestPurchasePrice: 55,
        discount: {
          hasDiscount: true,
          percentage: 5,
          newPrice: 79.8
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "kolestril.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Gelcaps",
      name: "Lecitina De Soya",
      content: "100 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 200,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 170
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "lecitina.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Anahuac",
      name: "Neo Alfalfa",
      content: "300 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 104,
        latestPurchasePrice: 70,
        discount: {
          hasDiscount: true,
          percentage: 10,
          newPrice: 93.6
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "neoalfalfa.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "The Sensual Tea",
      content: "2 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 189,
        latestPurchasePrice: 145,
        discount: {
          hasDiscount: true,
          percentage: 5,
          newPrice: 179.5
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "sensualtea.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "Pure Nutricion",
      name: "Women Plenna",
      content: "60 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 239,
        latestPurchasePrice: 140,
        discount: {
          hasDiscount: true,
          percentage: 20,
          newPrice: 191.2
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "womenplenna.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Nutrición Deportiva",
      brand: "Pure Nutricion",
      name: "Men Silver 50",
      content: "60 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 239,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 203.15
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "mensilver.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Antiestrés",
      brand: "Anahuac",
      name: "Valenox",
      content: "40 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 86,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: true,
          percentage: 10,
          newPrice: 77.4
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "valenox.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "Prosa",
      name: "Ginkgo Biloba Plus",
      content: "100 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 67,
        latestPurchasePrice: 40,
        discount: {
          hasDiscount: true,
          percentage: 10,
          newPrice: 60.3
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "ginkgo.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Sistema Circulatorio",
      brand: "MGL",
      name: "Ajo Rey",
      content: "200 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 113,
        latestPurchasePrice: 75,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 96.05
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "ajorey.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Sistema Circulatorio",
      brand: "Vidanat",
      name: "Aceite De Higado Tiburon",
      content: "180 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 105,
        latestPurchasePrice: 60,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 89.25
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "higtiburon.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Sistema Circulatorio",
      brand: "Margarita Naturalmente",
      name: "Zapote Blanco Extracto",
      content: "50 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 92,
        latestPurchasePrice: 78,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 78.2
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "zapotebco.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Sistema Circulatorio",
      brand: "Salud Natural",
      name: "Ajo Deodorizado",
      content: "180 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 116,
        latestPurchasePrice: 60,
        discount: {
          hasDiscount: true,
          percentage: 25,
          newPrice: 87
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "ajodeo.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Colesterol",
      brand: "Anahuac",
      name: "Triomega 3 6 y 9",
      content: "100 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 267,
        latestPurchasePrice: 205,
        discount: {
          hasDiscount: true,
          percentage: 20,
          newPrice: 213.6
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "triomega.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "GranaGard",
      name: "Omega 5",
      content: "60 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 661,
        latestPurchasePrice: 570,
        discount: {
          hasDiscount: true,
          percentage: 10,
          newPrice: 594.9
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "omega5.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Cerebro y Memoria",
      brand: "GranaGard",
      name: "Omega 530",
      content: "30 cápsulas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 381,
        latestPurchasePrice: 330,
        discount: {
          hasDiscount: true,
          percentage: 5,
          newPrice: 364.5
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "omega530.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Pérdida y Control de Peso",
      brand: "Margarita Naturalmente",
      name: "Semilla De Brasil",
      content: "70 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 34,
        latestPurchasePrice: 20,
        discount: {
          hasDiscount: true,
          percentage: 5,
          newPrice: 30.6
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "semillabrasil.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Antiestrés",
      brand: "Salud Natural",
      name: "Taflavix",
      content: "40 tabletas",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 107,
        latestPurchasePrice: 80,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 93.95
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "taflavix.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Desinflamatorios",
      brand: "MGL",
      name: "Arnidol Crema Para Golpes",
      content: "35 gramos",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 45,
        latestPurchasePrice: 30,
        discount: {
          hasDiscount: true,
          percentage: 15,
          newPrice: 38.2
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "arnidol.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Desinflamatorios",
      brand: "Anahuac",
      name: "Balsamo Golden Dragon",
      content: "12 gramos",
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
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "balsamo.jpg"
    },
    {
      provider: providersList[Math.floor(Math.random() * 5)],
      category: "Desinflamatorios",
      brand: "MGL",
      name: "Tónico De Ajo Negro",
      content: "500 mililitros",
      comments:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 84,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: true,
          percentage: 20,
          newPrice: 67.2
        }
      },
      stock: Math.floor(Math.random() * 10),
      priority: false,
      sufferings: ["padecimiento 1", "padecimiento 2", "padecimiento 3"],
      ingredients: ["ingrediente 1", "ingrediente 2", "ingrediente 3"],
      photo: "ajonegro.jpg"
    }
  ];

  return models.Product.remove({})
    .then(() => models.Product.insertMany(products))
    .then(() => {
      console.log(">products added");
      process.exit(0);
    })
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
};
