import { ReactNode } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

type ChildrenProps = {
	children: ReactNode;
};

export default function SectionHeading({ children }: ChildrenProps) {
	return (
		<AnimationOnScroll animateIn="animate__animated animate__flipInX">
			<h2 className="mt-[2.7rem] font-bold text-[30px] tracking-wider xs:text-[40px] lg:mt-[4rem]">
				{children}
			</h2>
		</AnimationOnScroll>
	);
}
