import * as React from "react";
import "../css/Navbar.css";
const toggleLine = require("../Pictures/toggleLine2.png");
var classNames = require("classnames");
const LogoImage = require("../Pictures/LogoINV2.png");
const LogoImageBlack = require("../Pictures/LogoINV1.png");

interface MyComponentProps {
  buttons: any;
  toggleDropDown: any;
  DropdownisOpen: boolean;
  routerstructure: any;
}

interface MyComponentStates {}

class RouterDropdownField extends React.Component<
  MyComponentProps,
  MyComponentStates
> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {};
  }

  createInputs = () => {
    const row = [];

    row.push(
      <div className="row first-navbarelement text-center">
        <div className="col-3"></div>
        <div className="col-6 col-sm-12">
          <h2 className="cursor-pointer">Teufel Engineering</h2>
        </div>
        <div className="col-3"></div>
      </div>
    );

    row.push(
      <div className="row navbarelement  text-center">
        <div className="col-3"></div>
        <div className="col-6 col-sm-12">
          <img
            src={LogoImage}
            alt=""
            className="rounded float-left d-none d-lg-block"
            style={{ maxHeight: 130, marginLeft: "2.5em" }}
          />
          <img
            src={LogoImage}
            alt=""
            className="rounded float-left d-lg-none"
            style={{ maxHeight: 130, marginLeft: "2.5em" }}
          />
        </div>
        <div className="col-3"></div>
      </div>
    );

    row.push(
      <div className="row last-navbarelement  text-center">
        <div className="col-12">
          <h3 className="d-none d-lg-block cursor-pointer">Silvan Teufel</h3>
          <h3 className="d-none d-lg-block cursor-pointer">
            Master of Science
          </h3>
        </div>
      </div>
    );

    for (var key in this.props.buttons) {
      row.push(
        <div className="dropdown-item dropdownelement text-left">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 col-sm-12">{this.props.buttons[key]}</div>
            <div className="col-3"></div>
          </div>
        </div>
      );
    }

    row.push(
      <div className="row verylast-navbarelement text-center">
        <div className="col-12">
          <p className="">Kontaktieren Sie mich: </p>
          <a
            className="text-dark margin_mail"
            href={"mailto:info@teufel-engineering.com"}
            target="_blank"
          >
            <i className="fas fa-envelope-square fa-2x"></i>
          </a>
          <a
            className="text-dark margin_phone"
            href={"tel:01605170640"}
            target="_blank"
          >
            <i className="fas fa-phone-square fa-2x"></i>
          </a>
          <a
            className="text-dark margin_whatsapp"
            href={"https://wa.me/01605170640"}
            target="_blank"
          >
            <i className="fab fa-whatsapp-square fa-2x"></i>
          </a>
        </div>
      </div>
    );

    row.push(
      <div className="row text-light greatmargintop ">
        <div className="col-6 col-sm-12 text-center align-items-center">
          <a href={"/#/Impressum"}>
            <p className="text-dark">
              <i className="fas fa-stamp"></i> Impressum
            </p>
          </a>
        </div>
        <div className="col-6 col-sm-12 text-center  align-items-center">
          <a href={"/#/Datenschutz"}>
            <p className="text-dark">
              <i className="fas fa-lock"></i> Datenschutz
            </p>
          </a>
        </div>
      </div>
    );

    return row;
  };

  createField = () => {
    const row = [];
    // <i class="fas fa-bars"></i>

    //const menuClass = `dropdown-menu${this.props.DropdownisOpen ? ' show' : ''}`;
    row.push(
      <div className="dropdown ">
        <div
          className="row align-items-center text-right navbar-icon"
          onClick={this.props.toggleDropDown}
        >
          <div className="col-md-1 col-1 navicon">
            <span
              className={classNames({
                "fa-stack fa-2x d-xl-none": true,
              })}
              style={{ paddingLeft: "0.25vw", marginTop: "-0.25em" }}
            >
              <i
                className={classNames({
                  "fas fa-square fa-stack-1x fa-lg": !this.props.DropdownisOpen,
                })}
              ></i>
              <i
                className={classNames({
                  "fas fa-bars fa-stack-1x": true,
                  "fa-inverse": !this.props.DropdownisOpen,
                })}
              ></i>
            </span>
          </div>
        </div>
        <div
          className={classNames({
            slidein: this.props.DropdownisOpen,
            slideout: !this.props.DropdownisOpen,
          })}
          aria-labelledby="dropdownMenuButton"
        >
          {this.createInputs()}
        </div>
      </div>
    );
    //  'btn btn-outline-light dropdown-toggle'      {this.state.fieldstate}
    return row;
  };

  render() {
    return this.createField();
  }
}

export default RouterDropdownField;
