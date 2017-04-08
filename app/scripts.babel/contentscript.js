'use strict';

document.addEventListener('mouseup', function (event) {
  const sel = window.getSelection().toString();
  if (sel.length) {
    chrome.runtime.sendMessage({ type: 'selection', sel, event });
  }
});
