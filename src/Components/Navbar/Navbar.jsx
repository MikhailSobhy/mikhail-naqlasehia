import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("dark");
    } else if (!isDark) {
      document.body.classList.add("dark");
    }
  }, [isDark]);
  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 h-[10vh] items-center flex">
        <div className="w-[95%] m-auto md:w-[90%] lg:w-[85%] py-4 flex justify-between">
          <div>
            <Link to={"/"} className="text-black dark:text-white text-lg">
              {t("Products Logo")}
            </Link>
          </div>
          <div className="flex gap-5">
            <button
              className="text-black dark:text-white cursor-pointer"
              onClick={() => i18n.changeLanguage("ar")}
            >
              ar
            </button>
            <button
              className="text-black dark:text-white cursor-pointer"
              onClick={() => i18n.changeLanguage("en")}
            >
              en
            </button>
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? (
                <DarkModeIcon className="text-black" />
              ) : (
                <SunnyIcon className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
