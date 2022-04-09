import React from "react";
import ContactsData from "../Data/ContactsData";

export default function SocialMediaList(props) {
    const {className} = props;
    const contact = ContactsData()
    return (
        <ul className={className}>
            <li>
                <a href={contact.fbLink} target={"_blank"} rel="noopener noreferrer">
                    <i className="fa fa-facebook"/>
                    <i className="fa fa-facebook"/>
                </a>
            </li>
            <li>
                <a href={contact.instLink} target={"_blank"} rel="noopener noreferrer">
                    <i className="fa fa-instagram"/>
                    <i className="fa fa-instagram"/>
                </a>
            </li>
            <li>
                <a href={contact.youtubeLink} target={"_blank"} rel="noopener noreferrer">
                    <i className="fa fa-youtube"/>
                    <i className="fa fa-youtube"/>
                </a>
            </li>
            <li>
                <a href={contact.emailLink}>
                    <i className="fa fa-envelope"/>
                    <i className="fa fa-envelope"/>
                </a>
            </li>
            <li>
                <a href={contact.phoneLink}>
                    <i className="fa fa-phone"/>
                    <i className="fa fa-phone"/>
                </a>
            </li>
        </ul>
    );
}
