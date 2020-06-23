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

    for (let i = 0; i < vistenkarteVorne[0].services1.length; i++) {
      text1.push(
        <li className="text-left">{vistenkarteVorne[0].services1[i]}</li>
      );
    }

    text1.push(<br />);
    text.push(
      <div className="card transparent">
        <div className="card-header bg-standard-dark">
          <ul className="list-unstyled text-left">
            {vistenkarteVorne[0].title1}{" "}
          </ul>
        </div>
        <div className="card-body bg-standard-light">{text1}</div>
        <div className="card-footer bg-standard-dark">
          <em>{vistenkarteVorne[0].footer1}</em>
        </div>
      </div>
    );
    // text1.push(<h6 className="font-italic">{text}</h6>);
    return text;
  };
  createCarouselText2 = () => {
    const text2 = [];
    const text = [];

    for (let i = 0; i < vistenkarteVorne[0].services2.length; i++) {
      text2.push(
        <li className="text-left">{vistenkarteVorne[0].services2[i]}</li>
      );
    }
    text2.push(<br />);
    text.push(
      <div className="card transparent">
        <div className="card-header bg-standard-dark">
          <ul className="list-unstyled text-left">
            {vistenkarteVorne[0].title2}
          </ul>
        </div>
        <div className="card-body bg-standard-light">{text2}</div>
        <div className="card-footer bg-standard-dark">
          <em>{vistenkarteVorne[0].footer2}</em>
        </div>
      </div>
    );

    return text;
  };

  createCarouselText3 = () => {
    const text = [];
    const text3 = [];

    text3.push(<br />);
    for (let i = 0; i < vistenkarteHinten[0].qualifications1.length; i++) {
      text3.push(
        <li className="text-left">
          {vistenkarteHinten[0].qualifications1[i]}{" "}
        </li>
      );
    }
    text3.push(<br />);
    text.push(
      <div className="card transparent">
        <div className="card-header bg-standard-dark">
          <ul className="list-unstyled text-left">
            {vistenkarteHinten[0].title1}
          </ul>
        </div>
        <div className="card-body bg-standard-light">{text3}</div>
        <div className="card-footer bg-standard-dark">
          <em>{vistenkarteHinten[0].footer1}</em>
        </div>
      </div>
    );
    return text;
  };

  createCarouselText4 = () => {
    const text = [];
    const text3 = [];

    for (let i = 0; i < vistenkarteHinten[0].qualifications2.length; i++) {
      text3.push(
        <li className="text-left">
          {vistenkarteHinten[0].qualifications2[i]}{" "}
        </li>
      );
    }
    text3.push(<br />);
    text.push(
      <div className="card transparent">
        <div className="card-header bg-standard-dark">
          <ul className="list-unstyled text-left">
            {vistenkarteHinten[0].title2}
          </ul>
        </div>
        <div className="card-body bg-standard-light">{text3}</div>
        <div className="card-footer bg-standard-dark">
          <em>{vistenkarteHinten[0].footer2}</em>
        </div>
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
            <div className="col-lg-1 col-1"></div>
            <div className="col-lg-5 col-10 xlg_marginbottom xlg_margintop">
              {this.createCarouselText2()}
            </div>
            <div className="col-1 d-lg-none"></div>
            <div className="col-1 d-lg-none"></div>
            <div className="col-lg-5 col-10 xlg_marginbottom xlg_margintop">
              {this.createCarouselText1()}
            </div>
            <div className="col-lg-1 col-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1 col-1"></div>
            <div className="col-lg-5 col-10 xlg_marginbottom xlg_margintop">
              {this.createCarouselText3()}
            </div>
            <div className="col-1 d-lg-none"></div>
            <div className="col-1 d-lg-none"></div>
            <div className="col-lg-5 col-10 xlg_marginbottom xlg_margintop">
              {this.createCarouselText4()}
            </div>
            <div className="col-lg-1 col-1"></div>
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
