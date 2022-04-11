import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import React from "react";

export default function GalleryItemWide(props) {
    const [t] = useTranslation();
    const {project, isLast} = props;
    const closingClass = isLast ? " portfolio_cus" : "";
    return (
        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 portfolio_single_item" + closingClass}>
            <div className="portfolio_item">
                <div className="port_img tilt">
                    <Link to={project.link}>
                        <img src={project.img} alt={project.imgAlt} className="img-fluid"/>
                    </Link>
                </div>
                <Link className="exp" to={project.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                </Link>
                <div className="port_text">
                    <Link to={project.link}>
                        <h3 className="port_title_big">{project.title}</h3>
                    </Link>
                    <p className="category">- {project.tags}</p>
                </div>
            </div>
        </div>
    );
}