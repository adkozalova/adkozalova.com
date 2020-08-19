import {useTranslation} from "react-i18next";

export const Contact = () => {
  return {
    fbLink: "https://www.facebook.com/viktoria.adkozalova",
    fbTitle: "Viktoria.Adkozalova",
    instLink: "https://www.instagram.com/viktoria_adkozalova",
    instTitle: "@viktoria_adkozalova",
    youtubeLink: "https://www.youtube.com/channel/UCVvX_5I145CX4TKzWfTZJvA",
    youtubeTitle: "Youtube",
    phoneLink: "tel:+380507179383",
    phoneTitle: "+380 50 717 9383",
    emailLink: "mailto:adkozalova.v@gmail.com",
    emailTitle: "adkozalova.v@gmail.com",
  }
}

// Projects
export const ProjectBlackAndWhiteItems = () => {
  const [t] = useTranslation();
  return [
    {
      thumbnail: "/images/project/black-and-white/good-morning.jpg",
      img: "/images/project/black-and-white/good-morning-full.jpg",
      title: "Good morning, 2020",
      tags: t("acrylic") + ", 80x60cm"
    },
    {
      thumbnail: "/images/project/black-and-white/summer.jpg",
      img: "/images/project/black-and-white/summer-full.jpg",
      title: "Summer, 2020",
      tags: t("acrylic") + ", 120x100cm"
    },
    {
      thumbnail: "/images/project/black-and-white/peace.jpg",
      img: "/images/project/black-and-white/peace-full.jpg",
      title: "Peace, 2019",
      tags: t("oil") + ", 100x120cm"
    },
    {
      thumbnail: "/images/project/black-and-white/a-dream.jpg",
      img: "/images/project/black-and-white/a-dream-full.jpg",
      title: "A dream, 2019",
      tags: t("oil") + ", 95x70cm"
    },
    {
      thumbnail: "/images/project/black-and-white/near-window.jpg",
      img: "/images/project/black-and-white/near-window-full.jpg",
      title: "Near window, 2019",
      tags: t("oil") + ", 100x110cm"
    },
    {
      thumbnail: "/images/project/black-and-white/meeting.jpg",
      img: "/images/project/black-and-white/meeting-full.jpg",
      title: "Meeting, 2019",
      tags: t("oil") + ", 70x80cm"
    },
    {
      thumbnail: "/images/project/black-and-white/relaxation.jpg",
      img: "/images/project/black-and-white/relaxation-full.jpg",
      title: "Relaxation, 2019",
      tags: t("oil") + ", 80x70cm"
    },
    {
      thumbnail: "/images/project/black-and-white/near-the-window.jpg",
      img: "/images/project/black-and-white/near-the-window-full.jpg",
      title: "Near the window, 2020",
      tags: t("oil") + ", 100x120cm"
    },
    {
      thumbnail: "/images/project/black-and-white/bright-moment.jpg",
      img: "/images/project/black-and-white/bright-moment-full.jpg",
      title: "Bright moment, 2019",
      tags: t("oil") + ", 120x100cm"
    },
    {
      thumbnail: "/images/project/black-and-white/a-girl-in-tram.jpg",
      img: "/images/project/black-and-white/a-girl-in-tram-full.jpg",
      title: "A girl in tram, 2019",
      tags: t("oil") + ", 120x100cm"
    },
    {
      thumbnail: "/images/project/black-and-white/beyond.jpg",
      img: "/images/project/black-and-white/beyond-full.jpg",
      title: "Beyond, 2020",
      tags: t("oil") + ", 100x80cm"
    },
    {
      thumbnail: "/images/project/black-and-white/dolce.jpg",
      img: "/images/project/black-and-white/dolce-full.jpg",
      title: "Dolce, 2020",
      tags: t("acrylic") + ", 100x120cm"
    },
  ];
}

export const ProjectJazzmanItems = () => {
  const [t] = useTranslation();
  return [
    {
      thumbnail: "/images/project/jazzman/childhood-jazz.jpg",
      img: "/images/project/jazzman/childhood-jazz-full.jpg",
      title: "Childhood jazz, 2020",
      tags: t("oil") + ", 50x80cm"
    },
    {
      thumbnail: "/images/project/jazzman/vivo.jpg",
      img: "/images/project/jazzman/vivo-full.jpg",
      title: "Vivo, 2020",
      tags: t("oil") + ", 80x60cm"
    },
    {
      thumbnail: "/images/project/jazzman/sometimes.jpg",
      img: "/images/project/jazzman/sometimes-full.jpg",
      title: "Sometimes, 2020",
      tags: t("acrylic") + ", " + t("oil") + ", 80x60cm"
    },
    {
      thumbnail: "/images/project/jazzman/pianist.jpg",
      img: "/images/project/jazzman/pianist-full.jpg",
      title: "Pianist, 2020",
      tags: t("oil") + ", 50x60cm"
    },
    {
      thumbnail: "/images/project/jazzman/allegro.jpg",
      img: "/images/project/jazzman/allegro-full.jpg",
      title: "Allegro, 2020",
      tags: t("oil") + ", 60x80cm"
    },
    {
      thumbnail: "/images/project/jazzman/guitarist.jpg",
      img: "/images/project/jazzman/guitarist-full.jpg",
      title: "Guitarist, 2018",
      tags: t("oil") + ", 60x80cm"
    },
    {
      thumbnail: "/images/project/jazzman/saxophonist.jpg",
      img: "/images/project/jazzman/saxophonist-full.jpg",
      title: "Saxophonist, 2018",
      tags: t("oil") + ", 60x80cm"
    },
    {
      thumbnail: "/images/project/jazzman/trumpeter.jpg",
      img: "/images/project/jazzman/trumpeter-full.jpg",
      title: "Trumpeter, 2018",
      tags: t("oil") + ", 60x70cm"
    },
  ]
}

export const ProjectFillingAndLivingItems = () => {
  const [t] = useTranslation();
  return [
    {
      thumbnail: "/images/project/feeling-and-living/yellow-phone-number.jpg",
      img: "/images/project/feeling-and-living/yellow-phone-number-full.jpg",
      title: "Yellow phone number, 2020",
      tags: t("acrylic") + ", " + t("enamel") + ", 100x120cm"
    },
    {
      thumbnail: "/images/project/feeling-and-living/yellow-soul.jpg",
      img: "/images/project/feeling-and-living/yellow-soul-full.jpg",
      title: "Yellow-soul, 2020",
      tags: t("acrylic") + ", " + t("enamel") + ", 120x100cm"
    },
  ]
}
// End Projects

// Rewards
export const RewardItems = () => {
  const [t] = useTranslation();
  return [
    {
      src: "/images/rewards/reward-2.jpg",
      title: t("Certificate"),
      description: t("Participant of the art exhibition - UAFRA 'Look through the backstage'"),
      country: ["ua"],
      year: t("Feb") + " - " + t("Mar") + " 2020"
    },
    {
      src: "/images/rewards/reward-8.jpg",
      title: t("Diploma"),
      description: t("Blessing for the efforts and labors of the Holy Church"),
      country: ["ua"],
      year: t("Feb") + " 2020"
    },
    {
      src: "/images/rewards/reward-3.jpg",
      title: t("International Certificate"),
      description: t("Participant of the international art exhibition ART-PROFESSIONAL"),
      country: ["ua", "us", "ca", "mx", "cy", "ch", "jp"],
      year: t("Jun") + " - " + t("Sep") + " 2020"
    },
    {
      src: "/images/rewards/reward-4.jpg",
      title: t("International First Prize Diploma"),
      description: t("INSHE ART International competition of professional and amateur artists"),
      country: ["ua"],
      year: t("Nov") + " 2019"
    },
    {
      src: "/images/rewards/reward-5.jpg",
      title: t("Certificate"),
      description: t("Participant of the art exhibition - INSHE ZHITTIA 'Without Borders'"),
      country: ["ua"],
      year: t("Nov") + " 2019"
    },
    {
      src: "/images/rewards/reward-6.jpg",
      title: t("International Solo Exhibition Diploma"),
      description: t("International solo exhibition, INSHE ART"),
      country: ["ua"],
      year: t("Mar") + " 2019"
    },
    {
      src: "/images/rewards/reward-1.jpg",
      title: t("Certificate"),
      description: t("INTERNATIONAL ART EXHIBITIONS ART - PROFESSIONAL"),
      country: ["ua", "us", "ca", "mx", "pt", "es", "it", "fr", "gr", "hu"],
      year: t("Jan") + " - " + t("May") + " 2019"
    },
    {
      src: "/images/rewards/reward-9.jpg",
      title: t("Certificate"),
      description: t("Participant of the art exhibition - Agenda"),
      country: ["ua"],
      year: t("Jul") + " 2019"
    },
    {
      src: "/images/rewards/reward-10.jpg",
      title: t("Certificate"),
      description: t("Participant of the international art exhibition"),
      country: ["ua", "us", "ca", "mx", "pt", "es", "it", "fr", "gr", "hu"],
      year: t("Jan") + " - " + t("May") + " 2019"
    },
    {
      src: "/images/rewards/reward-7.jpg",
      title: t("Certificate"),
      description: t("Participant of the 'Blockchain Art Hackathon 2.0'"),
      country: ["ua"],
      year: "2018"
    },
    {
      src: "/images/rewards/reward-11.jpg",
      title: t("Diploma"),
      description: t("Participant of the art exhibition - Infinity Of The Dreams"),
      country: ["ua"],
      year: t("May") + " 2018"
    },
    {
      src: "/images/rewards/reward-12.jpg",
      title: t("International First Prize Diploma"),
      description: t("International exhibition - Ukrainian Art Week XV"),
      country: ["ua"],
      year: t("Mar") + " 2018"
    },
  ]
}
// End Rewards
