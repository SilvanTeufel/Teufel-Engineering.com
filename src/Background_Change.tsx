import * as React from "react";
import { renderToString } from "react-dom/server";
import "./App.css";
import Home from "./Home";
import Kontakt from "./components/Kontakt";
//import * as THREE from "three";

//import * as THREE from "three-full";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { FlyControls } from "../node_modules/three/examples/jsm/controls/FlyControls.js";
import NX from "./Pictures/nx.jpg";
import NY from "./Pictures/nx.jpg";
import NZ from "./Pictures/nx.jpg";
import PX from "./Pictures/nx.jpg";
import PY from "./Pictures/nx.jpg";
import PZ from "./Pictures/nx.jpg";

//import * as THREE from "three";
const THREE = require("three-full");
//import * as OrbitControlsFunction from "three-orbit-controls";
//const OrbitControlsFunction = require("three-orbit-controls");
//const OrbitControls = OrbitControlsFunction(THREE); // OrbitControls is now your constructor
//const controls: THREE.OrbitControls = new OrbitControls(camera, element); // Code as you would from here on out.

// import * as THREE from 'three';
//const FlyControls = require("three-fly-controls")(THREE);

//var THREE = require("three.js");

// Add the plugin

interface MyBackgroundStates {
  goUp: boolean;
  x: any;
  y: any;
  width: number;
  height: number;
}

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

export default class Cube extends React.Component<{}, MyBackgroundStates> {
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    document.removeEventListener("mousemove", () => {});
  }

  onMouseMove = (event: any) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  componentDidMount() {
    this.createScene();
  }

  createCubeBox = () => {
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

    var mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), material);

    return mesh;
  };

  createCamera = () => {
    return new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  };

  createRedCube1 = () => {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    cube.material.color.set(0xff0000);
    cube.position.z = 0;
    cube.position.x = -150;
    cube.position.y = 0;

    return cube;
  };

  createRedCube2 = () => {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    cube.material.color.set(0xff0000);
    cube.position.z = -50;
    cube.position.x = 0;
    cube.position.y = 0;

    return cube;
  };

  createRedCube3 = () => {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    cube.material.color.set(0xff0000);
    cube.position.z = 0;
    cube.position.x = 0;
    cube.position.y = 0;

    return cube;
  };

  createResizeEventListener = (camera: any, renderer: any) => {
    return window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  createGridHelper = () => {
    var size = 10;
    var divisions = 10;
    return THREE.GridHelper(size, divisions);
  };

  updateHTMLtoCube = (
    cube: any,
    time: number,
    tempV: THREE.Vector3,
    camera: THREE.PerspectiveCamera,
    canvas: any,
    elem: any
  ): any => {
    time *= 0.001;
    const speed = 1 + 0.1;
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
    cube.updateWorldMatrix(true, false);
    cube.getWorldPosition(tempV);
    tempV.project(camera);
    if (canvas) {
      const x = (tempV.x * 0.5 + 0.5) * canvas.clientWidth;
      const y = (tempV.y * -0.5 + 0.5) * canvas.clientHeight;
      elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
    }
  };

  addComponentToElement = (element: any, component: any) => {
    const labelContainerElem = document.querySelector("#labels");

    element.innerHTML = renderToString(component);

    if (labelContainerElem) {
      labelContainerElem.appendChild(element);
    }
  };

  createScene = () => {
    var scene = new THREE.Scene();
    var camera = this.createCamera();
    var boxMesh = this.createCubeBox();

    scene.add(boxMesh);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // const controls = new OrbitControls(camera, renderer.domElement);
    // const labelContainerElem = document.querySelector("#labels");

    var cube1 = this.createRedCube1();
    scene.add(cube1);

    var cube2 = this.createRedCube2();
    scene.add(cube2);

    const elem1 = document.createElement("div");
    this.addComponentToElement(elem1, <Home />);

    const elem2 = document.createElement("div");
    this.addComponentToElement(elem2, <Kontakt />);

    this.createResizeEventListener(camera, renderer);
    //var gridHelper = this.createGridHelper();

    camera.position.z = 0.000000000000000000000001;

    camera.lookAt(scene.position);
    window.addEventListener("click", this.onMouseMove, false);

    const tempV = new THREE.Vector3();

    const canvasa = document.querySelector("#c");

    let time = 0;

    var animate = () => {
      this.updateHTMLtoCube(cube1, time, tempV, camera, canvasa, elem1);
      this.updateHTMLtoCube(cube2, time, tempV, camera, canvasa, elem2);

      requestAnimationFrame(animate);
      //controls.target.set(0, 0, 0);
      //controls.update();

      raycaster.setFromCamera(mouse, camera);

      var intersects = raycaster.intersectObjects(scene.children);

      if (
        intersects.length !== 0 &&
        intersects[0].object.material.uuid != boxMesh.material.uuid
      ) {
        let obj = intersects[0].object;
        obj.material.color.set(0xffff00);
      }

      if (
        camera.rotation.y <= 90 * THREE.MathUtils.DEG2RAD ||
        camera.rotation.y >= 91 * THREE.MathUtils.DEG2RAD
      ) {
        camera.rotation.y += 0.01;
      } else if (
        camera.rotation.x <= 90 * THREE.MathUtils.DEG2RAD ||
        camera.rotation.x >= 91 * THREE.MathUtils.DEG2RAD
      ) {
        camera.rotation.x += 0.01;
      } else if (
        camera.rotation.z <= 90 * THREE.MathUtils.DEG2RAD ||
        camera.rotation.z >= 91 * THREE.MathUtils.DEG2RAD
      ) {
        camera.rotation.z += 0.01;
      }

      renderer.render(scene, camera);
    };
    animate();
  };

  render() {
    return (
      <body>
        <div id="container">
          <div
            ref={(ref) => (this.mount = ref)}
            style={{
              position: "fixed",
              display: "block",
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          ></div>
          <canvas id="c"></canvas>
          <div id="labels"></div>
        </div>
      </body>
    );
  }
}

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
