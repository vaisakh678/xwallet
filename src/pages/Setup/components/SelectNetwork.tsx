import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import NetworkItem from "./ui/NetworkItem";
import { Separator } from "@/components/ui/separator";
import { _networks } from "../../../utils/config";
import { Button } from "../../../components/ui/button";

interface SelectNetworkProps {
	onSubmit?: React.MouseEventHandler;
	network: { name: string; image: string; symbol: string; code: string } | null;
	setNetwork: (props: { name: string; image: string; symbol: string; code: string } | null) => void;
}

const SelectNetwork: React.FC<SelectNetworkProps> = ({ onSubmit, network, setNetwork }) => {
	const [networks, setNetworks] = useState(_networks);

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
								onClick={() => setNetwork(item)}
								active={item.name === network?.name}
								name={item.name}
								image={item.image}
							/>
						))}
					</div>
				</div>
			</section>
			<Button onClick={onSubmit}>Next</Button>
		</>
	);
};

export default SelectNetwork;

