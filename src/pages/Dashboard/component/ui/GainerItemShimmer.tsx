import React from "react";
import { Skeleton } from "../../../../components/ui/skeleton";

interface GainerItemShimmerProps {}

const GainerItemShimmer: React.FC<GainerItemShimmerProps> = () => {
	return (
		<div className="flex flex-col p-4 rounded-lg min-w-[130px]">
			<Skeleton className="w-8 h-8 mb-1 rounded-full" />
			<Skeleton className="opacity-50 mb-2 h-4 w-[70%]"></Skeleton>
			<Skeleton className="w-[40%] h-4 mb-1"></Skeleton>
			<Skeleton className={`h-4 w-[60%] opacity-75"`} />
		</div>
	);
};

export default GainerItemShimmer;

