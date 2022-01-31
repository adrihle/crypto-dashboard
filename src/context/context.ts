import { IState, IAction } from "@interfaces";
import { createContext } from "react";

export interface IContext {
    state: IState;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
    dispatch: (action: IAction) => void;
}

export const Context = createContext<IContext>({} as IContext);