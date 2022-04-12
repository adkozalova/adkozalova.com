import React, {useState} from "react";

import Country from "./Country";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CredentialsData from "../Data/CredentialsData";

export default function CredentialsList() {
    const [t] = useTranslation(["translations", "credentials"]);
    const {defaultCategory, categories, categoriesData} = CredentialsData()
    const [activeTab, setActiveTab] = useState(defaultCategory)
    const onClickTab = (event, tabName) => {
        event.preventDefault()
        setActiveTab(tabName)
    }
    return (
        <section className="credentials_wrap">

            <div className="bg_text">
                <h1 className="bg_strock_text" data-parallax='{"x": 200}'>{t("Credentials")}</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <h2 className="credentials_title wow fadeInUp">{t("My Credentials")}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5 col-md-4 col-sm-12 col-12">
                        <ul className="nav nav-tabs credentials_tab">
                            {Object.keys(categories).map(category => (
                                <li className="nav-item wow fadeInUp">
                                    <Link to={"#"}
                                          className={"nav-link " + (activeTab === category ? "active" : "")}
                                          onClick={(event) => onClickTab(event, category)}
                                    >{categories[category]}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-7 col-md-8 col-sm-12 col-12">
                        <div className="tab-content credentials_tab_content">
                            {Object.keys(categories).map(category => (
                                <div className={"tab-pane fade " + (activeTab === category ? "show active" : "")} id={category}>
                                    <ul>
                                        {categoriesData[category].map(item => (
                                            <Item item={item}/>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Item(props) {
    const {item} = props;
    if (item.data === undefined && item.title === undefined) {
        return (<li><Country code={item}/></li>)
    }
    if (item.link === null || item.link === undefined) {
        return (
            <li>
                <span>{item.date}</span>
                {item.title} {item.location === null || item.location === undefined ? "" : <i className="fa fa-map-marker ml-1" aria-hidden="true"/>}&nbsp;{item.location}
            </li>
        )
    } else {
        return (
            <li>
                <span>{item.date}</span>
                <a href={item.link} target={"_blank"} rel="noopener noreferrer">{item.title}</a>
                {item.location === null || item.location === undefined ? "" : <i className="fa fa-map-marker ml-1" aria-hidden="true"/>}&nbsp;{item.location}
            </li>
        )
    }
}
