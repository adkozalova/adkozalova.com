import React, {useState} from "react";
import Modal from "./Modal";
import {useTranslation} from "react-i18next";

export default function GalleryItems(props) {
    const [t] = useTranslation();
    const {items, title} = props;
    const [modal, setModal] = useState({isOpen: false, img: null, original: null, title: null, tags: null});
    const openModal = (img, original, title, tags) => setModal({isOpen: true, img: img, original: original, title: title, tags: tags})
    const closeModal = () => setModal({isOpen: false, img: null, original: null, title: null, tags: null});

    return (
        <section className="portfolio_warp portfolio_3_warp" id="portfolio_warp">
            <div className="port_bg_text">
                <h1 className="bg_strock_text" data-parallax='{"x": -200}'>{title}</h1>
            </div>
            <div className="container-fluid">
                <div className="row portfolio_single_wrap portfolio_3_column">
                    {items.map((item, key) => {
                        const {
                            thumbnail,
                            img,
                            original,
                            title,
                            tags,
                        } = item;
                        return (
                            <div className="col-md-4 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus_3" key={key}>
                                <div className="portfolio_item">
                                    <div className="port_img tilt">
                                        <img src={thumbnail} alt={title + " - " + tags} className="img-fluid cursor-pointer"
                                             onClick={() => openModal(img, original, title, tags)}
                                             style={{maxWidth: '300px'}}
                                        />
                                    </div>
                                    <div className="exp cursor-pointer" onClick={() => openModal(img, original, title, tags)}>
                          <span className="exp_inner">
                            <span className="exp_hover">{t('Explore')}</span>
                          </span>
                                    </div>
                                    <div className="port_text">
                                        <div className="cursor-pointer" onClick={() => openModal(img, original, title, tags)}>
                                            <h3 className="port_title">{title}</h3>
                                        </div>
                                        <p className="category">- {tags}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <Modal
                        isOpen={modal.isOpen}
                        onClose={closeModal}
                        img={modal.img}
                        original={modal.original}
                        title={modal.title + " - " + modal.tags}
                    />
                </div>
            </div>
        </section>
    );
}