import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en.json';
import translationFr from './fr.json';
import translationUa from './ua.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      fr: { translation: translationFr },
      ua: { translation: translationUa }
    },
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
