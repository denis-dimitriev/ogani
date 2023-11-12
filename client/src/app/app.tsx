import "./assets/styles/index.css";
import { Outlet } from "react-router-dom";
import Layout from "layout/layout";
import Header from "@widgets/header";
import Footer from "@widgets/footer";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import Spinner from "@shared/ui/spinner.tsx";

function App() {
  const { loading } = useContext(LanguageContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
