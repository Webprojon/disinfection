import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type ChildrenProps = {
	children: ReactNode;
};

export default function SectionHeading({ children }: ChildrenProps) {
	useEffect(() => {
		AOS.init({
			//duration: 2000, // Customize the duration
		});
	}, []);

	return (
		<h2
			data-aos="flip-up"
			className="mt-[6rem] font-bold text-[40px] tracking-wider"
		>
			{children}
		</h2>
	);
}
