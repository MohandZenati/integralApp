import Header from "@/components/Header";
import About from "@/components/About";
import Recrutement from "@/components/Recrutement";
import Contact from "@/components/Contact";

// ✅ Les métadonnées officielles (SEO + réseaux sociaux)
export const metadata = {
  title: "Rejoignez INTEGRAL VTC - Devenez chauffeur privé",
  description:
    "Rejoignez INTEGRAL VTC et devenez chauffeur privé. Profitez d'un contrat stable, d'avantages sociaux et d'un accompagnement complet.",
  keywords:
    "devenir chauffeur VTC, recrutement chauffeur privé, emploi VTC, travailler en VTC, chauffeur indépendant",
  authors: [{ name: "INTEGRAL VTC" }],
  openGraph: {
    title: "Rejoignez INTEGRAL VTC - Chauffeur privé",
    description:
      "Intégrez INTEGRAL VTC et bénéficiez d'un contrat stable, d'une rémunération attractive et d'un accompagnement administratif.",
    url: "https://integralvtc.com",
    siteName: "INTEGRAL VTC",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "https://integralvtc.com",
  },
};

export default function Home() {
  return (
    <main className="content">
      <Header />
      <About />
      <Recrutement />
      <Contact />
    </main>
  );
}
