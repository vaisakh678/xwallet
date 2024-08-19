import React from "react";
import { ImPower } from "react-icons/im";

const Activity: React.FC = () => {
	return (
		<div className="w-full min-h-[500px]">
			<div className="flex h-full items-center justify-center">
				<div className="max-w-[500px] bg-[#f4f4f5] dark:bg-[#27272a] py-6 px-8 m-4 rounded flex flex-col items-center text-center">
					<ImPower className="mb-4 w-14 h-14" />
					<h1 className="text-3xl mb-4">No Recent Activity</h1>
					<p>Your transactions and app activity will show up here when you start using Backpack.</p>
				</div>
			</div>
		</div>
	);
};

export default Activity;

