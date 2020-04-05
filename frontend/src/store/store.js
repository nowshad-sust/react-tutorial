import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import reducer from "./reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cartItems"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
	persistedReducer /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

const StateProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

export { StateProvider };
