import { Context } from "@context";
import { useContext } from "react";
import { investments as mock } from '@mock';
import { EActions, EMenu } from "@constants";

const URL = process.env.REACT_APP_URL_BASE ?? '';

export const useDashaboard = () => {
    const { state, isLoading, setLoading, dispatch } = useContext(Context);
    const { investments, menu } = state;

    const total = investments.reduce((acc, investment) => {
        return acc += investment.stock
    }, 0).toFixed(2);

    const fetchInvestments = async () => {
        setLoading(true);
        const investmentsFetched = mock;
        dispatch({ type: EActions.PULL_INVESTMENTS, investments: investmentsFetched });
        setLoading(false);
    };

    const selectMenu = (selected: EMenu) => {
        setLoading(true);
        dispatch({ type: EActions.SELECT_MENU, selected });
        setLoading(false);
    };

    const formatPrice = (qty: number) => {
        const nf = new Intl.NumberFormat('en-EN');
        return nf.format(qty)
    }

    return {
        investments,
        total,
        menu,
        isLoading,
        fetchInvestments,
        selectMenu,
        formatPrice
    }
}