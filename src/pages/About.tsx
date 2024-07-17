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

export default function About() {
	useEffect(() => {
		AOS.init({});
	}, []);
	const { t } = useTranslation();

	const items = [
		{
			icon: <AiOutlineThunderbolt className="size-14 mb-3 text-[#3360FF]" />,
			title: t("about_card1.title"),
			description: t("about_card1.description"),
		},
		{
			icon: <PiMedal className="size-14 mb-3 text-[#3360FF]" />,
			title: t("about_card2.title"),
			description: t("about_card2.description"),
		},
		{
			icon: <MdOutlineHandshake className="size-16 mb-3 text-[#3360FF]" />,
			title: t("about_card3.title"),
			description: t("about_card3.description"),
		},
	];

	return (
		<section id="about" className="scroll-mt-40">
			<SectionHeading>{t("about_heading")}</SectionHeading>
			<div className="border-t mt-4 border-black/30"></div>

			<div className="mt-10 mb-16 grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
				{items.map(({ icon, title, description }) => (
					<div
						key={title}
						className="animate__animated animate__bounceInLeft border-2 md:border-none rounded-lg p-4 md:bottom-0 lg:w-[340px] flex flex-col justify-center"
					>
						{icon}
						<h2 className="font-bold text-[28px] leading-9 my-3">{title}</h2>
						<p className="font-medium text-[#666666] leading-7">
							{description}
						</p>
					</div>
				))}
			</div>

			<div className="relative h-[70vh] lg:h-[80vh] mb-4">
				<img
					src={bgImg}
					alt="bg img"
					className="w-full h-full object-cover rounded-[20px] absolute top-0 left-0 z-0"
				/>
				<div className="relative h-[70vh] lg:h-[80vh] flex flex-col justify-center items-end z-10 bg-black/40 p-4 rounded-[20px]">
					<div className="md:absolute right-[19rem] top-[7rem] text-white md:w-[430px]">
						<h2
							data-aos="fade-left"
							data-aos-delay="100"
							className="text-[32px] md:text-[43px] font-bold md:leading-[3rem] tracking-wider"
						>
							{t("about_h2")}
						</h2>
						<p data-aos="fade-left" data-aos-delay="300" className="mt-4">
							{t("about_p")}
						</p>
						<div data-aos="fade-left" data-aos-delay="500" className="mt-12">
							<Button />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
