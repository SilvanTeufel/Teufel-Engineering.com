import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';
import '../css/MindMap.css';
import '../css/Cursor.css';

class Measure extends React.Component<{}, {}> {

  createMesssystem = () => {
    const system = [];
    system.push(
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md col-1" />
            <div className="col text-center">
              <br />
              <h3 className="cursor-pointer">Aufbau von Messsystemen</h3>
              <br />
            </div>
            <div className="col-md col-1" />
          </div>
          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Sensoren und Aktoren lesen/schreiben die physikalische Größe</p>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">I2C/SPI/PWM/Analog</p>
              </div>
            </div>
            <div className="col" />
            <div className="col text-center" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Mikrocontroller liest/steuert Sensoren/Aktoren.</p>
            </div>
            <div className="col-1 lineV">
              <p className="textnotizV">C/C++</p>
            </div>
            <div className="col mmborder">
              <p className="textbox">
                Mikrocontroller kann Regelungen vornehmen - unter Parametern, die vom Backend vorgegeben werden.
              </p>
            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">USB/UART/I2C/ SPI/CAN/Ethernet über Python/C/C++</p>
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
                Computer: Kommuniziert sowohl mit Mikrocontroller, als auch mit API und Frontend, oder stellt diese
                bereit.
              </p>
            </div>
            <div className="col-1 lineV">
              <p className="textnotizV">Lokal/ Ethernet/ Internet</p>
            </div>
            <div className="col mmborder">
              <p className="textbox">
                Frontend: Moderne Webapp um Daten zu visualisieren und/oder Parameter vorzugeben, mit denen die Hardware
                arbeiten soll.
              </p>
            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col ">
              <div className="lineH">
                <p className="textnotizH">Lokal/ Ethernet/ Internet</p>
              </div>
            </div>
            <div className="col " />
            <div className="col">
              <p className="textnotizV">Javascript/ ReactJS/ Typescript</p>
            </div>

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col mmborder">
              <p className="textbox">Backend: Auf Basis von mySQL / MongoDB / lowDB - lokal oder online</p>
            </div>
            <div className="col" />
            <div className="col" />

            <div className="col-md col-1" />
          </div>

          <div className="row">
            <div className="col-md col-1" />

            <div className="col">
              <p className="textnotizH">Javascript/ExpressJS</p>
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
       this.createMesssystem()
    );
  }
}

export default Measure;
