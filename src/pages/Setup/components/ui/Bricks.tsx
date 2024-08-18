import React from "react";

interface BricksProps {
	active?: boolean;
	filled?: boolean;
}

const Bricks: React.FC<BricksProps> = ({ active, filled }) => {
	return (
		<div
			className={`flex-1 flex items-center justify-center group-hover:opacity-100 transition-all duration-200 ${
				active ? "opacity-100" : "opacity-30"
			}`}
		>
			<div className="gap-2 grid grid-cols-4 grid-rows-3">
				{Array(12)
					.fill(0)
					.map((_, idx) =>
						filled ? (
							<div key={idx} className="h-2 w-5 bg-gray-400 dark:bg-white rounded-[1px]" />
						) : (
							<div key={idx} className="h-2 w-5 border bg-inherit border-gray-400 dark:border-white rounded-[1px]" />
						)
					)}
			</div>
		</div>
	);
};

export default Bricks;

