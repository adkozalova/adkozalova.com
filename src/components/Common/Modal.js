import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    ReactModal.setAppElement('#root');
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  closeModal = () => this.props.onClose();

  render() {
    const {
      isOpen,
      img,
      title
    } = this.props;
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: {
                position: 'fixed',
                zIndex: 1100,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
              },
              content: {
                position: 'absolute',
                zIndex: 1101,
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                height: (this.state.height - 50) + 'px',
                maxWidth: '80%',
                border: null,
                backgroundColor: null,
              }
            }}
        >
          <span
              className="cursor-pointer"
              style={{position: 'absolute', right: '0', color: '#fff', fontSize:'40px', fontWeight: '100' }}
              onClick={this.closeModal}
          >×</span>
          <img
              className="img-fluid"
              style={{display: 'block', width: 'auto', maxHeight: '100%'}}
              src={img}
              title={title}
              alt={title}
              onClick={this.closeModal}
          />
        </ReactModal>
    );
  }
}
