import { useTranslation } from "react-i18next";

export default function LangSelect() {
	const { i18n } = useTranslation();
	const languages =
		typeof window !== "undefined"
			? localStorage.getItem("i18nextLng") || "uz"
			: "uz";

	const handlechange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = event.target.value;
		console.log(selectedLanguage);
		i18n.changeLanguage(selectedLanguage);
		localStorage.setItem("i18nextLng", selectedLanguage);
	};

	return (
		<select
			onChange={handlechange}
			value={languages}
			name="languagechanger"
			className="font-bold text-[#666666] bg-transparent cursor-pointer border-2 border-[#666666] px-2 py-[4px] md:p-2 rounded-xl"
		>
			<option value="uz">Ўзбекча</option>
			<option value="ru">Русский</option>
		</select>
	);
}
