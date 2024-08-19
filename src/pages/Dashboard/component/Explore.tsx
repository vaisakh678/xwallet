import React, { useEffect, useState } from "react";
import TokenItem from "./ui/TokenItem";
import GainerItem from "./ui/GainerItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import TokenItemShimmer from "./ui/TokenItemShimmer";
import GainerItemShimmer from "./ui/GainerItemShimmer";

export interface IAssetDetails {
	name: string;
	id: string;
	image: string;
	symbol: string;
	current_price: number;
	price_change_percentage_24h: number;
}

const Explore: React.FC = () => {
	const [assets, setAssets] = useState<IAssetDetails[]>([]);
	const [gainers, setGainers] = useState<IAssetDetails[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const res1 = await fetch(
					"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=10&page=1&x_cg_demo_api_key=CG-jw27LheqpPDo5R2mJ7pwWqyW"
				);
				const res2 = await fetch(
					"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=CG-jw27LheqpPDo5R2mJ7pwWqyW"
				);

				const json1 = await res1.json();
				const json2 = await res2.json();

				if (res1.ok) setGainers(json1);
				else console.log(res1);

				if (res2.ok) setAssets(json2);
				else console.log(res2);
			} catch (error) {
				console.log(error);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: "There was a problem with your request.",
				});
			} finally {
				setIsLoading(false);
			}
		})();
	}, [toast]);
	return (
		<div className=" w-full">
			<div className="flex items-center justify-between w-full mb-4">
				<h3>Top Gainers</h3>
				<Button variant="link" className="text-blue-500">
					See all
				</Button>
			</div>
			<div className="flex gap-2 overflow-auto scrollbar-none mb-4">
				{gainers.map((item) => (
					<GainerItem
						key={item.id}
						id={item.id}
						image={item.image}
						name={item.name}
						current_price={item.current_price}
						price_change_percentage_24h={item.price_change_percentage_24h}
						symbol={item.symbol}
					/>
				))}

				{isLoading
					? Array(5)
							.fill(0)
							.map((_, idx) => <GainerItemShimmer key={idx} />)
					: null}
			</div>

			<Separator />

			<div className="flex items-center justify-between w-full my-4">
				<h3>Top Assets</h3>
				<Button variant="link" className="text-blue-500">
					See all
				</Button>
			</div>
			<div className="flex flex-col gap-2">
				{assets.map((item) => {
					return (
						<TokenItem
							key={item.id}
							id={item.id}
							name={item.name}
							image={item.image}
							current_price={item.current_price}
							price_change_percentage_24h={item.price_change_percentage_24h}
							symbol={item.symbol}
						/>
					);
				})}

				{isLoading
					? Array(5)
							.fill(5)
							.map((_, idx) => <TokenItemShimmer key={idx} />)
					: null}
			</div>
		</div>
	);
};

export default Explore;

