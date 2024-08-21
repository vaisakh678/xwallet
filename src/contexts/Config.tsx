import { createContext, useContext, useEffect, useReducer } from "react";
import { produce } from "immer";
import { generateAccountName } from "../utils/helpers";

export interface IWallet {
	uid: string;
	name: string;
	publicKey: string;
	privateKeyEnc: string;
}

export interface INetwork {
	uid: string;
	name: string;
	symbol: string;
	id: string;
	wallets: Array<IWallet>;
}

export interface IAccount {
	uid: string;
	name: string;
	mnemonicEnc: string;
	networks: Array<INetwork>;
}

enum Action {
	CREATE_ACCOUNT = "CREATE_ACCOUNT",
	CREATE_NETWORK = "CREATE_NETWORK",
	CREATE_WALLET = "CREATE_WALLET",
}

export type Optionalize<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

type TAction =
	| { type: Action.CREATE_ACCOUNT; payload: Optionalize<IAccount, "name" | "uid"> }
	| { type: Action.CREATE_NETWORK; payload: { accountUid: string; network: INetwork } }
	| { type: Action.CREATE_WALLET; payload: { accountUid: string; networkUid: string; wallet: IWallet } };

const reducer = (state: IAccount[], action: TAction) => {
	switch (action.type) {
		case Action.CREATE_ACCOUNT:
			return produce(state, (draft) => {
				const payload = action.payload;
				draft.push({
					mnemonicEnc: payload.mnemonicEnc,
					name: payload.name ? payload.name : generateAccountName(draft),
					networks: payload.networks,
					uid: crypto.randomUUID(),
				});
			});
		case Action.CREATE_NETWORK:
			return produce(state, (draft) => {
				const account = draft.find((account) => {
					return (account.uid = action.payload.accountUid);
				});
				if (!account) throw new Error("Account not found!.");
				account.networks.push(action.payload.network);
			});
		case Action.CREATE_WALLET:
			return produce(state, (draft) => {
				const account = draft.find((account) => {
					return (account.uid = action.payload.accountUid);
				});
				if (!account) throw new Error("Account not found!.");
				const network = account.networks.find((network) => {
					return network.uid === action.payload.networkUid;
				});
				if (!network) throw new Error("Network not found!.");
				network.wallets.push(action.payload.wallet);
			});
		default:
			throw new Error("Unknown action type!.");
	}
};

interface IConfigContext {
	createAccount: (account: Optionalize<IAccount, "name" | "uid">) => void;
	addNetwork: (payload: { accountUid: string; network: INetwork }) => void;
	addWallet: (payload: { accountUid: string; networkUid: string; wallet: IWallet }) => void;
	getAccount: (uid: string) => IAccount | undefined;
	getNetwork: (accountUid: string, networkUid: string) => INetwork | undefined;
	getWallet: (accountUid: string, networkUid: string, walletUid: string) => IWallet | undefined;
}

const initialState: IAccount[] = [];
const init = (): IAccount[] => {
	const savedData = localStorage.getItem("data");
	return savedData ? JSON.parse(savedData) : initialState;
};

const ConfigContext = createContext<IConfigContext | null>(null);

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
	const [data, dispatch] = useReducer(reducer, initialState, init);

	useEffect(() => {
		if (data && data.length) {
			localStorage.setItem("data", JSON.stringify(data));
		}
	}, [data]);

	const createAccount = (account: Optionalize<IAccount, "name" | "uid">) => {
		dispatch({ type: Action.CREATE_ACCOUNT, payload: account });
	};

	const addNetwork = (payload: { accountUid: string; network: INetwork }) => {
		dispatch({ type: Action.CREATE_NETWORK, payload });
	};

	const addWallet = (payload: { accountUid: string; networkUid: string; wallet: IWallet }) => {
		dispatch({ type: Action.CREATE_WALLET, payload });
	};

	const getAccount = (uid: string): IAccount | undefined => {
		return data.find((account) => account.uid === uid);
	};

	const getNetwork = (accountUid: string, networkUid: string): INetwork | undefined => {
		const account = data.find((account) => account.uid === accountUid);
		return account?.networks.find((network) => network.uid === networkUid);
	};

	const getWallet = (accountUid: string, networkUid: string, walletUid: string): IWallet | undefined => {
		const network = getNetwork(accountUid, networkUid);
		return network?.wallets.find((wallet) => wallet.uid === walletUid);
	};

	return (
		<ConfigContext.Provider value={{ createAccount, addNetwork, addWallet, getAccount, getNetwork, getWallet }}>
			{children}
		</ConfigContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useConfig = () => {
	const ctx = useContext(ConfigContext);
	if (ctx) return ctx;
	throw new Error("Config context only work inside config provider!.");
};

export default ConfigProvider;

