import {useTranslation} from "react-i18next";

export default function ArtworksData() {
    return Data();
}

export function ArtworksDataFindAll(artworksToFind) {
    return Data().filter(artwork => artworksToFind.includes(artwork.title));
}

export const Data = () => {
    const [t] = useTranslation();
    return [
        {
            thumbnail: require("../../assets/images/artwork/to-live/daydreams-400.jpg"),
            img: require("../../assets/images/artwork/to-live/daydreams-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/daydreams-0.jpg"),
            title: "Daydreams, 2023",
            tags: t("acrylic") + ", " + t("oil") + ", " + t("gold foil") + ", 80x100cm",
            collection: "To Live"
        },
        {
            thumbnail: require("../../assets/images/artwork/to-live/bloomed-400.jpg"),
            img: require("../../assets/images/artwork/to-live/bloomed-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/bloomed-0.jpg"),
            title: "Bloomed, 2022",
            tags: t("acrylic") + ", " + t("oil") + ", " + t("gold foil") + ", 100x80cm",
            collection: "To Live"
        },

        // #StandWithUkraine
        {
            thumbnail: require("../../assets/images/artwork/to-live/guardian-of-ukraine-400.jpg"),
            img: require("../../assets/images/artwork/to-live/guardian-of-ukraine-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/guardian-of-ukraine-0.jpg"),
            title: "Guardian of Ukraine, 2022",
            tags: t("acrylic") + ", " + t("oil") + ", " + t("thermo mosaic") + ", 100x120cm",
            collection: "To Live"
        },

        // Shadows Of Unforgotten Ancestors
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/black-panther-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/black-panther-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/black-panther-0.jpg"),
            title: "Black panther, 2021",
            tags: t("acrylic") + ", 90x110cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/blue-whale-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/blue-whale-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/blue-whale-0.jpg"),
            title: "Blue whale, 2022",
            tags: t("acrylic") + ", 200x100cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/brown-bear-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/brown-bear-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/brown-bear-0.jpg"),
            title: "Brown bear, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/lion-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/lion-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/lion-0.jpg"),
            title: "Lion, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/pink-flamingo-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/pink-flamingo-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/pink-flamingo-0.jpg"),
            title: "Pink flamingo, 2021",
            tags: t("acrylic") + ", 90x100cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/two-humpted-camel-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/two-humpted-camel-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/two-humpted-camel-0.jpg"),
            title: "Two-humped camel, 2021",
            tags: t("acrylic") + ", 120x100cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/polar-bears-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/polar-bears-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/polar-bears-0.jpg"),
            title: "Polar bears, 2021",
            tags: t("acrylic") + ", 120x100cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/painted-dog-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/painted-dog-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/painted-dog-0.jpg"),
            title: "Painted dog, 2021",
            tags: t("acrylic") + ", 90x100cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/manatees-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/manatees-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/manatees-0.jpg"),
            title: "Manatees, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/zubr-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/zubr-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/zubr-0.jpg"),
            title: "Zubr, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/elephant-tortoise-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/elephant-tortoise-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/elephant-tortoise-0.jpg"),
            title: "Elephant tortoise, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/elephant-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/elephant-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/elephant-0.jpg"),
            title: "Elephant, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/rhino-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/rhino-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/rhino-0.jpg"),
            title: "Rhino, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/cachalots-family-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/cachalots-family-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/cachalots-family-0.jpg"),
            title: "Cachalot's family, 2020",
            tags: t("acrylic") + ", 120x90cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/shadows-of-unforgotten-ancestors-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/shadows-of-unforgotten-ancestors-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/shadows-of-unforgotten-ancestors-0.jpg"),
            title: "Shadows of unforgotten ancestors, 2020",
            tags: t("acrylic") + ", 120x100cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        {
            thumbnail: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/the-king-fisher-400.jpg"),
            img: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/the-king-fisher-1500.jpg"),
            original: require("../../assets/images/artwork/shadows-of-unforgotten-ancestors/the-king-fisher-0.jpg"),
            title: "The King Fisher, 2020",
            tags: t("acrylic") + ", 120x90cm",
            collection: "Shadows Of Unforgotten Ancestors"
        },
        // To Live
        // {
        //     thumbnail: require("../../assets/images/artwork/to-live/guardian-of-ukraine-400.jpg"),
        //     img: require("../../assets/images/artwork/to-live/guardian-of-ukraine-1500.jpg"),
        //     original: require("../../assets/images/artwork/to-live/guardian-of-ukraine-0.jpg"),
        //     title: "Guardian of Ukraine, 2022",
        //     tags: t("acrylic") + ", " + t("oil") + ", " + t("thermo mosaic") + ", 100x120cm",
        //     collection: "To Live"
        // },
        {
            thumbnail: require("../../assets/images/artwork/to-live/after-thunderstorm-400.jpg"),
            img: require("../../assets/images/artwork/to-live/after-thunderstorm-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/after-thunderstorm-0.jpg"),
            title: "After thunderstorm, 2021",
            tags: t("acrylic") + ", " + t("oil") + ", " + t("LED") + ", 100x100cm",
            collection: "To Live"
        },
        {
            thumbnail: require("../../assets/images/artwork/to-live/color-of-the-life-400.jpg"),
            img: require("../../assets/images/artwork/to-live/color-of-the-life-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/color-of-the-life-0.jpg"),
            title: "Color of the life, 2021",
            tags: t("acrylic") + ", " + t("oil") + ", " + t("glass") + ", " + t("LED") + ", 100x120cm",
            collection: "To Live"
        },
        {
            thumbnail: require("../../assets/images/artwork/to-live/ice-and-flame-400.jpg"),
            img: require("../../assets/images/artwork/to-live/ice-and-flame-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/ice-and-flame-0.jpg"),
            title: "Ice and flame, 2021",
            tags: t("acrylic") + ", " + t("oil") + ", 100x100cm",
            collection: "To Live"
        },
        {
            thumbnail: require("../../assets/images/artwork/to-live/dream-400.jpg"),
            img: require("../../assets/images/artwork/to-live/dream-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/dream-0.jpg"),
            title: "Dream, 2021",
            tags: t("acrylic") + ", 100x100cm",
            collection: "To Live"
        },
        {
            thumbnail: require("../../assets/images/artwork/to-live/silence-400.jpg"),
            img: require("../../assets/images/artwork/to-live/silence-1500.jpg"),
            original: require("../../assets/images/artwork/to-live/silence-0.jpg"),
            title: "Silence, 2021",
            tags: t("acrylic") + ", 100x120cm",
            collection: "To Live"
        },
        // Black & White
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/gift-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/gift-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/gift-0.jpg"),
            title: "Gift, 2020",
            tags: t("acrylic") + ", 90x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/installation-fragile-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/installation-fragile-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/installation-fragile-0.jpg"),
            title: "Installation FRAGILE, 2020",
            tags: t("acrylic") + ", " + t("window frame"),
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/breakfast-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/breakfast-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/breakfast-0.jpg"),
            title: "Breakfast, 2020",
            tags: t("acrylic") + ", " + t("enamel") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/ethereal-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/ethereal-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/ethereal-0.jpg"),
            title: "Ethereal, 2020",
            tags: t("oil") + ", " + t("acrylic") + ", 100x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/insomnia-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/insomnia-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/insomnia-0.jpg"),
            title: "Insomnia, 2020",
            tags: t("oil") + ", " + t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/magician-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/magician-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/magician-0.jpg"),
            title: "Magician, 2020",
            tags: t("acrylic") + ", 90x110cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/installation-good-morning-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/installation-good-morning-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/installation-good-morning-0.jpg"),
            title: "Installation Good morning, 2020",
            tags: t("acrylic") + ", " + t("textile"),
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/nocturne-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/nocturne-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/nocturne-0.jpg"),
            title: "Nocturne, 2020",
            tags: t("acrylic") + ", " + t("gold foil") + ", " + t("enamel") + ", 120x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/near-the-window-2020-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/near-the-window-2020-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/near-the-window-2020-0.jpg"),
            title: "Near the window, 2020",
            tags: t("acrylic") + ", 100x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/meeting-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/meeting-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/meeting-0.jpg"),
            title: "Meeting, 2019",
            tags: t("oil") + ", 80x70cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/oriental-tea-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/oriental-tea-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/oriental-tea-0.jpg"),
            title: "Oriental tea, 2020",
            tags: t("acrylic") + ", 60x80cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/peace-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/peace-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/peace-0.jpg"),
            title: "Peace, 2019",
            tags: t("oil") + ", 120x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/summer-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/summer-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/summer-0.jpg"),
            title: "Summer, 2020",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/sun-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/sun-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/sun-0.jpg"),
            title: "Sun, 2020",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/tempest-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/tempest-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/tempest-0.jpg"),
            title: "Tempest, 2020",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/thursday-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/thursday-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/thursday-0.jpg"),
            title: "Thursday, 2020",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/victory-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/victory-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/victory-0.jpg"),
            title: "Victory, 2020",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/birch-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/birch-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/birch-0.jpg"),
            title: "Birch, 2020",
            tags: t("acrylic") + ", 60x80cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/fall-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/fall-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/fall-0.jpg"),
            title: "Fall, 2020",
            tags: t("acrylic") + ", " + t("enamel") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/weekdays-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/weekdays-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/weekdays-0.jpg"),
            title: "Weekdays, 2020",
            tags: t("acrylic") + ", 50x90cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/good-morning-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/good-morning-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/good-morning-0.jpg"),
            title: "Good morning, 2020",
            tags: t("acrylic") + ", 60x80cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/a-dream-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/a-dream-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/a-dream-0.jpg"),
            title: "A dream, 2019",
            tags: t("oil") + ", 70x95cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/near-window-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/near-window-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/near-window-0.jpg"),
            title: "Near window, 2019",
            tags: t("oil") + ", 110x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/relaxation-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/relaxation-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/relaxation-0.jpg"),
            title: "Relaxation, 2019",
            tags: t("oil") + ", 70x80cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/near-the-window-2020-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/near-the-window-2020-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/near-the-window-2020-0.jpg"),
            title: "Near the window, 2020",
            tags: t("oil") + ", 120x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/bright-moment-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/bright-moment-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/bright-moment-0.jpg"),
            title: "Bright moment, 2019",
            tags: t("oil") + ", 100x120cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/a-girl-in-tram-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/a-girl-in-tram-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/a-girl-in-tram-0.jpg"),
            title: "A girl in tram, 2019",
            tags: t("oil") + ", 120x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/beyond-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/beyond-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/beyond-0.jpg"),
            title: "Beyond, 2020",
            tags: t("oil") + ", 80x100cm",
            collection: "Black & White"
        },
        {
            thumbnail: require("../../assets/images/artwork/black-and-white/dolce-400.jpg"),
            img: require("../../assets/images/artwork/black-and-white/dolce-1500.jpg"),
            original: require("../../assets/images/artwork/black-and-white/dolce-0.jpg"),
            title: "Dolce, 2020",
            tags: t("acrylic") + ", 100x120cm",
            collection: "Black & White"
        },
        // Jazzman
        {
            thumbnail: require("../../assets/images/artwork/jazzman/childhood-jazz-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/childhood-jazz-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/childhood-jazz-0.jpg"),
            title: "Childhood jazz, 2020",
            tags: t("oil") + ", 80x50cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/vivo-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/vivo-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/vivo-0.jpg"),
            title: "Vivo, 2020",
            tags: t("oil") + ", 60x80cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/sometimes-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/sometimes-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/sometimes-0.jpg"),
            title: "Sometimes, 2020",
            tags: t("acrylic") + ", " + t("oil") + ", 60x80cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/pianist-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/pianist-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/pianist-0.jpg"),
            title: "Pianist, 2020",
            tags: t("oil") + ", 60x50cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/allegro-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/allegro-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/allegro-0.jpg"),
            title: "Allegro, 2020",
            tags: t("oil") + ", 80x60cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/guitarist-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/guitarist-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/guitarist-0.jpg"),
            title: "Guitarist, 2018",
            tags: t("oil") + ", 60x80cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/saxophonist-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/saxophonist-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/saxophonist-0.jpg"),
            title: "Saxophonist, 2018",
            tags: t("oil") + ", 80x60cm",
            collection: "Jazzman"
        },
        {
            thumbnail: require("../../assets/images/artwork/jazzman/trumpeter-400.jpg"),
            img: require("../../assets/images/artwork/jazzman/trumpeter-1500.jpg"),
            original: require("../../assets/images/artwork/jazzman/trumpeter-0.jpg"),
            title: "Trumpeter, 2018",
            tags: t("oil") + ", 70x60cm",
            collection: "Jazzman"
        },
        // Feeling & Living
        {
            thumbnail: require("../../assets/images/artwork/feeling-and-living/earrings-400.jpg"),
            img: require("../../assets/images/artwork/feeling-and-living/earrings-1500.jpg"),
            original: require("../../assets/images/artwork/feeling-and-living/earrings-0.jpg"),
            title: "Earrings, 2020",
            tags: t("acrylic") + ", " + t("spray paint") + ", " + t("enamel") + ", 100x120cm",
            collection: "Feeling & Living"
        },
        {
            thumbnail: require("../../assets/images/artwork/feeling-and-living/yellow-phone-number-400.jpg"),
            img: require("../../assets/images/artwork/feeling-and-living/yellow-phone-number-1500.jpg"),
            original: require("../../assets/images/artwork/feeling-and-living/yellow-phone-number-0.jpg"),
            title: "Yellow phone number, 2020",
            tags: t("acrylic") + ", " + t("enamel") + ", 120x100cm",
            collection: "Feeling & Living"
        },
        {
            thumbnail: require("../../assets/images/artwork/feeling-and-living/yellow-soul-400.jpg"),
            img: require("../../assets/images/artwork/feeling-and-living/yellow-soul-1500.jpg"),
            original: require("../../assets/images/artwork/feeling-and-living/yellow-soul-0.jpg"),
            title: "Yellow-soul, 2020",
            tags: t("acrylic") + ", " + t("enamel") + ", 100x120cm",
            collection: "Feeling & Living"
        },
    ];
}
