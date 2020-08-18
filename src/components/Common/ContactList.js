import React from "react";
import * as Config from './../../Config';

export default function ContactList(props) {
  const {className} = props;
  return (
      <ul className={className}>
        <li>
          <a href={Config.Contact.emailLink}>
            <span>{Config.Contact.emailTitle}</span>
            <span>{Config.Contact.emailTitle}</span>
          </a>
        </li>
        <li>
          <a href={Config.Contact.phoneLink}>
            <span>{Config.Contact.phoneTitle}</span>
            <span>{Config.Contact.phoneTitle}</span>
          </a>
        </li>
      </ul>
  )
}
