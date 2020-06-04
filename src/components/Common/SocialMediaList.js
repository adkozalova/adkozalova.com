import React, {Component} from "react";
import * as Config from './../../Config';

export default class SocialMediaList extends Component {
  render() {
    return (
        <ul className={this.props.className}>
          <li>
            <a href={Config.Contact.fbLink}>
              <i className="fa fa-facebook"/>
              <i className="fa fa-facebook"/>
            </a>
          </li>
          <li>
            <a href={Config.Contact.instLink}>
              <i className="fa fa-instagram"/>
              <i className="fa fa-instagram"/>
            </a>
          </li>
          <li>
            <a href={Config.Contact.emailLink}>
              <i className="fa fa-envelope"/>
              <i className="fa fa-envelope"/>
            </a>
          </li>
          <li>
            <a href={Config.Contact.phoneLink}>
              <i className="fa fa-phone"/>
              <i className="fa fa-phone"/>
            </a>
          </li>
        </ul>
    )
  }
}
