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
      activities.push(
        <tr>
          <td>{"#" + (i + 1)}</td>
          <td>{this.props.Data.activities[i]}</td>
        </tr>
      );
    }
    return activities;
  };

  render() {
    return (
      <div>
        <br />
        <table
          className="table table-bordered table-dark text-left table-hover cursor-pointer"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "black"
          }}
        >
          <tr>
            <th scope="col" />
            <th scope="col">
              <strong>{this.props.Data.title}</strong>
            </th>
          </tr>
          <tbody>
            <tr>
              <td />
              <td>{this.props.Data.date}</td>
            </tr>
            <tr>
              <td />
              <td>{this.props.Data.company}</td>
            </tr>
            {this.createActivities()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Project;
