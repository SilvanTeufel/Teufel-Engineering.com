import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';
import '../css/MindMap.css';
import '../css/Cursor.css';

class Study extends React.Component<{}, {}> {

  createStudien = () => {
    const studien = [];
    studien.push(
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md col-1" />
            <div className="col text-center">
              <br />
              <h3 className="cursor-pointer">Studien und Datenanalyse</h3>
              <br />
            </div>
            <div className="col-md col-1" />
          </div>
          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Modellbildung der Problemstellung in der Theorie</p>
            </div>
            <div className="col-1 lineV">
              <p className="textnotizV">Recherche</p>
            </div>
            <div className="col imagePosition" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">Planung und Umsetzung</p>
              </div>
            </div>
            <div className="col" />
            <div className="col text-center" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Aufbau von Prototypen für Studienzwecke</p>
            </div>
            <div className="col-1 lineV">
              <p className="textnotizV">Daten- gewinnung</p>
            </div>
            <div className="col imageAnalyse">
              <p className="textbox">Wissenschaftliche Analyse der Daten</p>
            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">Ergebnis- zusammen- führung</p>
              </div>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Vergleich von Theorie und experimentellen Ergebnissen</p>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">Besprechung der Ergebnisse</p>
              </div>
            </div>
            <div className="col " />
            <div className="col " />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Empfehlungen für Serienfertigung oder weiteres Vorgehen</p>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col" />
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>
        </div>
      </div>
    );
    return studien;
  };

 
  render() {


    return (
      this.createStudien()
    );
  }
}

export default Study;
