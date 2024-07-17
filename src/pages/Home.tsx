import { useEffect } from "react";
import handImg from "../assets/Images/Group 1000004543.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

export default function Home() {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<section id="main" className="scroll-mt-40">
			<div className="relative md:flex justify-between">
				<div className="relative z-10 w-full h-[50vh] sm:h-[65vh] bg-black/40 p-4 rounded-[15px] md:bg-transparent md:w-[700px] lg:mt-10">
					<h1 className="animate__animated animate__bounceInLeft text-white text-[45px] sm:text-[60px] leading-[3rem] md:text-[#3360FF] lg:text-[95px] md:leading-[4rem] lg:leading-[6rem] font-semibold">
						{t("home_h2")}
					</h1>

					<div className="flex">
						<p className="animate__animated animate__bounceInLeft text-white md:text-[#666666] font-medium pt-4 lg:pt-10 text-sm md:text-lg tracking-wider md:leading-8">
							{t("home_p")}
						</p>
						<img src={handImg} alt="img" className="hidden lg:block" />
					</div>

					<div data-aos="fade-right" className="mt-5">
						<Button />
					</div>
				</div>

				<div className="w-full absolute top-0 left-0 md:relative z-0 lg:w-[750px] md:h-[60vh] lg:h-[80vh]">
					<img
						alt="dezinfeksiyatashkent hero img"
						src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
						className="rounded-[15px] w-full sm:h-[65vh] h-[50vh] md:h-full"
					/>
				</div>
			</div>
		</section>
	);
}
