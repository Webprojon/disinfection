import SectionHeading from "../components/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Service() {
	useEffect(() => {
		AOS.init({
			duration: 100,
		});
	}, []);
	const { t } = useTranslation();

	const contents = [
		{
			title: t("service_card1.title"),
			description: t("service_card1.description"),
			imgUrl:
				"https://www.dezinfeksiyatashkent.uz/assets/dizinfeksiya-52660f2d.png",
		},
		{
			title: t("service_card2.title"),
			description: t("service_card2.description"),
			imgUrl:
				"https://www.dezinfeksiyatashkent.uz/assets/dezinyeksiya-bea8e70f.png",
		},
		{
			title: t("service_card3.title"),
			description: t("service_card3.description"),
			imgUrl:
				"https://www.dezinfeksiyatashkent.uz/assets/derazatsiya-83b522bf.png",
		},
	];
	return (
		<section id="serv" className="scroll-mt-40">
			<SectionHeading>{t("service_heading")}</SectionHeading>
			<p className="text-[#666] text-lg mt-2">{t("service_text")}</p>

			<div className="flex flex-col gap-y-7 my-10">
				{contents.map(({ title, description, imgUrl }) => (
					<div
						key={title}
						data-aos="fade-right"
						className="md:flex items-center md:gap-x-12 lg:gap-x-[7rem] border-2 border-gray-400 p-5 lg:px-16 lg:py-5 rounded-[20px]"
					>
						<img
							alt="insects"
							className="w-[170px] md:w-[260px] mx-auto"
							src={imgUrl}
						/>
						<div>
							<h2 className="text-[22px] md:text-[30px] text-black/70 lg:text-[36px] leading-9 mt-8 md:leading-10 font-bold">
								{title}
							</h2>
							<p className="font-medium pt-4 leading-5 text-[#666]">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
