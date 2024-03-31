// eslint-disable-next-line import/no-unresolved
import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json'),
  'pt-BR': () => import('./dictionaries/pt-BR.json'),
};

export const getDictionary = async (locale: Locale) => {
  const dictionary =
    (await dictionaries[locale]()) ?? (await dictionaries.en());

  return dictionary.default;
};
