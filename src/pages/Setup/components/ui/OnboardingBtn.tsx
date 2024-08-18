import React from "react";

interface OnboardingBtnProps {
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	active?: boolean;
}

const OnboardingBtn: React.FC<OnboardingBtnProps> = ({ children, onClick, active }) => {
	return (
		<div
			className={`cursor-pointer flex flex-col group p-4 w-36 h-40 border border-gray-500 rounded-md transition-all duration-200 hover:border-opacity-100  ${
				active ? "border-opacity-60" : "border-opacity-25"
			}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default OnboardingBtn;

