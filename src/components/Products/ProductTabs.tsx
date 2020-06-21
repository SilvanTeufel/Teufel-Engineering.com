import * as React from "react";
import { products } from "../Daten";
import Product from "./Product";
import "../css/Fade.css";
import "../css/Cursor.css";
//import { CarouselIndicators, NavLink } from "reactstrap";
var classNames = require("classnames");

interface MyComponentProps {
  closeTableButton: any;
  Key?: any;
}

interface MyComponentStates {
  interval: any;
  showModal: boolean;
  dataForModal: any;
  Projecttitle: string;
  showProject: boolean;
  screenWidth: number | undefined;
  coverflowquantity: number;
  navlink: any;
  projectTitles: object | undefined;
  toggleNavbarNow: boolean;
}

export default class ProductTabs extends React.Component<
  MyComponentProps,
  MyComponentStates
> {
  constructor(props: any) {
    super(props);
    this.state = {
      interval: setInterval(() => this.nextSlide(true), 15000),
      showModal: false,
      dataForModal: undefined,
      Projecttitle: "- - -",
      showProject: false,
      screenWidth: undefined,
      coverflowquantity: 1,
      navlink: {
        Zeiterfassung: true,
      },
      projectTitles: undefined,
      toggleNavbarNow: false,
    };
    //this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.togglenavlinkto("Zeiterfassung");
  }

  componentWillReceiveProps() {
    this.setState({ toggleNavbarNow: true });
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
    this.checkQuantity(window.innerWidth);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
    window.removeEventListener("resize", this.updateWindowDimensions);
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
      //this.togglenavlinkto(this.props.Key[1]);
      this.setState({ toggleNavbarNow: false });
      if (
        this.props.Key[1] === "General" ||
        this.props.Key[0] === "Applikationen" ||
        !this.props.Key[1]
      ) {
        this.togglenavlinkto("Zeiterfassung");
      }
    }
  };

  checkQuantity = (screenWidth: number) => {
    if (screenWidth > 750 && this.state.coverflowquantity === 1) {
      this.setState({ coverflowquantity: 2 });
    } else if (screenWidth <= 750 && this.state.coverflowquantity === 2) {
      this.setState({ coverflowquantity: 1 });
    }
  };

  createSingleProject = () => {
    const project = [];

    for (var k in products) {
      var productsV: any = products;

      project.push(
        <div
          className={classNames({
            fadein: this.state.navlink[k],
            "d-none": !this.state.navlink[k],
          })}
        >
          <Product Data={productsV[k]} />
        </div>
      );
    }

    return project;
  };

  createNavLinks = () => {
    const links = [];

    for (var key in this.state.navlink) {
      const k = key;
      links.push(
        <li
          className="nav-item cursor-pointer"
          onClick={() => this.togglenavlinkto(k)}
        >
          <div
            className={classNames({
              "nav-link": true,
              active: this.state.navlink[k],
            })}
          >
            <p className="h6">{k}</p>
          </div>
        </li>
      );
    }
    return links;
  };

  createProjectCarousel = () => {
    const projectsCarousel = [];

    let i = 0;
    for (var k in this.state.navlink) {
      var productsV: any = products;
      var z: string = String(i);
      projectsCarousel.push(
        <div
          id={z}
          className={classNames({
            active: this.state.navlink[k],
            "carousel-item": true,
            row: true,
            fadein: this.state.navlink[k],
          })}
          style={{ marginBottom: "5vh" }}
        >
          <div className="col-12">
            <Product Data={productsV[k]} />
          </div>
        </div>
      );
      i++;
    }

    return projectsCarousel;
  };

  createIndicatorCarousel = () => {
    const indicators = [];
    let i = 0;

    for (var k in this.state.navlink) {
      indicators.push(
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={i}
          className={classNames({
            active: this.state.navlink[k],
          })}
        ></li>
      );
      i++;
    }

    return indicators;
  };

  nextSlide = (direction: boolean) => {
    var setNext = false;

    var navlink = this.state.navlink;

    let i = 0;
    let z = 0;
    for (var key in navlink) {
      if (this.state.navlink[key]) {
        navlink[key] = false;
        this.setState({ navlink });
        z = i;
      }
      i++;
    }

    if (z == i - 1 && direction) {
      z = -1;
    } else if (z == 0 && !direction) {
      z = i;
    }

    i = 0;
    for (var key in navlink) {
      if (direction && i == z + 1) {
        navlink[key] = true;
        this.setState({ navlink });
      } else if (!direction && i == z - 1) {
        navlink[key] = true;
        this.setState({ navlink });
      }
      i++;
    }
  };

  render() {
    this.toggleViaNavbar();

    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ minHeight: "20vh" }}
      >
        <ol className="carousel-indicators">
          {this.createIndicatorCarousel()}
        </ol>
        <div className="carousel-inner">{this.createProjectCarousel()}</div>
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <span
            className="carousel-control-prev-icon cursor-pointer"
            aria-hidden="true"
            onClick={() => this.nextSlide(false)}
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" data-slide="next">
          <span
            className="carousel-control-next-icon cursor-pointer"
            aria-hidden="true"
            onClick={() => this.nextSlide(true)}
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
