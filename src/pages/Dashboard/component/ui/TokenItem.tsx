import React from "react";

const TokenItem: React.FC = () => {
	return (
		<div className="bg-[#f4f4f5] dark:bg-[#27272a] cursor-pointer p-2 px-4 rounded-md flex items-center">
			<img src="https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-solana.png" alt="" className="w-12 h-12 mr-4" />
			<div className="flex justify-between w-full">
				<div>
					<p>Solana</p>
					<p className="text-sm opacity-75">0 SOL</p>
				</div>
				<div>
					<p>$0.00</p>
					<p className="text-sm text-green-500 opacity-75">+0.20%</p>
				</div>
			</div>
		</div>
	);
};

export default TokenItem;

