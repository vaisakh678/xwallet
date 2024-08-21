import React from "react";
import OnboardingBtn from "./ui/OnboardingBtn";
import Bricks from "./ui/Bricks";
import { Button } from "../../../components/ui/button";

export type TMode = "Create" | "Import";
interface OnboardingProps {
	onSubmit?: React.MouseEventHandler;
	mode: TMode;
	setMode: (mode: TMode) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onSubmit, mode, setMode }) => {
	return (
		<>
			<section className="text-center mb-28">
				<h1 className="text-4xl font-semibold mb-4">Welcome to XWallet</h1>
				<p className="opacity-90">Let's get started.</p>
			</section>
			<section className="flex gap-2 mb-8">
				<OnboardingBtn onClick={() => setMode("Create")} active={mode === "Create"}>
					<p className="text-lg">Create </p>
					<p className="text-sm">Wallet </p>
					<Bricks filled />
				</OnboardingBtn>
				<OnboardingBtn onClick={() => setMode("Import")} active={mode === "Import"}>
					<p className="text-lg">Import </p>
					<p className="text-sm">Wallet </p>
					<Bricks />
				</OnboardingBtn>
			</section>
			<Button onClick={onSubmit}>Continue</Button>
		</>
	);
};

export default Onboarding;

