import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";
import { generateAccountName, getDerivationPath, TSymbol } from "../utils/helpers";
import { RootState } from "./store";

export interface Wallet {
	uuid: string;
	name: string;
	publicKey: string;
	privateKey: string;
}

export interface Network {
	uuid: string;
	name: string;
	symbol: string;
	wallets: Array<Wallet>;
}

export interface Account {
	uuid: string;
	name: string;
	mnemonic: string;
	networks: Array<Network>;
}

interface InitialState {
	accounts: Account[];
	activeAccount: null | Account;
	activeNetwork: null | Network;
	activeWallet: null | Wallet;
}

export const createWallet = ({ mnemonic, symbol, accountIdx }: { mnemonic: string; symbol: TSymbol; accountIdx: number }): Wallet => {
	const seed = bip39.mnemonicToSeedSync(mnemonic);

	const derivationPath = getDerivationPath(symbol, accountIdx).derivationPath;
	const derivedSeed = derivePath(derivationPath, seed.toString("hex")).key;
	const keypair = Keypair.fromSeed(derivedSeed);

	return {
		uuid: crypto.randomUUID(),
		name: "Wallet 1",
		publicKey: keypair.publicKey.toString(),
		privateKey: Buffer.from(keypair.secretKey).toString("base64"),
	};
};

export interface Presist {
	account_uuid: string;
	network_uuid: string;
	wallet_uuid: string;
}

export const fetchAccountsThunk = createAsyncThunk("master-data/createAccount", async () => {
	const data = JSON.parse(localStorage.getItem("data") || "[]") as Account[];
	let presist = localStorage.getItem("presist") || null;
	if (presist) presist = JSON.parse(presist);
});

export const createAccountThunk = createAsyncThunk(
	"master-data/createAccount",
	async ({ symbol, mnemonic }: { symbol: TSymbol; mnemonic: string }, thunkAPI) => {
		try {
			const state: RootState = thunkAPI.getState() as RootState;
			const accounts = state.masterData.accounts;
			const wallet = createWallet({
				mnemonic,
				accountIdx: 1,
				symbol,
			});
			const network: Network = {
				name: "Solana",
				symbol,
				uuid: crypto.randomUUID(),
				wallets: [wallet],
			};
			return {
				uuid: crypto.randomUUID(),
				name: generateAccountName(accounts),
				mnemonic,
				networks: [network],
			};
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
);

const masterDataSlice = createSlice({
	name: "master-data",
	initialState: <InitialState>{
		activeAccount: null,
		activeNetwork: null,
		activeWallet: null,
		accounts: [],
	},
	reducers: {
		selectAccount: (state, action: PayloadAction<{ uuid: string }>) => {
			const { uuid } = action.payload;
			const account = state.accounts.find((account) => account.uuid === uuid);
			if (account) {
				state.activeAccount = account;
			}
		},
		selectNetwork: (state, action: PayloadAction<{ uuid: string }>) => {
			const { uuid } = action.payload;
			const network = state.activeAccount?.networks.find((network) => network.uuid === uuid);
			if (network) {
				state.activeNetwork = network;
			}
		},
		selectWallet: (state, action: PayloadAction<{ uuid: string }>) => {
			const { uuid } = action.payload;
			const wallet = state.activeNetwork?.wallets.find((wallet) => wallet.uuid === uuid);
			if (wallet) {
				state.activeWallet = wallet;
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(createAccountThunk.fulfilled, (state, action) => {
			const { payload: account } = action;
			state.accounts.push(account);
			state.activeAccount = account;
			state.activeNetwork = account.networks[0];
			state.activeWallet = account.networks[0].wallets[0];
		});
	},
});

export const { selectAccount, selectNetwork, selectWallet } = masterDataSlice.actions;
export default masterDataSlice.reducer;

