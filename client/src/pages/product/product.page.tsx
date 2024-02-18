import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";

function ProductPage() {
  const { product } = useParams();

  const { t } = useContext(LanguageContext);

  return (
    <div className="container">
      <h2>Product page</h2>
    </div>
  );
}

export default ProductPage;
