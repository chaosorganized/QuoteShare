'use strict';
chrome.storage.sync.get('CONSTANTS', storedData => {
  const { CONSTANTS } = storedData;
  document.addEventListener('mouseup', function (event) {
    const sel = window.getSelection().toString();
    if (sel.length) {
      chrome.runtime.sendMessage({
        type: CONSTANTS.ACTION_TYPES.SELECTION,
        sel,
        event
      });
    }
  });
});


