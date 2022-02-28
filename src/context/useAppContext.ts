import { useContext } from 'react';
import { AppContext, State } from './AppContext';
import { Action } from './Reducer';

type ContextHook = () => {
    state: State;
    dispatch: (action: Action) => void;
};

export const useAppContext: ContextHook = () => {
    const { state, dispatch } = useContext(AppContext);
    return { state, dispatch };
};
