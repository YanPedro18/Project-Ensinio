import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {en_US} from '../locales/en_US';
import {es_419} from '../locales/es_419';
import {pt_BR} from '../locales/pt_BR';


i18n.use(initReactI18next).init({
    resources: {
        en: {...en_US},
        pt: {...pt_BR},
        es: {...es_419},

    },
    lng: 'en'
});
