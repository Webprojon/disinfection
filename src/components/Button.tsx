import { useTranslation } from "react-i18next";

export default function Button() {
	const { t } = useTranslation();

	return (
		<button className="text-lg text-white px-8 py-[.6rem] font-semibold tracking-widest rounded-[19px] bg-[#3360FF]">
			<a href="#contact">{t("btn")}</a>
		</button>
	);
}
