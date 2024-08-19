import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import QRCode from "qrcode.react";
import { toast } from "sonner";

const Receive: React.FC = () => {
	const [isCopied, setIsCopied] = useState(false);
	const address = "HHt8tyiNgZmntEi9psBULwYiT cmD5QedUDLRYyqiPxpR";

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(address);
			if (address === (await navigator.clipboard.readText())) {
				setIsCopied(true);
				toast.success("Address Copied to clipboard!.");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="flex flex-col gap-4 items-center">
			<div className="w-52 h-52 rounded bg-black dark:bg-white p-2">
				<QRCode value={"lkfsjf"} style={{ height: "100%", width: "100%" }} />
			</div>
			<p className="text-center w-[70%] py-4">{address}</p>
			<Button onClick={handleCopy}>{isCopied ? "Address Copied!." : "Copy Address"}</Button>
			<p className="text-muted-foreground text-center w-[70%]">This address can only receive assets on Solana.</p>
		</section>
	);
};

export default Receive;

