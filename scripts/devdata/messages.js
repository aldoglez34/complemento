const messages = [
  {
    name: "Anna Faris",
    email: "anna.faris@gmail.com",
    subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor.",
    seen: true,
    sentAt: "2020-01-20",
  },
  {
    name: "Bill Hader",
    email: "bill.hader@hotmail.com",
    subject: "Morbi tempor fermentum turpis, et cursus risus varius eget.",
    message:
      "Morbi tempor fermentum turpis, et cursus risus varius eget. Curabitur nec urna augue. Praesent ullamcorper.",
    seen: true,
    sentAt: "2020-02-13",
  },
  {
    name: "Bruce Campbell",
    email: "bruce343@yahoo.com",
    subject: "Donec posuere turpis ac quam tristique finibus.",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum, pretium non ipsum.",
    seen: true,
    sentAt: "2020-03-25",
  },
  {
    name: "Phil Lord",
    email: "phil.lord@gmail.com",
    subject: "Phasellus non bibendum dolor.",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum.",
    seen: true,
    sentAt: "2020-04-15",
  },
  {
    name: "Al Roker",
    email: "alroker1980@yahoo.com.mx",
    subject: "Curabitur varius sed turpis eu tempor.",
    message:
      "Curabitur varius sed turpis eu tempor. Duis semper nibh sed porta gravida. Pellentesque cursus elit et nisl laoreet, vel tristique purus gravida. Integer mollis libero sit amet rhoncus sagittis.",
    seen: true,
    sentAt: "2020-04-20",
  },
  {
    name: "Juan Pérez",
    email: "juan.perez@gmail.com",
    subject: "Consectetur adipiscing elit.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: true,
    sentAt: "2020-04-21",
  },
  {
    name: "Israel Enriquez",
    email: "isra.enr@yahoo.com.mx",
    subject: "Consectetur adipiscing elit.",
    message:
      "Aliquam consequat magna non lorem dignissim, eu varius enim elementum. Vivamus eget tempor sem, sed iaculis urna. Sed imperdiet aliquam ornare.",
    seen: true,
    sentAt: "2020-04-25",
  },
  {
    name: "Eulogio Blazquez",
    email: "eugenio45@hotmail.com",
    subject: "Sed ac orci vel sapien lobortis bibendum non eu turpis.",
    message:
      "Sed ac orci vel sapien lobortis bibendum non eu turpis. Nulla elementum tortor ut purus vulputate aliquam. Nam porta non eros non interdum.",
    seen: true,
    sentAt: "2020-04-24",
  },
  {
    name: "Leire Espada",
    email: "leire.estradaaa@hotmail.com",
    subject: "Eget tincidunt ante venenatis.",
    message:
      "Suspendisse egestas neque in urna semper, eget tincidunt ante venenatis. Mauris pretium ipsum nibh, id maximus eros feugiat vitae. Maecenas sit amet elementum nulla. Morbi tempor fermentum turpis, et cursus risus varius eget. Curabitur nec urna augue. Praesent ullamcorper.",
    seen: true,
    sentAt: "2020-04-25",
  },
  {
    name: "Carmen Poveda",
    email: "carmenn123@yahoo.com.mx",
    subject: "A tincidunt orci tortor ut mi.",
    message:
      "Sem ut fringilla ultrices, neque enim consectetur justo, a tincidunt orci tortor ut mi. Nunc at ante sem. Aliquam id leo in augue placerat mattis. Mauris ut feugiat erat, quis ultrices leo.",
    seen: true,
    sentAt: "2020-04-26",
  },
  {
    name: "Judit Navarro",
    email: "juditnav4567@gmail.com",
    subject: "Nullam accumsan nibh sed dui dictum.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: true,
    sentAt: "2020-04-22",
  },
  {
    name: "Svetlana Maldonado",
    email: "svetlanamald0000@hotmail.com",
    subject: "Phasellus non bibendum dolor. Proin id laoreet arcu.",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum, pretium non ipsum. Vivamus sem odio, convallis dictum scelerisque at, commodo a velit. In hac habitasse platea dictumst. Curabitur in tincidunt arcu, in gravida eros. Vivamus dapibus et velit pellentesque placerat. Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: true,
    sentAt: "2020-04-29",
  },
  {
    name: "Luciano Cerda",
    email: "luciano@yahoo.com",
    subject: "Sed ac eros blandit, aliquet urna sit amet.",
    message:
      "Integer mollis libero sit amet rhoncus sagittis. Morbi id enim in metus pretium faucibus. Phasellus a dolor velit. Sed ac eros blandit, aliquet urna sit amet, fermentum ipsum. Etiam justo nisi, egestas vel ipsum ac, ornare imperdiet velit. Ut egestas egestas purus a dictum. Sed placerat neque a velit tristique interdum. Donec nec scelerisque risus.",
    seen: true,
    sentAt: "2020-04-30",
  },
  {
    name: "Desamparados Prada",
    email: "pradaprada@gmail.com",
    subject: "Integer mollis, ipsum nec auctor sodales.",
    message:
      " Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: true,
    sentAt: "2020-04-30",
  },
  {
    name: "Sheila Rubio",
    email: "sheilasss@yahoo.com.mx",
    subject: "Integer mollis, ipsum nec auctor sodales.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: false,
  },
  {
    name: "Engracia Gordillo",
    email: "engrtaciagordi@gmail.com",
    subject: "Vivamus eget tempor sem, sed iaculis urna.",
    message:
      "Loliquam consequat magna non lorem dignissim, eu varius enim elementum. Vivamus eget tempor sem, sed iaculis urna. Sed imperdiet aliquam ornare.",
    seen: false,
  },
  {
    name: "Stefan Moreno",
    email: "stefanmoreno67436784@hotmail.com",
    subject: "Phasellus non bibendum dolor.",
    message:
      "Donec posuere turpis ac quam tristique finibus. Phasellus non bibendum dolor. Proin id laoreet arcu. Integer sem metus, dapibus vel mollis dictum, pretium non ipsum. Vivamus sem odio, convallis dictum scelerisque at, commodo a velit. In hac habitasse platea dictumst. Curabitur in tincidunt arcu, in gravida eros. Vivamus dapibus et velit pellentesque placerat. Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: false,
  },
  {
    name: "Maria Barcelo",
    email: "mariabarcellll@yahoo.com",
    subject: "Sed ac eros blandit, aliquet urna sit amet.",
    message:
      "Integer mollis libero sit amet rhoncus sagittis. Morbi id enim in metus pretium faucibus. Phasellus a dolor velit. Sed ac eros blandit, aliquet urna sit amet, fermentum ipsum. Etiam justo nisi, egestas vel ipsum ac, ornare imperdiet velit. Ut egestas egestas purus a dictum. Sed placerat neque a velit tristique interdum. Donec nec scelerisque risus.",
    seen: false,
  },
  {
    name: "Diana Bravo",
    email: "diiiana34445@gmail.com",
    subject: "Nulla eget tortor ante.",
    message:
      " Etiam tempor dolor quis ex tincidunt tincidunt. Integer mollis, ipsum nec auctor sodales, dolor nulla euismod felis, vel rutrum leo ex semper risus. Nulla eget tortor ante. Nam congue vitae odio euismod semper.",
    seen: false,
  },
  {
    name: "Irene Carrero",
    email: "ireneenene23@yahoo.com.mx",
    subject:
      "Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nibh sed dui dictum, vel efficitur tellus volutpat. Aliquam orci sem, posuere at varius condimentum, interdum eget dolor. Maecenas tellus justo, pulvinar eu nulla quis, malesuada finibus nisi. Vivamus ultricies sit amet lorem sed condimentum.",
    seen: false,
  },
];

module.exports = messages;
