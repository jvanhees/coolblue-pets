import { createContext, Dispatch, useReducer } from 'react';
import { Action, Reducer } from './Reducer';

export type SearchCriteria = {
    title?: string;
    species?: string;
    available?: boolean;
};

export interface State {
    searchCriteria: SearchCriteria;
}

type Context = {
    state: State;
    dispatch: Dispatch<Action>;
};

const initialState: State = {
    searchCriteria: {},
};
export const AppContext = createContext<Context>({
    state: initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
