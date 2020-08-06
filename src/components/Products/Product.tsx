import * as React from "react";
import "../css/Cursor.css";

interface MyComponentProps {
  Data: any;
}

export default class Product extends React.Component<MyComponentProps, {}> {
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

  createProduct = () => {
    const product = [];

    if (this.props.Data) {
      product.push(
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col">
            <ul className="list-unstyled text-left">
              <li>
                <strong>
                  <a
                    className="text-dark"
                    target="_blank"
                    href={this.props.Data.url}
                  >
                    {this.props.Data.title}
                  </a>
                </strong>
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
    return product;
  };

  render() {
    return this.createProduct();
  }
}
