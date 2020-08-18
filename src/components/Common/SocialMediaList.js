import React from "react";
import * as Config from './../../Config';

export default function SocialMediaList(props) {
  const {className} = props;
  return (
      <ul className={className}>
        <li>
          <a href={Config.Contact.fbLink} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-facebook"/>
            <i className="fa fa-facebook"/>
          </a>
        </li>
        <li>
          <a href={Config.Contact.instLink} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-instagram"/>
            <i className="fa fa-instagram"/>
          </a>
        </li>
        <li>
          <a href={Config.Contact.youtubeLink} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-youtube"/>
            <i className="fa fa-youtube"/>
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
  );
}
