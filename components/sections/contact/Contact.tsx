import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { CopyToClipboard } from "react-copy-to-clipboard";
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

const Contact = () => {
  return (
    <section
      data-scroll-section
      id="contact"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8`}
    >
      <Title number={"04"} title={"contactez moi"} />

      <p className="text-md font-semibold text-light-gray">
        Je suis actuellement à la recherche d&apos;une alternance !
        n&apos;ésitez pas à me contacter sur mes différents résaux.
      </p>

      <div className="flex flex-col gap-8 items-start justify-start w-full text-lg relative overflow-ellipsis">
        {/* Email*/}
        <CopyToClipboard text={"teo.goulois.dev@gmail.com"} onCopy={() => alert("✔️ copié")}>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="h-8 w-8">
              <EmailIcon />
            </div>
            <p className="">teo.goulois.dev@gmail.com</p>
          </div>
        </CopyToClipboard>

        {/* Linkedin */}
        <Link
          target={"_blank"}
          href={"https://www.linkedin.com/in/t%C3%A9o-goulois-89a3bb222/"}
          className="flex items-center justify-start gap-4 w-fit "
        >
          <div className="h-8 w-8">
            <LinkedinIcon />
          </div>
          <p className="">Téo Goulois | LinkedIn</p>
        </Link>

        {/* Github */}
        <Link
          target={"_blank"}
          href={"https://github.com/teo-goulois"}
          className="flex items-center gap-4 w-fit"
        >
          <div className="h-8 w-8">
            <GithubIconOutline />
          </div>
          <p className="">teo-goulois (github.com)</p>
        </Link>

        {/* CV */}
        <Link
          href={"/pdf/CV_GOULOIS_Téo_web_développeur.pdf"}
          target="_blank"
          className="flex items-center gap-4  w-fit"
        >
          <div className="h-8 w-8">
            <CvIcon />
          </div>
          <p className="">Téo Goulois</p>
        </Link>
      </div>

      <div className="flex items-center mt-auto ">
        <p className="text-2xl lg:text-4xl gradient font-bold uppercase ">
          Bye
        </p>
        <div className="h-16 aspect-square relative">
          <Image src={PeaceImg} alt="peace" fill />
        </div>
      </div>
    </section>
  );
};

export default Contact;
