import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Components
import Title from "../Title";
// Icons
import EmailIcon from "../../../assets/icons/EmailIcon";
import LinkedinIcon from "../../../assets/icons/LinkedinIcon";
import GithubIconOutline from "../../../assets/icons/GithubIconOutline";
import CvIcon from "../../../assets/icons/CvIcon";
// Image
import PeaceImg from "../../../assets/images/peace.png";
// Utils
import { copyToClipboard } from "../../../utils/copyToClipboard";

const Contact = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("change");
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [open]);

  return (
    <section
      id="contact"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8`}
    >
      <Title number={"04"} title={"contactez moi"} />

      <p className="text-2xl font-Lexend font-semibold text-light-gray">
        Disponible pour tout type de projects contactez moi pour en parler
      </p>

      <div className="flex flex-col gap-8 self-start">
        {/* Email */}
        <button
          onClick={() =>
            copyToClipboard("teogoulois@gmail.com", () => {
              setOpen(true);
            })
          }
          type="button"
          className="flex items-center gap-4 text-2xl relative"
        >
          <div className="h-8 w-8">
            <EmailIcon />
          </div>
          <p className="">teo.goulois.dev@gmail.com</p>
          <div
            onClick={(e) => e.stopPropagation()}
            className={` absolute -right-4 translate-x-full cursor-default border border-gray bg-bg text-sm p-2 rounded font-Lexend font-light ${
              open ? "flex opacity-100" : " opacity-0"
            } transition-opacity`}
          >
            ✔️ copier
          </div>
        </button>

        {/* Linkedin */}
        <Link
          target={"_blank"}
          href={"https://www.linkedin.com/in/t%C3%A9o-goulois-89a3bb222/"}
          className="flex items-center gap-4 text-2xl w-fit "
        >
          <div className="h-8">
            <LinkedinIcon />
          </div>
          <p className="">Téo Goulois | LinkedIn</p>
        </Link>

        {/* Github */}
        <Link
          target={"_blank"}
          href={"https://github.com/teo-goulois"}
          className="flex items-center gap-4 text-2xl w-fit"
        >
          <div className="h-8">
            <GithubIconOutline />
          </div>
          <p className="">teo-goulois (github.com)</p>
        </Link>

        {/* CV */}
        <Link
          href={"/pdf/CV_GOULOIS_Téo_web_développeur.pdf"}
          target="_blank"
          className="flex items-center gap-4 text-2xl w-fit"
        >
          <div className="h-8">
            <CvIcon />
          </div>
          <p className="">Téo Goulois</p>
        </Link>
      </div>

      <div className="flex items-center mt-auto ">
        <p className="font-Lexend text-2xl">Bye</p>
        <div className="h-16 aspect-square relative">
          <Image src={PeaceImg} alt="peace" fill />
        </div>
      </div>
    </section>
  );
};

export default Contact;
