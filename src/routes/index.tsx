import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { Language } from "../types";
import { Navbar } from "../components/zebrix/Navbar";
import { Hero } from "../components/zebrix/Hero";
import { HumanContext } from "../components/zebrix/HumanContext";
import { GuidedJourney } from "../components/zebrix/GuidedJourney";
import { ProductProof } from "../components/zebrix/ProductProof";
import { KnowledgeEcosystem } from "../components/zebrix/KnowledgeEcosystem";
import { PersonalWorkspace } from "../components/zebrix/PersonalWorkspace";
import { SafetyTrust } from "../components/zebrix/SafetyTrust";
import { SupportProject } from "../components/zebrix/SupportProject";
import { FinalCta } from "../components/zebrix/FinalCta";
import { Footer } from "../components/zebrix/Footer";
import { InfoModal } from "../components/zebrix/InfoModal";
import { StickyMobileCta } from "../components/zebrix/StickyMobileCta";
import { getSchedulingUrl } from "../lib/calendly.functions";

const META = {
  pl: {
    title: "Zebrix — uporządkuj obserwacje i dalsze kroki",
    description:
      "Zebrix pomaga rodzicom uporządkować obserwacje dziecka, przygotować pytania i stworzyć informacyjną ścieżkę do rozmowy ze specjalistą.",
  },
  en: {
    title: "Zebrix — organise observations and next steps",
    description:
      "Zebrix helps parents organise a child's observations, prepare questions, and create an informational pathway for a specialist conversation.",
  },
} as const;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  loader: () => getSchedulingUrl(),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center text-[#0F1F3D]">
      <p>Coś poszło nie tak. Odśwież stronę.</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center text-[#0F1F3D]">
      <p>Nie znaleziono strony.</p>
    </div>
  ),
  head: () => ({
    meta: [
      { title: META.pl.title },
      { name: "description", content: META.pl.description },
      { property: "og:title", content: META.pl.title },
      { property: "og:description", content: META.pl.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { url: schedulingUrl } = Route.useLoaderData();
  const [lang, setLang] = useState<Language>("pl");
  const [activeInfoModal, setActiveInfoModal] = useState<string | null>(null);

  // Restore saved language after hydration
  useEffect(() => {
    const saved = localStorage.getItem("zebrix_lang");
    if (saved === "en") setLang("en");
  }, []);

  // Sync document attributes on language change
  useEffect(() => {
    localStorage.setItem("zebrix_lang", lang);
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", META[lang].description);
  }, [lang]);

  const scrollToInterestList = () => {
    document.getElementById("support-project")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreHowItWorks = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F6F8FD] text-[#0F1F3D] font-sans antialiased flex flex-col selection:bg-[#4F46E5] selection:text-white">
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
      />

      <main id="main-content" className="flex-grow">
        <Hero
          lang={lang}
          onStartAnalysis={scrollToInterestList}
          onExploreHowItWorks={handleExploreHowItWorks}
        />
        <HumanContext lang={lang} />
        <GuidedJourney lang={lang} onStartAnalysis={scrollToInterestList} />
        <ProductProof lang={lang} onStartAnalysis={scrollToInterestList} />
        <KnowledgeEcosystem lang={lang} onSelectResource={scrollToInterestList} />
        <PersonalWorkspace lang={lang} onOpenWorkspace={scrollToInterestList} />
        <SafetyTrust lang={lang} />
        <SupportProject lang={lang} schedulingUrl={schedulingUrl} />
        <FinalCta
          lang={lang}
        />
      </main>

      <Footer
        lang={lang}
        onLanguageChange={setLang}
        onOpenInfoModal={(type) => setActiveInfoModal(type)}
      />

      <InfoModal
        type={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
        lang={lang}
      />
      <StickyMobileCta lang={lang} />
    </div>
  );
}
