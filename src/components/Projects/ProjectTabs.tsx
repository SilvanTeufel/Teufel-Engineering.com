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

class ProjectTabs extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      interval: setInterval(() => this.togglenextnavlinkto(), 15000),
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
        Angular: false,
      },
      projectTitles: undefined,
      toggleNavbarNow: false,
    };
    //this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.togglenavlinkto("Sensorik");
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
            "d-none": !this.state.navlink[k],
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
      var projectsV: any = projects;
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
            active: this.state.navlink[k],
          })}
        ></li>
      );
      i++;
    }

    return indicators;
  };

  togglenextnavlinkto = () => {
    const navlink = this.state.navlink;
    let foundlink = false;
    let setlink = false;
    for (var Key in this.state.navlink) {
      if (foundlink) {
        navlink[Key] = true;
        foundlink = false;
        setlink = true;
      }
      if (this.state.navlink[Key] && !setlink) {
        navlink[Key] = false;
        foundlink = true;
      }
    }

    if (!setlink) {
      navlink["Studium"] = true;
    }

    this.setState({ navlink });
  };

  toggleprevlinkto = () => {
    const navlink = this.state.navlink;
    let foundlink = false;

    let lastlink = "Studium";
    for (var Key in this.state.navlink) {
      if (this.state.navlink[Key] && !foundlink) {
        navlink[Key] = false;
        foundlink = true;
      } else if (!foundlink) {
        lastlink = Key;
      }
    }

    console.log(navlink);
    navlink[lastlink] = true;
    this.setState({ navlink });
  };

  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ minHeight: "40vh" }}
      >
        <ol className="carousel-indicators">
          {this.createIndicatorCarousel()}
        </ol>
        <div className="carousel-inner">{this.createProjectCarousel()}</div>
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <span
            className="carousel-control-prev-icon cursor-pointer"
            aria-hidden="true"
            onClick={() => this.toggleprevlinkto()}
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" data-slide="next">
          <span
            className="carousel-control-next-icon cursor-pointer"
            aria-hidden="true"
            onClick={() => this.togglenextnavlinkto()}
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default ProjectTabs;
