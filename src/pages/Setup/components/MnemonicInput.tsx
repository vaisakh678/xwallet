import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../../../components/ui/badge";
import { validateMnemonic } from "bip39";

interface MnemonicInputProps {
	mnemonic: string;
	setMnemonic: (arg: string) => void;
	onSubmit?: () => void;
}

const MnemonicInput: React.FC<MnemonicInputProps> = ({ setMnemonic, onSubmit }) => {
	const [mnemonicArr, setMnemonicArr] = useState(["", "", "", "", "", "", "", "", "", "", "", ""]);
	const [err, setErr] = useState("");

	const handleSubmit = () => {
		const mnemonicStr = mnemonicArr.join(" ");
		const valid = validateMnemonic(mnemonicStr);
		if (valid) {
			setMnemonic(mnemonicStr);
			onSubmit && onSubmit();
		} else {
			setErr("Invalid secret recovery phrase");
		}
	};

	const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
		const pastedText = event.clipboardData.getData("text");
		const stringArr = pastedText.split(" ");
		if (stringArr.length === 1) return;
		event.preventDefault();
		if (stringArr.length === 12) {
			setMnemonicArr(stringArr);
		}
	};

	return (
		<>
			<section className="text-center mb-28">
				<h1 className="text-4xl font-semibold mb-4">Secret Recovery Phrase</h1>
				<p className="opacity-90">Enter or paste your 12-word phrase.</p>
			</section>
			<section className="max-w-[500px] w-full grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-2">
				{mnemonicArr.map((val, idx) => (
					<Badge key={idx} className="rounded p-3 cursor-pointer text-1xl font-normal" variant="secondary">
						<input
							className="w-full outline-none bg-transparent"
							value={val}
							onChange={(e) => {
								console.log("change:", e.target.value);
								setMnemonicArr((prev) => {
									const cpy = [...prev];
									cpy[idx] = e.target.value;
									return cpy;
								});
							}}
							onPaste={handlePaste}
							placeholder={String(idx + 1)}
						/>
					</Badge>
				))}
			</section>
			{!!err && <p className="w-full text-center mt-1 text-red-600">{err}</p>}
			<div className="flex items-center space-x-2 my-8">
				<Checkbox id="terms" />
				<label
					htmlFor="terms"
					className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I saved my secret recovery phrase
				</label>
			</div>
			<Button onClick={() => handleSubmit()}>Next</Button>
		</>
	);
};

export default MnemonicInput;

