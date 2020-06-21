import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
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
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  closeModal = () => this.props.onClose();

  render() {
    const {
      isOpen,
      img,
      title
    } = this.props;
    const containerHeightPx = this.state.height + 'px';
    const contentHeightPx = (this.state.height - 50) + 'px';
    return (
        <ReactModal
            contentLabel={title}
            isOpen={isOpen}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
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
                height: containerHeightPx,
                maxWidth: 'auto',
                border: null,
                backgroundColor: null,
              }
            }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 col-md-11 col-sm-11 col-xs-11">
                <img
                    className="img-fluid"
                    style={{height: contentHeightPx}}
                    src={img}
                    title={title}
                    alt={title}
                    onClick={this.closeModal}
                />
              </div>
              <div className="col-1 col-md-1 col-sm-1 col-xs-1">
              <span
                  className="cursor-pointer"
                  style={{color: '#fff', fontSize: '40px', fontWeight: '100'}}
                  onClick={this.closeModal}
              >×</span>
              </div>
            </div>
          </div>
        </ReactModal>
    );
  }
}
