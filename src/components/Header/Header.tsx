import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import LangSelect from "./LangSelect";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { motion } from "framer-motion";

export default function Header() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isShadow, setIsShadow] = useState(false);
	const [activeSection, setActiveSection] = useState("Асосий");
	const { t } = useTranslation();

	const links = [
		{
			name: t("header_link1.Асосий"),
			hash: "#main",
		},
		{
			name: t("header_link2.Биз ҳақимизда"),
			hash: "#about",
		},
		{
			name: t("header_link3.Хизматлар"),
			hash: "#serv",
		},
		{
			name: t("header_link4.ФАҚ"),
			hash: "#faq",
		},
	] as const;

	const handleScroll = () => {
		if (window.scrollY > 80) {
			setIsShadow(true);
		} else {
			setIsShadow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleVisible = () => {
		setIsVisible(!isVisible);
	};

	return (
		<motion.header
			initial={{ y: -150, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className={`${
				isShadow ? "shadow-bottom" : ""
			} sticky top-0 h-[10vh] bg-white flex z-30 items-center justify-between px-2 lg:h-[15vh] lg:px-4`}
		>
			<Logo />

			<div className="flex items-center gap-x-4 xs:gap-x-6">
				<div className="block lg:hidden">
					<LangSelect />
				</div>

				<IoIosMenu
					onClick={handleVisible}
					className="size-8 block xs:size-12 md:size-14 lg:hidden"
				/>
			</div>

			<div
				className={`fixed left-0 top-0 bottom-0 bg-black/20 w-full h-screen duration-900 lg:hidden  ${
					isVisible ? "block" : "hidden"
				}`}
			></div>

			<nav
				className={`fixed top-0 right-0 w-[18rem] h-screen bg-white transition-transform duration-300 shadow-left 
					sm:w-[20rem] md:w-[24rem] md:shadow-none
				  lg:relative lg:flex lg:items-center lg:gap-x-[5rem] lg:place-content-end lg:h-full lg:w-[60rem] lg:translate-x-0
					${isVisible ? "translate-x-0" : "translate-x-full"}`}
			>
				<AiOutlineClose
					onClick={handleVisible}
					className="absolute top-7 right-5 block size-7 md:size-9 lg:hidden"
				/>
				<ul
					className="flex flex-col gap-y-6 font-bold mt-[6rem] mx-8 tracking-[3px] text-lg text-[#666666] 
					 md:text-[24px] md:tracking-wider lg:items-center lg:flex-row lg:gap-x-6 lg:font-medium lg:text-xl lg:m-0"
				>
					{links.map((link) => (
						<li
							key={link.hash}
							onClick={() => {
								handleVisible();
								setActiveSection(link.name);
							}}
							className={`${
								activeSection === link.name &&
								"border-b-2 border-[#3360FF] opacity-90"
							} hover:opacity-90 transition-all h-8 md:h-12 lg:h-8`}
						>
							<a href={link.hash}>{link.name}</a>
						</li>
					))}

					<div className="hidden lg:block">
						<LangSelect />
					</div>
				</ul>

				<div
					onClick={handleVisible}
					className="flex justify-center mt-16 lg:mt-0"
				>
					<Button />
				</div>
			</nav>
		</motion.header>
	);
}
