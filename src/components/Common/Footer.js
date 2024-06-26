import React from 'react';
import SocialMediaList from "./SocialMediaList";
import {Trans, useTranslation} from "react-i18next";
import ContactsData from "../Data/ContactsData";

export default function Footer() {
    const [t] = useTranslation();
    const contact = ContactsData()
    return (
        <footer className="footer" style={{backgroundImage: `url(${require("./../../assets/images/footer_bg.jpg")})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="footer_content">
                            <div className="footer_logo text-center wow fadeInUp">
                                <a href="/"><span className="logo_text">Adkozalova</span></a>
                            </div>
                            <h2 className="footer_title text-center wow fadeInUp"><Trans i18nKey={"Footer.text"}>In the <span>Art</span> must be
                                a <span>Mystery</span>...</Trans></h2>

                            <ul className="footer_contact text-center wow fadeInUp">
                                <li>
                                    <a href={contact.emailLink}>
                                        <span>{contact.emailTitle}</span>
                                        <span>{contact.emailTitle}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={contact.phoneLink}>
                                        <span>{contact.phoneTitle}</span>
                                        <span>{contact.phoneTitle}</span>
                                    </a>
                                </li>
                            </ul>

                            <SocialMediaList className="footer_social text-center wow fadeInUp"/>

                            <p className="footer_copy_right text-center wow fadeInUp">
                                {t("Copyright")} © 2024 <a href="https://adkozalova.com/">Adkozalova.com</a> | {t("All rights reserved")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
