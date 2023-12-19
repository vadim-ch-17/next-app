import React from "react";
import Head from "next/head";
import { Roboto } from "next/font/google";
import { metadata } from "./metadata";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={`${roboto.className} layout`}>{children}</div>
    </>
  );
};

export default Layout;
