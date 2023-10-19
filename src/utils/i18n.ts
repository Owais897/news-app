import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/en.json";
import ar from "../translations/ar.json";
import { GenericObject } from "../types/common";

type Langs = Record<
  string,
  { translations: GenericObject; title: string; short: string; rtl: boolean }
>;

//constants
export const STORAGE_KEY = "_lang_id_";
const langs: Langs = {
  "en-US": {
    translations: en,
    title: "English",
    short: "en",
    rtl: false,
  },
  "ar-AE": {
    translations: ar,
    title: "العربية",
    short: "ar",
    rtl: true,
  },
};

let LangId: string;
const langIds = Object.keys(langs);
const fallbackLng = langIds[0];

//inint i18n
i18n.use(initReactI18next).init({
  resources: Object.keys(langs).reduce((acc: GenericObject, langId) => {
    acc[langId] = langs[langId].translations;
    return acc;
  }, {}),
  lng: get(),
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
});

function set(langId: string) {
  LangId = langId;
  localStorage.setItem(STORAGE_KEY, langId);
  i18n.changeLanguage(langId).catch(console.error);
}

function get(abbr = false) {
  let langId = LangId || localStorage.getItem(STORAGE_KEY);
  if (!langId || !langIds.includes(langId)) {
    langId = fallbackLng;
    localStorage.setItem(STORAGE_KEY, langId);
    LangId = langId;
  }
  return !abbr ? langId : langs[langId as keyof typeof langs].short;
}

const Lang = {
  set,
  get,
  i18n,
  t: i18n.t,
  langs,
};

export default Lang;
