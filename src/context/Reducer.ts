import { PetCriteria } from 'util/matchPet';
import { State } from './AppContext';

export type ActionTypes = 'SET_SEARCH_CRITERIA';
export type Action = {
    type: ActionTypes;
    payload?: PetCriteria;
};

type ReducerType = (state: State, action: Action) => State;

export const Reducer: ReducerType = (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH_CRITERIA':
            return { ...state, searchCriteria: action.payload ? action.payload : {} };
        default:
            return state;
    }
};
