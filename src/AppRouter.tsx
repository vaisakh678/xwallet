import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";
import Tokens from "./pages/Dashboard/component/Tokens";
import Collectibles from "./pages/Dashboard/component/Collectibles";
import Activity from "./pages/Dashboard/component/Activity";
import Explore from "./pages/Dashboard/component/Explore";
import Receive from "./pages/Dashboard/component/Receive";
import Swap from "./pages/Dashboard/component/Swap";
import Auth from "./pages/Auth";

const appRouter = createBrowserRouter([
	{
		path: "/unlock",
		element: <Auth />,
	},
	{
		path: "/setup",
		element: <Setup />,
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

