import { HTMLProps, useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import { AlTArrowIco } from "@app/assets/icons";

interface Props extends HTMLProps<HTMLSpanElement> {
  withIco?: boolean;
}

const BadgeShop = ({ className, withIco = false }: Props) => {
  const { t } = useContext(LanguageContext);

  return (
    <span
      className={`${className} inline-flex items-center gap-x-1 rounded-3xl`}
    >
      {t?.banner["shop now" as never]}
      {withIco && <AlTArrowIco />}
    </span>
  );
};

export default BadgeShop;
