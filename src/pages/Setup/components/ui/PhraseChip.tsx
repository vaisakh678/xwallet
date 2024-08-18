import React from "react";
import { Badge } from "@/components/ui/badge";

interface IPhraseChip {
	children: React.ReactNode;
}

const PhraseChip: React.FC<IPhraseChip> = ({ children }) => {
	return (
		<Badge className="rounded p-3 cursor-pointer text-1xl font-normal" variant="secondary">
			{children}
		</Badge>
	);
};

export default PhraseChip;

