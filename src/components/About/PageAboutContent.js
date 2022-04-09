import React from "react";
import SocialMediaList from "../Contacts/SocialMediaList";
import {Trans, useTranslation} from "react-i18next";

export default function PageAboutContent() {
    const [t] = useTranslation();
    return (
        <section className="blog_wrap blog_single_wrap">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="blog_sidebar">
                            <div className="widget sidebar-widget widget_about">
                                <div className="sidebar_about_img text-center">
                                    <img src={require("./../../assets/images/about/author.jpg")} alt="Painter Viktoria Adkozalova"
                                         className="img-fluid"/>
                                </div>
                                <div className="sidebar_about_content">
                                    <h4 className="text-center sidebar_ab_title">{t('Viktoria Adkozalova')}</h4>
                                    <p className="text-center sidebar_ab_details"><Trans>
                                        On my works you won't find specific persons, but instead everyone can find their friends, neighbors or even
                                        some moments from your own
                                        life.
                                    </Trans></p>
                                    <div className="sign text-center">
                                        <img src={require("./../../assets/images/about/author-signature.png")}
                                             alt="Painter Viktoria Adkozalova Signature" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="follow">
                                    <h4 className="follow_title text-center">{t('Follow me on')}</h4>
                                    <SocialMediaList className="follow_link text-center"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div className="blog_content blog_single_content">
                            <div className="blog_single_item">

                                <h3 className="blog_inner_title">{t('Biography')}</h3>
                                <br/>
                                <Trans i18nKey={"PageAboutContent.text"}>
                                    <p>Viktoria Adkozalova was born on October 3, 1987 in Feodosia, Ukraine.</p>
                                    <p>From early childhood, she showed a love of drawing. One of Viktoria's sources of inspiration was a landscapes
                                        and expanses of her native
                                        Crimea.</p>
                                    <p>In 2002, Viktoria graduated from the Aivazovsky art school, making the first step in her career.</p>
                                    <p>The next stage was the Kherson National Technical University, where she studied design and painting under the
                                        guidance of the famous
                                        Ukrainian artist Galina Sorokhan. During her student years, Viktoria demonstrates her creative abilities and
                                        takes part in various art
                                        exhibitions.</p>
                                    <p>Since 2009, he has been actively engaged in professional creative activities and studies at the National
                                        Pedagogical University named
                                        after Dragomanov at the faculty of Musical Art.</p>
                                    <p>Viktoria is a participant and winner of various international art exhibitions and competitions. Creates
                                        painting and graphic works,
                                        VR-art and installations.
                                        Participated in the creation of the VR film “The New Sensitivity” for the Blockchain Art Hackathon
                                        project.</p>
                                    <p>The artist's art-works were selected by an international jury for projects - Ukrainian Art Week; Ukrainian
                                        contemporary women's art
                                        fest; ONE DAY AFTER Kyiv History Museum.</p>
                                    <p>Viktoria's works are present in private collections in the USA, Hong Kong, Germany, Austria, France and Kyiv
                                        History Museum.</p>
                                    <p>The theme of the artist's works is the theme of the Universe ... The parallel lines present on the canvases
                                        symbolize the essence of
                                        being and the endless flow forward. Similar to the String theory, which states that the smallest particles are
                                        the strings that sound and
                                        create our universe. The intention to comprehend the world of emotions and feelings, an attempt to penetrate
                                        into the inner world of a viewer to touch the
                                        mystery of his soul.</p>
                                    <p>The artist mainly paints in oils, but also uses a mixed technique, adding gold foil and acrylic paints.</p>
                                    <p>Viktoria chose the grotesque as the main artistic technique with which she creates an integral picture of the
                                        world in the image of an
                                        animal or a person. Revealing the interconnection of everything living on Earth.</p>
                                    <p>The artist's canvases often feature the image of a woman. Viktoria explains this as follows:
                                        <i> "A woman for me is the Universe. Her emotional states and feelings in the beauty of the moment makes me
                                            abandon the color and detail
                                            of the image, the personification of faces, leaving the viewer to think only the artistic image."</i></p>
                                </Trans>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}