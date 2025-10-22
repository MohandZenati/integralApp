import Image from "next/image";
import bgRecrutement from "@/img/bg-recrutement.png"; // Image de fond
import iconAdv1 from "@/img/icon-adv-1.png"; // Première icône
import iconAdv2 from "@/img/icon-adv-2.png"; // Deuxième icône
import iconAdv3 from "@/img/icon-adv-3.png"; // Troisième icône
import iconAdv4 from "@/img/icon-adv-4.png"; // Quatrième icône

export default function Recrutement() {
  // 📌 Tableau contenant les textes et les images correspondantes
  const avantages = [
    {
      text: "Un contrat en CDI avec fiche de paie",
      image: iconAdv1,
    },
    {
      text: "Des avantages sociaux (mutuelle, prévoyance, indemnités maladie, chômage, retraite)",
      image: iconAdv2,
    },
    {
      text: "Des revenus attractifs jusqu’à 62% du CA Net",
      image: iconAdv3,
    },
    {
      text: "Zéro gestion administrative – On s’occupe de tout pour vous !",
      image: iconAdv4,
    },
  ];

  return (
    <div id="Recrutement" className="relative mb-[120px]">
      {/* Image de fond */}
      <Image
        src={bgRecrutement}
        alt="Recrutement"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Texte au-dessus */}
      <div className="z-10 relative">
        <div className="section-spacing absolute top-0 right-0 w-[250px] h-[20px] inclined-blockk"></div>
        <h1 className="section-spacing text-white text-3xl font-bold text-center pt-10">
          Devenir Chauffeur chez INTEGRAL VTC
        </h1>
        <p className="section-spacing text-white text-center mt-5 font-bold">
          Profitez d’une carrière enrichissante avec des revenus attractifs, des avantages uniques, et bien plus encore !
        </p>

        {/* 📌 Utilisation d'une `grid` pour les cartes */}
        <div className="section-spacing grid md:grid-cols-4 lg:grid-cols-4 gap-2 transform translate-y-5">
          {avantages.map((item, index) => (
            <div
              key={index}
              className="p-5 flex flex-col items-center gap-2 text-center w-full h-full min-h-[200px] bg-white"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {/* Affichage de l'image unique de chaque carte */}
              <Image src={item.image} alt="Avantage" height={70} width={70} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
