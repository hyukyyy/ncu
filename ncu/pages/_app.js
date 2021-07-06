import { GoogleFonts } from "next-google-fonts";
import "../styles/reset.css";
import Layout from "./layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
