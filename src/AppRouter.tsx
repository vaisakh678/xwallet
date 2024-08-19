import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Setup from "./pages/Setup";
import Onboarding from "./pages/Setup/components/Onboarding";
import Mnemonic from "./pages/Setup/components/Mnemonic";
import SelectNetwork from "./pages/Setup/components/SelectNetwork";
import CreatePassword from "./pages/Setup/components/CreatePassword";
import Dashboard from "./pages/Dashboard";
import Tokens from "./pages/Dashboard/component/Tokens";
import Collectibles from "./pages/Dashboard/component/Collectibles";
import Activity from "./pages/Dashboard/component/Activity";
import Explore from "./pages/Dashboard/component/Explore";
import Receive from "./pages/Dashboard/component/Receive";
import Swap from "./pages/Dashboard/component/Swap";

const appRouter = createBrowserRouter([
	{
		path: "/setup",
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
			{
				path: "create-password",
				element: <CreatePassword />,
			},
		],
	},
	{
		path: "/",
		element: <Dashboard />,
		children: [
			{
				index: true,
				element: <Navigate to="tokens" />,
			},
			{
				path: "tokens",
				element: <Tokens />,
			},
			{
				path: "collectibles",
				element: <Collectibles />,
			},
			{
				path: "activity",
				element: <Activity />,
			},
			{
				path: "explore",
				element: <Explore />,
			},
			{
				path: "receive",
				element: <Receive />,
			},
			{
				path: "swap",
				element: <Swap />,
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={appRouter} />;
};

export default AppRouter;

