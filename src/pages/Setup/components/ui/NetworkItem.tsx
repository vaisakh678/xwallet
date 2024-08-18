import React from "react";
import { Badge } from "@/components/ui/badge";

const NetworkItem: React.FC = () => {
	return (
		<div>
			<Badge className="w-full px-4 flex items-center cursor-pointer rounded h-12" variant="secondary">
				<img
					src="https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-solana.png"
					alt="sol"
					className="w-8 h-8 mr-2"
				/>
				Solana
			</Badge>
		</div>
	);
};

export default NetworkItem;

