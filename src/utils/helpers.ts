import { IAccount } from "../contexts/Config";
import { Account } from "../redux/masterDataSlice";

export const generateAccountName = (accounts: Array<IAccount | Account>) => {
	if (accounts.length === 0) return "Account 1";
	const hash = new Set();
	for (let i = 0; i < accounts.length; i++) hash.add(accounts[i].name);
	for (let i = accounts.length; i < accounts.length + 100; i++) {
		if (hash.has(`Account ${i}`)) continue;
		return `Account ${i}`;
	}
	return "Inf Account";
};

export const generateAlias = (str: string): string => {
	if (!str) return str;
	let res = "";
	for (const s of str.split(" ")) {
		res += s[0];
	}
	return res;
};

// m / purpose' / coin_type' / account' / change / address_index

export type TSymbol = "BTC" | "SOL" | "ETH";

export const getDerivationPath = (symbol: TSymbol, account: number) => {
	switch (symbol) {
		case "BTC":
			return { coinType: 0, derivationPath: `m/44'/0'/${account}'/0'` };
		case "SOL":
			return { coinType: 501, derivationPath: `m/44'/501'/${account}'/0'` };
		case "ETH":
			return { coinType: 60, derivationPath: `m/44'/60'/${account}'/0'` };
		default:
			throw new Error("Unknown Symbol: " + symbol);
	}
};

