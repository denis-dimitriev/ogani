import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

function Product() {
  const { category } = useParams();
  const currentCategory = category?.replaceAll("-", " ");

  const { t } = useContext(LanguageContext);

  return (
    <div className="container">
      <h2>{t?.categories[currentCategory as never]}</h2>
    </div>
  );
}

export default Product;
