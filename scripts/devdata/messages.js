const messages = [
  {
    name: "Anna Faris",
    email: "anna.faris@gmail.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor.",
    seen: true,
    sentAt: "2020-01-20",
  },
  {
    name: "Bill Hader",
    email: "bill.hader@hotmail.com",
    message:
      "Morbi tempor fermentum turpis, et cursus risus varius eget. Curabitur nec urna augue. Praesent ullamcorper.",
    seen: false,
    sentAt: "2020-02-13",
  },
  {
    name: "Bruce Campbell",
    email: "bruce343@yahoo.com",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum, pretium non ipsum.",
    seen: false,
    sentAt: "2020-03-25",
  },
  {
    name: "Phil Lord",
    email: "phil.lord@gmail.com",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum.",
    seen: true,
    sentAt: "2020-04-15",
  },
  {
    name: "Al Roker",
    email: "alroker1980@yahoo.com.mx",
    message:
      "Curabitur varius sed turpis eu tempor. Duis semper nibh sed porta gravida. Pellentesque cursus elit et nisl laoreet, vel tristique purus gravida. Integer mollis libero sit amet rhoncus sagittis.",
    seen: false,
    sentAt: "2020-04-20",
  },
  {
    name: "Juan Pérez",
    email: "juan.perez@gmail.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: true,
    sentAt: "2020-04-21",
  },
  {
    name: "Israel Enriquez",
    email: "isra.enr@yahoo.com.mx",
    message:
      "Aliquam consequat magna non lorem dignissim, eu varius enim elementum. Vivamus eget tempor sem, sed iaculis urna. Sed imperdiet aliquam ornare.",
    seen: false,
    sentAt: "2020-04-25",
  },
  {
    name: "Eulogio Blazquez",
    email: "eugenio45@hotmail.com",
    message:
      "Sed ac orci vel sapien lobortis bibendum non eu turpis. Nulla elementum tortor ut purus vulputate aliquam. Nam porta non eros non interdum.",
    seen: false,
    sentAt: "2020-04-24",
  },
  {
    name: "Leire Espada",
    email: "leire.estradaaa@hotmail.com",
    message:
      "Suspendisse egestas neque in urna semper, eget tincidunt ante venenatis. Mauris pretium ipsum nibh, id maximus eros feugiat vitae. Maecenas sit amet elementum nulla. Morbi tempor fermentum turpis, et cursus risus varius eget. Curabitur nec urna augue. Praesent ullamcorper.",
    seen: true,
    sentAt: "2020-04-25",
  },
  {
    name: "Carmen Poveda",
    email: "carmenn123@yahoo.com.mx",
    message:
      "Sem ut fringilla ultrices, neque enim consectetur justo, a tincidunt orci tortor ut mi. Nunc at ante sem. Aliquam id leo in augue placerat mattis. Mauris ut feugiat erat, quis ultrices leo.",
    seen: false,
    sentAt: "2020-04-26",
  },
  {
    name: "Judit Navarro",
    email: "juditnav4567@gmail.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: true,
    sentAt: "2020-04-22",
  },
  {
    name: "Svetlana Maldonado",
    email: "svetlanamald0000@hotmail.com",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum, pretium non ipsum. Vivamus sem odio, convallis dictum scelerisque at, commodo a velit. In hac habitasse platea dictumst. Curabitur in tincidunt arcu, in gravida eros. Vivamus dapibus et velit pellentesque placerat. Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: false,
    sentAt: "2020-04-29",
  },
  {
    name: "Luciano Cerda",
    email: "luciano@yahoo.com",
    message:
      "Integer mollis libero sit amet rhoncus sagittis. Morbi id enim in metus pretium faucibus. Phasellus a dolor velit. Sed ac eros blandit, aliquet urna sit amet, fermentum ipsum. Etiam justo nisi, egestas vel ipsum ac, ornare imperdiet velit. Ut egestas egestas purus a dictum. Sed placerat neque a velit tristique interdum. Donec nec scelerisque risus.",
    seen: false,
    sentAt: "2020-04-30",
  },
  {
    name: "Desamparados Prada",
    email: "pradaprada@gmail.com",
    message:
      " Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: true,
    sentAt: "2020-04-30",
  },
  {
    name: "Sheila Rubio",
    email: "sheilasss@yahoo.com.mx",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: false,
  },
  {
    name: "Engracia Gordillo",
    email: "engrtaciagordi@gmail.com",
    message:
      "Loliquam consequat magna non lorem dignissim, eu varius enim elementum. Vivamus eget tempor sem, sed iaculis urna. Sed imperdiet aliquam ornare.",
    seen: true,
  },
  {
    name: "Stefan Moreno",
    email: "stefanmoreno67436784@hotmail.com",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum, pretium non ipsum. Vivamus sem odio, convallis dictum scelerisque at, commodo a velit. In hac habitasse platea dictumst. Curabitur in tincidunt arcu, in gravida eros. Vivamus dapibus et velit pellentesque placerat. Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: false,
  },
  {
    name: "Maria Barcelo",
    email: "mariabarcellll@yahoo.com",
    message:
      "Integer mollis libero sit amet rhoncus sagittis. Morbi id enim in metus pretium faucibus. Phasellus a dolor velit. Sed ac eros blandit, aliquet urna sit amet, fermentum ipsum. Etiam justo nisi, egestas vel ipsum ac, ornare imperdiet velit. Ut egestas egestas purus a dictum. Sed placerat neque a velit tristique interdum. Donec nec scelerisque risus.",
    seen: false,
  },
  {
    name: "Diana Bravo",
    email: "diiiana34445@gmail.com",
    message:
      " Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: true,
  },
  {
    name: "Irene Carrero",
    email: "ireneenene23@yahoo.com.mx",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: false,
  },
];

module.exports = messages;
