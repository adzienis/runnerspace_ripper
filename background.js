chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const match = details.url.match(/(segment\d+\.ts)/g);
    if (match) {
      if (details.url.match(/fakefake=fakefake/g)) return null;

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (!tabs[0]) return null;

        chrome.tabs.sendMessage(tabs[0].id, {
          url: details.url,
          segment_idx: match[0],
          tab_url: tabs[0].url,
        });
      });
    }
  },
  { urls: ["<all_urls>"] }
);
