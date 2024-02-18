import "./assets/styles/index.css";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "layout/layout";
import Header from "@widgets/header";
import Footer from "@widgets/footer";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@context/language.context.ts";
import Spinner from "@shared/ui/spinner.tsx";
import { observer } from "mobx-react-lite";
import { CategoriesMenuContext } from "@context/categories-menu.context.ts";
import { LINKS } from "@shared/types/enums/links.ts";

const App = observer(function () {
  const { loading } = useContext(LanguageContext);
  const { setOpen } = useContext(CategoriesMenuContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === LINKS.HOME) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location, setOpen]);

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
});

export default App;
