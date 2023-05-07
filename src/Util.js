import i18n from "i18next";

export function i18nTo(linkTo) {
  return i18n.language === i18n.options.fallbackLng[0]
      ? linkTo
      : linkTo === '/'
          ? '/' + i18n.language
          : '/' + i18n.language + linkTo;
}
