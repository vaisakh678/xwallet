import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface TokenItemShimmerProps {}

const TokenItemShimmer: React.FC<TokenItemShimmerProps> = () => {
	return (
		<div className="cursor-pointer p-2 px-4 rounded-md flex items-center">
			<Skeleton className="w-12 h-12 rounded-full flex-shrink-0 mr-2" />
			<div className="flex justify-between w-full">
				<div className="flex-1">
					<Skeleton className="w-[70%] h-4 mb-2" />
					<Skeleton className="w-[40%] h-4 opacity-75" />
				</div>
			</div>
		</div>
	);
};

export default TokenItemShimmer;

