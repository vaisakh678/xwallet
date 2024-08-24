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
import { cn } from "../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { generateAlias } from "../../../utils/helpers";
import { selectAccount } from "../../../redux/masterDataSlice";

const WalletMenu = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex items-center", className)}>
			<Separator className="h-8 mx-4" orientation="vertical" />
			<div className="w-7 h-7 rounded-full bg-muted mr-2"></div>
			<button className="select-none">Wallet 1</button>
		</div>
	);
};

const AppBar: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { accounts, activeAccount } = useSelector((store: RootState) => store.masterData);
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
								<AvatarFallback>{generateAlias(activeAccount?.name ?? "None")}</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="mx-4 w-[140px]">
							<DropdownMenuItem className="cursor-pointer">{activeAccount?.name ?? "None"}</DropdownMenuItem>
							<DropdownMenuSeparator />
							{accounts.map((account) =>
								activeAccount?.uuid === account.uuid ? null : (
									<DropdownMenuItem
										className="cursor-pointer"
										onClick={() => {
											dispatch(selectAccount({ uuid: account.uuid }));
										}}
									>
										{account.name}
									</DropdownMenuItem>
								)
							)}
							<DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/setup")}>
								Add Account
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/settings")}>
								Settings
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/unlock")}>
								Lock
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<WalletMenu className="hidden md:flex" />
				</div>

				<div className="flex justify-center items-center col-span-3 md:col-span-2">
					<Link to="/">
						<h1 className="text-2xl font-semibold">XWallet</h1>
					</Link>
					<WalletMenu className="flex md:hidden" />
				</div>

				<div className="self-center justify-self-end col-span-1">
					<ThemeToggleBtn />
				</div>
			</div>
		</div>
	);
};

export default AppBar;

