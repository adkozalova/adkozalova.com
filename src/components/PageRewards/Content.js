import React, {Component} from 'react';
import * as Config from './../../Config';
import './content.css';
import Modal from "../Common/Modal";
import Country from "../Common/Country";

export default class Content extends Component {
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
        <section className="page_rewards">
          <div className="container">
            {Config.RewardItems.map((reward, key) => {
              const {
                src,
                title,
                description,
                country,
                year,
              } = reward;
              const isLast = Config.RewardItems.length === key + 1;
              return !(key % 2)
                  ? (
                      <div className="row justify-content-center mb-5" id={"#reward-" + key} key={key}>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <img src={src} alt={title} className="img-fluid" onClick={() => this.openModal(src, title)}/>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-left">
                          <h2>{title}</h2>
                          <h3>{description}</h3>
                          <p className="country">{country.map(countryCode => <Country code={countryCode}/>)}</p>
                          <p className="year">{year}</p>
                        </div>
                      </div>
                  )
                  : (
                      <div className="row justify-content-center mb-5" id={"#reward-" + key} key={key} style={isLast ? {borderStyle: "none"} : {}}>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-right">
                          <h2>{title}</h2>
                          <h3>{description}</h3>
                          <p className="country">{country.map(countryCode => <Country code={countryCode}/>)}</p>
                          <p className="year">{year}</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <img src={src} alt={title} className="img-fluid" onClick={() => this.openModal(src, title)}/>
                        </div>
                      </div>
                  )
            })}
          </div>
          <Modal
              isOpen={this.state.isOpen}
              onClose={this.closeModal}
              img={this.state.img}
              title={this.state.title}
          />
        </section>
    );
  }
}