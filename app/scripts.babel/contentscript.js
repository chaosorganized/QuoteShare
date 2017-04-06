'use strict';

document.addEventListener('mouseup', function (event) {
  const sel = window.getSelection();
  if (sel.toString().length) {
    chrome.extension.sendRequest({'message':'setText','data': sel.toString()},function(response){})
  }
});
