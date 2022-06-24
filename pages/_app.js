import Head from "next/head";
import "../styles/globals.css";
//redux
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>animate | アニメイト通販 | オンラインショップ</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
