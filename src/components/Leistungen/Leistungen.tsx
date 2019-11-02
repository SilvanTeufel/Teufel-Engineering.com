import * as React from 'react';
import Measure from './Measure';
import Study from './Study';
import Database from './Database';
import Further from './Further';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';
import '../css/MindMap.css';
import { Collapse } from 'reactstrap';
var classNames = require('classnames');

interface MyComponentStates {
  navlink: any;
  toggleNavbarNow: boolean;
}

interface MyComponentProps {
  Key?: any
}


class Leistungen extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      navlink: { Messsysteme: false, Studien: false, Datenbanken: false, Sonstiges: false },
      toggleNavbarNow: false
    };
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
      this.setState({ toggleNavbarNow: false })
      if (this.props.Key[1] === 'General') {
        this.togglenavlinkto('Sensorik');
      }
    }
  }

  componentWillReceiveProps() {
    this.setState({ toggleNavbarNow: true })
  } 

  componentDidMount() {
    this.togglenavlinkto('Messsysteme');
  }



  switchNavTab = () => {
    const tab = [];

    var somethingIsTrue = false;
    for (var key in this.state.navlink) {
      if (this.state.navlink[key]) {
        somethingIsTrue = this.state.navlink[key]
      }
    }

    if (!somethingIsTrue) {
      const navlink = this.state.navlink;
      navlink.Messsysteme = true;
      this.setState({navlink})
    } 

   tab.push(
    <div>
       <Collapse isOpen={this.state.navlink.Messsysteme}>
         {<Measure/>}
       </Collapse >
       <Collapse isOpen={this.state.navlink.Studien}>
         {<Study/>}
       </Collapse >
       <Collapse isOpen={this.state.navlink.Datenbanken}>
         {<Database/>}
       </Collapse >
       <Collapse isOpen={this.state.navlink.Sonstiges}>
         {<Further/>}
       </Collapse >
    </div>
   )


   return tab;
  }

  render() {
    console.log(this.props.Key)
    this.toggleViaNavbar();
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="nav nav-tabs">
            <li className="nav-item" onClick={() => this.togglenavlinkto('Messsysteme')}>
                  <div className={classNames({ 'nav-link': true, active: this.state.navlink.Messsysteme })}>
                Messsysteme
              </div>
            </li>

            <li className="nav-item" onClick={() => this.togglenavlinkto('Studien')}>
              <div
                    className={classNames({ 'nav-link': true, active: this.state.navlink.Studien })}
                
              >
                Studien
                          </div>
            </li>
                <li className="nav-item" onClick={() => this.togglenavlinkto('Datenbanken')}>
                  <div
                    className={classNames({ 'nav-link': true, active: this.state.navlink.Datenbanken })}

                  >
                    Datenbanken
                          </div>
                </li>
            <li className="nav-item" onClick={() => this.togglenavlinkto('Sonstiges')}>
                  <div className={classNames({ 'nav-link': true, active: this.state.navlink.Sonstiges })}>
                Sonstiges
                          </div>
            </li>
          </ul>
            </div></div>
          <div className="row">
            <div className="col-12">
              {this.switchNavTab()}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <br />
            </div>
          </div>
      </div>
    </div >
    );
  }
}

export default Leistungen;
