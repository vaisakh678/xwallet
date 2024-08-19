import React from "react";
import { IAssetDetails } from "../Explore";

interface TokenItemProps extends IAssetDetails {}

const TokenItem: React.FC<TokenItemProps> = ({ name, symbol, image, current_price, price_change_percentage_24h }) => {
	return (
		<div className="bg-muted cursor-pointer p-2 px-4 rounded-md flex items-center">
			<img src={image} alt={symbol} className="w-12 h-12 mr-4 flex-shrink-0" />
			<div className="flex justify-between w-full">
				<div>
					<p>{name}</p>
					<p className="text-sm opacity-75">0 SOL</p>
				</div>
				<div className="text-right">
					<p>${current_price}</p>
					<p className={`text-sm opacity-75 ${price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
						{price_change_percentage_24h > 0 ? "+" : ""}
						{price_change_percentage_24h}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default TokenItem;

