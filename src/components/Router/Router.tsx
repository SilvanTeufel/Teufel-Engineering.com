import * as React from "react";
import { Helmet } from "react-helmet";
import { Redirect, HashRouter, Switch } from "react-router-dom"; // Link declare
import { animateScroll as scroller, Link } from "react-scroll";
import Datenschutz from "../Footer/Datenschutz";
import Home from "../Home";
import { CustomRoute } from "./CustomRoute";
import NavbarCollapse from "./NavbarCollapse";
import Impressum from "../Footer/Impressum";
import RouterDropdownField from "./RouterDropdownField";
import "../css/Header.css";
import "../css/Cursor.css";

const LogoImage = require("../Pictures/LogoINV1.png");

interface MyComponentState {
  DropdownisOpen: boolean;
  redirectkeys: any;
  routerstructure: any;
}

class Router extends React.Component<{}, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      DropdownisOpen: true,
      redirectkeys: {
        Philosophie: {
          General: false
        },
        Leistungen: {
          General: false
        },
        Projekte: {
          General: false
        },
        Kontakt: {
          General: false
        }
      },
      routerstructure: {
        navKeys: {
          Philosophie: { General: false },
          Leistungen: {
            General: false,
            Messsysteme: false,
            Studien: false,
            Datenbanken: false,
            Sonstiges: false
          },
          Projekte: {
            General: false,
            Studium: false,
            Bachelorthesis: false,
            Masterthesis: false,
            Spektroskopie: false,
            Temperatur: false,
            Sensorik: false,
            React: false,
            Typescript: false,
            "E-Bike": false,
            SQL: false,
            Mikrocontroller: false,
            Angular: false
          },
          Kontakt: { General: false }
        },
        footKeys: {
          Kontakt: false,
          Impressum: false,
          Datenschutz: false
        },
        iconstate: {
          Philosophie: false,
          Leistungen: false,
          Projekte: false,
          Kontakt: false,
          Messsysteme: false,
          Studien: false,
          Datenbanken: false,
          Sonstiges: false,
          Studium: false,
          Bachelorthesis: false,
          Masterthesis: false,
          Spektroskopie: false,
          Temperatur: false,
          Sensorik: false,
          React: false,
          Typescript: false,
          "E-Bike": false,
          SQL: false,
          Mikrocontroller: false
        }
      }
    };
  }

  toggleDropDown = () => {
    this.setState({ DropdownisOpen: !this.state.DropdownisOpen });
  };

  closeDropDown = () => {
    if (this.state.DropdownisOpen) {
      this.setState({ DropdownisOpen: false });
    }
  };

  scrollToTop = () => {
    scroller.scrollToTop();
  };

  scrollToBottom = () => {
    scroller.scrollTo(2500);
  };

  redirectToLink = (key0: string, key1: string) => {
    const routerstructure = this.state.routerstructure;
    routerstructure.navKeys[key0][key1] = true;
    this.toggleIconState(key0, key1);
    this.setState({ routerstructure });
  };

  toggleIconState = (key0: string, key1: string) => {
    const routerstructure = this.state.routerstructure;
    for (var k in routerstructure.iconstate) {
      if (k !== key0) {
        routerstructure.iconstate[k] = false;
      }
    }
    routerstructure.iconstate[key1] = true;
    routerstructure.iconstate[key0] = true;
    this.setState(routerstructure);
  };

  getIconState = (key: string) => {
    return this.state.routerstructure.iconstate[key];
  };

  createScrollButtonArray = () => {
    const buttons: any = {};

    if (this.state) {
      for (var key in this.state.routerstructure.navKeys) {
        buttons[key] = this.createScrollButton(key);
      }
    }

    return buttons;
  };

  createScrollButton = (key0: string) => {
    const button = [];
    button.push(
      <Link
        to={key0}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        delay={200}
      >
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ minWidth: 110 }}
          onClick={() => this.redirectToLink(key0, "General")}
        >
          {key0}
        </button>
      </Link>
    );

    if (this.state && this.state.routerstructure) {
      button.push(
        <div className="d-none d-md-block">
          <NavbarCollapse
            Key={key0}
            getIconState={this.getIconState}
            buttons={this.createSubButtonArray(key0)}
          />
        </div>
      );
    }

    return button;
  };

  createSubButtonArray = (key0: string) => {
    const buttons: any = {};
    const routerstructure = this.state.routerstructure;

    if (routerstructure) {
      for (var key1 in routerstructure.navKeys[key0]) {
        buttons[key1] = this.createSubButton(key0, key1);
      }
    }

    return buttons;
  };

  createSubButton = (key0: string, key1: string) => {
    const button = [];

    button.push(
      <Link
        to={key0}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        delay={200}
      >
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ width: 90, maxHeight: 32 }}
          onClick={() => this.redirectToLink(key0, key1)}
        >
          {key1}
        </button>
      </Link>
    );

    return button;
  };

  createComponents = () => {
    const comps = [];
    const router = [];

    comps.push(<CustomRoute path="/Home" component={Home} />);

    for (var key0 in this.state.routerstructure.navKeys) {
      for (var key1 in this.state.routerstructure.navKeys[key0]) {
        comps.push(<CustomRoute path={`/${key0}/${key1}`} component={Home} />);
      }
    }

    comps.push(<CustomRoute path="/Datenschutz" component={Datenschutz} />);
    comps.push(<CustomRoute path="/Impressum" component={Impressum} />);
    comps.push(<CustomRoute path="/*" component={Home} />);

    router.push(<Switch>{comps}</Switch>);

    return router;
  };

  createHeader = () => {
    const header = [];
    if (this.state && this.state.routerstructure) {
      header.push(
        <div className="row align-items-center text-left header">
          <div className="col-md-2 col-3 align-items-center">
            <RouterDropdownField
              buttons={this.createScrollButtonArray()}
              toggleDropDown={() => this.toggleDropDown()}
              DropdownisOpen={this.state.DropdownisOpen}
              routerstructure={this.state.routerstructure}
            />
          </div>
          <div className="col-md-2 col-1 d-none d-md-block" />
          <div className="col-md-1 col-3 text-left">
            <img
              src={LogoImage}
              alt=""
              className="rounded float-left"
              style={{ opacity: 0.8, maxHeight: 100 }}
            />
          </div>
          <div className="col-md-5 col-3 text-left">
            <h2 className="cursor-pointer">Teufel Engineering</h2>
            <h6 className="d-none d-md-block cursor-pointer">
              Silvan Teufel - Master of Science
            </h6>
          </div>
          <div className="col-md-3 col-1" />
        </div>
      );
    }
    return header;
  };

  createFooter = () => {
    const footer = [];
    /*
          <a href={'/#/Home'} onClick={this.scrollToBottom}>
            <p className="text-dark">Kontakt</p>
          </a>
*/
    footer.push(
      <div
        className="row text-light header"
        style={{
          position: "relative"
        }}
      >
        <div className="col-4 text-right align-items-bottom">
          <a href={"/#/Home"} onClick={this.scrollToBottom}>
            <p className="text-dark">Kontakt</p>
          </a>
        </div>
        <div className="col-3 text-center align-items-center">
          <a href={"/#/Impressum"} onClick={this.scrollToTop}>
            <p className="text-dark">Impressum</p>
          </a>
        </div>
        <div className="col-5 text-left align-items-center">
          <a href={"/#/Datenschutz"} onClick={this.scrollToTop}>
            <p className="text-dark">Datenschutz</p>
          </a>
        </div>
      </div>
    );

    return footer;
  };

  createRedirections = () => {
    for (var key0 in this.state.routerstructure.navKeys) {
      for (var key1 in this.state.routerstructure.navKeys[key0]) {
        if (this.state.routerstructure.navKeys[key0][key1]) {
          const routerstructure = this.state.routerstructure;
          routerstructure.navKeys[key0][key1] = false;
          this.setState({ routerstructure });
          return <Redirect to={`/${key0}/${key1}`} />;
        }
      }
    }
  };

  render() {
    return (
      <HashRouter>
        {this.createRedirections()}
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{"Teufel Engineering - Silvan Teufel"}</title>
            <meta
              name="description"
              content={"Teufel Engineering - Silvan Teufel - Master of Science"}
            />
          </Helmet>
          {this.createHeader()}
          <div className="container text-light" onClick={this.closeDropDown}>
            {this.createComponents()}
          </div>
          {this.createFooter()}
        </div>
      </HashRouter>
    );
  }
}

export default Router;
