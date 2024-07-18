import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function TypeOfServices() {
	const { t } = useTranslation();

	const insects = [
		{
			title: t("typeof_service_card1.title"),
			description: t("typeof_service_card1.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg",
		},
		{
			title: t("typeof_service_card2.title"),
			description: t("typeof_service_card2.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg",
		},
		{
			title: t("typeof_service_card3.title"),
			description: t("typeof_service_card3.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg",
		},
		{
			title: t("typeof_service_card4.title"),
			description: t("typeof_service_card4.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg",
		},
		{
			title: t("typeof_service_card5.title"),
			description: t("typeof_service_card5.description"),
			img: "https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg",
		},
	];
	return (
		<section>
			<SectionHeading>{t("typeof_service_heading")}</SectionHeading>

			<div className="grid grid-cols-1 gap-8 mt-10 mb-5 md:grid-cols-2 lg:grid-cols-3">
				{insects.map(({ title, description, img }) => (
					<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft ">
						<div
							key={title}
							className="flex flex-col justify-between bg-slate-100 rounded-[15px] p-6"
						>
							<h2 className="font-bold xs:text-[28px] md:text-[32px]">
								{title}
							</h2>
							<p className="font-medium leading-[1.2rem] pt-4 text-black/70 xs:text-lg md:leading-[1.4rem] lg:h-[18vh]">
								{description}
							</p>

							<div className="flex items-end justify-between mt-8 lg:mt-20">
								<Button />
								<img
									alt="КЛАПАЛАР"
									className="w-[5rem] rounded-full xs:w-[8rem]"
									src={img}
								/>
							</div>
						</div>
					</AnimationOnScroll>
				))}
			</div>

			<div className="first-custom-gradient p-5 my-[4rem] rounded-[15px] flex gap-x-[8rem] md:justify-center md:items-center lg:h-[80vh]">
				<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft ">
					<img
						className="h-[70vh] rounded-[15px] hidden lg:block"
						src="https://www.dezinfeksiyatashkent.uz/assets/cleanT-f1a5f564.jpg"
					/>
				</AnimationOnScroll>

				<div className="lg:w-[550px]">
					<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft">
						<img
							src="https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg"
							alt="tick img"
						/>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft">
						<h2 className="mt-2 font-bold text-white xs:text-[26px] xs:leading-[2.9rem] md:text-[34px] md:leading-[3.2rem]">
							{t("typeof_service_h2")}
						</h2>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft">
						<div className="mt-10">
							<Button />
						</div>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
}
