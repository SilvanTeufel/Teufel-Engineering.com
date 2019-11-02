import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';
import '../css/MindMap.css';


class Database extends React.Component<{}, {}> {

  createDatenbanken = () => {
    const system = [];
    system.push(
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md col-1" />
            <div className="col text-center">
              <br />
              <h3>Aufbau von spezifischen, browserbasierten Datenbanken</h3>
              <br />
            </div>
            <div className="col-md col-1" />
          </div>
          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Benutzer kann über Browser (Client) auf Webserver zugreifen</p>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">Ethernet/Internet</p>
              </div>
            </div>
            <div className="col" />
            <div className="col text-center" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Webserver stellt Frontend zur Verfügung</p>
            </div>
            <div className="col-1 ">

            </div>
            <div className="col ">

            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">Ethernet/Internet/Lokal</p>
              </div>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">
                Application-Programming-Interface - Ist Schnittstelle zur Datenbank - über sie kann mit dem Frontend kommuniziert werden.
              </p>
            </div>
            <div className="col-1 lineV">
              <p className="textnotizV">Lokal/Internet</p>
            </div>
            <div className="col mmborder">
              <p className="textbox">
                Datenbank kann beliebig gewählt werden.
                 SQL, MongoDB, LowDB, usw.
              </p>
            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">

            </div>
            <div className="col " />
            <div className="col">
            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col">

            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col">

            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>
        </div>
      </div>
    );
    return system;
  };

 
  render() {


    return (
      this.createDatenbanken()
    );
  }
}

export default Database;
