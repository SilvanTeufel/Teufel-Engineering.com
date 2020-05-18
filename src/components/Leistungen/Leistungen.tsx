import * as React from "react";
import Measure from "./Measure";
import Study from "./Study";
import Database from "./Database";
import Further from "./Further";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Carousel.css";
import "../css/MindMap.css";
import "../css/Fade.css";
import "../css/Cursor.css";
var classNames = require("classnames");

interface MyComponentStates {
  navlink: any;
  toggleNavbarNow: boolean;
}

interface MyComponentProps {
  Key?: any;
}

class Leistungen extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      navlink: {
        Messsysteme: false,
        Studien: false,
        Datenbanken: false,
        Sonstiges: false
      },
      toggleNavbarNow: false
    };
  }

  togglenavlinkto = (key: string) => {
    const navlink = this.state.navlink;

    for (var Key in this.state.navlink) {
      if (this.state.navlink.hasOwnProperty(Key) && Key !== key) {
        navlink[Key] = false;
      } else {
        navlink[key] = true;
      }
    }
    this.setState({ navlink });
  };

  toggleViaNavbar = () => {
    if (this.state.toggleNavbarNow) {
      this.togglenavlinkto(this.props.Key[1]);
      this.setState({ toggleNavbarNow: false });
      if (this.props.Key[1] === "General") {
        this.togglenavlinkto("Sensorik");
      }
    }
  };

  componentWillReceiveProps() {
    this.setState({ toggleNavbarNow: true });
  }

  componentDidMount() {
    this.togglenavlinkto("Messsysteme");
  }

  switchNavTab = () => {
    const tab = [];

    var somethingIsTrue = false;
    for (var key in this.state.navlink) {
      if (this.state.navlink[key]) {
        somethingIsTrue = this.state.navlink[key];
      }
    }

    if (!somethingIsTrue) {
      const navlink = this.state.navlink;
      navlink.Messsysteme = true;
      this.setState({ navlink });
    }

    tab.push(
      <div>
        <div
          className={classNames({
            fadein: this.state.navlink.Messsysteme,
            "d-none": !this.state.navlink.Messsysteme
          })}
        >
          {<Measure />}
        </div>
        <div
          className={classNames({
            fadein: this.state.navlink.Studien,
            "d-none": !this.state.navlink.Studien
          })}
        >
          {<Study />}
        </div>
        <div
          className={classNames({
            fadein: this.state.navlink.Datenbanken,
            "d-none": !this.state.navlink.Datenbanken
          })}
        >
          {<Database />}
        </div>
        <div
          className={classNames({
            fadein: this.state.navlink.Sonstiges,
            "d-none": !this.state.navlink.Sonstiges
          })}
        >
          {<Further />}
        </div>
      </div>
    );

    return tab;
  };

  render() {
    this.toggleViaNavbar();
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="nav nav-tabs">
                <li
                  className="nav-item cursor-pointer"
                  onClick={() => this.togglenavlinkto("Messsysteme")}
                >
                  <div
                    className={classNames({
                      "nav-link": true,
                      active: this.state.navlink.Messsysteme
                    })}
                  >
                    <strong>Messsysteme</strong>
                  </div>
                </li>

                <li
                  className="nav-item cursor-pointer"
                  onClick={() => this.togglenavlinkto("Studien")}
                >
                  <div
                    className={classNames({
                      "nav-link": true,
                      active: this.state.navlink.Studien
                    })}
                  >
                    <strong>Studien</strong>
                  </div>
                </li>
                <li
                  className="nav-item cursor-pointer"
                  onClick={() => this.togglenavlinkto("Datenbanken")}
                >
                  <div
                    className={classNames({
                      "nav-link": true,
                      active: this.state.navlink.Datenbanken
                    })}
                  >
                    <strong>Datenbanken</strong>
                  </div>
                </li>
                <li
                  className="nav-item cursor-pointer"
                  onClick={() => this.togglenavlinkto("Sonstiges")}
                >
                  <div
                    className={classNames({
                      "nav-link": true,
                      active: this.state.navlink.Sonstiges
                    })}
                  >
                    <strong>Sonstiges</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">{this.switchNavTab()}</div>
          </div>
          <div className="row">
            <div className="col">
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leistungen;
