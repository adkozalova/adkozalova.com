import React, {useEffect, useState} from 'react';
import ReactModal from 'react-modal';

export default function Modal(props) {

  const {isOpen, img, title, onClose} = props;
  const [modalSize, setModal] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    function updateWindowDimensions() {
      setModal({width: window.innerWidth, height: window.innerHeight})
    }

    ReactModal.setAppElement('#root');
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (
      <ReactModal
          contentLabel={title}
          isOpen={isOpen}
          onRequestClose={onClose}
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
              height: modalSize.height + 'px',
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
                  style={{height: (modalSize.height - 50) + 'px'}}
                  src={img}
                  title={title}
                  alt={title}
                  onClick={onClose}
              />
            </div>
            <div className="col-1 col-md-1 col-sm-1 col-xs-1">
              <span
                  className="cursor-pointer"
                  style={{color: '#fff', fontSize: '40px', fontWeight: '100'}}
                  onClick={onClose}
              >×</span>
            </div>
          </div>
        </div>
      </ReactModal>
  );

}
