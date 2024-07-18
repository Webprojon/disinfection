import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
		<AnimationOnScroll animateIn="animate__animated animate__flipInX">
			<h2 className="mt-[2.7rem] lg:mt-[4rem] font-bold text-[30px] xs:text-[40px] tracking-wider">
				{children}
			</h2>
		</AnimationOnScroll>
	);
}
