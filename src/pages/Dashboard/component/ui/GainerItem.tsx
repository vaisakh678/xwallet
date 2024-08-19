import React from "react";
import { IAssetDetails } from "../Explore";

interface GainerItemProps extends IAssetDetails {}

const GainerItem: React.FC<GainerItemProps> = ({ symbol, image, current_price, price_change_percentage_24h }) => {
	return (
		<div className="bg-muted flex flex-col p-4 rounded-lg min-w-[130px]">
			<img src={image} alt={symbol} className="w-8 h-8 mb-1" />
			<p className="opacity-50 mb-2">{symbol}</p>
			<p>${current_price}</p>
			<p className={`text-sm opacity-75 ${price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
				{price_change_percentage_24h > 0 ? "+" : ""}
				{price_change_percentage_24h}%
			</p>
		</div>
	);
};

export default GainerItem;

