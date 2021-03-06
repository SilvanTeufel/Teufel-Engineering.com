import * as React from "react";
import "../css/Cursor.css";

interface MyComponentProps {
  Data: any;
}

class Project extends React.Component<MyComponentProps, {}> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {};
  }

  createActivities = () => {
    const activities = [];

    for (let i = 0; i < this.props.Data.activities.length; i++) {
      activities.push(<li>{this.props.Data.activities[i]}</li>);
    }
    return activities;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col">
          <ul className="list-unstyled text-left">
            <li>
              <strong>{this.props.Data.title}</strong>
            </li>

            <li style={{ marginBottom: "2vh" }}>
              {this.props.Data.date + " / " + this.props.Data.company}
            </li>

            <li>
              <ul>{this.createActivities()}</ul>
            </li>
          </ul>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default Project;
