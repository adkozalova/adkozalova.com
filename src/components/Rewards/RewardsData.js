import {useTranslation} from "react-i18next";

export default function RewardsData() {
  const [t] = useTranslation("rewards");
  return [
    {
      src: require("./../../assets/images/rewards/reward-uafra-sansara-09-2020.jpg"),
      title: t("Certificate"),
      description: t("Participant of the art exhibition - UAFRA \"SANSARA\""),
      country: ["ua"],
      year: t("Sep") + " 2020"
    },
    {
      src: require("./../../assets/images/rewards/reward-lightspacetime-4th-patterns-09-2020.jpg"),
      title: t("Special Recognition"),
      description: t("International Juried Painting Competition - Light Space & Time Online Art Gallery \"4th Patterns Art Exhibition\""),
      country: ["eu"],
      year: t("Sep") + " 2020"
    },
    {
      src: require("./../../assets/images/rewards/reward-camelback-08-2020.jpg"),
      title: t("Finalist Award"),
      description: t("International Juried Painting Competition - CAMELBACK GALLERY \"Figurative\""),
      country: ["eu"],
      year: t("Aug") + " 2020"
    },
    {
      src: require("./../../assets/images/rewards/reward-2.jpg"),
      title: t("Certificate"),
      description: t("Participant of the art exhibition - UAFRA \"Look through the backstage\""),
      country: ["ua"],
      year: t("Feb") + " - " + t("Mar") + " 2020"
    },
    {
      src: require("./../../assets/images/rewards/reward-8.jpg"),
      title: t("Diploma"),
      description: t("Blessing for the efforts and labors of the Holy Church"),
      country: ["ua"],
      year: t("Feb") + " 2020"
    },
    {
      src: require("./../../assets/images/rewards/reward-3.jpg"),
      title: t("International Certificate"),
      description: t("Participant of the international art exhibition \"ART-PROFESSIONAL\""),
      country: ["ua", "us", "ca", "mx", "cy", "ch", "jp"],
      year: t("Jun") + " - " + t("Sep") + " 2020"
    },
    {
      src: require("./../../assets/images/rewards/reward-4.jpg"),
      title: t("International First Prize Diploma"),
      description: t("INSHE Art International competition of professional and amateur artists"),
      country: ["ua"],
      year: t("Nov") + " 2019"
    },
    {
      src: require("./../../assets/images/rewards/reward-5.jpg"),
      title: t("Certificate"),
      description: t("Participant of the art exhibition - INSHE ZHITTIA \"Without Borders\""),
      country: ["ua"],
      year: t("Nov") + " 2019"
    },
    {
      src: require("./../../assets/images/rewards/reward-6.jpg"),
      title: t("International Solo Exhibition Diploma"),
      description: t("International solo exhibition, INSHE Art"),
      country: ["ua"],
      year: t("Mar") + " 2019"
    },
    {
      src: require("./../../assets/images/rewards/reward-1.jpg"),
      title: t("Certificate"),
      description: t("International art exhibitions \"ART - PROFESSIONAL\""),
      country: ["ua", "us", "ca", "mx", "pt", "es", "it", "fr", "gr", "hu"],
      year: t("Jan") + " - " + t("May") + " 2019"
    },
    {
      src: require("./../../assets/images/rewards/reward-9.jpg"),
      title: t("Certificate"),
      description: t("Participant of the art exhibition - \"Agenda\""),
      country: ["ua"],
      year: t("Jul") + " 2019"
    },
    {
      src: require("./../../assets/images/rewards/reward-10.jpg"),
      title: t("Certificate"),
      description: t("Participant of the international art exhibition"),
      country: ["ua", "us", "ca", "mx", "pt", "es", "it", "fr", "gr", "hu"],
      year: t("Jan") + " - " + t("May") + " 2019"
    },
    {
      src: require("./../../assets/images/rewards/reward-7.jpg"),
      title: t("Certificate"),
      description: t("Participant of the \"Blockchain Art Hackathon 2.0\""),
      country: ["ua"],
      year: "2018"
    },
    {
      src: require("./../../assets/images/rewards/reward-11.jpg"),
      title: t("Diploma"),
      description: t("Participant of the art exhibition - \"Infinity Of The Dreams\""),
      country: ["ua"],
      year: t("May") + " 2018"
    },
    {
      src: require("./../../assets/images/rewards/reward-12.jpg"),
      title: t("International First Prize Diploma"),
      description: t("International exhibition - \"Ukrainian Art Week XV\""),
      country: ["ua"],
      year: t("Mar") + " 2018"
    },
  ]
}