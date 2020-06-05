import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ContactList from "../Common/ContactList";
import SocialMediaList from "../Common/SocialMediaList";

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
  }

  onMenuClick = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
    document.querySelector('body').style.overflowY = !this.state.isMenuOpen ? 'hidden' : 'auto';
  }

  render() {
    return (
        <header className={this.state.isMenuOpen ? "header menu_open" : "header"}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <nav className="navbar">
                  <Link to="/" className="navbar-brand logo" ><span className="logo_text">Adkozalova</span></Link>
                  <button
                      className="navbar-toggler hamburger"
                      type="button"
                      data-toggle="collapse"
                      data-target="#header_menu"
                      onClick={this.onMenuClick}
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
                        <li><Link to="/" onClick={this.onMenuClick}>Home</Link></li>
                        <li className="submenu">
                          <Link to="/" onClick={this.onMenuClick}>Projects</Link>
                          <ul className="submenu_item">
                            <li><Link to="/black-and-white" onClick={this.onMenuClick}>Black & White</Link></li>
                            <li><Link to="/jazzman" onClick={this.onMenuClick}>Jazzman</Link></li>
                            <li><Link to="/watercolor" onClick={this.onMenuClick}>Watercolor</Link></li>
                            <li><Link to="/sketch" onClick={this.onMenuClick}>Sketch</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/rewards" onClick={this.onMenuClick}>Rewards</Link></li>
                        <li><Link to="/about" onClick={this.onMenuClick}>About me</Link></li>
                        <li><Link to="/contacts" onClick={this.onMenuClick}>Contacts</Link></li>
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
