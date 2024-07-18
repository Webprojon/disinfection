import handImg from "../assets/Images/Group 1000004543.png";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { useGlobalContext } from "../context/global-context";
import Modal from "../components/Modal";

export default function Home() {
	const { t } = useTranslation();
	const { isModal } = useGlobalContext();
	return (
		<section id="main" className="scroll-mt-24 mt-4 lg:scroll-mt-40 lg:mt-6">
			{isModal ? <Modal /> : ""}

			<div className="relative lg:flex items-start justify-between">
				<div
					className="relative z-10 w-full h-[45vh] bg-black/50 p-4 rounded-[15px] 
				xs:h-[45vh] sm:h-[55vh]
				md:text-center md:h-[50vh] md:p-7
				lg:bg-transparent lg:w-[700px] lg:p-0 lg:text-left"
				>
					<h1
						className="animate__animated animate__bounceInLeft font-semibold text-white text-[30px] leading-[2rem] lg:text-[#3360FF]
						xs:text-[35px] sm:text-[60px]
						md:text-[90px] md:leading-[5rem]
						lg:text-[95px] lg:leading-[6rem]"
					>
						{t("home_h2")}
					</h1>

					<div className="flex">
						<p
							className="animate__animated animate__bounceInLeft text-white font-medium pt-4 text-sm tracking-wider 
						md:text-xl md:pt-10 md:leading-8 lg:text-[#666666] lg:pt-10"
						>
							{t("home_p")}
						</p>
						<img src={handImg} alt="img" className="hidden lg:block" />
					</div>

					<div className="animate__animated animate__bounceInLeft mt-4 md:mt-10 lg:mt-6">
						<Button />
					</div>
				</div>

				<div className="w-full absolute top-0 left-0 z-0 md:h-[50vh] lg:relative lg:w-[750px] lg:h-[80vh]">
					<img
						alt="dezinfeksiyatashkent hero img"
						src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
						className="rounded-[15px] w-full h-[45vh] xs:h-[45vh] sm:h-[55vh] md:h-full"
					/>
				</div>
			</div>
		</section>
	);
}
