import { EActions } from "@constants";
import { IState, IAction } from "@interfaces";

export const reducer = (state: IState, action: IAction): IState => {
    const { type } = action;
    switch (type) {
        case EActions.PULL_INVESTMENTS: {
            const { investments } = action;
            return {
                ...state,
                investments
            };
        };
        case EActions.SELECT_MENU: {
            const { selected: menu } = action;
            return {
                ...state,
                menu
            };
        };
        default: return state;
    }
}