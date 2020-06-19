import * as React from "react";
import { animateScroll as scroller, Element, Link } from "react-scroll";
import Leistungen from "./Leistungen/Leistungen";
import Kontaktformular from "./Kontakt";
import Philosophie from "./Philosophie";
import ProjectTabs from "./Projects/ProjectTabs";
import ProductTabs from "./Products/ProductTabs";
import "./css/box.css";
import "./css/Cursor.css";
const LogoImage = require("./Pictures/LogoINV1.png");
var classNames = require("classnames");

interface MyComponentStates {}

interface MyComponentProps {
  Key?: any;
}

class Home extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  createScrollButton = (
    scrollString: string,
    buttonString: string,
    clickevent: any
  ) => {
    const button = [];

    button.push(
      <Link
        activeClass="active"
        to={scrollString}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        delay={200}
      >
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ minWidth: 150 }}
          onClick={clickevent}
        >
          {buttonString}
        </button>
      </Link>
    );
    return button;
  };

  donothing = () => {
    return 0;
  };

  checkKey = () => {};

  createHome = () => {
    const home = [];
    home.push(
      <div className="row">
        <div className="col">
          <Element name="Philosophie" className="element" id="E1">
            <div className="row boxkit-first">
              <div className="col">
                <div className="row text-left align-items-center margintop">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-yin-yang fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="cursor-pointer">{"Philosophie"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Philosophie />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Leistungen" className="element" id="E1">
            <div className="row boxkit-mid-leistungen">
              <div className="col">
                <div className="row text-left align-items-center margintop">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-sitemap fa-2x"></i>
                  </div>
                  <div className=" col-md-11 col-9">
                    <h2 className="cursor-pointer">{"Leistungen"}</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12">
                    <Leistungen Key={this.props.Key} />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Projekte" className="element" id="E2">
            <div className="row boxkit-mid-projekte">
              <div className="col">
                <div className="row text-left align-items-center margintop">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-tasks fa-2x"></i>
                  </div>
                  <div className=" col-md-11 col-9">
                    <h2 className="cursor-pointer">{"Projekte"}</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12 ">
                    <ProjectTabs
                      closeTableButton={this.createScrollButton}
                      Key={this.props.Key}
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </Element>

          <Element name="Applikationen" className="element" id="E2">
            <div className="row boxkit-mid-projekte">
              <div className="col">
                <div className="row text-left align-items-center margintop">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-tasks fa-2x"></i>
                  </div>
                  <div className=" col-md-11 col-9">
                    <h2 className="cursor-pointer">{"Applikationen"}</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12 ">
                    <ProductTabs
                      closeTableButton={this.createScrollButton}
                      Key={this.props.Key}
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </Element>

          <Element name="Kontakt" className="element">
            <div className="row boxkit-last">
              <div className="col">
                <div className="row text-left align-items-center margintop">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-id-card fa-2x"></i>
                  </div>
                  <div className=" col-md-11 col-9">
                    <h2 className="cursor-pointer">{"Kontakt"}</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <Kontaktformular />
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
    );

    return home;
  };

  render() {
    return this.createHome();
  }
}

export default Home;
