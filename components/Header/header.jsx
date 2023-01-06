import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import  { i18n } from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
const Header = () => {
  const router = useRouter();
const t = useTranslation()
  const handleLocaleChange = (event) => {
    console.log(t);
    const value =event.target.value ;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <header>
        <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">Eng</option>
        <option value="uz">UZB</option>
        <option value="ru">RUSS</option>
      </select>
    </header>
  );
};

export default Header;