import React, {useState} from 'react';
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import RewardsData from "../Data/RewardsData";
import Country from "../Common/Country";
import Modal from "../Common/Modal";

export default function PageRewards() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t("Rewards")}
                description1=""
                description2=""
                img={require("./../../assets/images/page-hero-bg.jpg")}
            />
            <PageRewardsContentBlock/>
        </>
    )
}

export function PageRewardsContentBlock() {
    const [modal, setModal] = useState({isOpen: false, img: null, title: null});
    const openModal = (img, title) => setModal({isOpen: true, img: img, title: title})
    const closeModal = () => setModal({isOpen: false, img: null, title: null});

    const rewardData = RewardsData()
    return (
        <section className="page_rewards">
            <div className="container">
                {rewardData.map((reward, key) => {
                    const {
                        src,
                        title,
                        description,
                        country,
                        year,
                    } = reward;
                    const alt = title + ": " + description;
                    const isLast = rewardData.length === key + 1;
                    return !(key % 2)
                        ? (
                            <div className="row justify-content-center mb-5" key={key}>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <img src={src} alt={alt} className="img-fluid img-thumbnail cursor-pointer" onClick={() => openModal(src, alt)}/>
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
                            <div className="row justify-content-center mb-5" key={key} style={isLast ? {borderStyle: "none"} : {}}>
                                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-right">
                                    <h2>{title}</h2>
                                    <h3>{description}</h3>
                                    <p className="country">{country.map(countryCode => <Country code={countryCode}/>)}</p>
                                    <p className="year">{year}</p>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <img src={src} alt={alt} className="img-fluid img-thumbnail cursor-pointer" onClick={() => openModal(src, alt)}/>
                                </div>
                            </div>
                        )
                })}
            </div>
            <Modal
                isOpen={modal.isOpen}
                onClose={closeModal}
                img={modal.img}
                title={modal.title}
            />
        </section>
    );
}