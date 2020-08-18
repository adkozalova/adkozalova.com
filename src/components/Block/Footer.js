import React from 'react';
import SocialMediaList from "../Common/SocialMediaList";
import ContactList from "../Common/ContactList";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="footer_content">
                <div className="footer_logo text-center wow fadeInUp">
                  <a href="/"><span className="logo_text">Adkozalova</span></a>
                </div>
                <h2 className="footer_title text-center wow fadeInUp">In the <span>Art</span> must be a <span>Mystery</span>...</h2>

                <ContactList className="footer_contact text-center wow fadeInUp"/>
                <SocialMediaList className="footer_social text-center wow fadeInUp"/>

                <p className="footer_copy_right text-center wow fadeInUp">
                  Copyright © 2020 <a href="https://adkozalova.com/">Adkozalova.com</a> | All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
