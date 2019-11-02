import * as React from 'react';
import { projects } from '../Daten';
import Projekt from './Project';
import '../css/Fade.css';
var classNames = require('classnames');

interface MyComponentProps {
  closeTableButton: any;
  Key?: any
}

interface MyComponentStates {
  showModal: boolean;
  dataForModal: any;
  Projecttitle: string;
  showProject: boolean;
  screenWidth: number | undefined;
  coverflowquantity: number;
  navlink: any;
  projectTitles: object | undefined;
  toggleNavbarNow: boolean;
}

class ProjectTabs extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
      dataForModal: undefined,
      Projecttitle: '- - -',
      showProject: false,
      screenWidth: undefined,
      coverflowquantity: 1,
      navlink: { Studium: false,
                Bachelorthesis: false,
                Masterthesis: false,
                Spektroskopie: false,
                Temperatur: false,
                Sensorik: false,
                React: false,
                Typescript: false,
                'E-Bike': false,
                SQL: false,
                Mikrocontroller: false
               },
      projectTitles: undefined,
      toggleNavbarNow: false,
    };
    //this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  togglenavlinkto = (key: string) => {
    const navlink = this.state.navlink;

    for (var Key in this.state.navlink) {
      if (this.state.navlink.hasOwnProperty(Key) && Key !== key) {
        navlink[Key] = false;
      } else {
        navlink[key] = true;
      }
      for (let i = 0; i < projects.length; i++){

        if (projects[i].key === key){
        this.getTabledata(projects[i].title, projects[i]);
        }
      }
    }


    this.setState({ navlink });
  };

  getPorjectTitles = () => {



    for (let i = 0; i < projects.length; i++) {
      if (projects[i].key){

      } 
    }
  }


  toggleViaNavbar = () =>{
    if(this.state.toggleNavbarNow){
      this.togglenavlinkto(this.props.Key[1]);
      this.setState({ toggleNavbarNow: false })
      if(this.props.Key[1] === 'General'){
        this.togglenavlinkto('Sensorik');
      }
    }
  }

  componentDidMount(){
    this.togglenavlinkto('Sensorik');
  }

  componentWillReceiveProps (){
    this.setState({ toggleNavbarNow: true})
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
    this.checkQuantity(window.innerWidth);
  }

  checkQuantity = (screenWidth: number) => {
    if (screenWidth > 750 && this.state.coverflowquantity === 1) {
      this.setState({ coverflowquantity: 2 });
    } else if (screenWidth <= 750 && this.state.coverflowquantity === 2) {
      this.setState({ coverflowquantity: 1 });
    }
  };


  getTabledata = (title: string, data: any) => {
    this.setState({ Projecttitle: title, dataForModal: data });
  };

  toggleSingleProject = () => {
    this.setState({ showProject: !this.state.showProject });
  };

  createSingleProject = () => {
    const project = [];

    if (this.state.dataForModal){
      project.push(
        <div className={classNames({ fadein: this.state.dataForModal })}>
         <Projekt Data={this.state.dataForModal} />
        </div>
      );
    } 

    project.push(
      <div className="row text-left align-items-center">
        <div className="col ">
          <br />
        </div>
      </div>
    );

    return project;
  };

  createNavLinks = () =>{
    const links = [];

    for (var key in this.state.navlink) {

      const k = key
      links.push(
        <li className="nav-item" onClick={() => this.togglenavlinkto(k)}>
          <div className={classNames({ 'nav-link': true, active: this.state.navlink[k] })}>
            <p className="h6">{k}</p>
        </div>
      </li>
      );
    }
    return links
  }

  render() {
    console.log(this.props.Key)
    this.toggleViaNavbar();
    return (
      <div className="fadein">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul className="nav nav-tabs">
                  {this.createNavLinks()}
                </ul>
              </div></div>
            <div className="row">
              <div className="col-12">
                {this.createSingleProject()}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <br />
              </div>
            </div>
          </div>
        </div >
      </div>
    );
  }
}

export default ProjectTabs;
