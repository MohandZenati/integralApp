import Image from "next/image";
import { Video } from "lucide-react";
import iconAbout from "@/img/icon-about-1.png"; 
import iconAbout2 from "@/img/icon-about-2.png"; 
import iconAbout3 from "@/img/icon-about-3.png"; 
import ImgAbout from "@/img/img-about.png"; // Importer l'image depuis src
import iconValidate from "@/img/icon-validate.png"; // Importer l'image depuis src

export default function About() {
  return (
    <div id="About" className="bg-white pb-[10px]">
      <div className="inclined-block bg-white text-black py-5 px-10 mt-10  max-w-3xl mx-auto transform -translate-y-20 max-[825px]:">
        <ul className="list-none flex flex-row max-[825px]:flex-col items-center justify-between gap-3">
          <li className="flex flex-col items-center justify-center gap-2">
            <Image src={iconAbout} alt="Logo" height={40} width={40} />
            <span className="text-[#151515] text-1xl mr-2">
              Ponctualité & Professionnalisme
            </span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
          <Image src={iconAbout3} alt="Logo" height={40} width={40} />
            <span className="text-[#151515] text-1xl mr-2">
              Confort et Sécurité
            </span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
          <Image src={iconAbout2} alt="Logo" height={40} width={40} />
            <span className="text-[#151515] text-1xl mr-2">
            Réservation rapide et sans effort
            </span>
          </li>
        </ul>
      </div>

      <h1 className="section-spacing text-[#151515] text-center text-4xl font-bold max-[800px]:text-start">
        À propos
      </h1>

      <div className="section-spacing pb-[100px]  flex flex-row justify-between items-start gap-12 pt-[50px] max-[1000px]:flex-col-reverse">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[530px] h-auto rounded-lg"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        {/* <Image
          src={ImgAbout}
          alt="Image"
          width={470}
          height={0} // La hauteur s'adapte automatiquement
          className=""
        /> */}
        <div>
          <h2 className="text-[#151515]  text-3xl font-700 ">
            Notre engagement envers vous
          </h2>
          <p className="text-[#151515]  text-1xl font-400 mt-5">
          INTEGRAL VTC offre une opportunité unique aux chauffeurs privés souhaitant intégrer un réseau fiable et rémunérateur.  
Assurer des conditions de travail optimales, une rémunération attractive et un accompagnement administratif complet. 
          </p>
          <div className="flex flex-col">
            <div className="flex flex-col items-start text-start gap-2 mt-4">
              <div className="flex items-center justify-center gap-2">
                <Image src={iconValidate} alt="Logo" height={22} width={22} />
                <span className="flex items-center justify-center  text-1xl">
                Bénéficiez d’un CDI, d’une rémunération attractive et d’avantages sociaux.
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Image src={iconValidate} alt="Logo" height={22} width={22} />
                <span className="flex items-center justify-center text-1xl">
                Rejoignez un réseau en pleine expansion avec une clientèle régulière.
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Image src={iconValidate} alt="Logo" height={22} width={22} />
                <span className="flex items-center justify-center text-1xl">
                Travaillez en toute sérénité, nous gérons toute la partie administrative.
                </span>
              </div>
              <div className="inclined-block-about flex items-center justify-center h-[50px] transform -translate-x-10 max-[1000px]:transform -translate-x-2">
          <h1 className="text-white p-10">
          Roulez sans souci, nous nous occupons de tout.
          </h1>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
