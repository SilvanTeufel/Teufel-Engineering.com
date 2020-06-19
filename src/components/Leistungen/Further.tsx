import * as React from "react";
import { vistenkarteHinten, vistenkarteVorne } from "../Daten";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Carousel.css";
import "../css/MindMap.css";
import "../css/Cursor.css";

class Further extends React.Component<{}, {}> {
  createCarouselText1 = () => {
    const text = [];
    const text1 = [];
    text1.push(
      <h4 className="font-weight-bold text-left margintop">
        {vistenkarteVorne[0].title1}
      </h4>
    );
    text1.push(<br />);
    for (let i = 0; i < vistenkarteVorne[0].services1.length; i++) {
      text1.push(
        <p className="text-left further_text">
          {"- " + vistenkarteVorne[0].services1[i]}
        </p>
      );
    }
    text1.push(<br />);
    text.push(
      <div className="row">
        <div className="col-md-1 col-0" />
        <div className="col-md-10 col-12">{text1}</div>
        <div className="col-md-1 col-0" />
      </div>
    );
    // text1.push(<h6 className="font-italic">{text}</h6>);
    return text;
  };
  createCarouselText2 = () => {
    const text2 = [];
    const text = [];

    text2.push(
      <h4 className="font-weight-bold text-left margintop">
        {vistenkarteVorne[0].title2}{" "}
      </h4>
    );
    text2.push(<br />);
    for (let i = 0; i < vistenkarteVorne[0].services2.length; i++) {
      text2.push(
        <p className="text-left further_text">
          {"- " + vistenkarteVorne[0].services2[i]}
        </p>
      );
    }
    text2.push(<br />);
    text.push(
      <div className="row">
        <div className="col-md-1 col-0" />
        <div className="col-md-10 col-12">{text2}</div>
        <div className="col-md-1 col-0" />
      </div>
    );

    return text;
  };

  createCarouselText3 = () => {
    const text = [];
    const text3 = [];

    text3.push(
      <h4 className="font-weight-bold text-left margintop">
        {vistenkarteHinten[0].title}
      </h4>
    );
    text3.push(<br />);
    for (let i = 0; i < vistenkarteHinten[0].qualifications.length; i++) {
      text3.push(
        <p className="text-left further_text">
          {"- " + vistenkarteHinten[0].qualifications[i]}{" "}
        </p>
      );
    }
    text3.push(<br />);
    text.push(
      <div className="row">
        <div className="col-md-1 col-0" />
        <div className="col-md-10 col-12">{text3}</div>
        <div className="col-md-1 col-0" />
      </div>
    );
    return text;
  };

  createSonstiges = () => {
    const sonstiges = [];

    sonstiges.push(
      <div className="row">
        <div className="col margintop marginbottom">
          <div className="row">
            <div className="col-md col-1" />
            <div className="col text-center">
              <br />
              <h3 className="cursor-pointer">Sonstiges</h3>
              <br />
            </div>
            <div className="col-md col-1" />
          </div>
          <div className="row xlg_marginbottom xlg_margintop">
            <div className="col-2" />
            <div className="col-8 mmborder">{this.createCarouselText1()}</div>
            <div className="col-2" />
          </div>

          <div className="row xlg_marginbottom xlg_margintop">
            <div className="col-2" />
            <div className="col-8 mmborder ">{this.createCarouselText2()}</div>
            <div className="col-2" />
          </div>

          <div className="row xlg_marginbottom xlg_margintop">
            <div className="col-2" />
            <div className="col-8 mmborder">{this.createCarouselText3()}</div>
            <div className="col-2" />
          </div>
        </div>
      </div>
    );

    return sonstiges;
  };

  render() {
    return this.createSonstiges();
  }
}

export default Further;
