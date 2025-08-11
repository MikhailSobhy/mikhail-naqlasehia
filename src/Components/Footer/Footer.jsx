import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 h-[10vh] items-center flex border-t-1">
        <div className="w-[95%] m-auto md:w-[90%] lg:w-[85%] py-4 flex justify-between text-black dark:text-white ">
          <div className="flex gap-5">
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a href="https://www.x.com">
              <TwitterIcon />
            </a>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link>{t("Home")}</Link>
              </li>
              <li>
                <Link>{t("About")}</Link>
              </li>
              <li>
                <Link>{t("Contact Us")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
