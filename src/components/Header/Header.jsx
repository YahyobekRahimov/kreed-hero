import "./Header.scss";
import Logo from "../../images/Logo.svg?react";
import { Link } from "react-router-dom";
import ButtonCustom from "../Button/Button";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useContext } from "react";
import { ThemeContext } from "@/src/contexts/ThemeContext";
import { Switch } from "../../../components/ui/switch";

function Header() {
   const { t } = useTranslation();
   const { theme, toggleTheme } = useContext(ThemeContext);
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
         <div className="flex flex-col-reverse mr-20 items-center">
            <Switch
               id="darkmode"
               onCheckedChange={toggleTheme}
               className="text-text-primary"
            />
            <label htmlFor="darkmode" className="text-text-primary">
               Dark Mode
            </label>
         </div>
         <LanguageSwitch options={options} />
         <ButtonCustom
            classes="button login-button"
            name="Login"
         ></ButtonCustom>
      </div>
   );
}

export default Header;
