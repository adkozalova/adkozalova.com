import {useTranslation} from "react-i18next";

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

export default function CredentialsData() {
  const [t] = useTranslation("credentials");
  return {
    "defaultCategory": "CurrentExhibitions",
    "categories": {
      "CurrentExhibitions": t("Current Exhibitions"),
      "GroupExhibitions": t("Group Exhibitions"),
      "SoloExhibitions": t("Solo Exhibitions"),
      "Prizes": t("Prizes"),
      "Publications": t("Publications"),
      "Residences": t("Residences"),
      "PrivateCollections": t("Private Collections"),
    },
    "categoriesData": {
      "CurrentExhibitions": [
        {
          date: t('August') + " 2020",
          link: "http://www.contemporaryartcuratormagazine.com/online-exhibition-new-horizons/viktoria-adkozalova",
          title: formatTitle(
              t("Online exhibition"),
              t("New Horizons"),
              t("Contemporary Art Curator Magazine")
          ),
          location: null
        },
        {
          date: t('August') + " 2020",
          link: "https://www.camelbackgallery.com/figurative2020exhibition?pgid=kdf6heie1-da60118f-c4d0-43b5-9045-cd611519da15",
          title: formatTitle(
              t("International juried painting competition"),
              t("Figurative 2020"),
              t("Camelback Gallery"),
          ),
          location: null
        },
      ],
      "GroupExhibitions": [
        {
          date: "2020",
          title: formatTitle(
              t("International project"),
              t("A Look Through the Backstage"),
              t("UAFRA")
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
              t("Contemporary women`s art fest"),
              t("Agenda"),
              t("UAFRA"),
          ),
          location: formatLocation(
              t("Institute of Contemporary Art Problems"),
              t("Kyiv, Ukraine")
          )
        },
        {
          date: "2019",
          title: formatTitle(
              t("Contemporary women`s art fest"),
              t("Windows"),
              t("UAFRA"),
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
      "Publications": [
        {
          date: "2020",
          link: "https://www.facebook.com/UAFRA1/posts/2738393589529633",
          title: formatTitle(
              t("International project"),
              t("A Look Through the Backstage"),
              t("UAFRA"),
          ),
          location: formatLocation(
              t("Kyiv History Museum"),
              t("Kyiv, Ukraine"),
          )
        },
        {
          date: "2020",
          link: "http://culturetrend-magazine.com/adkozalova",
          title: formatTitle(
              t("Magazine"),
              t("CultureTrend"),
              null
          ),
          location: null
        },
        {
          date: "2019",
          link: "https://www.youtube.com/watch?v=Bri9OkdlIWw",
          title: formatTitle(
              t("Contemporary women`s art fest"),
              t("Agenda"),
              t("Dmitro Subotenko"),
          ),
          location: null
        },
        {
          date: "2019",
          link: "https://inshe.org/inshe-art-1934-j-mezhdunarodnyj-master-klass-art-professional-dekabr-2019-goda-video/",
          title: formatTitle(
              t("1934th International master class"),
              t("ART PROFESSIONAL"),
              t("INSHE Art"),
          ),
          location: null
        },
      ],
      "Residences": [
        {
          date: "2018",
          title: formatTitle(
              t("VR art, 1 week residence"),
              t("Blockchain Art Hackathon 2.0"),
              t("Blockchain Art"),
          ),
          location: formatLocation(
              t("Congress and Exhibition Center \"Parkovy\""),
              t("Kyiv, Ukraine")
          )
        },
      ],
      "PrivateCollections": [
        "us", "hk", "fi", "hu", "at", "de", "pl", "ua", "ru"
      ]
    }
  }
}