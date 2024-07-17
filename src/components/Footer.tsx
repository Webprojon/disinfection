import Logo from "./Header/Logo";
import { PiPhoneBold } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
	useEffect(() => {
		AOS.init({});
	}, []);
	const { t } = useTranslation();

	return (
		<footer className="border-t border-black/20 md:h-[35vh] lg:h-[30vh] lg:flex items-start">
			<div className="md:flex md:gap-x-[3rem] lg:gap-x-[7rem] ml-4 mt-10">
				<Logo />
				<div className="my-10">
					<a
						href="#"
						className="font-medium text-gray-700 flex items-center gap-x-6"
					>
						<div className="flex items-center justify-center w-9 h-9 border border-black/30 rounded-md">
							<HiOutlineLocationMarker className="size-5 text-black" />
						</div>
						{t("footer_info")}
						<MdArrowOutward className="size-7 text-black" />
					</a>

					<a
						href="#"
						className="font-medium text-gray-700 flex items-center gap-x-6 mt-6"
					>
						<div className="flex items-center justify-center w-9 h-9 border border-black/30 rounded-md">
							<PiPhoneBold className="size-5 text-black" />
						</div>
						+998 99 119 99 33
						<MdArrowOutward className="size-7 text-black" />
					</a>
				</div>
			</div>
		</footer>
	);
}
