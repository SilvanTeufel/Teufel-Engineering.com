import * as React from 'react';

class Philosophie extends React.Component<{}, {}> {
  createPlace = () => {
    const place = [];
    place.push(<br />);
    place.push(<br />);
    place.push(<br />);
    return place;
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col " />
          <div>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-1 " />
          <div className="col-md col-10 text-left">
            <h6 className="cursor-pointer-invert">
              Als freiberuflicher Entwickler habe ich Herausforderungen niemals gescheut, weshalb ich, sowohl im
              Hardwarebereich (Entwerfen von Platinen, Filtern, Messdatenanalyse, usw.) als auch im Softwarebereich
              (Programmieren von Mikrocontrollern), bis hin zur Entwicklung von Datenbanksystemen mit modernen
              Frontendtechnologien, Erfahrung sammeln konnte. Ich habe es mir zu meiner Aufgabe gemacht Probleme zu
              lösen - und meine Leidenschaft darin gefunden. Neugier, Courage und unkonventionelles Denken sind die
              Werkzeuge, mit denen ich arbeite. Falls Sie diese Werte ebenfalls schätzen, würde es mich freuen mit Ihnen
              zusammenzuarbeiten.
            </h6>
          </div>
          <div className="col-md-3 col-1" />
        </div>
        <div className="row">
          <div className="col " />
          <div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Philosophie;

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/
