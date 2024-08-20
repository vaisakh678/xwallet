import ThemeToggleBtn from "../../components/ui/ThemeToggleBtn";
import { useState } from "react";
import Onboarding from "./components/Onboarding";
import SelectNetwork from "./components/SelectNetwork";
import Mnemonic from "./components/Mnemonic";
import CreatePassword from "./components/CreatePassword";
import { Button } from "../../components/ui/button";

interface SetupProps {}

const Setup: React.FC<SetupProps> = () => {
	const [step, setStep] = useState(0);

	const handleNext = () => {
		setStep((prev) => {
			return Math.min(3, ++prev);
		});
	};

	return (
		<div className="min-h-svh p-4 flex items-center flex-col justify-center">
			<div className="p-4 absolute top-0 right-0">
				<ThemeToggleBtn />
			</div>
			{step === 0 ? <Onboarding /> : null}
			{step === 1 ? <SelectNetwork /> : null}
			{step === 2 ? <Mnemonic /> : null}
			{step === 3 ? <CreatePassword /> : null}
			<Button onClick={handleNext}>Continue</Button>
		</div>
	);
};

export default Setup;

