import Layout from "@/components/Layout";
import "../app/style.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}
