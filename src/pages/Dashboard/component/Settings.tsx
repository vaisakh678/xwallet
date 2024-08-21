import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LuWallet } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { Button } from "../../../components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

const Settings: React.FC = () => {
	return (
		<div className="w-full flex flex-col items-center min-h-[500px]">
			{/* <div className="max-w-[500px] bg-muted py-6 px-8 m-4 rounded flex flex-col items-center text-center">hello</div> */}
			<Avatar className="w-20 h-20 text-4xl mb-4">
				<AvatarFallback>A1</AvatarFallback>
			</Avatar>
			<h3>Account 1</h3>
			<section className="mt-8 w-full flex flex-col gap-4">
				<Button variant="secondary" className="w-full text-left h-12 px-4 rounded-lg bg-muted flex items-center justify-between group">
					<div className="flex">
						<LuWallet className="mr-3 w-5 h-5" />
						<p>Wallets</p>
					</div>
					<IoIosArrowForward className="opacity-50" />
				</Button>
				<div className="rounded-lg overflow-hidden flex flex-col ">
					<Button variant="secondary" className="w-full text-left h-12 px-4 bg-muted flex items-center justify-between rounded-none">
						<div className="flex">
							<p>Solana</p>
						</div>
						<IoIosArrowForward className="opacity-50" />
					</Button>
					<Button variant="secondary" className="w-full text-left h-12 px-4 bg-muted flex items-center justify-between rounded-none">
						<div className="flex">
							<p>Etherium</p>
						</div>
						<IoIosArrowForward className="opacity-50" />
					</Button>
				</div>
				<div className="rounded-lg overflow-hidden flex flex-col ">
					<Button variant="secondary" className="w-full text-left h-12 px-4 bg-muted flex items-center justify-between rounded-none">
						<div className="flex">
							<MdOutlineAccountCircle className="mr-3 w-5 h-5" />
							<p>Your Account</p>
						</div>
						<IoIosArrowForward className="opacity-50" />
					</Button>
					<Button variant="secondary" className="w-full text-left h-12 px-4 bg-muted flex items-center justify-between rounded-none">
						<div className="flex">
							<IoSettingsOutline className="mr-3 w-5 h-5" />
							<p>Preferences</p>
						</div>
						<IoIosArrowForward className="opacity-50" />
					</Button>
					<Button variant="secondary" className="w-full text-left h-12 px-4 bg-muted flex items-center justify-between rounded-none">
						<div className="flex">
							<MdOutlineLock className="mr-3 w-5 h-5" />
							<p>Lock</p>
						</div>
						<IoIosArrowForward className="opacity-50" />
					</Button>
				</div>
				<Button variant="secondary" className="w-full text-left h-12 px-4 rounded-lg bg-muted flex items-center justify-between ">
					<div className="flex">
						<p>About XWallet</p>
					</div>
					<IoIosArrowForward className="opacity-50" />
				</Button>
			</section>
		</div>
	);
};

export default Settings;

