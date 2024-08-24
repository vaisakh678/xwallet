import * as bip39 from "bip39";

const mnemonic =
	"abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon"; // Example mnemonic

try {
	const seed = bip39.mnemonicToSeedSync(mnemonic);
	console.log("Seed:", seed.toString("hex")); // Output the seed in hexadecimal format
} catch (error) {
	console.error("Error:", error.message);
}

