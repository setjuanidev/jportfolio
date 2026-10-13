```javascript
const translations = {
  en: {
    subtitle: "Web Development Student | IT Support Technician",
    downloadCV: "Download CV",
    profile: "Professional Profile",
    profileDescription: "I enjoy creating simple and functional websites using HTML, CSS and JavaScript, focusing on clean interfaces and attention to detail. My experience in sales has helped me understand customer needs, which I apply when designing user-centred web solutions.",
    experience: "Work Experience",

    kitchenAssistant: "2026 | Kitchen Assistant",
    kitchenDescription: "Prepared and assembled starters, main courses and desserts. Managed the salad buffet and replenished food supplies. Prepared ingredients, including cutting and portioning. Supported the chef and kitchen team during service. Maintained kitchen cleanliness and organisation.",

    allRounder: "2026 | All-Rounder",
    allRounderDescription: "Carried out general maintenance, basic repairs and painting. Cleaned lodges, kitchens and shared living areas. Performed gardening and plant care. Assisted with dishwashing and restaurant service as a runner when required.",

    storeManager: "Store Manager",
    storeManagerDescription: "Managed daily store operations, sales and customer service. Handled stock control, cash management and store organisation. Advised customers and built long-term customer relationships.",

    waiter: "Waiter",
    waiterAndShiftSupervisor: "Waiter & Shift Supervisor",
    supervisor: "Supervisor",

    itSupportTitle: "Independent IT Support Technician",
    freelance: "Freelance · Remote and On-site",
    itSupportDescription: "Provided technical support for hardware and software issues. Diagnosed and troubleshot computer problems. Assembled, upgraded and maintained PCs. Assisted clients with technical issues remotely and on-site.",

    education: "Education",
    webDevelopmentDegree: "Web Development Degree",
    unER: "Universidad Nacional de Entre Ríos (UNER), Argentina",
    webDevelopmentDegreeDescription: "Currently studying Web Development.",

    dataAnalysisCourse: "Data Analysis with Python",
    dataAnalysisDescription: "Online training in Python, pandas, Matplotlib and data analysis tools such as Jupyter.",

    webServicesTitle: "Web Services",
    webServicesDescription: "Training in web services.",

    pythonDevelopmentTitle: "Python Development",
    pythonDevelopmentDescription: "Intermediate-level Python programming.",

    javascriptDevelopmentTitle: "JavaScript Web Development",
    javascriptDevelopmentDescription: "Training in JavaScript web development.",

    skills: "Skills",
    customerService: "Customer service",
    activeListening: "Active listening",
    location: "Copenhagen, Denmark"
  },

  es: {
    subtitle: "Estudiante de Desarrollo Web | Técnico de Soporte Informático",
    downloadCV: "Descargar CV",
    profile: "Perfil profesional",
    profileDescription: "Me gusta crear sitios web sencillos y funcionales con HTML, CSS y JavaScript, prestando atención a las interfaces limpias y los detalles. Mi experiencia en ventas me ha ayudado a comprender las necesidades de los clientes, algo que aplico al diseñar soluciones web centradas en el usuario.",
    experience: "Experiencia laboral",

    kitchenAssistant: "2026 | Ayudante de cocina",
    kitchenDescription: "Preparación y montaje de entrantes, platos principales y postres. Gestión y reposición del buffet de ensaladas. Preparación, corte y porcionado de ingredientes. Apoyo al chef y al equipo durante el servicio. Limpieza y organización de la cocina.",

    allRounder: "2026 | Personal polivalente",
    allRounderDescription: "Mantenimiento general, reparaciones básicas y pintura. Limpieza de cabañas, cocinas y zonas comunes. Jardinería y cuidado de plantas. Apoyo en el lavado de platos y en el servicio de restaurante como runner cuando era necesario.",

    storeManager: "Encargado de tienda",
    storeManagerDescription: "Gestión de las operaciones diarias, ventas y atención al cliente. Control de stock, manejo de caja y organización del local. Asesoramiento y fidelización de clientes.",

    waiter: "Camarero",
    waiterAndShiftSupervisor: "Camarero y encargado de turno",
    supervisor: "Supervisor",

    itSupportTitle: "Técnico independiente de soporte informático",
    freelance: "Autónomo · Remoto y presencial",
    itSupportDescription: "Soporte técnico de hardware y software. Diagnóstico y resolución de problemas informáticos. Montaje, actualización y mantenimiento de ordenadores. Asistencia técnica remota y presencial.",

    education: "Formación",
    webDevelopmentDegree: "Tecnicatura Universitaria en Desarrollo Web",
    unER: "Universidad Nacional de Entre Ríos (UNER), Argentina",
    webDevelopmentDegreeDescription: "Actualmente cursando la carrera de Desarrollo Web.",

    dataAnalysisCourse: "Análisis de datos con Python",
    dataAnalysisDescription: "Formación online en Python, pandas, Matplotlib y herramientas de análisis de datos como Jupyter.",

    webServicesTitle: "Servicios web",
    webServicesDescription: "Formación en servicios web.",

    pythonDevelopmentTitle: "Desarrollo con Python",
    pythonDevelopmentDescription: "Programación con Python de nivel intermedio.",

    javascriptDevelopmentTitle: "Desarrollo web con JavaScript",
    javascriptDevelopmentDescription: "Formación en desarrollo web con JavaScript.",

    skills: "Habilidades",
    customerService: "Atención al cliente",
    activeListening: "Escucha activa",
    location: "Copenhague, Dinamarca"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[lang][key];

    if (translation) {
      element.textContent = translation;
    }
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage("en");
```