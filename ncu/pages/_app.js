import "../styles/reset.css";
import Layout from "./layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&family=Roboto:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </header>
      <Layout style={{ fontFamily: "Roboto" }}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
