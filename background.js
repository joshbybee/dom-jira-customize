chrome.runtime.onInstalled.addListener(async () => {
    
  });

  function doWork() {
  }
  
  chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: doWork
      });
    }
  });