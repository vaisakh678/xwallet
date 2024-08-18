import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import NetworkItem from "./ui/NetworkItem";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const SelectNetwork: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className="text-center mb-8 mt-14">
				<h1 className="text-4xl font-semibold mb-4">Select Network</h1>
				<p className="opacity-90">Backpack supports multiple blockchains.</p>
				<p className="opacity-90">Which do you want to use? You can add more later.</p>
			</section>
			<section className="flex flex-col gap-2 mb-8 max-w-[500px] w-full">
				<Input placeholder="Search Networks" />
				<Separator className="my-2" />

				<ScrollArea className="h-[300px] flex flex-col gap-2 ">
					<div className="flex flex-col gap-2">
						<NetworkItem />
						<NetworkItem />
					</div>
				</ScrollArea>
			</section>
			<Button variant="default" onClick={() => navigate("/mnemonic")}>
				Continue
			</Button>
		</>
	);
};

export default SelectNetwork;

