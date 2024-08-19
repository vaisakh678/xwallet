import React from "react";

import { Button } from "@/components/ui/button";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import TokenItem from "./ui/TokenItem";
import { useNavigate } from "react-router-dom";

const Tokens: React.FC = () => {
	const navigate = useNavigate();

	return (
		<>
			<section className="text-center mb-8">
				<h1 className="text-4xl mb-3">$0.00</h1>
				<h3 className="text-muted-foreground text-lg">$0.00 0%</h3>
			</section>
			<section className="gap-5 flex">
				<Button variant="outline" className="h-10 w-10 p-0 rounded-full">
					<IoIosArrowRoundUp className="w-5 h-5" />
				</Button>
				<Button variant="outline" className="h-10 w-10 p-0 rounded-full" onClick={() => navigate("/receive")}>
					<IoIosArrowRoundDown className="w-5 h-5" />
				</Button>
				<Button variant="outline" className="h-10 w-10 p-0 rounded-full" onClick={() => navigate("/swap")}>
					<IoSwapHorizontalSharp className="w-4 h-4" />
				</Button>
			</section>
			<section className="my-8 w-full flex flex-col gap-2">
				<TokenItem />
				<TokenItem />
				<TokenItem />
				<TokenItem />
				<TokenItem />
				<TokenItem />
				<TokenItem />
				<TokenItem />
				<TokenItem />
			</section>
		</>
	);
};

export default Tokens;

