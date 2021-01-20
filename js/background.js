chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.tabs.sendMessage(tabId, {
      message: {
        changeInfo: changeInfo,
        tab: tab,
      },
    });
  }
});
