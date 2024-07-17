import SectionHeading from "../components/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

export default function TypeOfServices() {
	useEffect(() => {
		AOS.init({
			duration: 300,
		});
	}, []);
	const { t } = useTranslation();

	const insects = [
		{
			title: t("typeof_service_card1.title"),
			description: t("typeof_service_card1.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg",
		},
		{
			title: t("typeof_service_card2.title"),
			description: t("typeof_service_card1.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg",
		},
		{
			title: t("typeof_service_card3.title"),
			description: t("typeof_service_card1.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg",
		},
		{
			title: t("typeof_service_card4.title"),
			description: t("typeof_service_card1.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg",
		},
		{
			title: t("typeof_service_card5.title"),
			description: t("typeof_service_card1.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg",
		},
	];
	return (
		<section>
			<SectionHeading>{t("typeof_service_heading")}</SectionHeading>

			<div
				data-aos="fade-right"
				data-aos-delay="200"
				data-aos-duration="500"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-5"
			>
				{insects.map(({ title, description, img }) => (
					<div
						key={title}
						className="flex flex-col justify-between bg-slate-100 rounded-[15px] p-5"
					>
						<h2 className="font-bold text-[28px] md:text-[32px]">{title}</h2>
						<p className="font-medium text-lg leading-[1.2rem] md:leading-[1.4rem] pt-4 text-black/70">
							{description}
						</p>

						<div className="flex items-end justify-between mt-16 lg:mt-20">
							<Button />
							<img alt="КЛАПАЛАР" className="w-[8rem] rounded-full" src={img} />
						</div>
					</div>
				))}
			</div>

			<div className="p-5 my-[4rem] lg:h-[80vh] rounded-[15px] flex md:justify-center md:items-center gap-x-[8rem] first-custom-gradient">
				<img
					data-aos="fade-right"
					alt="cleaner"
					className="h-[70vh] rounded-[15px] hidden lg:block"
					src="https://www.dezinfeksiyatashkent.uz/assets/cleanT-f1a5f564.jpg"
				/>

				<div className="lg:w-[550px]">
					<img
						data-aos="fade-right"
						data-aos-delay="200"
						src="https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg"
						alt="tick img"
					/>
					<h2
						data-aos="fade-right"
						data-aos-delay="400"
						className="mt-2 text-[26px] md:text-[34px] leading-[2.9rem] md:leading-[3.2rem] font-bold text-white"
					>
						{t("typeof_service_h2")}
					</h2>

					<div data-aos="fade-right" data-aos-delay="600" className="mt-10">
						<Button />
					</div>
				</div>
			</div>
		</section>
	);
}
