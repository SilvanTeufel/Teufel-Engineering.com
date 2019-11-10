import * as React from 'react';
import { vistenkarteHinten, vistenkarteVorne } from '../Daten';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';
import '../css/MindMap.css';
import '../css/Cursor.css';


class Further extends React.Component<{}, {}> {

  createCarouselText1 = () => {
    const text = [];
    const text1 = [];
    text1.push(<h5 className="font-weight-bold text-left">{vistenkarteVorne[0].title1}</h5>);
    text1.push(<br />);
    for (let i = 0; i < vistenkarteVorne[0].services1.length; i++) {
      text1.push(<h6 className="text-left">{vistenkarteVorne[0].services1[i]}</h6>);
    }

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

    text2.push(<h5 className="font-weight-bold text-left">{vistenkarteVorne[0].title2} </h5>);
    text2.push(<br />);
    for (let i = 0; i < vistenkarteVorne[0].services2.length; i++) {
      text2.push(<h6 className="text-left">{'- ' + vistenkarteVorne[0].services2[i]}</h6>);
    }

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

    text3.push(<h5 className="font-weight-bold text-left">{vistenkarteHinten[0].title}</h5>);
    text3.push(<br />);
    for (let i = 0; i < vistenkarteHinten[0].qualifications.length; i++) {
      text3.push(<h6 className="text-left">{'- ' + vistenkarteHinten[0].qualifications[i]} </h6>);
    }
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
        <div className="col">
          <div className="row">
            <div className="col-md col-1" />
            <div className="col text-center" style={{ marginBottom: '2%' }}>
              <br />
              <h3 className="cursor-pointer">Sonstiges</h3>
              <br />
            </div>
            <div className="col-md col-1" />
          </div>
          <div className="row">
            <div className="col-2" />
            <div className="col-8 mmborder">{this.createCarouselText1()}</div>
            <div className="col-2" />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-2" />
            <div className="col-8 mmborder">{this.createCarouselText2()}</div>
            <div className="col-2" />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-2" />
            <div className="col-8 mmborder">{this.createCarouselText3()}</div>
            <div className="col-2" />
          </div>
          <br />
          <br />
        </div>
      </div>
    );

    return sonstiges;
  };

 
  render() {


    return (
      this.createSonstiges()
    );
  }
}

export default Further;
