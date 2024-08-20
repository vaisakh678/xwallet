import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import NetworkItem from "./ui/NetworkItem";
import { Separator } from "@/components/ui/separator";

const _networks = [
	{
		name: "Solana",
		image: "https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-solana.png",
	},
	{
		name: "Eclipse Dev Mainnet",
		image: "https://s3.amazonaws.com/app-assets.xnfts.dev/images/logo-eclipse.svg",
	},
	{
		name: "Ethereum",
		image: "https://assets.coingecko.com/asset_platforms/images/279/large/ethereum.png",
	},
	{
		name: "Polygon",
		image: "https://assets.coingecko.com/coins/images/4713/large/polygon.png",
	},
	{
		name: "Base",
		image: "https://assets.coingecko.com/asset_platforms/images/131/large/base.jpeg",
	},
	{
		name: "Arbitrum",
		image: "https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-arbitrum.png",
	},
	{
		name: "Optimism",
		image: "https://assets.coingecko.com/coins/images/25244/large/Optimism.png",
	},
];

const SelectNetwork: React.FC = () => {
	const [networks, setNetworks] = useState(_networks);
	const [selected, setSelected] = useState("");
	return (
		<>
			<section className="text-center mb-8 mt-14">
				<h1 className="text-4xl font-semibold mb-4">Select Network</h1>
				<p className="opacity-90">Backpack supports multiple blockchains.</p>
				<p className="opacity-90">Which do you want to use? You can add more later.</p>
			</section>
			<section className="flex flex-col gap-2 mb-8 w-full max-w-[500px]">
				<Input
					placeholder="Search Networks"
					onChange={(e) => {
						setNetworks(
							_networks.filter((item) => {
								return item.name.toLowerCase().includes(e.target.value.toLowerCase());
							})
						);
					}}
				/>
				<Separator className="my-2" />

				<div className="h-[300px] flex flex-col gap-2 overflow-auto">
					<div className="flex flex-col gap-2">
						{networks.map((item, idx) => (
							<NetworkItem
								key={idx}
								onClick={() => setSelected(item.name)}
								active={item.name === selected}
								name={item.name}
								image={item.image}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default SelectNetwork;

