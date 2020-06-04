import React, {Component} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class GoToTop extends Component {
  render() {
    return (
        <div className="go_to_top">
          <AnchorLink href="#top">
            <i className="fa fa-angle-up"/>
            <i className="fa fa-angle-up"/>
          </AnchorLink>
        </div>
    );
  }
}