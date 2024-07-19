import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../context/global-context";

export default function Form() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const { isModal, setIsModal, setUserName } = useGlobalContext();

	const SendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		//const chat_id = "-1002155393636"; // for telegram channal
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Name:  ${nameValue} \nPhone number: ${phoneValue}`;

		axios({
			url: url,
			method: "POST",
			data: {
				chat_id: chat_id,
				text: messageContent,
			},
		})
			.then(() => {
				setTimeout(() => {
					setIsModal(!isModal);
					setUserName(nameValue);
				}, 1000);
				setNameValue("");
				setPhoneValue("");
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div>
			<form onSubmit={SendMessage} className="flex gap-y-6 flex-col mt-8">
				<input
					required
					type="text"
					value={nameValue}
					autoComplete="off"
					placeholder={t("form_name")}
					onChange={(e) => setNameValue(e.target.value)}
					className="rounded-md bg-black/5 px-3 py-[.6rem]"
				/>
				<input
					required
					type="number"
					value={phoneValue}
					autoComplete="off"
					placeholder="+998-90-123-45-67"
					onChange={(e) => setPhoneValue(e.target.value)}
					className="rounded-md bg-black/5 px-3 py-[.6rem]"
				/>
				<button
					type="submit"
					className="bg-black/80 hover:bg-black/75 hover:scale-105 active:scale-100 transition-all mt-4 rounded-md text-white font-bold py-[.6rem]"
				>
					{loading ? "Sending" : t("form_btn")}
				</button>
			</form>
		</div>
	);
}
