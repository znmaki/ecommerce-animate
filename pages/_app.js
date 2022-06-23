import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>animate | アニメイト通販 | オンラインショップ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
