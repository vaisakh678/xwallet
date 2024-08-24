import { configureStore } from "@reduxjs/toolkit";

const localStorageMiddleware = (storeAPI) => (next) => (action) => {
	const result = next(action);
	const state = storeAPI.getState();
	localStorage.setItem("data", JSON.stringify(state.masterData.accounts));
	return result;
};

import masterData from "./masterDataSlice";

const store = configureStore({
	reducer: {
		masterData,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

// store.subscribe(() => {
// 	const state = store.getState();
// 	const accounts = state.masterData.accounts;
// 	console.log("accounts", accounts);
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

