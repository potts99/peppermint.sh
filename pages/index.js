import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: peppermint.sh"
        description="Welcome to peppermint.sh, open source ticket management that doesnt break the bank."
        canonical="https://peppermint.sh/"
        openGraph={{
          url: "https://peppermint.sh/",
        }}
      />
      <Head>
        <title>peppermint.sh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
