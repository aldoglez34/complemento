const models = require("../../models");
const insertClients = require("./insertClients");

module.exports = (providersList) => {
  const products = [
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Cartílago de Tiburón",
      content: "10x10 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 112,
        latestPurchasePrice: 95,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el control del buen desarrollo de huesos y dientes en niños y adolescentes, Auxiliar en el control de la osteoporosis y fracturas en adultos",
      dose:
        "Adultos: tomar 1 ampolletas al día preferentemente con sus alimentos, Niños: tomar la mitad de la dosis",
      ingredients: ["Calcio", "Extractos herbales", "Vitaminas y minerales"],
      photo: "cartilago.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "Glutamina",
      content: "250 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 215,
        latestPurchasePrice: 205,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Auxiliar en el desarrollo de las fibras musculares",
      dose: "Mezclar una porción en 500 ml de agua, beber antes de 15 minutos",
      ingredients: ["L-glutamina"],
      photo: "glutamina.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "BCAAS Aminoácidos",
      content: "120 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 207,
        latestPurchasePrice: 195,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Contribuye a la correcta conservación y sintonización de proteínas y promueve el incremento de masa muscular",
      dose: "Tomar cuatro capsulas antes del entrenamiento",
      ingredients: ["L-Leucina", "L-Isoleucina", "L-Valina", "L-Glutamina"],
      photo: "bcaas.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "Kuups",
      name: "Barra de proteína",
      content: "4.9 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 400,
        latestPurchasePrice: 380,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Snack 100% saludable, benéfico en el consumo de proteína natural sin azúcar",
      dose:
        "Consumir como colación, antes de un entrenamiento para la producción de energía",
      ingredients: [
        "Arándanos",
        "Blueberries",
        "Almendra",
        "Vainilla",
        "Sal del himalaya",
      ],
      photo: "barrarandano.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "Hippercuts XTreme",
      content: "100 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 171,
        latestPurchasePrice: 165,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Ayuda a quemar la grasa",
      dose: "Tomar dos capsulas por la mañana y 2 por la tarde",
      ingredients: ["Extracto de guaraná", "L-Carnitina", "Ginseng"],
      photo: "hippercuts.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "High Power",
      name: "CarboPure",
      content: "1 kilogramo",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 169,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en mantener bajo el control de los niveles de azúcar en la sangre",
      dose:
        "Tomar 30 g diluído en agua por las mañanas y antes de realizar ejercicio",
      ingredients: ["Carbohidratos semicomplejos y simples"],
      photo: "carbopure.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Antiestrés",
      brand: "Marcoper",
      name: "Gotas Me Vale Madre",
      content: "60 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 15,
        latestPurchasePrice: 8,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxilia en el tratamiento de ansiedad, insomnio, neurosis, nerviosismo, hipertensión, taquicardia, estrés, tiene actividad sedante y ansiolítica",
      dose:
        "Agregar 40 gotas a 250 ml de agua y tomar tres veces al día, 10 minutos antes de cada alimento",
      ingredients: [
        "Magnolia",
        "Tila",
        "Toronjiles",
        "Damiana",
        "Zapote blanco",
      ],
      photo: "gotasmevale.jpg",
    },
    {
      active: false,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Antiestrés",
      brand: "Marcoper",
      name: "Altapress",
      content: "100 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 186,
        latestPurchasePrice: 175,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Auxiliar en el control del estrés",
      dose: "Tomar tres capsulas al día",
      ingredients: [
        "Zapote blanco",
        "Salvadora",
        "Estafiate",
        "Laurel",
        "Sauce",
      ],
      photo: "altapress.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Antiestrés",
      brand: "Marcoper",
      name: "Paciflorina Extracto",
      content: "75 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 36,
        latestPurchasePrice: 43,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el control de la ansiedad, insomnio, nervios, dolor de cabeza, migraña, y falta de sueño",
      dose: "Agregue 50 gotas en medio vaso con agua , mínimo dos veces al día",
      ingredients: [
        "Pasiflorina",
        "Damiana de California",
        "Valeriana",
        "Flor de Tila",
      ],
      photo: "pasiflorina.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Ácido Glutámico",
      content: "10x10 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 106,
        latestPurchasePrice: 90,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en problemas de hiperplasia prostática benigna y en el tratamietno de la memoria",
      dose: "Tomar una cápsula con cada alimento",
      ingredients: [
        "Ácido glutámico",
        "Lecitina de soya",
        "Fósforo",
        "Ácido Fólico",
      ],
      photo: "acidGlutam.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Neurocebryl",
      content: "10x10 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 133,
        latestPurchasePrice: 105,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Intensifica el rendimiento físico y mental y es auxiliar en retardar el envejecimiento celular",
      dose: "Una ampolleta al día",
      ingredients: ["Vitaminas y Minerales", "Ácido glutámico", "Jalea Real"],
      photo: "neurocerebryl.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "GN+V",
      name: "Vitacebrol",
      content: "240 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 130,
        latestPurchasePrice: 95,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Auxiliar para el buen funcionamiento del sistema nervioso",
      dose:
        "Adultos: 1 ½ cucharada sopera en 300 ml de agua, tomar 2 a 3 veces al día. Niños: 1 cucharada cafetera en una taza de agua, tomar 2 a 3 veces al día",
      ingredients: [
        "L-lisina",
        "Glicerofosfato de Sodio",
        "Glicerofosfato de calcio",
        "Ácido Fosfórico",
        "Vitamina B",
      ],
      photo: "vitacebrol.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Insomnio",
      brand: "Vitalé",
      name: "Aromatizante Ambiental",
      content: "50 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 77,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Aroma cálido y dulce que evoca la playa y la relajación con salida a coco",
      dose:
        "Colocar los palitos de bambú dentro del frasco y dejar absorber el aroma durante 10 minutos, posteriormente voltear los palitos",
      ingredients: ["Agua", "Extracto alcohólico de coco"],
      photo: "aromatizante.jpg",
    },
    {
      active: false,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Insomnio",
      brand: "Vitalé",
      name: "Aceite de Melisa",
      content: "10 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 85,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Relajante que promueve el sueño y estimula la concentración. También alivia problemas de tos, asma y bronquitis",
      dose:
        "Diluir en aceite o crema de preferencia para uso tópico. Uso en difusor",
      ingredients: ["Aceite concentrado natural de melisa"],
      photo: "acemelisa.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Insomnio",
      brand: "Vitalé",
      name: "Romero Aceite",
      content: "10 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 186,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Relajante muscular que ayuda a aliviar dolorores, alivia el estrés y es muy beneficioso para el estado de ánimo",
      dose:
        "Con un difusor o quemador, añadir de 2 a 3 gotas del aceite esencial de romero e inhalar",
      ingredients: ["Aceite de oliva extra virgen", "Romero"],
      photo: "romeroaceite.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Gel De Jengibre",
      content: "475 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 71.5,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Ayuda a acelerar el metabolismo, quemar grasa y combatir la retención de líquidos",
      dose:
        "Aplica el gel diariamente en el área deseada con un ligero masaje, máximo 2 veces al día",
      ingredients: [
        "Extracto de Jengibre",
        "Citronella",
        "Eucalipto",
        "Menta",
        "Árnica",
      ],
      photo: "jengibre.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Raíz De Tejocote",
      content: "60 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 59,
        latestPurchasePrice: 45,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Reduce ansiedad de alimentos, talla y peso con eliminación de grasa acumulada",
      dose:
        "Tomar dps capsulas por la mañana y por la noche, de preferencia acompañado de alimentos",
      ingredients: ["Raíz de tejocote Craetaegus mexicana"],
      photo: "raiz.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Cetonas De Frambuesa",
      content: "60 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 79,
        latestPurchasePrice: 55,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Facilita la pérdida de peso",
      dose: "Tomar una capsula antes del desayuno y una antes de la cena",
      ingredients: ["Cetonas de frambuesa"],
      photo: "cetonas.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "GN+V",
      name: "Raíz de Nopal y Toronja",
      content: "45 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 94,
        latestPurchasePrice: 70,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en tratamiento de estreñimiento, sistema digestivo y para control de peso",
      dose: "Máxima seis al dia, 2 por cada alimento",
      ingredients: ["Raíz de Nopal", "Raíz de Toronja"],
      photo: "raiznopal.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "Vidanat",
      name: "Gel Mango Africano",
      content: "125 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 26,
        latestPurchasePrice: 15,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Acelera el metabolismo para quemar calorías y reducir tallas",
      dose: "Aplique en el área deseada dando un ligero masaje",
      ingredients: [
        "Extracto de Mango Africano",
        "Extracto de Toronja",
        "Extracto de Limón",
        "Algas Marinas",
        "Eucalipto",
      ],
      photo: "mangoaf.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "GN+V",
      name: "Piñalife",
      content: "30 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 205,
        latestPurchasePrice: 170,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Elimina la retención de líquidos y calma la ansiedad para reducir los excesos en la comida",
      dose: "Tomar una capsula al dia preferentemente con el desayuno",
      ingredients: [
        "Piña",
        "Jamaica",
        "Té Verde",
        "Manzana",
        "Vitaminas y Minerales",
      ],
      photo: "pinalife.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "Big Size For Men",
      content: "60 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 193,
        latestPurchasePrice: 160,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Auxiliar en la regularización de las hormonas",
      dose: "Tomar una tableta al día",
      ingredients: ["Fennel", "Sativa", "Kelp", "Ortiga", "Zarzaparrilla"],
      photo: "bsfm.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "Alpha Male",
      content: "1 pieza",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 137,
        latestPurchasePrice: 98,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Ayuda a mejorar la circulacion de flujo vascular y al tratamiento de la disfuncion erectil en hombres adultos",
      dose:
        "Antes del acto, colocar 1 tira frutal en la lengua hasta que se disuelva",
      ingredients: [
        "Extracto de Tribulus Terrestris",
        "Maca root",
        "Damiana",
        "Ácido abscórbico",
      ],
      photo: "alpha.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "Big Size For Women",
      content: "60 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 196,
        latestPurchasePrice: 165,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en la regularización de las hormonas y a incrementar rápidamente el tamaño del busto",
      dose: "Tomar una tableta al día",
      ingredients: ["Fennel", "Fenogreco", "Kelp", "Zarzaparrilla", "Ortiga"],
      photo: "bsfw.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Desinflamatorios",
      brand: "Anáhuac",
      name: "Árnica",
      content: "75 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 81,
        latestPurchasePrice: 56,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el control de la desinflamación y el dolor producido por golpes, esguinces y torceduras",
      dose: "Tomar 2 capsulas antes de cada alimento",
      ingredients: ["Árnica"],
      photo: "arnica.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Desinflamatorios",
      brand: "Vidanat",
      name: "Pomada De Manzana",
      content: "125 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 28,
        latestPurchasePrice: 15,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Es un tratamiento alternativo con propiedades antiinflamatorias, humectantes, regeneradoras y suavizantes",
      dose: "Se aplica con leves masajes sobre el área deseada",
      ingredients: ["Extracto de Manzana", "Vaselina", "Polvo de Sulfatiazol"],
      photo: "pomada.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Desinflamatorios",
      brand: "Vidanat",
      name: "Gel Cloruro de Magnesio",
      content: "475 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 86,
        latestPurchasePrice: 60,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Favorece una correcta circulación sanguínea, tiene propiedades antioxidantes, astringentes y cicatrizantes",
      dose:
        "Aplicar en piel limpia de manera uniforme, dando suave masaje sobre el área o zona requerida hasta su total absorción",
      ingredients: [
        "Cloruro de Magnesio",
        "Carbómero",
        "Agua demineralizada",
        "Mentol",
      ],
      photo: "cloruromag.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Anáhuac",
      name: "Neo Omega 3",
      content: "100 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 267,
        latestPurchasePrice: 225,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el tratamiento de enfermedades cardiovasculares",
      dose: "Tomar una capsula antes de cada alimento",
      ingredients: ["Aceite de Omega 3 Salmón"],
      photo: "omega3.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Anáhuac",
      name: "Aceite De Krill",
      content: "30 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 235,
        latestPurchasePrice: 195,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Tiene poderosas propiedades antioxidantes",
      dose: "Tomar una capsula antes de los alimentos",
      ingredients: [
        "Aceite de Krill",
        "Aceite de Omega 3",
        "Agua purificada",
        "Grenetina",
        "Metil Parabeno",
      ],
      photo: "aceitekrill.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Vidanat",
      name: "Chía",
      content: "60 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 58,
        latestPurchasePrice: 35,
        discount: {
          hasDiscount: false,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar para reducir el colesterol malo y los triglicéridos y regular la coagulación de la sangre",
      dose: "Tomar dos capsulas antes de cada alimento, tres veces al día",
      ingredients: ["Chía"],
      photo: "chia.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Gelcaps",
      name: "KolestriL plus",
      content: "50 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 84,
        latestPurchasePrice: 55,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-04",
          endDate: "2020-05-13",
          percentage: 5,
          newPrice: 79.8,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Purificación de hígado graso. Disminución acelerada del colesterol y triglicéridos en venas y arterias",
      dose:
        "Tomar una capsula cada 12 horas o en caso de ser necesario una antes de cada alimento",
      ingredients: ["Omega 3", "Quinoa", "Hierba de Sapo"],
      photo: "kolestril.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Gelcaps",
      name: "Lecitina De Soya",
      content: "100 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 200,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-05",
          endDate: "2020-05-12",
          percentage: 15,
          newPrice: 170,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el tratamiento del sobrepeso y la obesidad, así como para la disminución del colesterol",
      dose: "Tomar dos capsulas con cada alimento",
      ingredients: ["Lecitina de Soya"],
      photo: "lecitina.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Anáhuac",
      name: "Neo Alfalfa",
      content: "300 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 104,
        latestPurchasePrice: 70,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-06",
          endDate: "2020-05-13",
          percentage: 10,
          newPrice: 93.6,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Suplemento multivitamínico",
      dose: "Tomar 2 tabletas antes de cada alimento",
      ingredients: ["Alfalfa", "Miel de Abeja"],
      photo: "neoalfalfa.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Salud Sexual",
      brand: "Bio-Logium",
      name: "The Sensual Tea",
      content: "2 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 189,
        latestPurchasePrice: 145,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-05",
          endDate: "2020-05-20",
          percentage: 5,
          newPrice: 179.5,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar para mejorar la falta de vigor y para mejorar el desempeño sexual de hombres y mujeres",
      dose: "Tomar solo una tableta, una hora antes del acto",
      ingredients: [
        "Raíz de panax ginseng",
        "Polvo de epimedium brevicomun",
        "Polvo de semilla de rapharus sativus",
      ],
      photo: "sensualtea.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "Pure Nutrición",
      name: "Women Plenna",
      content: "60 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 239,
        latestPurchasePrice: 140,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-11",
          endDate: "2020-05-30",
          percentage: 20,
          newPrice: 191.2,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Nutrientes específicos que contribuyen a un mejor desempeño físico, mental y sexual, que a la vez combate los síntomas de la menopausia",
      dose: "Tomar dos capsulas al día después del desayuno",
      ingredients: [
        "Almidón de maíz",
        "Carbonato de Calcio",
        "Cloruro de Magnesio",
        "Colágeno Hidrolizado",
        "Óxido de Zinc",
      ],
      photo: "womenplenna.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Nutrición Deportiva",
      brand: "Pure Nutrición",
      name: "Men Silver 50",
      content: "60 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 239,
        latestPurchasePrice: 150,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-15",
          endDate: "2020-05-20",
          percentage: 15,
          newPrice: 203.15,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Nutrientes específicos que contribuyen una mejor energía y movimiento articular",
      dose: "Tomar dos capsulas al día después del desayuno",
      ingredients: [
        "Carbonato de Calcio",
        "Almidón de Maíz",
        "Sulfato de Glucosamina",
        "Colágeno hidrolizado",
        "Cloruro de Magnesio",
      ],
      photo: "mensilver.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Antiestrés",
      brand: "Anáhuac",
      name: "Valenox",
      content: "40 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 86,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-15",
          endDate: "2020-05-18",
          percentage: 10,
          newPrice: 77.4,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el tratamiento para el estrés, depresión, nerviosismo e insomnio",
      dose: "Tomar 2 tabletas antes de cada alimento",
      ingredients: ["Valeriana", "Lúpulo", "Pasionaria", "Tila"],
      photo: "valenox.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "Prosa",
      name: "Ginkgo Biloba Plus",
      content: "100 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 67,
        latestPurchasePrice: 40,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-15",
          endDate: "2020-05-22",
          percentage: 10,
          newPrice: 60.3,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Auxiliar en el tratamiento de la circulación sanguínea",
      dose: "Tomar dos capsulas con los alimentos",
      ingredients: ["Ginkgo"],
      photo: "ginkgo.jpg",
    },
    {
      active: false,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Sistema Circulatorio",
      brand: "MGL",
      name: "Ajo Rey",
      content: "200 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 113,
        latestPurchasePrice: 75,
        discount: {
          hasDiscount: true,
          startDate: "2020-05-20",
          endDate: "2020-05-25",
          percentage: 15,
          newPrice: 96.05,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Purifica la sangre y refresca el aparato circulatorio",
      dose: "Tomar dos tabletas antes de cada alimento",
      ingredients: ["Ajo deshidratado"],
      photo: "ajorey.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Sistema Circulatorio",
      brand: "Vidanat",
      name: "Aceite De Hígado Tiburón",
      content: "180 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 105,
        latestPurchasePrice: 60,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-01",
          endDate: "2020-06-03",
          percentage: 15,
          newPrice: 89.25,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar para personas que padecen alguna enfermedad cardiovascular y enfermedades de articulaciones",
      dose: "Tomar dos capsulas 3 veces al día con los alimentos",
      ingredients: ["Aceite de hígado de tiburón", "Bht antioxidantes"],
      photo: "higtiburon.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Sistema Circulatorio",
      brand: "Margarita Naturalmente",
      name: "Zapote Blanco Extracto",
      content: "50 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 92,
        latestPurchasePrice: 78,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-01",
          endDate: "2020-06-05",
          percentage: 15,
          newPrice: 78.2,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description: "Auxiliar en el tratamiento de la hipertensión arterial",
      dose: "Tomar 20 gotas diluidas en ¼ de vaso de agua 3 veces al día",
      ingredients: ["Zapote Blanco", "Hojas de Olivo"],
      photo: "zapotebco.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Sistema Circulatorio",
      brand: "Salud Natural",
      name: "Ajo Deodorizado",
      content: "180 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 116,
        latestPurchasePrice: 60,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-02",
          endDate: "2020-06-07",
          percentage: 25,
          newPrice: 87,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el tratamiento de trastornos circulatorios, digestivos y de arteriosclerosis",
      dose: "Tomar de una a dos tabletas al día",
      ingredients: ["Extracto de Ajo Deodorizado", "Excipiente CBP"],
      photo: "ajodeo.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Colesterol",
      brand: "Anáhuac",
      name: "Triomega 3 6 y 9",
      content: "100 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 267,
        latestPurchasePrice: 205,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-05",
          endDate: "2020-06-10",
          percentage: 20,
          newPrice: 213.6,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en el control de los niveles adecuados de colesterol y triglicéridos",
      dose: "Tomar dos capsulas antes de cada alimento",
      ingredients: ["Aceite de Salmón", "Aceite de Lino", "Aceite de Olivo"],
      photo: "triomega.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "GranaGard",
      name: "Omega 5",
      content: "60 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 661,
        latestPurchasePrice: 570,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-07",
          endDate: "2020-06-10",
          percentage: 10,
          newPrice: 594.9,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Coadyuvante en tratamiento de trastornos cardiovasculares con alto compromiso oxidativo",
      dose: "Mayores de 15 años, dos capsulas al día",
      ingredients: ["Omega 5", "Ácido Punícico"],
      photo: "omega5.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Cerebro y Memoria",
      brand: "GranaGard",
      name: "Omega 5 30",
      content: "30 capsulas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 381,
        latestPurchasePrice: 330,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-09",
          endDate: "2020-06-13",
          percentage: 5,
          newPrice: 364.5,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Coadyuvante en tratamiento de trastornos cardiovasculares con alto compromiso oxidativo",
      dose: "Mayores de 15 años, dos capsulas al día",
      ingredients: ["Omega 5", "Ácido Punícico"],
      photo: "omega530.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Pérdida y Control de Peso",
      brand: "Margarita Naturalmente",
      name: "Semilla De Brasil",
      content: "70 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 34,
        latestPurchasePrice: 20,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-20",
          endDate: "2020-06-22",
          percentage: 5,
          newPrice: 30.6,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Acelera el metabolismo, disminuye la flacidez y sirve como tratamiento para la perdida de peso",
      dose: "Tomar 20 gotas 3 veces al día",
      ingredients: [
        "Semilla de Brasil",
        "Garcinia Cambogia",
        "Lecitina de Soya",
        "Bromelina",
        "Nopal y Sábila",
      ],
      photo: "semillabrasil.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Antiestrés",
      brand: "Salud Natural",
      name: "Taflavix",
      content: "40 tabletas",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 107,
        latestPurchasePrice: 80,
        discount: {
          hasDiscount: true,
          startDate: "2020-06-15",
          endDate: "2020-06-20",
          percentage: 15,
          newPrice: 93.95,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar para el tratamiento de la ansiedad, angustia e irritabilidad; coadyuvante para conciliar el sueño",
      dose:
        "En caso de nerviosismo tomar de una a dos tabletas 3 veces al día; para ayudar a conciliar el sueño tomar dos a tres tabletas una hora antes de acostarse",
      ingredients: [
        "Extracto de seco de Valeriana Officinalis",
        "Extracto de seco de Pasiflora Incamata",
      ],
      photo: "taflavix.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Desinflamatorios",
      brand: "MGL",
      name: "Arnidol Crema Para Golpes",
      content: "35 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 45,
        latestPurchasePrice: 30,
        discount: {
          hasDiscount: true,
          startDate: "2020-07-01",
          endDate: "2020-07-03",
          percentage: 15,
          newPrice: 38.2,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Auxiliar en inflamaciones causadas por golpes, torceduras, esguinces, tensiones musculares, desgarres y problemas reumáticos",
      dose:
        "Aplíquese una capa delgada en el área afectada recomendablemente cada 6 horas",
      ingredients: ["Extracto de Árnica", "Extracto de Hamamelis Virginiana"],
      photo: "arnidol.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Desinflamatorios",
      brand: "Anáhuac",
      name: "Bálsamo Golden Dragón",
      content: "12 gramos",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 70,
        latestPurchasePrice: 55,
        discount: {
          hasDiscount: true,
          startDate: "2020-07-02",
          endDate: "2020-07-05",
          percentage: 15,
          newPrice: 59.5,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Ayuda a reducir el dolor e inflamación en músculos y articulaciones ya que posee propiedades analgésicas y antiinflamatorias",
      dose: "Aplicar la pomada frotando suavemente sobre la piel",
      ingredients: ["Alcanfor", "Mentol", "Aceite de Clavo", "Aceite de Menta"],
      photo: "balsamo.jpg",
    },
    {
      active: true,
      provider: providersList[Math.floor(Math.random() * 5)],
      unitsSold: Math.floor(Math.random() * 10),
      category: "Desinflamatorios",
      brand: "MGL",
      name: "Tónico De Ajo Negro",
      content: "500 mililitros",
      warning:
        "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
      price: {
        salePrice: 84,
        latestPurchasePrice: 50,
        discount: {
          hasDiscount: true,
          startDate: "2020-08-01",
          endDate: "2020-08-03",
          percentage: 20,
          newPrice: 67.2,
        },
      },
      stock: Math.floor(Math.random() * 10),
      priority: Math.round(Math.random()),
      description:
        "Favorecedor de la circulación, ayudando a reducir problemas en los músculos y las articulaciones",
      dose: "Diluir 10 gotas en un vaso de 250 ml de agua, 2 veces al día",
      ingredients: ["Ajo Negro"],
      photo: "ajonegro.jpg",
    },
  ];

  return models.Product.remove({})
    .then(() => models.Product.insertMany(products))
    .then((prods) => {
      console.log(">products added");
      const productsForSales = prods.reduce((acc, cv) => {
        acc.push({ _id: cv._id, name: cv.name, salePrice: cv.price.salePrice });
        return acc;
      }, []);
      // insert clients
      insertClients(productsForSales);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
