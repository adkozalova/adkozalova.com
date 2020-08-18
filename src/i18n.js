import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.on('languageChanged', function (lng) {
  const defaultLng = i18n.options.fallbackLng[0]
  const availableLngs = i18n.options.whitelist
  const pathname = window.location.pathname

  // no change if default language is enabled
  if (lng === defaultLng && !availableLngs.some(v => pathname.startsWith('/' + v))) {
    console.log("not change language [default lang, no lang in path]")
    return
  }

  // no change if not default language is enabled
  if (lng !== defaultLng && pathname.startsWith('/' + lng)) {
    console.log("not change language [not default lang, lang in path]")
    return
  }

  if (lng === defaultLng && availableLngs.some(v => pathname.startsWith('/' + v))) {
    let newUrl = '';
    availableLngs.forEach(availableLng => {
      if (pathname.startsWith('/' + availableLng)) {
        newUrl = pathname.replace('/' + availableLng, '')
      }
    })
    window.location.replace(newUrl === '' ? '/' : newUrl)
    console.log("change language [default lang, another lang in path]")
    return
  }

  if(lng !== defaultLng && availableLngs.some(v => pathname.startsWith('/' + v))) {
    let newUrl = '';
    availableLngs.forEach(availableLng => {
      if (pathname.startsWith('/' + availableLng)) {
        newUrl = pathname.replace('/' + availableLng, '/' + lng)
      }
    });
    window.location.replace(newUrl.replace(/\/$/, ''))
    console.log("change language [not default lang, another lang in path]")
    return
  }

  window.location.replace('/' + lng + pathname.replace(/\/$/, ''))
  console.log("change language [not default lang, not lang in path]")
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
