import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import type { Language } from '@/i18n/i18n';
import { isRTL, getLanguageDirection } from '@/i18n/i18n';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as Language;
  const isRtl = isRTL(currentLanguage);
  const direction = getLanguageDirection(currentLanguage);

  const changeLanguage = useCallback((lang: Language) => {
    i18n.changeLanguage(lang);
  }, [i18n]);

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage;
    
    if (isRtl) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [currentLanguage, direction, isRtl]);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'ar', label: 'AR', flag: '🇸🇦' },
  ];

  return {
    currentLanguage,
    isRtl,
    direction,
    changeLanguage,
    languages,
    t,
  };
};
