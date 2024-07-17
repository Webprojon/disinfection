import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import PhoneIcon from "./components/PhoneIcon";
import { GlobalContextProvider } from "./context/global-context";
import About from "./pages/About";
import FaqPage from "./pages/FaqPage";
import Home from "./pages/Home";
import Service from "./pages/Service";
import TypeOfServices from "./pages/TypeOfServices";

function App() {
	return (
		<GlobalContextProvider>
			<main>
				<Header />
				<div className="px-4 overflow-x-hidden">
					<Home />
					<About />
					<Service />
					<TypeOfServices />
					<FaqPage />
					<PhoneIcon />
				</div>
				<Footer />
			</main>
		</GlobalContextProvider>
	);
}

export default App;
