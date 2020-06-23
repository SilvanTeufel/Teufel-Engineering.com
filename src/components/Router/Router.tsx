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
import "../css/Layout.css";
var classNames = require("classnames");

const LogoImage = require("../Pictures/LogoINV1.png");

interface MyComponentState {
  DropdownisOpen: boolean;
  redirectkeys: any;
  routerstructure: any;
}

export default class Router extends React.Component<{}, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      DropdownisOpen: true,
      redirectkeys: {
        Philosophie: {
          General: false,
        },
        Leistungen: {
          General: false,
        },
        Projekte: {
          General: false,
        },
        Kontakt: {
          General: false,
        },
      },
      routerstructure: {
        navKeys: {
          Philosophie: { General: false },
          Leistungen: {
            General: false,
            // Sonstiges: false,
            // Messsysteme: false,
            // Studien: false,
            // Datenbanken: false,
          },
          Projekte: {
            General: false,
            // Studium: false,
            // Bachelorthesis: false,
            // Masterthesis: false,
            // Spektroskopie: false,
            // Temperatur: false,
            // Sensorik: false,
            // React: false,
            // Typescript: false,
            // "E-Bike": false,
            // SQL: false,
            // Mikrocontroller: false,
            // Angular: false,
          },
          Applikationen: {
            General: false,
            // Zeiterfassung: false
          },
          Kontakt: { General: false },
        },
        footKeys: {
          Kontakt: false,
          Impressum: false,
          Datenschutz: false,
        },
        iconstate: {
          Philosophie: false,
          Leistungen: false,
          Projekte: false,
          Kontakt: false,
          Applikationen: false,
        },
        icon: {
          Philosophie: {
            class: "fas fa-yin-yang fa-lg marginIconRight_0",
          },
          Leistungen: {
            class: "fas fa-sitemap fa-lg marginIconRight_1",
          },
          Projekte: {
            class: "fas fa-tasks fa-lg marginIconRight_0",
          },
          Messsysteme: {
            class: "fas fa-paint-brush fa-lg",
          },
          Applikationen: {
            class: "fas fa-cogs fa-lg marginIconRight_1",
          },
          Studien: {
            class: "fas fa-sun fa-lg",
          },
          Datenbanken: {
            class: "fas fa-user fa-lg",
          },
          Sonstiges: {
            class: "fas fa-phone fa-lg",
          },
          Kontakt: {
            class: "fas fa-id-card fa-lg marginIconRight_1",
          },
          General: {
            class: "fas fa-cut fa-lg",
          },
        },
      },
    };
  }

  toggleDropDown = () => {
    this.setState({ DropdownisOpen: !this.state.DropdownisOpen });
  };

  closeIfMobile = () => {
    if (window.innerWidth <= 1200) {
      this.setState({ DropdownisOpen: false });
    }
  };

  closeDropDown = () => {
    if (this.state.DropdownisOpen && window.innerWidth <= 1200) {
      this.setState({ DropdownisOpen: false });
    } else if (window.innerWidth > 1200) {
      this.setState({ DropdownisOpen: true });
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
    this.closeIfMobile();
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

  createIcon = (iconClass: string, rotate: boolean) => {
    const icon = [];

    icon.push(
      <i
        className={classNames({
          [iconClass]: true,
          "fa-pulse": rotate,
        })}
      ></i>
    );

    return icon;
  };

  createScrollButton = (key0: string) => {
    const button = [];

    if (this.state.routerstructure.icon[key0]) {
      button.push(
        <Link
          to={key0}
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          delay={200}
        >
          {this.createIcon(
            this.state.routerstructure.icon[key0].class,
            this.state.routerstructure.iconstate[key0]
          )}
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
    }

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
        offset={-160}
        duration={500}
        delay={200}
      >
        <i
          className={classNames({
            "fas fa-angle-double-right": true,
            "fa-pulse": this.state.routerstructure.iconstate[key1],
          })}
          style={{ paddingRight: "1em" }}
        ></i>
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
          <div className="col-12 align-items-center">
            <RouterDropdownField
              buttons={this.createScrollButtonArray()}
              toggleDropDown={() => this.toggleDropDown()}
              DropdownisOpen={this.state.DropdownisOpen}
              routerstructure={this.state.routerstructure}
            />
          </div>
        </div>
        // <div className="row align-items-center text-left header">
        //   <div className="col-lg-2 col-2 align-items-center">
        //     <RouterDropdownField
        //       buttons={this.createScrollButtonArray()}
        //       toggleDropDown={() => this.toggleDropDown()}
        //       DropdownisOpen={this.state.DropdownisOpen}
        //       routerstructure={this.state.routerstructure}
        //     />
        //   </div>
        //   <div className="col-lg-1 col-1 d-none d-md-block" />
        //   <div className="col-lg-2 col-3 text-left">
        //     <img
        //       src={LogoImage}
        //       alt=""
        //       className="rounded float-left d-none d-lg-block"
        //       style={{ opacity: 0.8, maxHeight: 150, marginLeft: "7vw" }}
        //     />
        //     <img
        //       src={LogoImage}
        //       alt=""
        //       className="rounded float-left d-lg-none"
        //       style={{ opacity: 0.8, maxHeight: 100 }}
        //     />
        //   </div>
        //   <div className="col-lg-5 col-4 text-left">
        //     <h1
        //       className="cursor-pointer d-none d-lg-block"
        //       style={{ fontSize: "4em" }}
        //     >
        //       Teufel Engineering
        //     </h1>
        //     <h2 className="cursor-pointer d-lg-none">Teufel Engineering</h2>
        //     <h3 className="d-none d-lg-block cursor-pointer">
        //       Silvan Teufel - Master of Science
        //     </h3>
        //   </div>
        //   <div className="col-lg-2 col-1 text-left">
        //     <p className="d-none d-lg-block">Kontaktieren Sie mich: </p>
        //     <a
        //       className="text-dark margin_mail"
        //       href={"mailto:info@teufel-engineering.com"}
        //       target="_blank"
        //     >
        //       <i className="fas fa-envelope-square fa-2x"></i>
        //     </a>
        //     <a
        //       className="text-dark margin_phone"
        //       href={"tel:01605170640"}
        //       target="_blank"
        //     >
        //       <i className="fas fa-phone-square fa-2x"></i>
        //     </a>
        //     <a
        //       className="text-dark margin_whatsapp"
        //       href={"https://wa.me/01605170640"}
        //       target="_blank"
        //     >
        //       <i className="fab fa-whatsapp-square fa-2x"></i>
        //     </a>
        //   </div>
        // </div>
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
        className="row text-light footer"
        style={{
          position: "relative",
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
          <div
            className="container-fluid text-light"
            onClick={this.closeDropDown}
          >
            <div className="row">
              <div className="col-lg-2 col-md-3 col-0"></div>
              <div className="col">
                {this.createComponents()}
                {this.createFooter()}
              </div>
              <div className="col-lg-1 col-0"></div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
