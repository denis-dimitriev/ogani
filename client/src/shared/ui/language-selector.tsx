import mdFlag from "@app/assets/img/md-flag.png";
import ruFlag from "@app/assets/img/ru-flag.png";
import { IoIosArrowDown } from "react-icons/io";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

function LanguageSelector() {
  const { t, language, setLanguage } = useContext(LanguageContext);

  function setLangToRU() {
    setLanguage("ru");
  }

  function setLangToRO() {
    setLanguage("ro");
  }

  return (
    <div
      className="group relative
            flex cursor-pointer items-center gap-x-2 p-1"
    >
      {language === "ro" ? (
        <span className="flex items-center gap-x-1">
          <img className="" src={mdFlag} alt="" />
          {t?.common["native language"]}
        </span>
      ) : (
        <span className="flex items-center  gap-x-1">
          <img className="" src={ruFlag} alt="" />
          {t?.common["native language"]}
        </span>
      )}

      <div
        className="invisible absolute left-0 top-[30px] rounded bg-[--light] p-1 opacity-0
               transition duration-300
               group-hover:visible group-hover:opacity-100"
      >
        <ul className="flex flex-col gap-3">
          {language !== "ro" ? (
            <li>
              <button
                className="flex items-center gap-x-1"
                onClick={setLangToRO}
              >
                <img className="" src={mdFlag} alt="" />
                {t?.common["native language"]}
              </button>
            </li>
          ) : (
            <li>
              <button
                className="flex items-center gap-x-1"
                onClick={setLangToRU}
              >
                <img className="" src={ruFlag} alt="" />
                {t?.common["native language"]}
              </button>
            </li>
          )}
        </ul>
      </div>

      <IoIosArrowDown className="mt-1 text-xs" />
    </div>
  );
}

export default LanguageSelector;
