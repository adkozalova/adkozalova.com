import {useTranslation} from "react-i18next";

export default function CredentialsData() {
    return Data();
}

/**
 * @returns {string}
 */
const formatTitle = (type, name, organizer) => {
    return `${type} - "${name}"${organizer === null || organizer === undefined ? "" : " " + organizer}`
}
/**
 * @returns {string|null}
 */
const formatLocation = (place, address) => {
    place = (place !== null && place !== undefined) ? place : null
    address = (address !== null && address !== undefined) ? address : null

    return place !== null && address !== null
        ? `${place}, ${address}`
        : place !== null
            ? place
            : address;
}

export const Data = () => {
    const [t] = useTranslation();
    return {
        defaultCategory: "SoloExhibitions",
        categories: {
            "SoloExhibitions": t("Solo Exhibitions"),
            "GroupExhibitions": t("Group Exhibitions"),
            "Prizes": t("Prizes"),
            "PrivateCollections": t("Private Collections"),
        },
        categoriesData: {
            "GroupExhibitions": [
                {
                    date: "2021",
                    link: "https://portal11.com.ua/vystavka-nominantiv-premiyi-portal-art-prize-2021-na-temu-what-is-blue/",
                    title: formatTitle(
                        t("International competition-exhibition"),
                        "Portal Art Prize 2021 - What Is Blue",
                        t("Portal 11 Gallery"),
                    ),
                    location: formatLocation(
                        "Portal 11 Gallery",
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2021",
                    title: formatTitle(
                        t("International collective exhibition"),
                        "Femininity",
                        t("Timax Auction House"),
                    ),
                    location: formatLocation(
                        "Space Ukraine",
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2021",
                    title: formatTitle(
                        "Contemporary women`s art fest",
                        "OUT & ABOUT",
                        "UAFRA"
                    ),
                    location: formatLocation(
                        t("Institute of Contemporary Art Problems"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2020",
                    link: "https://portal11.com.ua/vystavka-nominantiv-premiyi-portal-art-prize-2020-chudovyj-novyj-svit/",
                    title: formatTitle(
                        t("International competition-exhibition"),
                        "Portal Art Prize 2020 - \"A wonderful new world?\"",
                        t("Portal 11 Gallery"),
                    ),
                    location: formatLocation(
                        "Portal 11 Gallery",
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2020",
                    title: formatTitle(
                        t("International competition-exhibition"),
                        t("Ukrainian Art Week"),
                        t("Pearls of the Mediterranean"),
                    ),
                    location: formatLocation(
                        t("Museum of outstanding figures of Ukrainian culture"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2020",
                    link: "http://www.kyivhistorymuseum.org/uk/exhibition-projects/odnogo-dnya-pislya-mizhnarodniy-mistetskiy-proyekt-one-day-international-art-project.html",
                    title: formatTitle(
                        t("International project"),
                        "ONE DAY AFTER",
                        t("Kyiv History Museum")
                    ),
                    location: formatLocation(
                        t("Kyiv History Museum"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2020",
                    title: formatTitle(
                        "Contemporary women`s art fest",
                        "SANSARA",
                        "UAFRA"
                    ),
                    location: formatLocation(
                        t("Institute of Contemporary Art Problems"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2020",
                    title: formatTitle(
                        t("International project"),
                        t("A Look Through the Backstage"),
                        "UAFRA"
                    ),
                    location: formatLocation(
                        t("Kyiv History Museum"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2019",
                    title: formatTitle(
                        t("International juried painting competition"),
                        t("A4, ballpoint pen"),
                        t("Karas Gallery"),
                    ),
                    location: formatLocation(
                        t("Karas Gallery"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2019",
                    title: formatTitle(
                        "Contemporary women`s art fest",
                        t("Agenda"),
                        "UAFRA",
                    ),
                    location: formatLocation(
                        t("Institute of Contemporary Art Problems"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2019",
                    title: formatTitle(
                        "Contemporary women`s art fest",
                        t("Windows"),
                        "UAFRA",
                    ),
                    location: formatLocation(
                        t("Kyiv History Museum"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("International collective exhibition"),
                        t("Without Borders"),
                        t("INSHE Art"),
                    ),
                    location: formatLocation(
                        t("Kyiv Fortress Museum"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("International juried painting competition"),
                        t("A4, ballpoint pen"),
                        t("Karas Gallery"),
                    ),
                    location: formatLocation(
                        t("Karas Gallery"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("International collective exhibition"),
                        t("Four seasons"),
                        t("INSHE Art"),
                    ),
                    location: formatLocation(
                        t("Kyiv Fortress Museum"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("International Project"),
                        t("Blockchain Art Hackathon 2.0"),
                        t("Blockchain Art"),
                    ),
                    location: formatLocation(
                        t("Congress and Exhibition Center \"Parkovy\""),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("City project"),
                        t("Pysanka 2018"),
                        t("Folk Ukraine"),
                    ),
                    location: formatLocation(
                        t("Sofiyivska Square"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("Exhibition"),
                        t("The Infinity of Dreams"),
                        t("Барви Життя"),
                    ),
                    location: formatLocation(
                        t("National House of Artist of Ukraine"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2018",
                    title: formatTitle(
                        t("International competition-exhibition"),
                        t("Ukrainian Art Week"),
                        t("Art of the Future"),
                    ),
                    location: formatLocation(
                        t("National House of Artist of Ukraine"),
                        t("Kyiv, Ukraine")
                    )
                },
            ],
            "SoloExhibitions": [
                {
                    date: "2022",
                    link: "https://portal11.com.ua/vystavka-viktoriyi-adkozalovoyi-tini-nezabutyh-predkiv/",
                    title: formatTitle(
                        t("Solo art exhibition"),
                        t("Shadows of unforgotten ancestors")
                    ),
                    location: formatLocation(
                        t("Portal 11 Gallery"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2021",
                    link: "https://www.facebook.com/manufacturaart/posts/2887920904801876",
                    title: formatTitle(
                        t("Solo art exhibition"),
                        t("Alone")
                    ),
                    location: formatLocation(
                        t("Manufactura Art Space"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2020",
                    link: "/art-projects/fragile",
                    title: formatTitle(
                        t("Solo art project"),
                        t("FRAGILE")
                    ),
                    location: formatLocation(
                        t("Ornament Art Space"),
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2019",
                    link: "https://inshe.org/inshe-art-personalnaya-vystavka-rabot-art-professionala-viktorii-adkozalovoj/",
                    title: formatTitle(
                        t("International solo exhibition"),
                        t("INSHE Art")
                    ),
                    location: formatLocation(
                        t("Kyiv Fortress Museum"),
                        t("Kyiv, Ukraine")
                    )
                },
            ],
            "Prizes": [
                {
                    date: "2019",
                    link: null,
                    title: formatTitle(
                        t("1st Prize in International competition-exhibition"),
                        t("Without Borders"),
                        t("INSHE Art")
                    ),
                    location: formatLocation(
                        null,
                        t("Kyiv, Ukraine")
                    )
                },
                {
                    date: "2019",
                    link: null,
                    title: formatTitle(
                        t("1st Prize in International competition-exhibition"),
                        t("Ukrainian Art Week"),
                        t("Art of the Future"),
                    ),
                    location: formatLocation(
                        t("National House of Artist of Ukraine"),
                        t("Kyiv, Ukraine")
                    )
                },
            ],
            "PrivateCollections": [
                "us", "hk", "fi", "hu", "at", "de", "pl", "ua", "ch"
            ]
        }
    }
}