import React from "react";
import { Input } from "@/components/ui/input";
import { FaImage } from "react-icons/fa6";

const Collectibles: React.FC = () => {
	return (
		<div className="w-full min-h-[500px]">
			<Input placeholder="Search Collectibles" />
			<div className="flex h-full items-center justify-center">
				<div className="max-w-[500px] bg-muted py-6 px-8 m-4 rounded flex flex-col items-center text-center">
					<FaImage className="mb-4 w-14 h-14" />
					<h1 className="text-3xl mb-4">No NFTs</h1>
					<p>Get started with your first NFT by visiting your favorite marketplace.</p>
				</div>
			</div>
		</div>
	);
};

export default Collectibles;

