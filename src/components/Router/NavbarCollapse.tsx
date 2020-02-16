import * as React from "react";
import { Collapse } from "reactstrap";
var classNames = require("classnames");
const LogoImage = require("../Pictures/LogoINV2.png");

interface MyComponentStates {}

interface MyComponentProps {
  Key: string;
  getIconState: any;
  buttons: any;
}

class NavbarCollapse extends React.Component<
  MyComponentProps,
  MyComponentStates
> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  createButtons = () => {
    const buttons = [];
    for (var key in this.props.buttons) {
      if (key !== "General")
        buttons.push(
          <div className="row text-center" style={{ marginTop: "1vh" }}>
            <div className="col-12">
              <img
                src={LogoImage}
                alt=""
                className={classNames({
                  "rounded float- left": true,
                  rotatebuttonlogo: this.props.getIconState(key)
                })}
                style={{ opacity: 0.8, maxHeight: 32 }}
              />
              {this.props.buttons[key]}
            </div>
          </div>
        );
    }
    return buttons;
  };

  render() {
    return (
      <Collapse isOpen={this.props.getIconState(this.props.Key)}>
        {this.createButtons()}
      </Collapse>
    );
  }
}

export default NavbarCollapse;
