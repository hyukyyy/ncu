import { useRouter } from "next/router";
import "../styles/reset.css";
import Layout from "./layout/Layout";
import Login from "./Login";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&family=Roboto:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </header>

      {router.pathname === "/login" ? (
        <Login />
      ) : (
        <Layout style={{ fontFamily: "Roboto" }}>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
