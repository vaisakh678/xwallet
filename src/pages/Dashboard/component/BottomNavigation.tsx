import React from "react";
import { GiPaintedPottery } from "react-icons/gi";
import { IoImage } from "react-icons/io5";
import { RxActivityLog } from "react-icons/rx";
import { MdSatelliteAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BottomNavigation: React.FC = () => {
	return (
		<div className="flex items-center justify-center mt-[60px]">
			<div
				className="w-full max-w-[800px] box-content h-[60px] grid grid-rows-1 grid-cols-4 fixed bottom-0 z-10 backdrop:blur-[10px] bg-[#FFFFFFCC] dark:bg-[#08080a7D] px-5"
				style={{
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
					paddingBottom: "env(safe-area-inset-bottom)",
				}}
			>
				<NavLink className="flex flex-col items-center justify-center relative" to="tokens">
					{({ isActive }) => (
						<>
							<GiPaintedPottery className="w-5 h-5" />
							<div className={`bg-black dark:bg-white h-1 w-5 absolute bottom-3 rounded ${isActive ? "opacity-100" : "opacity-0"}`} />
						</>
					)}
				</NavLink>
				<NavLink to="collectibles" className="flex flex-col items-center justify-center relative">
					{({ isActive }) => (
						<>
							<IoImage className="w-5 h-5" />
							<div className={`bg-black dark:bg-white h-1 w-5 absolute bottom-3 rounded ${isActive ? "opacity-100" : "opacity-0"}`} />
						</>
					)}
				</NavLink>
				<NavLink to="activity" className="flex flex-col items-center justify-center relative">
					{({ isActive }) => (
						<>
							<RxActivityLog className="w-5 h-5" />
							<div className={`bg-black dark:bg-white h-1 w-5 absolute bottom-3 rounded ${isActive ? "opacity-100" : "opacity-0"}`} />
						</>
					)}
				</NavLink>
				<NavLink to="explore" className="flex flex-col items-center justify-center relative">
					{({ isActive }) => (
						<>
							<MdSatelliteAlt className="w-5 h-5" />
							<div className={`bg-black dark:bg-white h-1 w-5 absolute bottom-3 rounded ${isActive ? "opacity-100" : "opacity-0"}`} />
						</>
					)}
				</NavLink>
			</div>
		</div>
	);
};

export default BottomNavigation;

