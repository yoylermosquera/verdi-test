import { createContext } from "react";
import { Categorie } from "@/services/categories/getCateriesAndFilters";
import { ActionType } from "./reducer";
import { UserLoginResponse } from "@/services/user";

interface IAppContext {
    showSidebar: boolean;
    toggleSidebar(): void;
    categories?: Categorie[];
    user: UserLoginResponse & {
        token: string;
    }
    dispatch: React.Dispatch<ActionType>
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export default AppContext;