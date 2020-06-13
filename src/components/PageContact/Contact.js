import React, {Component} from "react";
import * as Config from './../../Config';

export default class Contact extends Component {

  render() {
    return (
        <section className="somethings_interesting_wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="title text-center" data-wow-delay="0.2s">If you have any question, call or write me</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="interesting_item">
                  <div className="interesting_icon" data-wow-delay="0.2s">
                    <a href={Config.Contact.fbLink}><img src="/images/icon/fb-big.png" alt="Facebook" width="73px" height="73px"/></a>
                  </div>
                  <div className="interesting_content" data-wow-delay="0.4s">
                    <h4>Facebook</h4>
                    <p><a href={Config.Contact.fbLink}><span>{Config.Contact.fbTitle}</span><span>{Config.Contact.fbTitle}</span></a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="interesting_item">
                  <div className="interesting_icon" data-wow-delay="0.4s">
                    <a href={Config.Contact.phoneLink}><img src="/images/icon/phone-big.png" alt="Phone" width="73px" height="73px"/></a>
                  </div>
                  <div className="interesting_content" data-wow-delay="0.6s">
                    <h4>Phone</h4>
                    <p>Viber or WatsApp <a href={Config.Contact.phoneLink}><span>{Config.Contact.phoneTitle}</span> <span>{Config.Contact.phoneTitle}</span></a></p>
                    <p>Email <a href={Config.Contact.emailLink}><span>{Config.Contact.emailTitle}</span> <span>{Config.Contact.emailTitle}</span></a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="interesting_item">
                  <div className="interesting_icon" data-wow-delay="0.6s">
                    <a href={Config.Contact.instLink}><img src="/images/icon/inst-big.png" alt="Instagram" width="73px" height="73px"/></a>
                  </div>
                  <div className="interesting_content" data-wow-delay="0.8s">
                    <h4>Instagram</h4>
                    <p><a href={Config.Contact.instLink}><span>{Config.Contact.instTitle}</span><span>{Config.Contact.instTitle}</span></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}