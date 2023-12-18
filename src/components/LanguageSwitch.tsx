import { useTranslation } from "react-i18next";
import { uselanguageDirection } from "../hooks/useLanguageDirection";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  /* We can create a file containing supported languages and calling it here*/
  const languages = [
    {
      lable: "English",
      value: "en",
    },
    {
      lable: "Arabic",
      value: "ar",
    },
  ];

  /* change the page direction based on language */
  uselanguageDirection();

  return (
    <div>
      <select
        defaultValue={i18n.language}
        onChange={(e) => {
          let element = e.target as HTMLSelectElement;
          i18n.changeLanguage(element.value);
        }}
      >
        {languages.map((language, index) => {
          return (
            <option key={index} value={language.value}>
              {language.lable}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageSwitch;
