import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import React from "react";

export default function GalleryItem(props) {
    const [t] = useTranslation();
    const {item, isRight} = props;
    const closingClass = isRight ? " portfolio_cus" : "";
    return (
        <div className={"col-md-6 col-sm-12 col-xs-12 portfolio_single_item" + closingClass}>
            <div className="portfolio_item">
                <div className="port_img tilt">
                    <Link to={item.link}>
                        <img src={item.img} alt={item.imgAlt} className="img-fluid"/>
                    </Link>
                </div>
                <Link className="exp" to={item.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                </Link>
                <div className="port_text">
                    <Link to={item.link}>
                        <h3 className="port_title">{item.title}</h3>
                    </Link>
                    <p className="category">- {item.tags}</p>
                </div>
            </div>
        </div>
    );
}