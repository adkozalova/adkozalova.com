import React, {Component} from "react";
import {Link} from "react-router-dom";
import ContactList from "./ContactList";
import SocialMediaList from "./SocialMediaList";

export default class HeaderMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
  }

  onMenuClick = (e) => {
    let targetClassName = e.target.className;

    // ignore
    if (targetClassName === 'not-hide-on-click') {
      return;
    }

    // close
    if (targetClassName === 'logo_text') {
      this.setState({isMenuOpen: false});
      document.querySelector('body').style.overflowY = 'auto';
      return;
    }

    this.setState({isMenuOpen: !this.state.isMenuOpen});
    document.querySelector('body').style.overflowY = !this.state.isMenuOpen ? 'hidden' : 'auto';
  }

  render() {
    return (
        <header className={this.state.isMenuOpen ? "header menu_open" : "header"} onClick={this.onMenuClick.bind(this)}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <nav className="navbar">
                  <Link to="/" className="navbar-brand logo">
                    <span className="logo_text">Adkozalova</span>
                  </Link>
                  <button
                      className="navbar-toggler hamburger"
                      type="button"
                      data-toggle="collapse"
                      data-target="#header_menu"
                  >
                    <span className="m_menu">Menu</span>
                    <span className="m_close">Close</span>
                    <span className="bar_icon">
                        <span className="bar bar_1"/>
                        <span className="bar bar_2"/>
                        <span className="bar bar_3"/>
                    </span>
                  </button>
                  <div className="opnen_menu">
                    <div className="header_main_menu">
                      <ul className="menu_item">
                        <li><Link to="/">Home</Link></li>
                        <li className="submenu">
                          <Link className="not-hide-on-click" to="/">Projects</Link>
                          <ul className="submenu_item">
                            <li><Link to="/black-and-white">Black & White</Link></li>
                            <li><Link to="/jazzman">Jazzman</Link></li>
                            <li><Link to="/watercolor">Watercolor</Link></li>
                            <li><Link to="/sketch">Sketch</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/rewards">Rewards</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
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
    );
  }
}
