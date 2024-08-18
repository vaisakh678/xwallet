import AppRouter from "./AppRouter";
import ThemeToggleBtn from "./components/ui/ThemeToggleBtn";
import { ThemeProvider } from "./contexts/ThemeProvider";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<ThemeProvider>
			<div className="min-h-svh w-full">
				<ThemeToggleBtn />
				<AppRouter />
			</div>
		</ThemeProvider>
	);
};

export default App;

