import React, {Component} from 'react';
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
                  <a className="navbar-brand logo" href="/"><span className="logo_text">Adkozalova</span></a>
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
                        <li><a href="/">Home</a></li>
                        <li className="submenu">
                          <a href="/#projects">Projects</a>
                          <ul className="submenu_item">
                            <li><a href="/black-and-white">Black & White</a></li>
                            <li><a href="/jazzman">Jazzman</a></li>
                            <li><a href="/watercolor">Watercolor</a></li>
                            <li><a href="/sketch">Sketch</a></li>
                          </ul>
                        </li>
                        <li><a href="/rewards">Rewards</a></li>
                        <li><a href="/about">About me</a></li>
                        <li><a href="/contacts">Contacts</a></li>
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
