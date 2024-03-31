import { Kadwa, Titillium_Web } from 'next/font/google';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

const kadwa = Kadwa({
  weight: '700',
  subsets: ['latin'],
});

const titilliumWeb = Titillium_Web({
  weight: '400',
  subsets: ['latin'],
});

interface HeadersProps {
  lang: Locale;
}

export const Header = async ({ lang }: HeadersProps) => {
  const t = await getDictionary(lang);

  return (
    <header className={'h-14 shadow-sm flex items-center mx-6'}>
      <span className={'text-sky-700'}>
        <span className={`${kadwa.className} text-lg`}>Expressions Hub</span>
        <span className={`${titilliumWeb.className} ml-1`}>
          {t.language[lang]}
        </span>
      </span>
    </header>
  );
};
