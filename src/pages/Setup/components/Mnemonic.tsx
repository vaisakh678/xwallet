import { Button } from "../../../components/ui/button";
import PhraseChip from "./ui/PhraseChip";
import { Checkbox } from "@/components/ui/checkbox";

interface MnemonicProps {
	mnemonic: string;
	onSubmit?: React.MouseEventHandler;
}

const Mnemonic: React.FC<MnemonicProps> = ({ mnemonic, onSubmit }) => {
	return (
		<>
			<section className="text-center mb-28">
				<h1 className="text-4xl font-semibold mb-4">Secret Recovery Phrase</h1>
				<p className="opacity-90">Save these words in a safe place.</p>
			</section>
			<section className="max-w-[500px] w-full grid grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-2 mb-8">
				{mnemonic.split(" ").map((mne, idx) => (
					<PhraseChip key={idx}>{mne}</PhraseChip>
				))}
			</section>
			<div className="flex items-center space-x-2 mb-8">
				<Checkbox id="terms" />
				<label
					htmlFor="terms"
					className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I saved my secret recovery phrase
				</label>
			</div>
			<Button onClick={onSubmit}>Next</Button>
		</>
	);
};

export default Mnemonic;

