import React from "react";
import AppBar from "./component/AppBar";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./component/BottomNavigation";

const Dashboard: React.FC = () => {
	return (
		<div className="w-screen min-h-svh flex flex-col">
			<AppBar />
			<div className="w-full flex justify-center p-4">
				<div className="flex flex-col items-center w-full max-w-[800px] py-8">
					<Outlet />
				</div>
			</div>
			<BottomNavigation />
		</div>
	);
};

export default Dashboard;

