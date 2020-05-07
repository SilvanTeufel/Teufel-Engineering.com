import * as React from "react";
import { sendMail } from "./APIClient/sendMail";
import Popup from "./Popup";
const Silvan = require("./Pictures/Silvan.jpg");
// import { sendMail } from '../Nodemailer';

interface MyComponentStates {
  formulardata: any[];
  formulartitles: string[];
  formularI: number | undefined;
  showPopup: boolean;
  popuptext: string;
  DSGVOaccepted: boolean;
}

class Kontakt extends React.Component<{}, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      formulardata: ["", "", "", ""],
      formulartitles: ["Name", "Firma", "eMail", "Anfrage"],
      formularI: undefined,
      showPopup: false,
      popuptext: "",
      DSGVOaccepted: false
    };
  }

  toggleDSGVO = () => {
    this.setState({ DSGVOaccepted: !this.state.DSGVOaccepted });
  };

  createFormular = () => {
    const formular = [];

    for (let i = 0; i < this.state.formulartitles.length - 1; i++) {
      // this.setState({ formularI: i });

      formular.push(
        <div className="row">
          <div className="col-md-3 col-2">
            <label>{this.state.formulartitles[i]}:</label>
          </div>
          <div className="col-md-6 col-9">
            <input
              className="form-control"
              type={`Field${+i}`}
              placeholder={this.state.formulartitles[i]}
              value={this.state.formulardata[i]}
              onFocus={() => this.setActualI(i)}
              onChange={this.editFormular}
            />
            <div className="col-md-3 col-1" />
          </div>
        </div>
      );
    }
    return formular;
  };

  setActualI = (i: number) => {
    this.setState({ formularI: i });
  };

  editFormular = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.formularI !== undefined) {
      const formulardata = this.state.formulardata;
      formulardata[this.state.formularI] = event.target.value;
      this.setState({ formulardata });
    }
  };

  createTextField = () => {
    const field = [];

    field.push(
      <div className="row">
        <div className="col-md-3 col-2">
          <label>
            {this.state.formulartitles[this.state.formulartitles.length - 1]}:
          </label>
        </div>
        <div className="col-md-6 col-9">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
            onFocus={() =>
              this.setActualI(this.state.formulartitles.length - 1)
            }
            onChange={() => this.editFormular.bind(this)}
          />
          <div className="col-md-3 col-1" />
        </div>
      </div>
    );

    return field;
  };

  sendmail = () => {
    if (this.state.DSGVOaccepted) {
      sendMail(
        "http://couponing24.ddns.net:3050/sendmail",
        this.state.formulardata[0],
        this.state.formulardata[1],
        this.state.formulardata[2],
        this.state.formulardata[3]
      )
        .then((data: any) => {
          if (data.status === 200) {
            this.setState({
              popuptext:
                "Ihre Nachricht wurde an info@teufel-engineering.com übermittelt."
            });
            this.triggerPopup();
          } else {
            this.setState({
              popuptext:
                "Ihr Nachricht wurde eventuell nicht übermittelt. Versuchen sie es erneut oder schreiben sie direkt an info@teufel-engineering.com."
            });
            this.triggerPopup();
          }
        })
        .catch((err: any) => {
          this.setState({
            popuptext:
              "Ein Fehler ist aufgetreten. Versuchen sie es erneut oder schreiben sie direkt an info@teufel-engineering.com."
          });
          this.triggerPopup();
        });
    } else {
      this.setState({
        popuptext:
          "Sie müssen die DSGVO akzeptieren um eine Nachricht zu versenden."
      });
      this.triggerPopup();
    }
  };

  createPlace = () => {
    const place = [];
    place.push(<br />);
    place.push(<br />);
    place.push(<br />);
    return place;
  };

  createPopup = () => {
    const modal = [];
    if (this.state.showPopup) {
      modal.push(
        <Popup
          Modalbutton={
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => this.triggerPopup()}
            >
              <strong>Schließen</strong>
            </button>
          }
          text={this.state.popuptext}
        />
      );
    }
    return modal;
  };

  triggerPopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    return (
      <div>
        {/*
        <div className="row">
          <div className="col">{this.createPlace()}</div>
        </div>
       
        <div className="row">
          <div className="col">{this.createPopup()}</div>
        </div>

        {this.createFormular()}
        {this.createTextField()}
        <div className="row">
          <div className="col">{<br />}</div>
        </div>
        <div className="row">
          <div className="col" />
          <div className="col-md-1 col-3">
            <button type="button" className="btn btn-outline-light" onClick={() => this.sendmail()}>
              Senden
            </button>
          </div>
          <div className="col-3">
            <input type="checkbox" aria-label="Checkbox for following text input" onClick={() => this.toggleDSGVO()} />{' '}
            Ich habe die DSGVO gelesen und stimme zu.
          </div>
          <div className="col" />
        </div>

        <div className="row text-left align-items-center">
          <div className="col ">
            <br />
          </div>
        </div>
        */}
        <div className="row text-left align-items-center">
          <div className="col-lg-1 col-0" />
          <div className="col-lg-3 col-12">
            <p className="cursor-pointer-invert h5">
              Silvan Teufel
              <br />
              77815 Bühl
              <br />
              Robert-Bosch-Straße 11
              <br />
              e-Mail: info@teufel-engineering.com
              <br />
              Tel.: 01605170640
              <br />
              <br />
              <a
                href={"https://github.com/SilvanTeufel"}
                style={{ color: "black" }}
              >
                https://github.com/SilvanTeufel
              </a>
              <br />
            </p>
          </div>
          <div className="col-lg-4 col-0">
            <img
              src={Silvan}
              alt=""
              className="rounded float-left kontaktimage"
              style={{
                maxHeight: 200,
                border: "2px solid grey"
              }}
            />
          </div>
          <div className="col-lg-3 col-12"></div>
          <div className="col-lg-1 col-0" />
        </div>
        <div className="row text-left align-items-center">
          <div className="col ">
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Kontakt;

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/
