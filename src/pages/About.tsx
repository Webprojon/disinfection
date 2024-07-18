import SectionHeading from "../components/SectionHeading";
import { PiMedal } from "react-icons/pi";
import { MdOutlineHandshake } from "react-icons/md";
import bgImg from "../assets/Images/disinfection-sanitization-spraying-900x450.png";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function About() {
	useEffect(() => {
		AOS.init({});
	}, []);
	const { t } = useTranslation();

	const items = [
		{
			icon: (
				<AiOutlineThunderbolt className="size-10 xs:size-14 xs:mb-3 text-[#3360FF]" />
			),
			title: t("about_card1.title"),
			description: t("about_card1.description"),
		},
		{
			icon: <PiMedal className="size-10 xs:size-14 xs:mb-3 text-[#3360FF]" />,
			title: t("about_card2.title"),
			description: t("about_card2.description"),
		},
		{
			icon: (
				<MdOutlineHandshake className="size-10 xs:size-14 xs:mb-3 text-[#3360FF]" />
			),
			title: t("about_card3.title"),
			description: t("about_card3.description"),
		},
	];

	return (
		<section id="about" className="scroll-mt-24 lg:scroll-mt-40">
			<SectionHeading>{t("about_heading")}</SectionHeading>
			<div className="border-t mt-4 border-black/30"></div>
			<div className="mt-10 mb-16 grid grid-cols-1 gap-y-5 lg:grid-cols-3">
				{items.map(({ icon, title, description }) => (
					<AnimationOnScroll animateIn="animate__animated animate__bounceInLeft">
						<div
							key={title}
							className="border-2 lg:border-none rounded-lg p-4 md:bottom-0 flex flex-col justify-center"
						>
							{icon}
							<h2 className="font-bold text-[18px] xs:text-[28px] leading-9 my-3">
								{title}
							</h2>
							<p className="font-medium text-[12px] xs:text-md md:text-[16px] text-[#666666] xs:leading-7">
								{description}
							</p>
						</div>
					</AnimationOnScroll>
				))}
			</div>

			<div className="relative xs:h-[41vh] md:h-[40vh] lg:h-[80vh] mb-4">
				<img
					src={bgImg}
					alt="bg img"
					className="w-full h-full object-cover rounded-[20px] absolute top-0 left-0 z-0"
				/>
				<div className="relative xs:h-[41vh] md:h-[40vh] lg:h-[80vh] flex flex-col justify-center items-end z-10 bg-black/50 p-4 rounded-[20px]">
					<div className="lg:absolute right-[19rem] top-[7rem] text-white md:w-[430px]">
						<AnimationOnScroll animateIn="animate__animated animate__bounceInRight">
							<h2 className="text-[17px] xs:text-[24px] md:text-[43px] font-bold md:leading-[3rem] tracking-wider">
								{t("about_h2")}
							</h2>
						</AnimationOnScroll>

						<AnimationOnScroll animateIn="animate__animated animate__bounceInRight">
							<p className="text-sm xs:text-md mt-4">{t("about_p")}</p>
						</AnimationOnScroll>

						<AnimationOnScroll animateIn="animate__animated animate__bounceInRight">
							<div className="mt-5 sm:mt-10">
								<Button />
							</div>
						</AnimationOnScroll>
					</div>
				</div>
			</div>
		</section>
	);
}
