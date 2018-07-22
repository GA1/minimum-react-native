import {
  HANDLE_BUTTON_CLICK,
} from '../actions/article/appActionTypes';
import {createReducer} from "../utils/reducerUtils";

export const initialState = {
  indexOfMarkedButton: -1,
};


const actionsToStateChangesMap = {
  [HANDLE_BUTTON_CLICK]: (state, p) => {
    return {
      ...state,
      indexOfMarkedButton: p.indexOfClickedButton,
    };
  },
}

export const reducer = createReducer(actionsToStateChangesMap, initialState)