import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import PhoneIcon from "./components/PhoneIcon";
import About from "./pages/About";
import FaqPage from "./pages/FaqPage";
import Home from "./pages/Home";
import Service from "./pages/Service";
import TypeOfServices from "./pages/TypeOfServices";

function App() {
	return (
		<main className="border">
			<Toaster position="top-center" reverseOrder={false} />
			<Header />
			<div className="px-4">
				<Home />
				<About />
				
				<Service />
				<TypeOfServices />
				<FaqPage />
				<PhoneIcon />
			</div>
			<Footer />
		</main>
	);
}

export default App;
