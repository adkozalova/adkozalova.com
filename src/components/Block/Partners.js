import React, {Component} from "react";

export default class Partners extends Component {
  render() {
    return (
        <section className="partner_wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="partner_single_item wow fadeInUp">
                  <a href="https://inshe.org/" target={"_blank"} rel="noopener noreferrer">
                    <img src="/images/partner/inshe-logo.png" alt="icon"/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
            </div>
          </div>
        </section>
    )
  }
}
