import mdFlag from "@app/assets/img/md-flag.png";
import ruFlag from "@app/assets/img/ru-flag.png";
import { ArrowIco } from "@app/assets/icons";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  function setLangToRU() {
    setLanguage("ru");
  }

  function setLangToRO() {
    setLanguage("ro");
  }

  return (
    <div
      className="group relative
           flex cursor-pointer items-center gap-x-1 p-1"
    >
      {language === "ro" ? (
        <span className="flex items-center gap-x-1">
          <img className="" src={mdFlag} alt="" />
          Română
        </span>
      ) : (
        <span className="flex items-center  gap-x-1">
          <img className="" src={ruFlag} alt="" />
          Русский
        </span>
      )}

      <div
        className="invisible absolute left-0 right-0 top-[30px] z-[99] translate-y-1/2
        rounded bg-[--darkest] text-[--white] shadow-lg transition
        duration-300 group-hover:visible  group-hover:translate-y-0"
      >
        <ul className="p-2">
          {language !== "ro" ? (
            <li>
              <button
                className="cursor-pointer px-1 transition hover:text-[--teal]"
                onClick={setLangToRO}
              >
                Română
              </button>
            </li>
          ) : (
            <li>
              <button
                className="cursor-pointer px-1 transition hover:text-[--teal]"
                onClick={setLangToRU}
              >
                Русский
              </button>
            </li>
          )}
        </ul>
      </div>

      <ArrowIco className="h-[16px] w-[16px]" />
    </div>
  );
}

export default LanguageSelector;
