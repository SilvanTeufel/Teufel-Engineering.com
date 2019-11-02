import * as React from 'react';
//import * as ReactModal from 'react-modal';
/*
const customStyles = {
  overlay: {
    zIndex: 2
  },
  content: {
    width: 200,
    height: 200,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: 'black'
  }
};
*/

interface MyComponentStates {
  showModal: boolean;
}

interface MyComponentProps {
  Modalbutton: any;
  text: string;
}

class Popup extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      showModal: true
    };
  }

  render() {
    return (
     // <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" style={customStyles}>
        <div className="text-light text-left">
          {this.props.text}
          <br />
          <div
            style={{
              position: 'absolute',
              bottom: 5
            }}
          >
            {this.props.Modalbutton}
          </div>
        </div>
     //</ReactModal>
    );
  }
}

export default Popup;
