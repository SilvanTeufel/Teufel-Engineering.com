import * as React from 'react';
import '../css/Navbar.css';
const toggleLine = require('../Pictures/toggleLine2.png');
var classNames = require('classnames');
const LogoImage = require('../Pictures/LogoINV2.png');
const LogoImageBlack = require('../Pictures/LogoINV1.png');

interface MyComponentProps {
  buttons: any;
  toggleDropDown: any;
  DropdownisOpen: boolean;
  routerstructure: any;
}

interface MyComponentStates {

}

class RouterDropdownField extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {

    };
  }

  createInputs = () => {
    const row = [];

    row.push(
      <div className="dropdown-item first-dropdownelement">
        <br />
      </div>
    );
    for (var key in this.props.buttons) {
      
      row.push(
        <div className="dropdown-item dropdownelement text-left">
          <div className="row">
            <div className="col-12">
              <img src={LogoImage} alt="" className={classNames({ 'rounded float- left': true, rotatebuttonlogo: this.props.routerstructure.iconstate[key] })} style={{ opacity: 0.8, maxHeight: 38 }} />
              {this.props.buttons[key]}
            </div>
          </div>
        </div>
      );
    }

    row.push(
      <div className="dropdown-item last-dropdownelement">
        <br />
      </div>
      );

    return row;
  };

  createField = () => {
    const row = [];

    //const menuClass = `dropdown-menu${this.props.DropdownisOpen ? ' show' : ''}`;
    row.push(
      <div className="dropdown">
        <div className="row align-items-center text-right" onClick={this.props.toggleDropDown}>
          <div className="col-md-1 col-4">
            <div className="row">
              <div className="col">
                <i className="fas fa-arrow-right" style={{ marginLeft: '1vh' }}></i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <i className="fas fa-arrow-right" style={{ marginLeft: '1vh' }}></i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <i className="fas fa-arrow-right" style={{ marginLeft: '1vh' }}></i>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-4">
          <div className="row">
            <div className="col">
            <img
              src={LogoImageBlack}
              alt=""
                className={classNames({ "rounded float-left": true, rotatebuttonlogo: this.props.DropdownisOpen })}
              style={{ maxHeight: 25 }}
              onClick={this.props.toggleDropDown}
            />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <img
                src={LogoImageBlack}
                alt=""
                className={classNames({ "rounded float-left": true, rotatebuttonlogo: this.props.DropdownisOpen })}
                style={{ maxHeight: 25 }}
                onClick={this.props.toggleDropDown}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <img
                src={LogoImageBlack}
                alt=""
                className={classNames({ "rounded float-left": true, rotatebuttonlogo: this.props.DropdownisOpen })}
                style={{ maxHeight: 25 }}
                onClick={this.props.toggleDropDown}
              />
            </div>
          </div>
      </div>
          <div className="col-md-1 col-4">
            <div className="row">
              <div className="col">
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames({ slidein: this.props.DropdownisOpen, slideout: !this.props.DropdownisOpen })}
          aria-labelledby="dropdownMenuButton"
        >
          {this.createInputs()}
        </div>
      </div>
    );
    //  'btn btn-outline-light dropdown-toggle'      {this.state.fieldstate}
    return row;
  };
/*
        <button
          className={'navbar-toggler'}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          onClick={this.props.toggleDropDown}
          style={{ height: 45, textAlign: 'left' }}
        ></button>
*/
  render() {
    return this.createField();
  }
}

export default RouterDropdownField;
