import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.on('languageChanged', function (lng) {
  const defaultLng = i18n.options.fallbackLng[0]
  const availableLngs = i18n.options.whitelist

  // no language changed
  if (window.location.pathname.startsWith('/' + lng)
      || (lng === defaultLng && !availableLngs.some(v => window.location.pathname.startsWith('/' + v)))) {
    return
  }

  let newUrl = '';
  if (lng === defaultLng) {
    newUrl = window.location.pathname
    availableLngs.forEach(availableLng => {
      if (window.location.pathname.startsWith('/' + availableLng)) {
        newUrl = window.location.pathname.replace('/' + availableLng, '')
      }
    });
  } else {
    availableLngs.forEach(availableLng => {
      if (window.location.pathname.startsWith('/' + availableLng)) {
        newUrl = window.location.pathname.replace('/' + availableLng, '/' + lng)
      }
    });
    if (newUrl === '') {
      newUrl = '/' + lng + window.location.pathname
    }
  }

  console.log("newUrl", newUrl)
  window.location.replace(newUrl)
})

export default i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: {
        "Oil": "Oil"
      }
    },
    ua: {
      translation: {
        "Oil": "Олія",
        "Acrylic": "Акрил",
        "Graphic": "Графіка",
        "Watercolor": "Акварель",
        "Scroll Down": "Вниз",
        "About Me": "Про мене",
        "Viktoria": "Вікторія",
        "Adkozalova": "Адкозалова",
      }
    }
  },
  detection: {
    order: ["path"],
  },
  whitelist: ["en", "ua"],
  fallbackLng: "en",
  debug: true,
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
/*
 "Viktoria": "Вікторія",
        "Adkozalova": "Адкозалова",
*/
