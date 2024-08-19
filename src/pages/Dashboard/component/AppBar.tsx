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
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
	return (
		<div className="flex items-center justify-center mb-[60px]">
			<div
				className="w-full max-w-[1200px] h-[60px] grid grid-rows-1 grid-cols-3 fixed top-0 z-10 backdrop:blur-[10px] bg-[#FFFFFFCC] dark:bg-[#08080a7D]  px-4"
				style={{
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
				}}
			>
				<div className="self-center justify-self-start">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar>
								<AvatarFallback>A1</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="m-4">
							<DropdownMenuItem>Account 1</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Account 2</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Lock</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="flex justify-center items-center">
					<Link to="/">
						<h1 className="text-2xl font-semibold">XWallet</h1>
					</Link>
					<Separator className="h-8 mx-4" orientation="vertical" />
					<h3>Sol</h3>
				</div>
				<div className="self-center justify-self-end">
					<ThemeToggleBtn />
				</div>
			</div>
		</div>
	);
};

export default AppBar;

