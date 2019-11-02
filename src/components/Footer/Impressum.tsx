import * as React from 'react';
import '../css/box.css';

interface MyComponentStates {}

class Impressum extends React.Component<{}, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  createPlace = () => {
    const place = [];
    place.push(<br />);
    place.push(<br />);
    place.push(<br />);
    place.push(<br />);
    place.push(<br />);
    place.push(<br />);
    return place;
  };

  createDataP = () => {
    const dp = [];

    dp.push(
        <div className="row text-left align-items-center">
        <div className="col boxkit-Impressum" >
            <h3>Impressum</h3>
            <h6>Silvan Teufel</h6>
            <h6>Ingenieur im Hard- und Software-Bereich</h6>
            <h6>Robert-Bosch-Straße 11</h6>
            <h6>77815 Bühl</h6>
            <br />
            <h6>Telefon: 01605170640</h6>
            <h6>info@teufel-engineering.com</h6>
            <br />
            <h6>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 320651127</h6>
          </div>
        </div>
    );

    return dp;
  };

  render() {
    return this.createDataP();
  }
}

export default Impressum;
