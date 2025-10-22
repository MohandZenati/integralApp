import Image from "next/image";
import bgHome from "@/img/bg-home.png"; // Importer l'image depuis src
import imgHome from "@/img/img-home.png"; // Importer l'image depuis src
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div id="Header" className="relative h-[600px] w-full">
      {/* Image d'arrière-plan */}
      <Image
        src={bgHome}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Contenu principal */}
      <div className="relative section-spacing flex flex-row max-[1000px]:flex-col items-center justify-center h-full pt-10">
        <div>
          <h1 className="text-white text-4xl font-bold">
          INTEGRAL VTC – L’avenir des chauffeurs privés
          </h1>
          <p className="text-white text-1xl font-400 mt-3">
  Devenez chauffeur chez INTEGRAL VTC et profitez d&apos;un CDI, d&apos;une rémunération attractive et d&apos;une gestion simplifiée.
</p>


          <Link href="#Contact">
            <Button
              className="mt-3 transform transition-transform duration-300 hover:scale-95"
              variant="outline"
            >
              Nous contacter
            </Button>
          </Link>

          <Link href="#About">
            <Button className="border border-white text-white bg-transparent mt-3 ml-3 hover:bg-white hover:text-black transform transition-transform duration-300 hover:scale-95">
              En savoir plus
            </Button>
          </Link>
        </div>
        <Image
          src={imgHome}
          alt="Image"
          width={1800}
          height={1800}
          className="transform translate-x-[0px] max-[1000px]:w-[400px] max-[400px]:h-auto max-[700px]:hidden"
        />
      </div>
    </div>
  );
}
