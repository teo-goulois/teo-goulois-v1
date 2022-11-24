import Head from "next/head";
import { NextSeo } from "next-seo";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <NextSeo
      title="Téo Goulois"
      description="Bienvenue sur mon portfolio !"
      canonical="https://www.{canonical}.fr/"
    />
      <div className={``}></div>
    </>
  );
}
