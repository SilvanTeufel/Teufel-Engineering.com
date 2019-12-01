import * as React from "react";
import { projects } from "../Daten";
import Project from "./Project";
import "../css/Fade.css";
import "../css/Cursor.css";
//import { CarouselIndicators, NavLink } from "reactstrap";
var classNames = require("classnames");

interface MyComponentProps {
  closeTableButton: any;
  Key?: any;
}

interface MyComponentStates {
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

class ProjectTabs extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
      dataForModal: undefined,
      Projecttitle: "- - -",
      showProject: false,
      screenWidth: undefined,
      coverflowquantity: 1,
      navlink: {
        Studium: false,
        Bachelorthesis: false,
        Masterthesis: false,
        Spektroskopie: false,
        Temperatur: false,
        Sensorik: true,
        React: false,
        Typescript: false,
        "E-Bike": false,
        SQL: false,
        Mikrocontroller: false,
        Angular: false
      },
      projectTitles: undefined,
      toggleNavbarNow: false
    };
    //this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
      if (
        this.props.Key[1] === "General" ||
        this.props.Key[0] === "Leistungen" ||
        !this.props.Key[1]
      ) {
        this.togglenavlinkto("Sensorik");
      }
    }
  };

  componentDidMount() {
    this.togglenavlinkto("Sensorik");
  }

  componentWillReceiveProps() {
    this.setState({ toggleNavbarNow: true });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
    this.checkQuantity(window.innerWidth);
  }

  checkQuantity = (screenWidth: number) => {
    if (screenWidth > 750 && this.state.coverflowquantity === 1) {
      this.setState({ coverflowquantity: 2 });
    } else if (screenWidth <= 750 && this.state.coverflowquantity === 2) {
      this.setState({ coverflowquantity: 1 });
    }
  };

  createSingleProject = () => {
    const project = [];

    for (var k in projects) {
      var projectsV: any = projects;

      project.push(
        <div
          className={classNames({
            fadein: this.state.navlink[k],
            "d-none": !this.state.navlink[k]
          })}
        >
          <Project Data={projectsV[k]} />
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
              active: this.state.navlink[k]
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
    console.log("creating Carousel");
    let i = 0;
    for (var k in this.state.navlink) {
      var projectsV: any = projects;
      var z: string = String(i);
      //console.log(projectsV);
      projectsCarousel.push(
        <div
          id={z}
          className={classNames({
            active: this.state.navlink[k],
            "carousel-item": true,
            row: true,
            fadein: this.state.navlink[k]
          })}
          style={{ marginBottom: "10vh" }}
        >
          <div className="col-12">
            <Project Data={projectsV[k]} />
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
            active: this.state.navlink[k]
          })}
        ></li>
      );
      i++;
    }

    return indicators;
  };

  nextSlide = (direction: boolean) => {
    var setNext = false;
    console.log("nextSlide");

    var navlink = this.state.navlink;

    let i = 0;
    let z = 0;
    for (var key in navlink) {
      console.log(key);
      console.log(navlink[key]);
      console.log(i);
      if (this.state.navlink[key]) {
        navlink[key] = false;
        this.setState({ navlink });
        z = i;
      }
      i++;
    }

    console.log(z);
    console.log(i);
    console.log(direction);

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

    console.log(this.state.navlink);
  };

  render() {
    this.toggleViaNavbar();

    return (
      /*
      <div className="fadein">
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
                  {this.createNavLinks()}
                </ul>
              </div></div>
            <div className="row">
              <div className="col-12">
                {this.createSingleProject()}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <br />
              </div>
            </div>
          </div>
        </div >
      </div>*/

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {this.createIndicatorCarousel()}
        </ol>
        <div className="carousel-inner" style={{ minHeight: "65vh" }}>
          {this.createProjectCarousel()}
        </div>
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

export default ProjectTabs;
