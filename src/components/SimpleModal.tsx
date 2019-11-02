import * as React from 'react';
// import * as ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: 2
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: 'black',

    maxWidth: 1000,
    maxHeight: 525,
    top: '15%',
    left: '50%',
    marginLeft: '-40%'
  }
};

/*
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: 'black'
*/

interface MyComponentStates {
  showModal: boolean;
}

interface MyComponentProps {
  Modalbutton: any;
  Modaldata: any;
}

class SimpleModal extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      showModal: true
    };
  }



  createActivities = () => {
    const activities = [];
    for (let i = 0; i < this.props.Modaldata.activities.length; i++) {
      activities.push(
        <tr>
          <td>{'#' + (i + 1)}</td>
          <td>{this.props.Modaldata.activities[i]}</td>
        </tr>
      );
    }
    return activities;
  };

  createImage = () => {
    const image = [];

    const ModalImage = require(`${this.props.Modaldata.imagepath}`);

    image.push(
      <img src={ModalImage} className="rounded float-left" style={{ opacity: 0.6, width: 150, height: 100 }} />
    );

    return image;
  };

  render() {
    return (
      //<ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" style={customStyles}>
        <div className="row text-light text-left">
          <div className="col">
            <br />
            <div className="row">
              <div className="col">
                <table className="table table-bordered table-dark">
                  <tr>
                    <th scope="col" />
                    <th scope="col">
                      <strong>{this.props.Modaldata.title}</strong>
                    </th>
                  </tr>
                  <tbody>
                    <tr>
                      <td />
                      <td>{this.props.Modaldata.date}</td>
                    </tr>
                    <tr>
                      <td />
                      <td>{this.props.Modaldata.company}</td>
                    </tr>
                    {this.createActivities()}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  style={{
                    position: 'absolute',
                    bottom: 30,
                    left: 30
                  }}
                />

                {this.props.Modalbutton}
              </div>
            </div>
          </div>
          <br />
        </div>
      //</ReactModal>
    );
  }
}

export default SimpleModal;
