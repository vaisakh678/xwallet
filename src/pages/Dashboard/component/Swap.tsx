import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../../components/ui/button";
import { IoSwapVertical } from "react-icons/io5";

const Swap: React.FC = () => {
	return (
		<>
			<div className="w-full max-w-[500px] rounded-lg overflow-hidden mb-8">
				<div className="bg-muted">
					<div className="flex flex-col p-4">
						<div className="flex">
							<img
								src="https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-solana.png"
								alt=""
								className="w-12 h-12 mr-4"
							/>
							<div className="flex items-center justify-between w-full">
								<div>
									<p>Solana</p>
									<p className="text-sm opacity-75">0 SOL</p>
								</div>
								<IoIosArrowDown />
							</div>
						</div>
						<div className="flex justify-between items-center mt-2">
							<input type="text" className="bg-inherit text-2xl outline-none" placeholder="Sol" defaultValue={0} />
							<p className="text-purple-400">Max</p>
						</div>
					</div>
				</div>
				<div className="h-px" />
				<div className="relative flex justify-center">
					<Button className="rounded-full h-10 p-0 w-10 absolute top-0 -translate-y-1/2">
						<IoSwapVertical />
					</Button>
				</div>
				<div className="bg-muted">
					<div className="flex flex-col p-4">
						<div className="flex">
							<img
								src="https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-solana.png"
								alt=""
								className="w-12 h-12 mr-4"
							/>
							<div className="flex items-center justify-between w-full">
								<div>
									<p>Solana</p>
									<p className="text-sm opacity-75">0 SOL</p>
								</div>
								<IoIosArrowDown />
							</div>
						</div>
						<div className="flex justify-between items-center mt-2">
							<input type="text" className="bg-inherit text-2xl outline-none" placeholder="Sol" defaultValue={0} />
							<p className="text-purple-400">Max</p>
						</div>
					</div>
				</div>
			</div>
			<Button className="w-full max-w-[500px]" variant="destructive">
				Insufficient Balance
			</Button>
		</>
	);
};

export default Swap;

