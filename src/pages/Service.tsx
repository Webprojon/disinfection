import SectionHeading from "../components/SectionHeading";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";

export default function Service() {
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
		<section id="serv" className="scroll-mt-24 lg:scroll-mt-40">
			<SectionHeading>{t("service_heading")}</SectionHeading>
			<p className="text-[#666] mt-2 xs:text-lg sm:text-xl">
				{t("service_text")}
			</p>

			<div className="flex flex-col gap-y-7 my-10">
				{contents.map(({ title, description, imgUrl }) => (
					<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft ">
						<div
							key={title}
							className="md:flex items-center border-2 border-gray-400 p-5 rounded-[20px] md:gap-x-12 lg:gap-x-[7rem] lg:px-16 lg:py-5"
						>
							<img
								alt="insects"
								className="w-[150px] mx-auto xs:w-[170px] md:w-[260px]"
								src={imgUrl}
							/>
							<div>
								<h2 className="text-black/70 font-bold xs:leading-9 xs:text-[20px] md:text-[30px] mt-8 md:leading-10 lg:text-[36px]">
									{title}
								</h2>
								<p className="font-medium pt-4 leading-5 text-[#666]">
									{description}
								</p>
							</div>
						</div>
					</AnimationOnScroll>
				))}
			</div>
		</section>
	);
}
