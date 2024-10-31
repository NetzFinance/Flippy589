"use client";
import Head from "next/head";
import Script from "next/script";

export function NextHead() {
  return (
    <Head>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
    </Head>
  );
}
