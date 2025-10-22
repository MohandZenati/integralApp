import Image from "next/image";
import logo from "@/img/logo.png"; // Importer l'image depuis src
import iconContact1 from "@/img/icon-contact-1.png";
import iconContact2 from "@/img/icon-contact-2.png";
import Link from "next/link";
import iconMail from "@/img/icon-mail.png";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white py-8">
      <div className="section-spacing">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center ">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </div>

          {/* Navigation et Contact */}
          <div className="flex flex-col md:flex-row justify-between gap-30 w-[55%]">
            {/* Navigation */}
            <div className="text-center md:text-left max-[800px]:text-start pt-10">
              <h3 className="font-bold text-lg mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#Header" className="hover:underline">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/#About" className="hover:underline">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/#Recrutement" className="hover:underline">
                    Recrutement
                  </Link>
                </li>
                <li>
                  <Link href="/#Contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="max-[800px]:text-start pt-10">
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Image src={iconContact1} alt="Logo" height={20} width={20} />
                  <span className="text-1xl">integralVTC</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={iconContact2} alt="Logo" height={20} width={20} />
                  <span className="text-1xl">07 56 90 45 99</span>
                </li>
                <li className="flex items-center gap-2">
                 <Image src={iconMail} alt="Logo" height={20} width={20} />
                           <span className="text-1xl">contact@integralvtc.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mentions légales et copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
          <p>
            © 2025 INTEGRAL VTC -{" "}
            <Link href="/legal" className="underline" prefetch={false}>
              Mentions légales
              </Link>{" "}
            - Conçu par{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}