import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { ZebrixLogo } from './ZebrixLogo';
import { ShieldAlert, Globe } from 'lucide-react';

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
    <footer className="bg-[#0F1F3D] text-white border-t border-white/10 pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 md:pb-16 border-b border-white/10">
          {/* Brand and Description (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <ZebrixLogo isDark size="md" />
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {t.productLine}
            </p>

            {/* Concise Medical Line Notice */}
            <div className="p-4 rounded-lg bg-white/[0.05] border border-white/10 flex items-start gap-3 text-xs leading-relaxed text-white/75 max-w-md">
              <ShieldAlert className="w-4 h-4 text-[#B54708] shrink-0 mt-0.5" />
              <span>{t.medicalLine}</span>
            </div>
          </div>

          {/* Navigation Category Links (7 cols) */}
          <nav className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 text-sm" aria-label="Footer navigation">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                Nawigacja
              </span>
              <ul className="space-y-3 text-white/70 leading-snug">
                <li>
                  <a href="#context" className="hover:text-white transition-colors">
                    {t.about}
                  </a>
                </li>
                <li>
                  <a href="#journey" className="hover:text-white transition-colors">
                    Jak to działa
                  </a>
                </li>
                <li>
                  <a href="#knowledge" className="hover:text-white transition-colors">
                    {t.kb}
                  </a>
                </li>
                <li>
                  <a href="#workspace" className="hover:text-white transition-colors">
                    Panel rodzica
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                Zasoby
              </span>
              <ul className="space-y-3 text-white/70 leading-snug">
                <li>
                  <a href="#knowledge" className="hover:text-white transition-colors">
                    {t.centres}
                  </a>
                </li>
                <li>
                  <a href="#knowledge" className="hover:text-white transition-colors">
                    {t.trials}
                  </a>
                </li>
                <li>
                  <a href="#knowledge" className="hover:text-white transition-colors">
                    {t.support}
                  </a>
                </li>
                <li>
                  <a href="#support-project" className="hover:text-white transition-colors">
                    Dołącz do listy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-5 pt-7 border-t border-white/10 sm:pt-0 sm:border-t-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                Bezpieczeństwo
              </span>
              <ul className="space-y-3 text-white/70 leading-snug">
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal('privacy')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.privacy}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal('medical')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.medicalInfo}
                  </button>
                </li>
                <li>
                  <a href="#safety" className="hover:text-white transition-colors">
                    Numery alarmowe 112
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar with Language Switcher and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-xs text-white/60">
          <p>© {currentYear} Zebrix. {t.allRights}</p>

           <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1 text-white/60">
              <Globe className="w-3.5 h-3.5" />
              <span>Język / Language:</span>
            </span>
            <div className="flex items-center bg-white/10 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => onLanguageChange('pl')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  lang === 'pl' ? 'bg-white text-[#0F1F3D]' : 'text-white/80 hover:text-white'
                }`}
              >
                PL
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  lang === 'en' ? 'bg-white text-[#0F1F3D]' : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
