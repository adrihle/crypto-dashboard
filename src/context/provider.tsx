import { EMenu } from '@constants';
import { IState } from '@interfaces';
import { useReducer, useState } from 'react';
import { Context, reducer } from '.';

const initialState: IState = {
    investments: [],
    menu: EMenu.DASHBOARD
}

export const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    const setLoading = (loading: boolean) => {
        setIsLoading(loading)
    };

    return (
        <Context.Provider value={{ state, isLoading, dispatch, setLoading }}>
            {children}
        </Context.Provider>
    )
}