export const projects = [
  {
    id: 10,
    key: 'Mikrocontroller',
    title: 'Embedded/IoT-System für Zugangskontrollen',
    date: '11/2018 – dato',
    company: 'Gallenschütz GmbH',
    activities: [
      'Mitwirkung bei der Gesamtkonzipierung des System (IOT/Industrie4.0/Digitalisierung)',
      'Entwicklung von Platine und Software (C++/Atmel-Studio) zur Steuerung von Zugangskontrollen die in ein Ethernet/Internet-System eingebunden werden.',
      'Programmierung eines AtMega328P mit AtmelStudio zur Steuerung der Kontrollen. Anbindung eines Wiznet EthernetModul über SPI.'
    ],
    imagepath: './Pictures/KVblue.jpg'
  },
  {
    id: 9,
    key: 'SQL',
    title: 'Entwicklung einer Webapp (ReactJS) mit PHP-API und SQL-Datenbank',
    date: '11/2018 – dato',
    company: 'IT-Consulting Unternehmen',
    activities: [
      'Entwicklung des Frontend mit ReactJS',
      'Programmierung einer API mittels PHP, die Contao (CMS), als Schnittstelle zur mySQL-Datenbank verwendet.'
    ],
    imagepath: './Pictures/PROG.png'
  },
  {
    id: 8,
    key: 'E-Bike',
    title: 'Entwicklung eines Moduls zur "Anfahrtsregelung" bei E-Bikes',
    date: '10/2018 – dato',
    company: 'R & E Stricker Reha-Entwicklungen GmbH',
    activities: [
      'Programmieren eines Regelalgorithmus, zur Weiterleitung des gegengeregelten Signals.',
      'Auslegung von Filtern für Sensorsignale',
      'Entwicklung einer Platine mit Mikrocontroller, die zwei Sensorsignale liest (Drehzahl und Gas) und ein geregeltes Signal an die Leistungselektronik weiterleitet'
    ],
    imagepath: './Pictures/BIKE.jpg'
  },
  {
    id: 7,
    key: 'Typescript',
    title: 'Programmierung einer Webapplikation mit Datenbankanbindung',
    date: '10/2018 – 12/2018',
    company: '-',
    activities: [
      'Programmierung des Frontend über React – Typescript.',
      'Für userspezifischen Zugriff wurde über ExpressJS eine API programmiert, mittels JWT gesichert und mit einer dokumentenorientierten Datenbank verknüpft',
      'Ein Öffentlicher Zugangsbereich mit beschränkten Rechten wurde über die gleiche API realisiert.'
    ],
    imagepath: './Pictures/PROG.jpg'
  },
  {
    id: 6,
    key: 'React',
    title: 'Datenbank für Bestellungen und Produktionserfassung',
    date: '07/2018 – 10/2018',
    company: 'Elektronik- und IT-Consulting Unternehmen',
    activities: [
      'Planung einer webbasierten Datenbank für die Eingabe und Speicherung von Produkt und Kundendaten, sowie der Erstellung von Fertigungsaufträgen.',
      'Erstellung und Festlegung der Struktur in Bezug auf den Produktionsablauf des Unternehmens.',
      'Programmierung der Weboberfläche mit Datenbankzugriff und spezifischer Benutzeroberfläche.',
      'Programmierung des Frontends mit ReactJS',
      'Realisierung eines lokalen Linux-Server mit dokumentenorietiertem Backend auf LOW-DB-Basis'
    ],
    imagepath: './Pictures/DATABASEb.jpg'
  },
  {
    id: 5,
    key: 'Sensorik',
    title: 'Studie zum Sensorvergleich magnetischer Sensoren',
    date: '04/2018 – 09/2018',
    company: '-',
    activities: [
      'Planung eines Prototyps zur Positionsdetektion mittels Hall-Sensoren',
      'Aufbau des Prototyps und Entwurf eines Referenzmesssystems.',
      'Programmierung eines Mikrocontrollers (C++), sowie einer Windowskonsolenanwendung in C++.',
      'Programmierung einer Scilab/Matlab-Anwendung, zur Visualisierung der Messdaten.',
      'Physikalische Interpretation und Auswertung.'
    ],
    imagepath: './Pictures/OSZI.jpg'
  },
  {
    id: 4,
    key: 'Temperatur',
    title: 'Prototyp für Temperaturmesssystem',
    date: '01/2018 – 04/2018',
    company: '-',
    activities: [
      'Planung eines Temperaturmesssystems, das Messdaten eines Sensors detektiert, filtert und speichert.',
      'Programmierung eines Mikrocontrollers der die Messdaten verarbeitet und filtert.',
      'Programmierung einer Konsolenanwendung zur Auswertung und Ablage der Ergebnisse.',
      'Einrichtung der Verwaltung der Messergebnisse auf lokaler Weboberfläche.',
      'Physikalische Interpretation und Auswertung.'
    ],
    imagepath: './Pictures/THERMO.jpg'
  },
  {
    id: 3,
    key: 'Masterthesis',
    title: 'Masterthesis - Analyse und Vergleich der Charakteristiken von Stromsensoren',
    date: '05/2017 – 12/2017',
    company: 'Automobil-Zulieferer',
    activities: [
      'Vergleich und Auswahl unterschiedlicher Sensortechnologien fürs Hybridfahrzeug.',
      'Untersuchung und Simulation des Magnetkreises von Hall-Sensoren mit Ansys.',
      'Untersuchungen zur Signalauswertung/-verarbeitung.',
      'Weiterentwicklung einer Signalverarbeitungskette in Matlab/Simulink.',
      'Filterdesign in Matlab.',
      'Messdatenanalyse'
    ],
    imagepath: './Pictures/AUTO.jpg'
  },
  {
    id: 2,
    key: 'Spektroskopie',
    title: 'Impedanzspektroskopie an Metalloxid-Gassensoren',
    date: '09/2016 – 05/2017',
    company: 'Hochschule, Karlsruhe',
    activities: [
      'Planung, Aufbau und Durchführung der Messungen zur Impedanzspektroskopie.',
      'Entwickeln von Physiklaisch Sinnvollen Ersatzschaltbildern.',
      'Simulation der Ersatzschaltbilder in Matlab.',
      'Vergleich von Simulationsergebnissen mit Messergebnissen.',
      'Schreiben eines Leitfadens zur Impedanzspektroskopie für zukünftige Stundenten.'
    ],
    imagepath: './Pictures/NOTIZ.jpg'
  },
  {
    id: 1,
    key: 'Bachelorthesis',
    title: 'Bachelorthesis - Untersuchung und Charakterisierung von SnO2-Schichten unter Zugabe von Cer',
    date: '11/2015 – 05/2016',
    company: 'Hochschule, Karlsruhe',
    activities: [
      'Einarbeitung in die theoretische Teilchenphysik/-chemie von Gassensoren.',
      'Herstellung und Untersuchung von Metalloxid-Gassensoren mit chemischer Zugabe von Additiven',
      'Untersuchungen zur Selektivität der Gassensoren in Bezug auf Herstellung und katalytische Effekte.'
    ],
    imagepath: './Pictures/GAS.jpg'
  },
  {
    id: 0,
    key: 'Studium',
    title: 'Praxissemester - Temperaturmessungen zur EX-Sicherheit',
    date: '09/2014 – 02/2015)',
    company: 'Elektronikentwicklungs- und Vertriebsunternehmen',
    activities: [
      'Einarbeitung in die Grundlagen des Explosionsschutzes (EX).',
      'Planung, Aufbau und Durchführung von Temperaturmessungen zur EX-Sicherheit'
    ],
    imagepath: './Pictures/EX.png'
  }
];

export const vistenkarteVorne = [
  {
    id: 1,
    title1: 'Elektronik/Sensorik:',
    title2: 'Informatik:',
    services1: [
      'Machbarkeitsstudien / Messdatenanalyse',
      'Programmierung von Mikrocontrollern',
      'Entwerfen von Platinen / analoge/digitale Schaltungen',
      'Bau vom Prototyp bis zur Serie'
    ],
    services2: [
      'Frontends mit modernen Technologien (ReactJS + Typescript)',
      'Programmieren von REST-APIs (PHP / ExpressJS)',
      'Datenbanken - SQL, mongoDB, lowDB'
    ],
  }
];

export const vistenkarteHinten = [
  {
    id: 1,
    title: 'Qualifikationen:',
    qualifications: [
      'Master of Science - University of Applied Sciences - Karlsruhe',
      'Bachelor of Engineering - University of Applied Sciences - Karlsruhe',
      'Ausgebildeter Elektroniker - Energie und Gebäudetechnik',
      'Kenntnisse in - Matlab/C++/Ansys/Java/node/ Javascript/PHP/Python'
    ]
  }
];
