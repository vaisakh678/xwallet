import ThemeToggleBtn from "../../components/ui/ThemeToggleBtn";
import { useState } from "react";
import Onboarding from "./components/Onboarding";
import SelectNetwork from "./components/SelectNetwork";
import Mnemonic from "./components/Mnemonic";
import CreatePassword from "./components/CreatePassword";
import { useNavigate } from "react-router-dom";
import { generateMnemonic } from "bip39";
import { useConfig } from "../../contexts/Config";

interface SetupProps {}
export type TMode = "Create" | "Import";

const Setup: React.FC<SetupProps> = () => {
	const { createAccount } = useConfig();

	const [step, setStep] = useState(0);
	const [network, setNetwork] = useState<{ name: string; image: string; symbol: string; code: string } | null>(null);
	const [mode, setMode] = useState<TMode>("Create");
	const [mnemonic] = useState<string>(() => generateMnemonic().toString());

	const navigate = useNavigate();

	const handleNext = () => {
		if (step === 3) {
			navigate("/");
			return;
		}
		setStep((prev) => {
			return Math.min(3, ++prev);
		});
	};

	const handleSubmit = () => {
		if (network) {
			createAccount({
				mnemonicEnc: mnemonic,
				networks: [{ id: "none", name: network.name, symbol: network.symbol, uid: crypto.randomUUID(), wallets: [] }],
			});
			navigate("/");
		} else {
			console.log("Something went wrong!.");
		}
	};

	return (
		<div className="min-h-svh p-4 flex items-center flex-col justify-center">
			<div className="p-4 absolute top-0 right-0">
				<ThemeToggleBtn />
			</div>
			<div className="h-full flex items-center flex-col justify-center max-w-[800px] w-full">
				{step === 0 ? <Onboarding onSubmit={handleNext} mode={mode} setMode={setMode} /> : null}
				{step === 1 ? <SelectNetwork onSubmit={handleNext} network={network} setNetwork={setNetwork} /> : null}
				{step === 2 ? <Mnemonic onSubmit={handleSubmit} mnemonic={mnemonic} /> : null}
				{step === 3 ? <CreatePassword onSubmit={handleSubmit} /> : null}
			</div>
		</div>
	);
};

export default Setup;

