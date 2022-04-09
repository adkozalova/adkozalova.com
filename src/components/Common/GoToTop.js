import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function GoToTop() {
    return (
        <div className="go_to_top">
            <AnchorLink href="#top">
                <i className="fa fa-angle-up"/>
                <i className="fa fa-angle-up"/>
            </AnchorLink>
        </div>
    );
}