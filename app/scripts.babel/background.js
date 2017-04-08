'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

chrome.runtime.onMessage.addListener(message => {
  console.log(message, sender, cb);
  return true;
});

console.log('\'Allo \'Allo! Event Page for Page Action');
