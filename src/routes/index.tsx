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
import { AnalysisModal } from "../components/zebrix/AnalysisModal";
import { InfoModal } from "../components/zebrix/InfoModal";
import { StickyMobileCta } from "../components/zebrix/StickyMobileCta";

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
  const [lang, setLang] = useState<Language>("pl");
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
  const [modalInitialMode, setModalInitialMode] = useState<"start" | "signin">("start");
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

  const handleStartAnalysis = () => {
    setModalInitialMode("start");
    setIsAnalysisModalOpen(true);
  };

  const handleSignIn = () => {
    setModalInitialMode("signin");
    setIsAnalysisModalOpen(true);
  };

  const handleExploreHowItWorks = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F6F8FD] text-[#0F1F3D] font-sans antialiased flex flex-col selection:bg-[#4F46E5] selection:text-white">
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onSignIn={handleSignIn}
      />

      <main id="main-content" className="flex-grow">
        <Hero
          lang={lang}
          onStartAnalysis={handleStartAnalysis}
          onExploreHowItWorks={handleExploreHowItWorks}
        />
        <HumanContext lang={lang} />
        <GuidedJourney lang={lang} onStartAnalysis={handleStartAnalysis} />
        <ProductProof lang={lang} onStartAnalysis={handleStartAnalysis} />
        <KnowledgeEcosystem lang={lang} onSelectResource={handleStartAnalysis} />
        <PersonalWorkspace lang={lang} onOpenWorkspace={handleSignIn} />
        <SafetyTrust lang={lang} />
        <SupportProject lang={lang} />
        <FinalCta
          lang={lang}
        />
      </main>

      <Footer
        lang={lang}
        onLanguageChange={setLang}
        onOpenInfoModal={(type) => setActiveInfoModal(type)}
      />

      <AnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
        lang={lang}
        initialMode={modalInitialMode}
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
