import React, {useState} from "react";
import Modal from "../Common/Modal";
import {useTranslation} from "react-i18next";

export default function Project(props) {
  const [t] = useTranslation();
  const [modal, setModal] = useState({isOpen: false, img: null, imgDownload: null, title: null, tags: null});
  const openModal = (img, imgDownload, title, tags) => setModal({isOpen: true, img: img, imgDownload: imgDownload, title: title, tags: tags})
  const closeModal = () => setModal({isOpen: false, img: null, imgDownload: null, title: null, tags: null});

  return (
      <section className="portfolio_warp portfolio_3_warp" id="portfolio_warp">
        <div className="port_bg_text">
          <h1 className="bg_strock_text" data-parallax='{"x": -200}'>{t('Project')}</h1>
        </div>
        <div className="container-fluid">
          <div className="row portfolio_single_wrap portfolio_3_column">
            {props.items.map((item, key) => {
              const {
                thumbnail,
                img,
                imgDownload,
                title,
                tags,
              } = item;
              return (
                  <div className="col-md-4 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus_3" key={key}>
                    <div className="portfolio_item">
                      <div className="port_img tilt">
                        <img src={thumbnail} alt={title + " - " + tags} className="img-fluid cursor-pointer"
                             onClick={() => openModal(img, imgDownload, title, tags)}
                             style={{maxWidth: '300px'}}
                        />
                      </div>
                      <div className="exp cursor-pointer" onClick={() => openModal(img, imgDownload, title, tags)}>
                          <span className="exp_inner">
                            <span className="exp_hover">{t('Explore')}</span>
                          </span>
                      </div>
                      <div className="port_text">
                        <div className="cursor-pointer" onClick={() => openModal(img, imgDownload, title, tags)}>
                          <h3 className="port_title">{title}</h3>
                        </div>
                        <p className="catagory">- {tags}</p>
                      </div>
                    </div>
                  </div>
              )
            })}
            <Modal
                isOpen={modal.isOpen}
                onClose={closeModal}
                img={modal.img}
                imgDownload={modal.imgDownload}
                title={modal.title + " - " + modal.tags}
            />
          </div>
        </div>
      </section>
  );
}