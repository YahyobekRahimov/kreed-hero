import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
   en: {
      translation: {
         "header_nav1": "Home",
         "header_nav2": "About us",
         "header_nav3": "How it works",
         "header_nav4": "Services",
         "header_nav5": "Contact",
         "login": "Login",
         "hero_title": "Easy payment for any business",
         "hero_description":
            "For ambitious companies around the world, wallet makes moving money as simple, borderless and programmable as the rest of the internet.",
         "get_started": "Get started",
      },
   },
   ru: {
      translation: {
         "header_nav1": "Главная",
         "header_nav2": "О нас",
         "header_nav3": "Как это работает",
         "header_nav4": "Услуги",
         "header_nav5": "Контакты",
         "login": "Войти",
         "hero_title": "Простые платежи для любого бизнеса",
         "hero_description":
            "Для амбициозных компаний по всему миру, кошелек делает передвижение денег таким же простым, безграничным и программированным, как и остальная часть интернета.",
         "get_started": "Начать",
      },
   },
   uz: {
      translation: {
         "header_nav1": "Bosh sahifa",
         "header_nav2": "Biz haqimizda",
         "header_nav3": "Qanday ishlaydi",
         "header_nav4": "Xizmatlar",
         "header_nav5": "Aloqa",
         "login": "Kirish",
         "hero_title": "Ishni rivojlantirish uchun oson to'lov",
         "hero_description":
            "Ambitsiyali kompaniyalar uchun, jahon bo'ylab hisob-kitob olib tashlash, qo'g'irchoq va boshqa internet qismi kabi oson, cheklangan va dasturlanadigan bo'lib yuboradi.",
         "get_started": "Boshlash",
      },
   },
};

i18n.use(initReactI18next).init({
   resources,
   lng: "en",
   interpolation: {
      escapeValue: false,
   },
});
export default i18n;
