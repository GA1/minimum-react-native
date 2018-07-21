import {
  HANDLE_UNIT_CLICK,
} from './appActionTypes';

export function handleUnitClick(indexOfClickedUnit) {
  return {
    payload: {
      indexOfClickedUnit: indexOfClickedUnit,
    },
    type: HANDLE_UNIT_CLICK,
  };
}
