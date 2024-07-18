import { useGlobalContext } from "../context/global-context";
import "aos/dist/aos.css";

export default function Modal() {
	const { isModal, setIsModal, userName } = useGlobalContext();

	const handleChange = () => {
		setIsModal(!isModal);
	};
	return (
		<div
			onClick={handleChange}
			className="animate__animated animate__zoomInUp fixed top-0 left-0 h-full w-full bg-black/70 backdrop-blur-sm z-50"
		>
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[95%] rounded-xl bg-slate-200 z-50 md:w-[470px]">
				<div className="text-center text-slate-700 my-10 mx-5 md:my-12">
					<h2 className="text-[40px] font-bold">{`Hello ${userName} !`}</h2>
					<p className="font-semibold text-[28px] pt-4">
						We got your application. Thank you for that 😊
					</p>
				</div>
			</div>
		</div>
	);
}
