import { createContext } from "react";

const ConfigContext = createContext(null);

const Config = ({ children }: { children: React.ReactNode }) => {
	return <ConfigContext.Provider value={null}>{children}</ConfigContext.Provider>;
};

export default Config;

