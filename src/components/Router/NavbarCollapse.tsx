import * as React from "react";
import { Collapse } from "reactstrap";

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
            <div className="col-12">{this.props.buttons[key]}</div>
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
