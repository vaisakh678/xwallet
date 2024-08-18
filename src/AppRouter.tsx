import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Setup from "./pages/Setup";
import Onboarding from "./pages/Setup/components/Onboarding";
import Mnemonic from "./pages/Setup/components/Mnemonic";
import SelectNetwork from "./pages/Setup/components/SelectNetwork";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Setup />,
		children: [
			{
				index: true,
				element: <Onboarding />,
			},
			{
				path: "network",
				element: <SelectNetwork />,
			},
			{
				path: "mnemonic",
				element: <Mnemonic />,
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={appRouter} />;
};

export default AppRouter;

