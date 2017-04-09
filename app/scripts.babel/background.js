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
      const domNode = document.createElement('div');
      const selectedContent = document.createTextNode(message.sel);
      domNode.appendChild(selectedContent);
      // TODO call the function that converts this node to canvas
      // TODO style this node
      // TODO integrate Twitter API
      break;
    default:
      break;
  }
  return true; // required for message listener to activate
});