import * as React from "react";
import "./App.css";
//import * as THREE from "three";
//import * as THREE from "three-full";
//import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
//import * as THREE from "three";
const THREE = require("three-full");
//import * as OrbitControlsFunction from "three-orbit-controls";
//const OrbitControlsFunction = require("three-orbit-controls");
//const OrbitControls = OrbitControlsFunction(THREE); // OrbitControls is now your constructor
//const controls: THREE.OrbitControls = new OrbitControls(camera, element); // Code as you would from here on out.

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
    let path = "http://161.35.31.100:5001/";
    let format = ".jpg";
    let urls = [
      path + "pz" + format,
      path + "nz" + format,
      path + "ny" + format, // Muss um 90° nach rechts rotiert werden;
      path + "py" + format, // Muss um 90° nach links rotiert werden;
      path + "px" + format,
      path + "nx" + format,
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

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );

    this.mount.appendChild(renderer.domElement);
    let lightAmbient = new THREE.AmbientLight(0x202020); // soft white light

    scene.add(lightAmbient);
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
      renderer.render(scene, camera);
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
        //onMouseMove={this.handleMouseMove}
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

// ONLY A CUBE
/*
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    //document.body.appendChild(renderer.domElement);
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    document.addEventListener("mousemove", function (e) {
      let scale = -0.01;
      geometry.rotateY(e.movementX * scale);
      geometry.rotateX(e.movementY * scale);
      // geometry.rotation.z = 0; //this is important to keep the camera level..
    });

    scene.add(cube);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();*/
// LOAD A CUBEMAP
/*
    var loader = new THREE.CubeTextureLoader();
    loader.setPath("textures/cube/pisa/");

    var textureCube = loader.load([
      "px.jpg",
      "nx.jpg",
      "py.jpg",
      "ny.jpg",
      "pz.jpg",
      "nz.jpg",
    ]);

    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: textureCube,
    });*/
