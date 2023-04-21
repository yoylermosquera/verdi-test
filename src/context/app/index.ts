import { createContext } from "react";

interface IAppContext {
    showSidebar: boolean;
    toggleSidebar(): void;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export default AppContext;