import React from "react";
import { Button } from "../../../../components/ui/button";
import { IoMdCheckmark } from "react-icons/io";

interface NetworkItemProps {
	name: string;
	image: string;
	active?: boolean;
	onClick?: React.MouseEventHandler;
}

const NetworkItem: React.FC<NetworkItemProps> = ({ name, image, active, onClick }) => {
	return (
		<Button
			variant="secondary"
			onClick={onClick}
			className={`text-left w-full px-4 flex items-center justify-between cursor-pointer rounded h-12 ${
				active ? "bg-[#e1e1e1] hover:bg-[#e1e1e1] dark:bg-[#181818] dark:hover:bg-[#181818]" : ""
			}`}
		>
			<div className="flex items-center">
				<img src={image} alt={name} className="w-8 h-8 mr-2" />
				{name}
			</div>

			{active && <IoMdCheckmark className="text-xl" />}
		</Button>
	);
};

export default NetworkItem;

