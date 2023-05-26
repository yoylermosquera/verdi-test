import { createContext } from "react";
import { Categorie } from "@/services/categories/getCateriesAndFilters";
import { State } from "./reducer";
import { UserLoginResponse } from "@/services/user";
import { ActionType } from "./actions";

interface IAppContext {
    showSidebar: boolean;
    toggleSidebar(): void;
    categories?: Categorie[];
    user: UserLoginResponse & {
      token: string;
    }
    state: State;
    dispatch: React.Dispatch<ActionType>
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export default AppContext;