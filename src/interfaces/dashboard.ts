import { EActions, EMenu } from "@constants";

export interface IState {
    investments: IInvestment[];
    menu: keyof typeof EMenu;
}

export type IAction =
    | { type: EActions.PULL_INVESTMENTS; investments: IInvestment[]; }
    | { type: EActions.SELECT_MENU; selected: EMenu }

export interface IInvestment {
    id: string;
    name: string;
    sku: string;
    stock: number;
    variant: number;
}