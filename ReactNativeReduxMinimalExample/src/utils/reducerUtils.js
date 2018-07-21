export function createReducer(actionsToStateChangesMap, initialState) {
  return (state = initialState, action) =>  actionsToStateChangesMap.hasOwnProperty(action.type) ?
    actionsToStateChangesMap[action.type](state, action.payload) :
    state;
}