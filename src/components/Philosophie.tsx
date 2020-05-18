import * as React from "react";
import { Radar } from "react-chartjs-2";


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
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-5  col-12 text-left">
          <h5 className="cursor-pointer-invert" style={{ marginTop: "1vh" }}>
            Als freiberuflicher Entwickler habe ich Herausforderungen niemals
            gescheut, weshalb ich, sowohl im Hardwarebereich (Entwerfen von
            Platinen, Filtern, Messdatenanalyse, usw.) als auch im
            Softwarebereich (Programmieren von Mikrocontrollern), bis hin zur
            Entwicklung von Datenbanksystemen mit modernen Frontendtechnologien,
            Erfahrung sammeln konnte. Ich habe es mir zu meiner Aufgabe gemacht
            Probleme zu lösen - und meine Leidenschaft darin gefunden. Neugier,
            Courage und unkonventionelles Denken sind die Werkzeuge, mit denen
            ich arbeite. Falls Sie diese Werte ebenfalls schätzen, würde es mich
            freuen mit Ihnen zusammenzuarbeiten.
          </h5>
        </div>
        <div className="col-lg-6  col-12 radarImage">
          <Radar
            data={{
              labels: [
                "ExpressJS",
                "ReactJS",
                "AngularJS",
                "Embedded C++",
                "Swimming",
                "Biking",
                "Electronics",
                "Strength",
                "Agility",
                "Stamina"
              ],
              datasets: [
                {
                  label: "Skills",
                  backgroundColor: "rgba(7, 29, 202 ,0.2)",
                  borderColor: "rgba(7, 29, 202 ,1)",
                  hoverBackgroundColor: "rgba(7, 29, 202 ,0.4)",
                  hoverBorderColor: "rgba(7, 29, 202 ,1)",
                  data: [75, 97, 73, 88, 5, 75, 95, 100, 15, 70]
                }
              ]
            }}
            options={{
              legend: {
                display: false,
                labels: {
                  fontSize: 12,
                  fontStyle: "bold",
                  fontColor: "rgb(0, 0, 0)"
                }
              },
              scale: {
                pointLabels: {
                  fontSize: 12,
                  fontStyle: "bold",
                  fontColor: "rgb(0, 0, 0)"
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Philosophie;

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/
