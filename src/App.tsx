import AppRouter from "./AppRouter";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SoonerToaster } from "@/components/ui/sonner";
import ConfigProvider from "./contexts/Config";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<ThemeProvider>
			<Toaster />
			<SoonerToaster />
			<div className="min-h-svh w-full">
				<ConfigProvider>
					<AppRouter />
				</ConfigProvider>
			</div>
		</ThemeProvider>
	);
};

export default App;

