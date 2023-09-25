import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/en.json';
import pl from './pl/pl.json';

import {Platform, NativeModules} from 'react-native';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const languageResources = {
  pl: {translation: pl},
  en: {translation: en},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: deviceLanguage === 'en_PL' ? 'pl' : 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
