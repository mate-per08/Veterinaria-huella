/**
 * ARCHIVO CENTRAL DE CONFIGURACIÓN - VETERINARIA HUELLA
 * 
 * Todos los datos del negocio (contacto, horarios, servicios, equipo,
 * reseñas, FAQs y fotos) están centralizados aquí para que un cliente real
 * pueda reemplazarlos en cuestión de minutos.
 */

export const siteConfig = {
  // Marca y concepto
  brand: {
    name: "Veterinaria Huella",
    shortName: "huella.",
    tagline: "Su bienestar empieza con un buen cuidado.",
    subtitle: "Atención veterinaria cercana, prevención y acompañamiento para que tu compañero tenga una vida más sana y feliz.",
    heroBadge: "VETERINARIA DE CONFIANZA EN MAR DEL PLATA",
    heroSupporting: "Un equipo que cuida de ellos y acompaña a quienes más los quieren.",
    descriptor: "Veterinaria de barrio moderna, cercana y profesional. Atiende perros y gatos en Mar del Plata.",
    city: "Mar del Plata, Buenos Aires",
  },

  // Datos de contacto reales obligatorios
  contact: {
    phone: "+54 223 623-9560",
    phoneDisplay: "223 623-9560",
    phoneHref: "tel:+542236239560",
    whatsappNumber: "5492236239560",
    whatsappBaseUrl: "https://wa.me/5492236239560",
    defaultWhatsappMessage: "Hola, quisiera pedir un turno para mi mascota.",
    address: "9 de Julio 9187, Mar del Plata, Buenos Aires, Argentina",
    addressShort: "9 de Julio 9187, Mar del Plata",
    email: "hola@veterinariahuella.com.ar",
    mapsEmbedQuery: "9 de Julio 9187, Mar del Plata, Buenos Aires",
    mapsEmbedUrl: "https://www.google.com/maps?q=9+de+Julio+9187,+Mar+del+Plata,+Buenos+Aires&output=embed",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=9+de+Julio+9187,+Mar+del+Plata,+Buenos+Aires,+Argentina",
    social: {
      instagram: "https://instagram.com/veterinariahuella.mdp",
      facebook: "https://facebook.com/veterinariahuella.mdp",
    }
  },

  // Horarios de atención comercial
  hours: [
    {
      days: "Lunes a Viernes",
      time: "09:00 a 19:30 hs",
      note: "Turnos programados y consultas",
      activeDays: [1, 2, 3, 4, 5], // Mon to Fri
    },
    {
      days: "Sábados",
      time: "09:00 a 13:30 hs",
      note: "Turnos y controles matutinos",
      activeDays: [6], // Sat
    },
    {
      days: "Domingos y feriados",
      time: "Cerrado",
      note: "Ante urgencias fuera de hora, consultar por teléfono",
      activeDays: [0], // Sun
    },
  ],

  // Destacados de confianza del Hero
  heroTrustItems: [
    {
      label: "Perros y gatos",
      description: "Atención adaptada a las necesidades de cada especie.",
    },
    {
      label: "Atención cercana",
      description: "Trato humano, escucha activa y tiempo dedicado en consulta.",
    },
    {
      label: "Turnos por WhatsApp",
      description: "Coordinación rápida y sin esperas innecesarias en sala.",
    },
  ],

  // Catálogo completo de servicios
  services: [
    {
      id: "consultas",
      title: "Consultas clínicas",
      shortDesc: "Evaluamos su salud de forma integral y te explicamos con claridad cada diagnóstico y próximos pasos.",
      fullDesc: "Una evaluación completa de cabeza a cola en un ambiente pensado para reducir el estrés. Nos tomamos el tiempo para escuchar tus observaciones cotidianas, revisar signos vitales y acordar el mejor plan de cuidado.",
      idealFor: "Chequeos periódicos, cambios de conducta, decaimiento o síntomas que te llamen la atención.",
      link: "/servicios/consultas",
      isInternalPage: true,
      whatsappMessage: "Hola, quisiera consultar por una consulta clínica para mi mascota.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
      icon: "Stethoscope",
    },
    {
      id: "vacunacion",
      title: "Vacunación y prevención",
      shortDesc: "Planes de vacunación y desparasitación adaptados a su edad, hábitos y estilo de vida.",
      fullDesc: "La prevención es el pilar de una vida larga. Te ayudamos a mantener su libreta sanitaria al día con vacunas esenciales y recomendaciones claras de control antiparasitario.",
      idealFor: "Cachorros y gatitos que inician su esquema, y refuerzos anuales en adultos y seniors.",
      link: "/servicios/vacunacion",
      isInternalPage: true,
      whatsappMessage: "Hola, quisiera consultar por el esquema de vacunación de mi mascota.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
      icon: "ShieldCheck",
    },
    {
      id: "controles",
      title: "Controles periódicos de salud",
      shortDesc: "Seguimiento preventivo para detectar a tiempo cualquier cambio silencioso en su organismo.",
      fullDesc: "Control de peso, condición corporal, salud dental, auscultación cardíaca y chequeos analíticos recomendados según la etapa de su vida.",
      idealFor: "Mascotas adultas y seniors que necesitan control preventivo anual o semestral.",
      link: null,
      isInternalPage: false,
      whatsappMessage: "Hola, quisiera coordinar un control periódico de salud para mi mascota.",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
      icon: "Activity",
    },
    {
      id: "felinos",
      title: "Atención felina respetuosa",
      shortDesc: "Manejo amable y respetuoso para que la visita al veterinario no sea una experiencia traumática.",
      fullDesc: "Los gatos perciben el entorno de manera diferente. Aplicamos técnicas de manejo de bajo estrés, tiempos pausados y feromonas ambientales para una consulta tranquila.",
      idealFor: "Gatos sensibles, temerosos o familias que evitan la consulta por el estrés del traslado.",
      link: null,
      isInternalPage: false,
      whatsappMessage: "Hola, quisiera consultar por atención veterinaria para mi gato.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      icon: "Smile",
    },
    {
      id: "cirugias",
      title: "Cirugías y procedimientos menores",
      shortDesc: "Castraciones, limpiezas dentales y curaciones con monitoreo riguroso y analgesia postoperatoria.",
      fullDesc: "Quirófano equipado para intervenciones programadas. Priorizamos el control estricto del dolor y te brindamos indicaciones claras para que lo cuides en casa.",
      idealFor: "Esterilizaciones preventivas, extracciones simples, suturas y tratamientos dentales.",
      link: null,
      isInternalPage: false,
      whatsappMessage: "Hola, quisiera pedir información sobre un procedimiento quirúrgico o castración.",
      image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=800&q=80",
      icon: "Scissors",
    },
    {
      id: "senior",
      title: "Cuidado en la etapa senior",
      shortDesc: "Acompañamiento especializado para que sus años dorados sean cómodos, activos y sin dolor.",
      fullDesc: "A partir de los 7-8 años sus necesidades cambian. Evaluamos movilidad articular, función renal, nutrición adecuada y pautas para adaptar el hogar a su ritmo.",
      idealFor: "Perros y gatos mayores que empiezan a levantarse más despacio o cambian sus rutinas.",
      link: null,
      isInternalPage: false,
      whatsappMessage: "Hola, quisiera consultar por el cuidado y chequeo para mi mascota senior.",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
      icon: "Heart",
    },
  ],

  // Diferenciales de valor
  differentials: {
    title: "No se trata solo de atenderlos. Se trata de entenderlos.",
    subtitle: "Un buen cuidado implica escuchar tus preocupaciones, explicarte las opciones reales y acompañarte en cada decisión sobre su salud.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=80",
    points: [
      {
        title: "Explicaciones claras, sin tecnicismos innecesarios.",
        desc: "Te explicamos qué le pasa, por qué ocurre y cuáles son los caminos posibles con lenguaje humano y transparente.",
      },
      {
        title: "Atención adaptada a las necesidades de cada mascota.",
        desc: "No todos los animales son iguales. Respetamos sus tiempos, su nivel de timidez y minimizamos el estrés en consulta.",
      },
      {
        title: "Acompañamiento para cuidar su salud a largo plazo.",
        desc: "No nos limitamos a recetar: te ayudamos a construir pautas de nutrición, ejercicio y prevención para que viva más y mejor.",
      },
    ],
  },

  // Recorrido de primera visita (Paso a paso)
  firstVisitSteps: [
    {
      step: "01",
      title: "Escribinos por WhatsApp",
      desc: "Nos contás sobre tu mascota y qué motivo motiva la consulta. Sin formularios complicados.",
    },
    {
      step: "02",
      title: "Coordinamos el turno",
      desc: "Te ofrecemos horarios que se acomoden a tu día para evitar esperas y aglomeraciones en sala.",
    },
    {
      step: "03",
      title: "Te recibimos con calma",
      desc: "Dedicamos los primeros minutos a que tu compañero explore y se sienta seguro antes del examen.",
    },
    {
      step: "04",
      title: "Te explicamos y acompañamos",
      desc: "Te vas con un panorama claro, las indicaciones por escrito y el canal abierto para cualquier duda posterior.",
    },
  ],

  // Equipo profesional (realista, verosímil, sin matrículas inventadas)
  team: [
    {
      name: "Dra. Valentina Rossi",
      role: "Atención clínica y medicina preventiva",
      bio: "Apasionada por la medicina preventiva y la relación entre las familias y sus compañeros de cuatro patas. Su objetivo es que cada consulta sea una conversación tranquila y enriquecedora.",
      approach: "Creer en una veterinaria cercana, donde escuchar al tutor sea tan importante como revisar al paciente.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      badge: "Clínica general",
    },
    {
      name: "Dr. Mateo Gómez",
      role: "Cirugía de tejidos blandos y manejo felino",
      bio: "Especial dedicación al manejo de bajo estrés en felinos y procedimientos quirúrgicos programados, con un enfoque prioritario en el alivio del dolor y la recuperación postoperatoria.",
      approach: "Priorizar la serenidad del animal en cada maniobra para que el regreso a casa sea rápido y seguro.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      badge: "Cirugía y felinos",
    },
    {
      name: "Lucía Méndez",
      role: "Asistencia veterinaria y cuidado integral",
      bio: "Encargada de recibir a cada paciente con ternura y acompañar al equipo en sala y quirófano. Su vocación es hacer que cada perro o gato se sienta bienvenido desde la puerta.",
      approach: "Cuidar los detalles: caricias a tiempo, voz suave y un espacio acogedor que transmita paz.",
      image: "/images/team/lucia-mendez.jpg",
      badge: "Cuidado y recepción",
    },
  ],

  // Reseñas de ejemplo ilustrativas
  reviews: [
    {
      author: "Mariana R.",
      pet: "Mamá de Simón (Golden Retriever, 4 años)",
      stars: 5,
      comment: "Llevé a Simón por una alergia que no mejoraba. Por primera vez me explicaron con calma el origen del problema y no me llenaron de pastillas innecesarias. Simón entra moviendo la cola, eso lo dice todo.",
      date: "Hace 2 semanas",
    },
    {
      author: "Esteban F.",
      pet: "Tutor de Mila y Oliver (gatos rescatados)",
      stars: 5,
      comment: "Siempre era una odisea llevar a mis gatos al veterinario. Acá el ambiente es super tranquilo, respetan sus tiempos y no los fuerzan. Se nota la dedicación y el amor por lo que hacen.",
      date: "Hace 1 mes",
    },
    {
      author: "Carla D.",
      pet: "Compañera de Lola (Caniche senior, 12 años)",
      stars: 5,
      comment: "Excelente el plan que armaron para las articulaciones de Lola. Está mucho más animada y me enseñaron cómo adaptar los paseos a su edad. Muy agradecida con la atención.",
      date: "Hace 1 mes",
    },
  ],

  // Preguntas Frecuentes (FAQ)
  faqs: [
    {
      question: "¿Cómo puedo solicitar un turno?",
      answer: "La manera más rápida y práctica es a través de nuestro WhatsApp. Nos indicás el motivo de la consulta, la especie de tu compañero y te ofrecemos los horarios disponibles más convenientes para tu agenda.",
    },
    {
      question: "¿Atienden sin turno previo?",
      answer: "Trabajamos principalmente con turnos programados para garantizar a cada paciente el tiempo y la dedicación que merece, evitando esperas y el estrés en la sala. Sin embargo, si tenés un imprevisto, te recomendamos escribirnos o llamarnos antes de venir para indicarte el mejor momento del día.",
    },
    {
      question: "¿Qué debo llevar a la primera consulta?",
      answer: "Te sugerimos traer su libreta sanitaria o carnet de vacunación (si lo tenés), los estudios previos recientes y anotar cualquier duda o comportamiento particular que hayas notado en los últimos días. Para perros sugerimos collar y correa; para gatos, transportadora segura.",
    },
    {
      question: "¿Cómo actúan ante una situación de urgencia?",
      answer: "Si tu compañero presenta una emergencia dentro de nuestro horario de atención, comunicate inmediatamente por teléfono (+54 223 623-9560) para que nuestro equipo prepare las instalaciones antes de tu llegada. Fuera de nuestro horario, te sugerimos acudir a los centros de guardia veterinaria 24 hs de la ciudad de Mar del Plata.",
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer: "Aceptamos efectivo, transferencias bancarias directas, tarjetas de débito y crédito a través de terminales de cobro locales y medios electrónicos habituales.",
    },
    {
      question: "¿Atienden perros y gatos de todas las edades?",
      answer: "Sí, brindamos atención desde las primeras semanas de vida (planes de desparasitación y vacunación de cachorros y gatitos) hasta la adultez y los cuidados geriátricos en la etapa senior.",
    },
    {
      question: "¿Cómo sé qué vacunas necesita mi mascota?",
      answer: "El esquema depende de su especie, edad, si sale a la calle, convive con otros animales o viaja. En la consulta revisamos su historia y te armamos un calendario a medida, sin sobrevacunaciones innecesarias.",
    },
  ],

  // Textos y enlaces de demostración
  demo: {
    bannerText: "Sitio de demostración · Veterinaria ficticia. Dirección, horarios, equipo y reseñas son ilustrativos.",
    creditLabel: "Demo diseñada por Permaweb Studio",
    creditUrl: "https://permawebstudio.com",
    footerDisclaimer: "Este sitio web es una maqueta comercial desarrollada como demostración de diseño, experiencia de usuario y desarrollo front-end. Los nombres, profesionales y opiniones expuestos son ficticios.",
  },
};

/**
 * Genera un link directo a WhatsApp con mensaje codificado
 */
export function buildWhatsAppLink(customMessage) {
  const message = customMessage || siteConfig.contact.defaultWhatsappMessage;
  return `${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
