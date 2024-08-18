import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import OnboardingBtn from "./ui/OnboardingBtn";
import { useNavigate } from "react-router-dom";
import Bricks from "./ui/Bricks";

const Onboarding: React.FC = () => {
	const [opt, setOpt] = useState<0 | 1>(0);
	const navigate = useNavigate();
	return (
		<>
			<section className="text-center mb-28">
				<h1 className="text-4xl font-semibold mb-4">Welcome to XWallet</h1>
				<p className="opacity-90">Let's get started.</p>
			</section>
			<section className="flex gap-2 mb-8">
				<OnboardingBtn onClick={() => setOpt(0)} active={opt === 0}>
					<p className="text-lg">Create </p>
					<p className="text-sm">Wallet </p>
					<Bricks filled active={opt === 0} />
				</OnboardingBtn>
				<OnboardingBtn onClick={() => setOpt(1)} active={opt === 1}>
					<p className="text-lg">Import </p>
					<p className="text-sm">Wallet </p>
					<Bricks active={opt === 1} />
				</OnboardingBtn>
			</section>
			<Button variant="default" onClick={() => navigate("network")}>
				Continue
			</Button>
		</>
	);
};

export default Onboarding;

