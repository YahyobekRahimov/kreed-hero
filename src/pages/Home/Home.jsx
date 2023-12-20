import "./Home.scss";
import Button from "../../components/Button/Button";
import heroImg from "../../images/hero-img.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Home() {
   const { t } = useTranslation();
   return (
      <div className="container home__container">
         <div className="home__left-side">
            <h1 className="home__title">{t("hero_title")}</h1>
            <p className="home__description">
               {t("hero_description")}
            </p>
            <Button
               classes="button get-started-button"
               name={t("get_started")}
            />
         </div>
         <img src={heroImg} alt="Decorative image" />
      </div>
   );
}

export default Home;
