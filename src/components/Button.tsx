import { useTranslation } from "react-i18next";

export default function Button() {
	const { t } = useTranslation();

	return (
		<a href="#contact">
			<button
				className="text-lg text-white px-3 py-1 xs:px-8 xs:py-[.6rem] font-semibold tracking-widest rounded-xl bg-[#3360FF]
		hover:bg-sky-600 hover:scale-105 active:scale-100 transition-all"
			>
				{t("btn")}
			</button>
		</a>
	);
}
