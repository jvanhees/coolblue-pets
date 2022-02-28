import { createContext, Dispatch, useReducer } from 'react';
import { PetCriteria } from 'util/matchPet';
import { Action, Reducer } from './Reducer';

export interface State {
    searchCriteria: PetCriteria;
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
