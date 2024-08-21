import { IAccount } from "../contexts/Config";

export const generateAccountName = (accounts: Array<IAccount>) => {
	if (accounts.length === 0) return "Account 1";
	const hash = new Set();
	for (let i = 0; i < accounts.length; i++) hash.add(accounts[i].name);
	for (let i = accounts.length; i < 100; i++) {
		if (hash.has(`Account ${i}`)) continue;
		return `Account ${i}`;
	}
	return "Inf Account";
};

