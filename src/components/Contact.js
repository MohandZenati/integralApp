"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import iconContact1 from "@/img/icon-contact-1.png";
import iconContact2 from "@/img/icon-contact-2.png";
import iconMail from "@/img/icon-mail.png";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" ou "error"

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nt2yr59", 
        "template_xnaglo3", 
        formData,
        "gCmrGSQJ9bpn9Ksgw",
        {
          firstname: formData.firstname,
          name: formData.name,
          email: formData.email, 
          phone: formData.phone,
          message: formData.message,
          to_email: "contact@integralvtc.com", 
        }
      )
      .then(
        (result) => {
          setMessageType("success");
          setConfirmationMessage("✅ Message envoyé avec succès !");
        
          setFormData({
            firstname: "",
            name: "",
            email: "",
            phone: "",
            message: "",
          });

       
          setTimeout(() => {
            setConfirmationMessage("");
            setMessageType("");
          }, 5000);
        },
        (error) => {
          setMessageType("error");
          setConfirmationMessage("❌ Une erreur s'est produite. Veuillez réessayer.");

         
          setTimeout(() => {
            setConfirmationMessage("");
            setMessageType("");
          }, 5000);
        }
      );
  };

  return (
    <div id="Contact" className="relative section-spacing">
      <h1 className="text-[#151515] text-start pl-10 text-4xl font-bold max-[800px]:pl-0 mb-5 text-center">
        Nous contacter
      </h1>
      <div className="flex max-[800px]:flex-col">
        <form className="flex flex-row w-[100%]" onSubmit={sendEmail}>
          <div className="w-full p-10 max-[800px]:p-0 mb-5">
            <h3 className="text-2xl font-700">Écrivez-nous</h3>
            <div className="flex flex-row gap-2 pt-5">
              <div className="grid w-full max-w items-center gap-1.5">
                <label htmlFor="firstname">Prénom*</label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid w-full max-w items-center gap-1.5">
                <label htmlFor="name">Nom*</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="grid w-full max-w items-center gap-1.5 mt-2">
              <label htmlFor="email">E-Mail*</label>
              <Input
                type="email"
                id="email"
                placeholder="Email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full max-w items-center gap-1.5 mt-2">
              <label htmlFor="phone">Téléphone</label>
              <Input
                type="number"
                id="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full max-w items-center gap-1.5 mt-2">
              <label htmlFor="message">Écrivez votre message</label>
              <Textarea
                id="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Message de validation sous le bouton */}
            {confirmationMessage && (
              <p
                className={`mt-3 text-sm transition-opacity duration-300 ${
                  messageType === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {confirmationMessage}
              </p>
            )}

            {/* Bouton Envoyer */}
            <Button
              type="submit"
              className="bg-[#151515] mt-3 transform transition-transform duration-300 hover:scale-95"
            >
              Envoyer
            </Button>
          </div>
        </form>

        <div className="relative w-[40%] h-[30%] bg-[#151515] p-10 max-[800px]:w-[100%] mb-10">
          <div className="absolute top-0 right-[-2px] w-[70px] h-[10px] inclined-blockk"></div>
          <div className="absolute left-0 bottom-0 w-[70px] h-[4px] inclined-blockk rotate-180"></div>

          <h3 className="text-white text-2xl font-700">Information de contact</h3>
          <ul className="space-y-2 pt-10 text-white">
            <li className="flex items-center justify-start gap-2">
              <Image src={iconContact1} alt="Logo" height={20} width={20} />
              <span className="text-1xl">integralVTC</span>
            </li>
            <li className="flex items-center justify-start gap-2 pt-7">
              <Image src={iconContact2} alt="Logo" height={20} width={20} />
              <span className="text-1xl">07 56 90 45 99</span>
            </li>
            <li className="flex items-center justify-start gap-2 pt-7">
              <Image src={iconMail} alt="Logo" height={20} width={20} />
              <span className="text-1xl">contact@integralvtc.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
