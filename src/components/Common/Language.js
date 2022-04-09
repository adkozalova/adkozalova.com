import {Link} from "react-router-dom";
import i18n from "i18next";
import React from "react";

export default function Language() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className="select_lang ml-auto">
            <Link to={"#"} className={i18n.language === "en" ? "lang active" : "lang"} onClick={() => changeLanguage("en")}>EN</Link>
            <Link to={"#"} className={i18n.language === "ua" ? "lang active" : "lang"} onClick={() => changeLanguage("ua")}>UA</Link>
            <Link to={"#"} className={i18n.language === "ru" ? "lang active" : "lang"} onClick={() => changeLanguage("ru")}>RU</Link>
        </div>
    );
}