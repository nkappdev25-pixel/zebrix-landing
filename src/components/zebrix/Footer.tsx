import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { ZebrixLogo } from './ZebrixLogo';
import { ShieldAlert, Globe, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenInfoModal: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onLanguageChange,
  onOpenInfoModal,
}) => {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-zebrix-navy/10 bg-zebrix-paper text-zebrix-navy pt-28 pb-9 max-[360px]:pt-36 md:pt-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-14 pb-28 md:pb-36">
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold uppercase text-zebrix-indigo mb-7">{lang === 'pl' ? 'Pozostańmy w kontakcie' : 'Stay in touch'}</span>
            <ZebrixLogo size="lg" />
            <p className="text-base text-zebrix-navy/70 max-w-sm leading-relaxed mt-7">{t.productLine}</p>
            <a href="#support-project" className="group inline-flex items-center gap-4 border-b border-zebrix-navy/50 pb-2 mt-10 font-medium text-xl sm:text-2xl text-zebrix-navy hover:text-zebrix-indigo hover:border-zebrix-indigo transition-colors">
              <span>{lang === 'pl' ? 'Dołącz do listy' : 'Join the interest list'}</span>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
          </div>

          <nav className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 lg:pt-2" aria-label={lang === 'pl' ? 'Nawigacja w stopce' : 'Footer navigation'}>
            <div>
              <h3 className="text-xs font-bold uppercase text-zebrix-navy mb-7">{lang === 'pl' ? 'Nawigacja' : 'Navigation'}</h3>
              <ul className="space-y-5 text-sm text-zebrix-navy/65 leading-snug">
                <li><a href="#context" className="hover:text-zebrix-indigo transition-colors">{t.about}</a></li>
                <li><a href="#journey" className="hover:text-zebrix-indigo transition-colors">{lang === 'pl' ? 'Jak to działa' : 'How it works'}</a></li>
                <li><a href="#knowledge" className="hover:text-zebrix-indigo transition-colors">{t.kb}</a></li>
                <li><a href="#workspace" className="hover:text-zebrix-indigo transition-colors">{lang === 'pl' ? 'Panel rodzica' : 'Parent workspace'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase text-zebrix-navy mb-7">{lang === 'pl' ? 'Zasoby' : 'Resources'}</h3>
              <ul className="space-y-5 text-sm text-zebrix-navy/65 leading-snug">
                <li><a href="#knowledge" className="hover:text-zebrix-indigo transition-colors">{t.centres}</a></li>
                <li><a href="#knowledge" className="hover:text-zebrix-indigo transition-colors">{t.trials}</a></li>
                <li><a href="#knowledge" className="hover:text-zebrix-indigo transition-colors">{t.support}</a></li>
                <li><a href="#support-project" className="hover:text-zebrix-indigo transition-colors">{lang === 'pl' ? 'Dołącz do listy' : 'Join the list'}</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase text-zebrix-navy mb-7">{lang === 'pl' ? 'Bezpieczeństwo' : 'Safety'}</h3>
              <ul className="space-y-5 text-sm text-zebrix-navy/65 leading-snug">
                <li><Button variant="link" size="sm" onClick={() => onOpenInfoModal('privacy')} className="h-auto p-0 text-sm font-normal whitespace-normal text-left text-zebrix-navy/65 hover:text-zebrix-indigo no-underline hover:no-underline">{t.privacy}</Button></li>
                <li><Button variant="link" size="sm" onClick={() => onOpenInfoModal('medical')} className="h-auto p-0 text-sm font-normal whitespace-normal text-left text-zebrix-navy/65 hover:text-zebrix-indigo no-underline hover:no-underline">{t.medicalInfo}</Button></li>
                <li><a href="#safety" className="hover:text-zebrix-indigo transition-colors">{lang === 'pl' ? 'Numery alarmowe 112' : 'Emergency number 112'}</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex items-start gap-3 border-t border-zebrix-navy/10 pt-6 pb-20 text-xs text-zebrix-navy/65 max-w-xl">
          <ShieldAlert className="size-4 shrink-0 text-zebrix-indigo" aria-hidden="true" />
          <span>{t.medicalLine}</span>
        </div>

        <div className="relative overflow-hidden border-b border-zebrix-navy/10 h-20 sm:h-32 md:h-44" aria-hidden="true">
          <span className="absolute inset-x-0 -bottom-8 sm:-bottom-14 md:-bottom-20 text-center text-[7rem] sm:text-[12rem] md:text-[18rem] font-extrabold leading-none text-zebrix-navy/5 select-none" style={{ fontFamily: 'Sora, Manrope, sans-serif' }}>ZEBRIX</span>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-zebrix-navy/60">
          <p>© {currentYear} Zebrix. {t.allRights}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1"><Globe className="size-4" aria-hidden="true" />{lang === 'pl' ? 'Język' : 'Language'}</span>
            <div className="inline-flex items-center rounded-full border border-zebrix-navy/15 p-0.5" role="group" aria-label={lang === 'pl' ? 'Wybór języka' : 'Choose language'}>
              <Button type="button" variant="ghost" size="sm" onClick={() => onLanguageChange('pl')} aria-pressed={lang === 'pl'} className={`h-7 rounded-full px-3 text-xs ${lang === 'pl' ? 'bg-zebrix-navy text-zebrix-paper hover:bg-zebrix-navy hover:text-zebrix-paper' : 'text-zebrix-navy/70 hover:text-zebrix-navy'}`}>PL</Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => onLanguageChange('en')} aria-pressed={lang === 'en'} className={`h-7 rounded-full px-3 text-xs ${lang === 'en' ? 'bg-zebrix-navy text-zebrix-paper hover:bg-zebrix-navy hover:text-zebrix-paper' : 'text-zebrix-navy/70 hover:text-zebrix-navy'}`}>EN</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
