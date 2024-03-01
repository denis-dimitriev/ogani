import "./assets/styles/index.css";
import { Outlet } from "react-router-dom";
import Layout from "layout/layout";
import Header from "@widgets/header";
import Footer from "@widgets/footer";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";
import Spinner from "@shared/ui/spinner.tsx";
import { observer } from "mobx-react-lite";
import MiniCart from "@widgets/mini-cart.tsx";

const App = observer(function () {
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
      <MiniCart />
      <Footer />
    </Layout>
  );
});

export default App;
