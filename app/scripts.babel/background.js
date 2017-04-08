'use strict';

const ACTION_TYPES = {
  SELECTION: 'selection'
};

chrome.runtime.onMessage.addListener((message = {}) => {
  switch (message.type) {
    case ACTION_TYPES.SELECTION:
      break;
    default:
      break;
  }
  return true; // required for message listener to activate
});