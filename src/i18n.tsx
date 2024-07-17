import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslation from "../public/locales/uz.json";
import ruTranslation from "../public/locales/ru.json";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

const language =
	typeof window !== "undefined"
		? localStorage.getItem("i18nextLng") || "uz"
		: "uz";

i18n
	.use(Backend)
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "uz",
		lng: language,
		debug: true,
		resources: {
			uz: { translation: uzTranslation },
			ru: { translation: ruTranslation },
		},
	});

export default i18n;
