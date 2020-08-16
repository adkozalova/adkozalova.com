import React, {Component} from "react";
import {Link, useLocation} from 'react-router-dom';
import ContactList from "../Common/ContactList";
import SocialMediaList from "../Common/SocialMediaList";

export default class HeaderMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.onClickClose()
    }
  }

  onClickClose = () => {
    this.setState({isMenuOpen: false});
    document.querySelector('body').style.overflowY = 'auto';
  }

  onClickOpen = () => {
    this.setState({isMenuOpen: true});
    document.querySelector('body').style.overflowY = 'hidden';
  }

  render() {
    const location = useLocation();
    console.log(location.pathname)
    const ruLangLink = location.pathname.startWith('/ru') ? location.pathname : 'ru' + location.pathname;
    const enLangLink = location.pathname.replace('$ru/', '/')
    if (this.state.isMenuOpen) {
      return (
          <header className="header menu_open">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <nav className="navbar">
                    <Link to="/" className="navbar-brand logo" onClick={this.onClickClose.bind(this)}>
                      <span className="logo_text">Adkozalova</span>
                    </Link>
                    <div className="select_lang ml-auto">
                      <Link to={location.pathname.replace('.com/ua', '.com')} className="lang active">EN</Link>
                      <Link to={window.location.href.replace('.com', '.com/ua')} className="lang">UA</Link>
                    </div>
                    <button
                        className="navbar-toggler hamburger"
                        type="button"
                        data-toggle="collapse"
                        data-target="#header_menu"
                        onClick={this.onClickClose.bind(this)}
                    >
                      <span className="m_menu">Menu</span>
                      <span className="m_close">Close</span>
                      <span className="bar_icon">
                        <span className="bar bar_1"/>
                        <span className="bar bar_2"/>
                        <span className="bar bar_3"/>
                    </span>
                    </button>
                    <div className="open_menu">
                      <div className="header_main_menu">
                        <ul className="menu_item">
                          <li><Link to="/" onClick={this.onClickClose.bind(this)}>Home</Link></li>
                          <li className="submenu">
                            <Link className="not-hide-on-click" to="/">Projects</Link>
                            <ul className="submenu_item">
                              <li><Link to="/black-and-white" onClick={this.onClickClose.bind(this)}>Black & White</Link></li>
                              <li><Link to="/feeling-and-living" onClick={this.onClickClose.bind(this)}>Feeling & Living</Link></li>
                              <li><Link to="/jazzman" onClick={this.onClickClose.bind(this)}>Jazzman</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/rewards" onClick={this.onClickClose.bind(this)}>Rewards</Link></li>
                          <li><Link to="/about" onClick={this.onClickClose.bind(this)}>About me</Link></li>
                          <li><Link to="/contacts" onClick={this.onClickClose.bind(this)}>Contacts</Link></li>
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
    } else {
      return (
          <header className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <nav className="navbar">
                    <Link to="/" className="navbar-brand logo" onClick={this.onClickClose.bind(this)}>
                      <span className="logo_text">Adkozalova</span>
                    </Link>
                    <div className="select_lang ml-auto">
                      <Link to={window.location.href.replace('.com/ua', '.com')} className="lang active">EN</Link>
                      <Link to={window.location.href.replace('.com', '.com/ua')} className="lang">UA</Link>
                    </div>
                    <button
                        className="navbar-toggler hamburger"
                        type="button"
                        data-toggle="collapse"
                        data-target="#header_menu"
                        onClick={this.onClickOpen.bind(this)}
                    >
                      <span className="m_menu">Menu</span>
                      <span className="m_close">Close</span>
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
  }
}
