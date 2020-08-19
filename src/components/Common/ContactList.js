import React from "react";
import {Contact} from "../../Config";

export default function ContactList(props) {
  const {className} = props;
  const contact = Contact()
  return (
      <ul className={className}>
        <li>
          <a href={contact.emailLink}>
            <span>{contact.emailTitle}</span>
            <span>{contact.emailTitle}</span>
          </a>
        </li>
        <li>
          <a href={contact.phoneLink}>
            <span>{contact.phoneTitle}</span>
            <span>{contact.phoneTitle}</span>
          </a>
        </li>
      </ul>
  )
}
