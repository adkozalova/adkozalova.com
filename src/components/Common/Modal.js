import React, {useEffect, useState} from 'react';
import ReactModal from 'react-modal';
import {useTranslation} from "react-i18next";

export default function Modal(props) {

  const {isOpen, img, imgDownload, title, onClose} = props;
  const [t] = useTranslation();
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
              padding: '0px',
              paddingTop: '20px',
              height: modalSize.height > modalSize.width ? 'auto' : modalSize.height + 'px',
              width: modalSize.height > modalSize.width ? modalSize.width + 'px' : 'auto',
              maxWidth: 'auto',
              border: null,
              backgroundColor: null,
            }
          }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 col-md-1 col-sm-1 col-xs-1"/>
            <div className="col-10 col-md-10 col-sm-10 col-xs-10">
              <img
                  className="img-fluid"
                  style={{
                    height: (modalSize.height > modalSize.width ? 'auto' : modalSize.height - 50 + 'px'),
                    width: (modalSize.height > modalSize.width ? modalSize.width - 50 + 'px' : 'auto')
                  }}
                  src={img}
                  title={title}
                  alt={title}
                  onClick={onClose}
              />
            </div>
            <div className="col-1 col-md-1 col-sm-1 col-xs-1">
              <div className={"row"}>
                <i className="fa fa-times cursor-pointer" style={{color: '#fff', fontSize: '23px'}} onClick={onClose}/>
              </div>
              {imgDownload !== null && imgDownload !== undefined
                  ? (
                      <div className={"row mt-4"}>
                        <a href={imgDownload} download={title + ".jpg"} className="fa fa-download" title={t("Download full size")}
                           style={{color: '#fff', fontSize: '20px'}}/>
                      </div>
                  )
                  : ("")
              }
            </div>
          </div>
        </div>
      </ReactModal>
  );

}
