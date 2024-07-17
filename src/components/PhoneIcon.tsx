import { PiPhoneBold } from "react-icons/pi";

export default function PhoneIcon() {
	return (
		<span className="z-[999] fixed right-5 bottom-5 w-[3.2rem] h-[3.2rem] sm:hidden">
			<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
			<span className="relative inline-flex items-center justify-center rounded-full w-[3.2rem] h-[3.2rem] bg-[#3360FF]">
				<a href="tel:+48495959399">
					<PiPhoneBold className="animate__animated animate__tada animate__infinite size-7 text-white" />
				</a>
			</span>
		</span>
	);
}
