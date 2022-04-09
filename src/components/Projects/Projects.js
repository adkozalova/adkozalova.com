import React from "react";
import {Link} from "react-router-dom";
import {i18nTo} from "../../Util";
import {useTranslation} from "react-i18next";

export default function Projects() {
    const [t] = useTranslation();
    const project0 = {
        title: t("FRAGILE"),
        link: i18nTo("/personal-art-project-fragile"),
        img: require("./../../assets/images/project/personal-exhibition-fragile/fragile-main-500.jpg"),
        imgAlt: "Personal art project - FRAGILE",
        tags: t("08.10.2020-28.10.2020")
    }
    const project1 = {
        title: "Shadows Of Unforgotten Ancestors",
        link: i18nTo("/shadows-of-unforgotten-ancestors"),
        img: require("./../../assets/images/project/shadows-of-unforgotten-ancestors/shadows-of-unforgotten-ancestors-main-500.jpg"),
        imgAlt: "Project Shadows Of Unforgotten Ancestors",
        tags: t("oil, acrylic, canvas")
    }
    const project2 = {
        title: "Black & White",
        link: i18nTo("/black-and-white"),
        img: require("../../assets/images/project/black-and-white/black-and-white-main-500.jpg"),
        imgAlt: "Project Black & White",
        tags: t("oil, acrylic, canvas")
    }
    const project3 = {
        title: "Feeling & Living",
        link: i18nTo("/feeling-and-living"),
        img: require("./../../assets/images/project/feeling-and-living/feeling-and-living-main-500.jpg"),
        imgAlt: "Project Feeling & Living",
        tags: t("oil, acrylic, enamel, canvas")
    }
    const project4 = {
        title: "Jazzman",
        link: i18nTo("/jazzman"),
        img: require("./../../assets/images/project/jazzman/jazzman-main-500.jpg"),
        imgAlt: "Project Jazzman",
        tags: t("oil, acrylic, canvas")
    }
    const project5 = {
        title: "To Live",
        link: i18nTo("/to-live"),
        img: require("./../../assets/images/project/to-live/main-500.jpg"),
        imgAlt: "Project To Live",
        tags: t("oil, acrylic, led light, canvas")
    }

    return (
        <section className="portfolio_warp" id="projects">
            <div className="port_bg_text">
                <h1 className="bg_strock_text" data-parallax='{"x": -200}'>{t("Projects")}</h1>
            </div>
            <div className="container">
                <div className="row portfolio_single_wrap">

                    {/*project0*/}
                    <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item">
                        <div className="portfolio_item">
                            <div className="port_img tilt">
                                <Link to={project0.link}>
                                    <img src={project0.img} alt={project0.imgAlt} className="img-fluid"/>
                                </Link>
                            </div>
                            <a className="exp" href={"https://www.facebook.com/events/1665819606925345"} target={"_blank"} rel="noopener noreferrer">
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Facebook')}</span>
                  </span>
                            </a>
                            <div className="port_text">
                                <Link to={project0.link}>
                                    <h3 className="port_title">{project0.title}</h3>
                                </Link>
                                <p className="catagory">- {project0.tags}</p>
                            </div>
                        </div>
                    </div>

                    {/*project1*/}
                    <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus">
                        <div className="portfolio_item">
                            <div className="port_img tilt">
                                <Link to={project1.link}>
                                    <img src={project1.img} alt={project1.imgAlt} className="img-fluid"/>
                                </Link>
                            </div>
                            <Link className="exp" to={project1.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                            </Link>
                            <div className="port_text">
                                <Link to={project1.link}>
                                    <h3 className="port_title">{project1.title}</h3>
                                </Link>
                                <p className="catagory">- {project1.tags}</p>
                            </div>
                        </div>
                    </div>

                    {/*project2*/}
                    <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item">
                        <div className="portfolio_item">
                            <div className="port_img tilt">
                                <Link to={project2.link}>
                                    <img src={project2.img} alt={project2.imgAlt} className="img-fluid"/>
                                </Link>
                            </div>
                            <Link className="exp" to={project2.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                            </Link>
                            <div className="port_text">
                                <Link to={project2.link}>
                                    <h3 className="port_title">{project2.title}</h3>
                                </Link>
                                <p className="catagory">- {project2.tags}</p>
                            </div>
                        </div>
                    </div>

                    {/*project3*/}
                    <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus">
                        <div className="portfolio_item">
                            <div className="port_img tilt">
                                <Link to={project3.link}>
                                    <img src={project3.img} alt={project3.imgAlt} className="img-fluid"/>
                                </Link>
                            </div>
                            <Link className="exp" to={project3.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                            </Link>
                            <div className="port_text">
                                <Link to={project3.link}>
                                    <h3 className="port_title">{project3.title}</h3>
                                </Link>
                                <p className="catagory">- {project3.tags}</p>
                            </div>
                        </div>
                    </div>

                    {/*project4*/}
                    <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item">
                        <div className="portfolio_item">
                            <div className="port_img tilt">
                                <Link to={project4.link}>
                                    <img src={project4.img} alt={project4.imgAlt} className="img-fluid"/>
                                </Link>
                            </div>
                            <Link className="exp" to={project4.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                            </Link>
                            <div className="port_text">
                                <Link to={project4.link}>
                                    <h3 className="port_title">{project4.title}</h3>
                                </Link>
                                <p className="catagory">- {project4.tags}</p>
                            </div>
                        </div>
                    </div>

                    {/*project5*/}
                    <div className="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus">
                        <div className="portfolio_item">
                            <div className="port_img tilt">
                                <Link to={project5.link}>
                                    <img src={project5.img} alt={project5.imgAlt} className="img-fluid"/>
                                </Link>
                            </div>
                            <Link className="exp" to={project5.link}>
                  <span className="exp_inner">
                    <span className="exp_hover">{t('Explore')}</span>
                  </span>
                            </Link>
                            <div className="port_text">
                                <Link to={project5.link}>
                                    <h3 className="port_title">{project5.title}</h3>
                                </Link>
                                <p className="catagory">- {project5.tags}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
