import "./Header.scss";
import Logo from "../../images/Logo.svg?react";
import { Link } from "react-router-dom";
import ButtonCustom from "../Button/Button";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { Button, ButtonGroup } from "@nextui-org/react";

function Header() {
   const { t } = useTranslation();
   const navList = [
      {
         name: "Home",
         path: "/",
      },
      {
         name: "About us",
         path: "/about",
      },
      {
         name: "How it works",
         path: "/how-it-works",
      },
      {
         name: "Services",
         path: "/services",
      },
      {
         name: "Contact",
         path: "/contact",
      },
   ];
   const options = [
      {
         name: "Uzbek",
         value: "uz",
      },
      {
         name: "Russian",
         value: "ru",
      },
      {
         name: "English",
         value: "en",
      },
   ];
   const mappedNavList = navList.map((navItem, index) => {
      return (
         <li key={index}>
            <Link to={navItem.path}>{navItem.name}</Link>
         </li>
      );
   });
   function handleLanguageSwitch() {}
   return (
      <div className="container header__container">
         <div className="logo-wrapper">
            <Logo />
         </div>
         <nav>
            <ul className="header__nav-list">{mappedNavList}</ul>
         </nav>
         <LanguageSwitch options={options} />
         <Button>Next UI button</Button>
         <ButtonCustom
            classes="button login-button"
            name="Login"
         ></ButtonCustom>
      </div>
   );
}

export default Header;
