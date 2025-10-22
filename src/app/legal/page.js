import Head from "next/head";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Rejoignez INTEGRAL VTC - Devenez chauffeur privé</title>
        <meta
          name="description"
          content="Rejoignez INTEGRAL VTC et devenez chauffeur privé. Profitez d'un contrat stable, d'avantages sociaux et d'un accompagnement complet."
        />
        <meta
          name="keywords"
          content="devenir chauffeur VTC, recrutement chauffeur privé, emploi VTC, travailler en VTC, chauffeur indépendant"
        />
        <meta name="author" content="INTEGRAL VTC" />

        {/* ✅ Référencement Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Rejoignez INTEGRAL VTC - Chauffeur privé" />
        <meta
          property="og:description"
          content="Intégrez INTEGRAL VTC et bénéficiez d'un contrat stable, d'une rémunération attractive et d'un accompagnement administratif."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://integralvtc.com/legal" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Cards pour le recrutement sur Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rejoignez INTEGRAL VTC - Chauffeur privé" />
        <meta
          name="twitter:description"
          content="Intégrez une entreprise VTC en pleine expansion et profitez d'un emploi stable avec des revenus attractifs."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* ✅ Canonical pour éviter le duplicate content */}
        <link rel="canonical" href="https://integralvtc.com/legal" />

        {/* ✅ Ajout du favicon */}
        <link rel="icon" href="/logo.png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      {/* ✅ Contenu de la page Mentions Légales */}
      <div className="section-spacing pt-[150px] pb-[150px]">
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Éditeur</h2>
          <p>Mohand Zenati</p>
          <p>Email : <a href="mailto:zenatimohandd@gmail.com" className="text-blue-500 hover:underline">zenatimohandd@gmail.com</a></p>
          <p>Téléphone : <a href="tel:+33615961120" className="text-blue-500 hover:underline">+33615961120</a></p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Hébergeur</h2>
          <p>Vercel Inc.</p>
          <p>340 S Lemon Ave #4133</p>
          <p>Walnut, CA 91789</p>
          <p>Email : <a href="mailto:privacy@vercel.com" className="text-blue-500 hover:underline">privacy@vercel.com</a></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Données personnelles</h2>
          <p>Aucune donnée personnelle est collectée sur <a href="https://integralvtc.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">integralvtc.com</a>.</p>
        </section>
      </div>
    </>
  );
}
