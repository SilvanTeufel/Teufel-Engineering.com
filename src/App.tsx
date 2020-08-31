import * as React from "react";
import "./App.css";
import Router from "./components/Router/Router";
import Background from "./Background";
//import CameraControls from "camera-controls";

const THREE = require("three-full");
const background = require("./components/Pictures/background11111111.jpg");
const { detect } = require("detect-browser");
const browser = detect();

class App extends React.Component<{}, {}> {
  RenderApp = () => {
    const app = [];

    if (browser.name === "ie" || browser.name === "edge") {
      app.push(
        <div>
          <p>Your Browser is not Supported please use Chrome or Firefox</p>
        </div>
      );
    } else {
      app.push(
        <div>
          <Background />
          <Router />
        </div>
      );
    }
    return app;
  };

  render() {
    return this.RenderApp();
  }
}

export default App;
