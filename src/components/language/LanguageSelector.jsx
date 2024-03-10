import { useTranslation } from "react-i18next";

const languages = [
  { code: "th", lang: "Thailand" },
  { code: "en", lang: "English" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleClickLanguageSelector = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => handleClickLanguageSelector(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
}
