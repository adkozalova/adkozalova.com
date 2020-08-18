import React, {useEffect, useState} from "react";
import ContactList from "../Common/ContactList";
import SocialMediaList from "../Common/SocialMediaList";
import Language from "./Language";
import {Link} from "react-router-dom";
import {i18nTo} from "../../Util";
import {useTranslation} from "react-i18next";

export default function HeaderMenu() {
  const [t] = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function escFunction(event) {
      if (event.keyCode === 27) {
        onClickClose();
      }
    }

    document.addEventListener("keydown", escFunction, false);
    return () => document.removeEventListener("keydown", escFunction, false);
  }, []);

  const onClickClose = () => {
    setIsMenuOpen(false);
    document.querySelector('body').style.overflowY = 'auto';
  }

  const onClickOpen = () => {
    setIsMenuOpen(true);
    document.querySelector('body').style.overflowY = 'hidden';
  }

  return isMenuOpen
      ? (
          <header className="header menu_open">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <nav className="navbar">
                    <Link to={i18nTo("/")} className="navbar-brand logo" onClick={() => onClickClose()}>
                      <span className="logo_text">Adkozalova</span>
                    </Link>
                    <Language/>
                    <button
                        className="navbar-toggler hamburger"
                        type="button"
                        data-toggle="collapse"
                        data-target="#header_menu"
                        onClick={() => onClickClose()}
                    >
                      <span className="m_menu">{t("Menu")}</span>
                      <span className="m_close">{t("Close")}</span>
                      <span className="bar_icon">
                        <span className="bar bar_1"/>
                        <span className="bar bar_2"/>
                        <span className="bar bar_3"/>
                    </span>
                    </button>
                    <div className="open_menu">
                      <div className="header_main_menu">
                        <ul className="menu_item">
                          <li><Link to={i18nTo("/")} onClick={() => onClickClose()}>{t("Home")}</Link></li>
                          <li className="submenu">
                            <Link className="not-hide-on-click" to="/">{t("Projects")}</Link>
                            <ul className="submenu_item">
                              <li><Link to={i18nTo("/black-and-white")} onClick={() => onClickClose()}>Black & White</Link></li>
                              <li><Link to={i18nTo("/feeling-and-living")} onClick={() => onClickClose()}>Feeling & Living</Link></li>
                              <li><Link to={i18nTo("/jazzman")} onClick={() => onClickClose()}>Jazzman</Link></li>
                            </ul>
                          </li>
                          <li><Link to={i18nTo("/rewards")} onClick={() => onClickClose()}>{t("Rewards")}</Link></li>
                          <li><Link to={i18nTo("/about")} onClick={() => onClickClose()}>{t("About me")}</Link></li>
                          <li><Link to={i18nTo("/contacts")} onClick={() => onClickClose()}>{t("Contacts")}</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="sub_footer">
                      <ContactList className="footer_contact text-center"/>
                      <SocialMediaList className="footer_social text-center"/>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
      )
      : (
          <header className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <nav className="navbar">
                    <Link to={i18nTo("/")} className="navbar-brand logo" onClick={() => onClickClose()}>
                      <span className="logo_text">Adkozalova</span>
                    </Link>
                    <Language/>
                    <button
                        className="navbar-toggler hamburger"
                        type="button"
                        data-toggle="collapse"
                        data-target="#header_menu"
                        onClick={() => onClickOpen()}
                    >
                      <span className="m_menu">{t("Menu")}</span>
                      <span className="m_close">{t("Close")}</span>
                      <span className="bar_icon">
                        <span className="bar bar_1"/>
                        <span className="bar bar_2"/>
                        <span className="bar bar_3"/>
                    </span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </header>
      );
}
