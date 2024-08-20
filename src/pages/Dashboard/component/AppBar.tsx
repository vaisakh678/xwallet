import React from "react";
import ThemeToggleBtn from "../../../components/ui/ThemeToggleBtn";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	// DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "../../../components/ui/separator";
import { Link, useNavigate } from "react-router-dom";

const AppBar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-center mb-[60px]">
			<div
				className="w-full max-w-[1200px] h-[60px] grid grid-rows-1 grid-cols-5 md:grid-cols-4 fixed top-0 z-10 bg-[#FFFFFFCC] dark:bg-[#08080a7D] px-4"
				style={{
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
				}}
			>
				<div className="flex items-center gap-1 col-span-1">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar>
								<AvatarFallback>A1</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="mx-4 w-[140px]">
							<DropdownMenuItem className="cursor-pointer">Account 1</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="cursor-pointer">Account 2</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">Add Account</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/unlock")}>
								Lock
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<div className="items-center hidden md:flex">
						<Separator className="h-8 mx-4" orientation="vertical" />
						<div className="w-7 h-7 rounded-full bg-muted mr-2"></div>
						<h3>Wallet 1</h3>
					</div>
				</div>

				<div className="flex justify-center items-center col-span-3 md:col-span-2">
					<Link to="/">
						<h1 className="text-2xl font-semibold">XWallet</h1>
					</Link>
					<div className="items-center flex md:hidden">
						<Separator className="h-8 mx-4" orientation="vertical" />
						<div className="w-7 h-7 rounded-full bg-muted mr-2"></div>
						<h3>Wallet 1</h3>
					</div>
				</div>

				<div className="self-center justify-self-end col-span-1">
					<ThemeToggleBtn />
				</div>
			</div>
		</div>
	);
};

export default AppBar;

