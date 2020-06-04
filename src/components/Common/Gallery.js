import React, {Component} from "react";
import Modal from "./Modal";

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      img: null,
      title: null
    };
  }

  openModal = (img, title) => {
    this.setState({
      isOpen: true,
      img: img,
      title: title,
    });
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
      img: null,
      title: null,
    });
  }

  render() {
    return (
        <section className="portfolio_warp portfolio_3_warp" id="portfolio_warp">
          <div className="port_bg_text">
            <h1 className="bg_strock_text" data-parallax='{"x": -200}'>Project</h1>
          </div>
          <div className="container-fluid">
            <div className="row portfolio_single_wrap portfolio_3_column">
              {this.props.items.map((item, key) => {
                const {
                  thumbnail,
                  img,
                  title,
                  tags,
                } = item;
                return (
                    <div className="col-md-4 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus_3" key={key}>
                      <div className="portfolio_item">
                        <div className="port_img tilt">
                          <img src={thumbnail} alt={title} className="img-fluid cursor-pointer" onClick={() => this.openModal(img, title)}/>
                        </div>
                        <div className="exp cursor-pointer" onClick={() => this.openModal(img, title)}>
                          <span className="exp_inner">
                            <span className="exp_hover">Explore</span>
                          </span>
                        </div>
                        <div className="port_text">
                          <div className="cursor-pointer" onClick={() => this.openModal(img, title)}>
                            <h3 className="port_title">{title}</h3>
                          </div>
                          <p className="catagory">- {tags}</p>
                        </div>
                      </div>
                    </div>
                )
              })}
              <Modal
                  isOpen={this.state.isOpen}
                  onClose={this.closeModal}
                  img={this.state.img}
                  title={this.state.title}
              />
            </div>
          </div>
        </section>
    )
  }
}