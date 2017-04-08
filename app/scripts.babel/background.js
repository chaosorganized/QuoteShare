'use strict';

const CONSTANTS = Object.freeze({
  ACTION_TYPES: {
    SELECTION: 'selection'
  }
});

chrome.storage.sync.set(CONSTANTS);

chrome.runtime.onMessage.addListener((message = {}) => {
  switch (message.type) {
    case CONSTANTS.ACTION_TYPES.SELECTION:
      break;
    default:
      break;
  }
  return true; // required for message listener to activate
});