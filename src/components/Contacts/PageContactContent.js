import React from "react";
import {useTranslation} from "react-i18next";
import ContactsData from "./ContactsData";

export default function PageContactContent() {
  const [t] = useTranslation();
  const contact = ContactsData()
  return (
      <section className="somethings_interesting_wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="title text-center" data-wow-delay="0.2s">{t('If you have any question, call or write me')}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="interesting_item">
                <div className="interesting_icon" data-wow-delay="0.2s">
                  <a href={contact.fbLink}><img src={require("./../../assets/images/icon/fb-big.png")} alt="Facebook" width="73px" height="73px"/></a>
                </div>
                <div className="interesting_content" data-wow-delay="0.4s">
                  <h4>{t('Facebook')}</h4>
                  <p><a href={contact.fbLink}><span>{contact.fbTitle}</span><span>{contact.fbTitle}</span></a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="interesting_item">
                <div className="interesting_icon" data-wow-delay="0.4s">
                  <a href={contact.phoneLink}><img src={require("./../../assets/images/icon/phone-big.png")} alt="Phone" width="73px" height="73px"/></a>
                </div>
                <div className="interesting_content" data-wow-delay="0.6s">
                  <h4>{t('Phone')}</h4>
                  <p>{t('Viber or WatsApp')} <a href={contact.phoneLink}><span>{contact.phoneTitle}</span>
                    <span>{contact.phoneTitle}</span></a>
                  </p>
                  <p>{t('Email')} <a href={contact.emailLink}><span>{contact.emailTitle}</span> <span>{contact.emailTitle}</span></a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="interesting_item">
                <div className="interesting_icon" data-wow-delay="0.6s">
                  <a href={contact.instLink}><img src={require("./../../assets/images/icon/inst-big.png")} alt="Instagram" width="73px" height="73px"/></a>
                </div>
                <div className="interesting_content" data-wow-delay="0.8s">
                  <h4>{t('Instagram')}</h4>
                  <p><a href={contact.instLink}><span>{contact.instTitle}</span><span>{contact.instTitle}</span></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}