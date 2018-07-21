import {
  HANDLE_UNIT_CLICK,
} from '../actions/article/appActionTypes';
import {createReducer} from "../utils/reducerUtils";

export const initialState = {
  indexOfMarkedUnit: true,
};


const actionsToStateChangesMap = {
  [HANDLE_UNIT_CLICK]: (state, p) => {
    return {
      ...state,
      indexOfMarkedUnit: p.indexOfClickedUnit,
    };
  },
}

export const reducer = createReducer(actionsToStateChangesMap, initialState)