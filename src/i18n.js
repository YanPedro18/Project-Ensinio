import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { pt_BR } from './locales/pt_BR.js'
import { es_419 } from './locales/es_419.js'
import { en_US } from './locales/en_US.js'

//usando o i18n, puxando os arquivos de linguagem
i18n.use(initReactI18next).init({
  resources: {
    pt_BR: {
      translation: pt_BR,
    },
    en_US: {
      translation: en_US,
    },
    es_419: {
      translation: es_419,
    },
  },
  lng: 'pt_BR', // Defina o idioma padrão aqui
  fallbackLng: 'pt_BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
