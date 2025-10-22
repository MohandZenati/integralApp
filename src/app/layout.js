import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";


const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={outfit.className}> {/* Applique la police ici */}
        <Navbar />
        {children} {/* Important pour afficher les pages */}
        <Footer />
      </body>
    </html>
  );
}
