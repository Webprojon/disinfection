import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";

export default function FaqPage() {
	const [toggle, setToggle] = useState<number | null>(null);
	const { t } = useTranslation();

	const handleToggle = (id: number | null) => {
		setToggle((prev) => (prev === id ? null : id));
	};

	const faqs = [
		{
			id: 1,
			question: t("faq_question1.question"),
			answer: t("faq_question1.answer"),
		},
		{
			id: 2,
			question: t("faq_question2.question"),
			answer: t("faq_question2.answer"),
		},
		{
			id: 3,
			question: t("faq_question3.question"),
			answer: t("faq_question3.answer"),
		},
	];
	return (
		<section id="faq" className="scroll-mt-24 lg:scroll-mt-40">
			<div className="border-t border-black/30"></div>

			<div className="lg:flex justify-between md:mt-8 lg:h-[45vh]">
				<h2 className="font-bold text-[40px] tracking-wider mb-4">ФАҚ</h2>

				<div className="flex flex-col gap-y-8 lg:gap-y-12">
					{faqs.map(({ id, question, answer }) => (
						<div key={id} className="lg:w-[1100px] lg:pr-5">
							<div className="border-b border-gray-400">
								<div className="flex items-center justify-between pb-4 lg:mb-6">
									<h2
										onClick={() => handleToggle(id)}
										className="text-sm cursor-pointer font-bold text-gray-500 xs:text-[16px] md:text-[20px] lg:text-[26px]"
									>
										{question}
									</h2>
									<div
										onClick={() => handleToggle(id)}
										className="flex justify-center items-center p-1 cursor-pointer rounded-full bg-black/10 xs:p-2"
									>
										<IoChevronDownOutline className="size-5 xs:size-7" />
									</div>
								</div>
								{toggle === id && (
									<p className="text-sm text-gray-500 pb-4 tracking-wider font-medium xs:text-md md:text-lg">
										{answer}
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			<div
				id="contact"
				className="scroll-mt-28 h-[30vh] md:relative md:p-5 md:0 md:my-[6rem] md:h-[40vh] lg:h-[75vh] rounded-[15px] second-custom-gradient"
			>
				<div
					className="md:absolute bg-slate-100  sm:w-[450px] lg:w-[450px] mx-auto mt-[13rem] md:m-0 lg:mt-0 md:left-1/2 lg:left-[30%] top-1/2 md:-translate-x-1/2 -translate-y-1/2 px-[1rem] 
					py-[1.2rem] md:bg-white rounded-[10px]"
				>
					<h2 className="text-[20px] xs:text-[32px] font-bold xs:leading-9">
						{t("faq_h2")}
					</h2>
					<Form />
				</div>

				<img
					alt="cleaner man"
					className="hidden lg:block absolute bottom-0 right-0"
					src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png"
				/>
			</div>
		</section>
	);
}
