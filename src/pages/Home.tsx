import { useEffect } from "react";
import handImg from "../assets/Images/Group 1000004543.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { useGlobalContext } from "../context/global-context";
import Modal from "../components/Modal";

export default function Home() {
	const { t } = useTranslation();
	const { isModal } = useGlobalContext();

	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<section id="main" className="scroll-mt-40 mt-4 lg:mt-6">
			{isModal ? <Modal /> : ""}

			<div className="relative lg:flex items-start justify-between">
				<div
					className="relative z-10 w-full h-[40vh] sm:h-[55vh] md:h-[50vh] bg-black/50 p-4 md:p-7 lg:p-0 md:text-center lg:text-left rounded-[15px] 
				lg:bg-transparent lg:w-[700px]"
				>
					<h1
						className="animate__animated animate__bounceInLeft text-white text-[45px] sm:text-[60px] md:text-[90px] leading-[3rem] lg:text-[#3360FF]
					 lg:text-[95px] md:leading-[5rem] lg:leading-[6rem] font-semibold"
					>
						{t("home_h2")}
					</h1>

					<div className="flex">
						<p
							className="animate__animated animate__bounceInLeft text-white lg:text-[#666666] font-medium pt-4 lg:pt-10 text-sm md:text-xl 
						tracking-wider md:pt-10 md:leading-8"
						>
							{t("home_p")}
						</p>
						<img src={handImg} alt="img" className="hidden lg:block" />
					</div>

					<div className="mt-7 md:mt-10 lg:mt-6">
						<Button />
					</div>
				</div>

				<div className="w-full absolute top-0 left-0 lg:relative z-0 lg:w-[750px] md:h-[50vh] lg:h-[80vh]">
					<img
						alt="dezinfeksiyatashkent hero img"
						src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
						className="rounded-[15px] w-full h-[40vh] sm:h-[55vh] md:h-full"
					/>
				</div>
			</div>
		</section>
	);
}
