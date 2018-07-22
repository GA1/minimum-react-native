import {
  HANDLE_BUTTON_CLICK,
} from './appActionTypes';

export function handleButtonClick(indexOfClickedButton) {
  return {
    payload: {
      indexOfClickedButton: indexOfClickedButton,
    },
    type: HANDLE_BUTTON_CLICK,
  };
}
