import * as React from "react";
import "./App.css";
import NX from "./components/Cubemap/nx.jpg";
import NY from "./components/Cubemap/nx.jpg";
import NZ from "./components/Cubemap/nx.jpg";
import PX from "./components/Cubemap/nx.jpg";
import PY from "./components/Cubemap/nx.jpg";
import PZ from "./components/Cubemap/nx.jpg";

const THREE = require("three-full");

interface MyBackgroundStates {
  goUp: boolean;
  x: any;
  y: any;
  width: number;
  height: number;
}

class Background extends React.Component<{}, MyBackgroundStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      goUp: true,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }
  mount: any;

  updateDimensions = () => {
    console.log("Test");
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    document.removeEventListener("mousemove", () => {});
  }

  handleMouseMove = (event: any) => {
    console.log(event);
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  Cubemap = () => {
    let sceneCube = new THREE.Scene();
    let cameraCube = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      100000
    );

    let urls = [
      PZ,
      NZ,
      NY, // Muss um 90° nach rechts rotiert werden;
      PY, // Muss um 90° nach links rotiert werden;
      PX,
      NX,
    ];

    var loader = new THREE.CubeTextureLoader();
    var textureCube = loader.load(urls);

    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: textureCube,
      side: THREE.BackSide,
    });

    var mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), material);
    sceneCube.add(mesh);

    return {
      scene: sceneCube,
      camera: cameraCube,
    };
  };

  createMap = () => {
    let renderer = new THREE.WebGLRenderer();
    renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    let cubemap = this.Cubemap();
    document.addEventListener("mousemove", function (e) {
      let scale = -0.001;
      cubemap.camera.rotateY(e.movementX * scale);
      cubemap.camera.rotateX(e.movementY * scale);
    });

    window.addEventListener("resize", () => {
      cubemap.camera.aspect = window.innerWidth / window.innerHeight;
      cubemap.camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    let render = () => {
      requestAnimationFrame(render);
      cubemap.camera.rotation.x += 0.00025;
      cubemap.camera.rotation.y += 0.00025;
      renderer.render(cubemap.scene, cubemap.camera);
    };

    render();
  };

  onWindowResize = (camera: any, renderer: any) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  componentDidMount() {
    this.createMap();
  }

  render() {
    return (
      <div
        ref={(ref) => (this.mount = ref)}
  
        style={{
          position: "fixed",
          display: "block",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {" "}
      </div>
    );
  }
}

export default Background;
