import axios from "axios";
import { IAssetDetails } from "./apiTypes";

export const getTopGainers = async () => {
	const res = await axios.get(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=10&page=1&x_cg_demo_api_key=CG-jw27LheqpPDo5R2mJ7pwWqyW"
	);
	return res.data as IAssetDetails[];
};

export const getTopAssets = async () => {
	const res = await axios.get(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-jw27LheqpPDo5R2mJ7pwWqyW"
	);
	return res.data as IAssetDetails[];
};

