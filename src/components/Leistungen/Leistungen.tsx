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
  interval: any;
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
      interval: setInterval(() => this.togglenextnavlinkto(), 30000),
      navlink: {
        Sonstiges: false,
        Messsysteme: false,
        Studien: false,
        Datenbanken: false,
      },
      toggleNavbarNow: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
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

    this.setState({ navlink });
  };

  toggleprevlinkto = () => {
    const navlink = this.state.navlink;
    let foundlink = false;

    let lastlink = "Messsysteme";
    for (var Key in this.state.navlink) {
      if (this.state.navlink[Key] && !foundlink) {
        navlink[Key] = false;
        foundlink = true;
      } else if (!foundlink) {
        lastlink = Key;
      }
    }

    navlink[lastlink] = true;
    this.setState({ navlink });
  };

  toggleViaNavbar = () => {
    if (this.state.toggleNavbarNow) {
      this.togglenavlinkto(this.props.Key[1]);
      this.setState({ toggleNavbarNow: false });
      if (this.props.Key[1] === "General") {
        this.togglenavlinkto("Sonstiges");
      }
    }
  };

  componentWillReceiveProps() {
    this.setState({ toggleNavbarNow: true });
  }

  componentDidMount() {
    this.togglenavlinkto("Sonstiges");
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
      <div style={{ marginBottom: "5vh" }}>
        <div
          className={classNames({
            fadein: this.state.navlink.Sonstiges,
            "d-none": !this.state.navlink.Sonstiges,
          })}
        >
          {<Further />}
        </div>
        <div
          className={classNames({
            fadein: this.state.navlink.Messsysteme,
            "d-none": !this.state.navlink.Messsysteme,
          })}
        >
          {<Measure />}
        </div>
        <div
          className={classNames({
            fadein: this.state.navlink.Studien,
            "d-none": !this.state.navlink.Studien,
          })}
        >
          {<Study />}
        </div>
        <div
          className={classNames({
            fadein: this.state.navlink.Datenbanken,
            "d-none": !this.state.navlink.Datenbanken,
          })}
        >
          {<Database />}
        </div>
      </div>
    );

    return tab;
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

  render() {
    this.toggleViaNavbar();
    return (
      <div
        id="carouselExampleIndicators"
        className="slide"
        data-ride="carousel"
        style={{ minHeight: "70vh" }}
      >
        <ol className="carousel-indicators">
          {this.createIndicatorCarousel()}
        </ol>
        <div className="carousel-inner">{this.switchNavTab()}</div>
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

export default Leistungen;
