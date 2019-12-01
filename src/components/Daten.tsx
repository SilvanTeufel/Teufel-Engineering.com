export const projects = {
  Angular: {
    id: 11,
    title: "Frontendentwicklung mit AngularJS",
    date: "06/2019 – dato",
    company: "Softwareschmiede in Achern",
    activities: [
      "Unterstützung bei der Projektplanung für ein Warenwirtschaftssystem.",
      "Frontendentwicklung mit AngularJS , Schemaform.io, uiGrid, ...",
      "Bessere Visualisierung des Frontend mithilfe von CSS.",
      "Konzeptentwicklung für neue Projekte.",
      "Entwicklung von Strategien und Lösungen für Projekte."
    ],
    imagepath: "./Pictures/KVblue.jpg"
  },
  Mikrocontroller: {
    id: 10,
    title: "Embedded/IoT-System für Zugangskontrollen",
    date: "11/2018 – dato",
    company: "Gallenschütz GmbH",
    activities: [
      "Mitwirkung beim Konzept des Systems (IOT/Industrie4.0/Digitalisierung).",
      "Entwicklung des Prototypen, der Hardware bzw. Platine mit KiCad.",
      "Schreiben der Software (Microcontroller) (Treiber für I2C / SPI / UART / W5500 (http -Client) / PCA9635 / ... ).",
      "Schreiben der Software für Linux-Server-Backend (REST-API).",
      "Programmierung des Frontend (ReactJS -Typescript) für Webinterface und Datenabruf."
    ],
    imagepath: "./Pictures/KVblue.jpg"
  },
  SQL: {
    id: 9,
    title: "Entwicklung einer Webapp (ReactJS) mit PHP-API und SQL-Datenbank",
    date: "11/2018 – dato",
    company: "IT-Consulting Unternehmen.",
    activities: [
      "Entwicklung des Frontend mithilfe von ReactJS.",
      "Programmierung einer API mittels PHP, die Contao (CMS), als Schnittstelle zur mySQL-Datenbank verwendet.",
      "Entwicklung von Styling und Animationen über CSS.",
      "Teilnahme an Diskussionen zur Lösungsfindung."
    ],
    imagepath: "./Pictures/PROG.png"
  },
  "E-Bike": {
    id: 8,
    title: 'Entwicklung eines Moduls zur "Anfahrtsregelung" bei E-Bikes',
    date: "10/2018 – dato",
    company: "R & E Stricker Reha-Entwicklungen GmbH",
    activities: [
      "Entwicklung eines Ansatzes zur Problemlösung und Auswahl der zu verwendenen Hardware.",
      "Entwicklung einer Platine mit Mikrocontroller, zur Detektion von Sensorsignalen.",
      "Auswertung der Signale und Entwicklung von digitalen und analogen Filtern",
      "Aufnahme von Messwerten für Kalibrierkurven und implementierung der Ergebnisse ins Programm",
      "Dokumentation des Projekts."
    ],
    imagepath: "./Pictures/BIKE.jpg"
  },
  Typescript: {
    id: 7,
    title: "Programmierung einer Webapplikation mit Datenbankanbindung",
    date: "10/2018 – 12/2018",
    company: "-",
    activities: [
      "Programmierung des Frontend über React – Typescript.",
      "Für userspezifischen Zugriff wurde über ExpressJS eine API programmiert, mittels JWT gesichert und mit einer dokumentenorientierten Datenbank verknüpft.",
      "Ein Öffentlicher Zugangsbereich mit beschränkten Rechten wurde über die gleiche API realisiert.",
      "Programmierung beinhaltet Rechtevergabe und Benutzerverwaltung.",
      "Dokumentation des Projekts"
    ],
    imagepath: "./Pictures/PROG.jpg"
  },
  React: {
    id: 6,
    title: "Datenbank für Bestellungen und Produktionserfassung",
    date: "07/2018 – 10/2018",
    company: "Elektronik- und IT-Consulting Unternehmen",
    activities: [
      "Planung einer webbasierten Datenbank für die Eingabe und Speicherung von Produkt und Kundendaten, sowie der Erstellung von Fertigungsaufträgen.",
      "Erstellung und Festlegung der Struktur in Bezug auf den Produktionsablauf des Unternehmens.",
      "Programmierung der Weboberfläche mit Datenbankzugriff und spezifischer Benutzeroberfläche.",
      "Programmierung des Frontends mithilfe der ReactJS-Library.",
      "Realisierung eines lokalen Linux-Server mit dokumentenorietiertem Backend auf LOW-DB-Basis."
    ],
    imagepath: "./Pictures/DATABASEb.jpg"
  },
  Sensorik: {
    id: 5,
    title: "Studie zum Sensorvergleich magnetischer Sensoren",
    date: "04/2018 – 09/2018",
    company: "-",
    activities: [
      "Planung eines Prototyps zur Positionsdetektion mittels Hall-Sensoren.",
      "Aufbau des Prototyps und Entwurf eines Referenzmesssystems.",
      "Programmierung eines Mikrocontrollers (C++), sowie einer Windowskonsolenanwendung in C++.",
      "Programmierung einer Scilab/Matlab-Anwendung, zur Visualisierung der Messdaten.",
      "Physikalische Interpretation und Auswertung."
    ],
    imagepath: "./Pictures/OSZI.jpg"
  },
  Temperatur: {
    id: 4,
    title: "Prototyp für Temperaturmesssystem",
    date: "01/2018 – 04/2018",
    company: "-",
    activities: [
      "Planung eines Temperaturmesssystems, das Messdaten eines Sensors detektiert, filtert und speichert.",
      "Programmierung eines Mikrocontrollers der die Messdaten verarbeitet und filtert.",
      "Programmierung einer Konsolenanwendung zur Auswertung und Ablage der Ergebnisse.",
      "Einrichtung der Verwaltung der Messergebnisse auf lokaler Weboberfläche.",
      "Physikalische Interpretation und Auswertung."
    ],
    imagepath: "./Pictures/THERMO.jpg"
  },
  Masterthesis: {
    id: 3,
    title:
      "Masterthesis - Analyse und Vergleich der Charakteristiken von Stromsensoren",
    date: "05/2017 – 12/2017",
    company: "Automobil-Zulieferer",
    activities: [
      "Vergleich und Auswahl unterschiedlicher Sensortechnologien fürs Hybridfahrzeug.",
      "Untersuchung und Simulation des Magnetkreises von Hall-Sensoren mit Ansys.",
      "Untersuchungen zur Signalauswertung/-verarbeitung.",
      "Weiterentwicklung einer Signalverarbeitungskette in Matlab/Simulink.",
      "Filterdesign in Matlab und Messdatenanalyse."
    ],
    imagepath: "./Pictures/AUTO.jpg"
  },
  Spektroskopie: {
    id: 2,
    title: "Impedanzspektroskopie an Metalloxid-Gassensoren",
    date: "09/2016 – 05/2017",
    company: "Hochschule, Karlsruhe",
    activities: [
      "Planung, Aufbau und Durchführung der Messungen zur Impedanzspektroskopie.",
      "Entwickeln von Physiklaisch Sinnvollen Ersatzschaltbildern.",
      "Simulation der Ersatzschaltbilder in Matlab.",
      "Vergleich von Simulationsergebnissen mit Messergebnissen.",
      "Schreiben eines Leitfadens zur Impedanzspektroskopie für zukünftige Stundenten."
    ],
    imagepath: "./Pictures/NOTIZ.jpg"
  },
  Bachelorthesis: {
    id: 1,
    title:
      "Bachelorthesis - Untersuchung und Charakterisierung von SnO2-Schichten unter Zugabe von Cer",
    date: "11/2015 – 05/2016",
    company: "Hochschule, Karlsruhe",
    activities: [
      "Einarbeitung in die theoretische Teilchenphysik/-chemie von Gassensoren.",
      "Herstellung und Untersuchung von Metalloxid-Gassensoren mit chemischer Zugabe von Additiven.",
      "Untersuchungen zur Selektivität der Gassensoren in Bezug auf Herstellung und katalytische Effekte.",
      "Durchführen von Messreihen mit den Entwickelten Prototypen.",
      "Auswertung der Ergebnisse und Ermittlung neuer Erkenntnisse auf der Grundlage schon vorhandener Theorie."
    ],
    imagepath: "./Pictures/GAS.jpg"
  },
  Studium: {
    id: 0,
    title: "Praxissemester - Temperaturmessungen zur EX-Sicherheit",
    date: "09/2014 – 02/2015)",
    company: "Elektronikentwicklungs- und Vertriebsunternehmen",
    activities: [
      "Einarbeitung in die Grundlagen des Explosionsschutzes (EX).",
      "Planung, Aufbau und Durchführung von Temperaturmessungen zur EX-Sicherheit.",
      "Auswertung von Messreihen, sowie Diskussion und Empfehlung.",
      "Dokumentation der Ergebnisse."
    ],
    imagepath: "./Pictures/EX.png"
  }
};

export const vistenkarteVorne = [
  {
    id: 1,
    title1: "Elektronik/Sensorik:",
    title2: "Informatik:",
    services1: [
      "Machbarkeitsstudien / Messdatenanalyse",
      "Programmierung von Mikrocontrollern",
      "Entwerfen von Platinen / analoge/digitale Schaltungen",
      "Bau vom Prototyp bis zur Serie"
    ],
    services2: [
      "Frontends mit modernen Technologien (ReactJS + Typescript)",
      "Programmieren von REST-APIs (PHP / ExpressJS)",
      "Datenbanken - SQL, mongoDB, lowDB"
    ]
  }
];

export const vistenkarteHinten = [
  {
    id: 1,
    title: "Qualifikationen:",
    qualifications: [
      "Master of Science - University of Applied Sciences - Karlsruhe",
      "Bachelor of Engineering - University of Applied Sciences - Karlsruhe",
      "Ausgebildeter Elektroniker - Energie und Gebäudetechnik",
      "Kenntnisse in - Matlab/C++/Ansys/Java/node/ Javascript/PHP/Python"
    ]
  }
];
