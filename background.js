
try {
  chrome.runtime.onInstalled.addListener(() => {
    console.log('asdasd')
  });

  chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
      const match = details.url.match(/(segment\d+\.ts)/g)
      if(match) {
        console.log(details.url)
        console.log(match[0])

        if(details.url.match(/fakefake=fakefake/g)) return null;

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          console.log(tabs)

          chrome.tabs.sendMessage(tabs[0].id, { url: details.url, segment_idx: match[0]}, function(response) {
            
          });
        });


      }
     },
    {urls: ["<all_urls>"]}
  );
} catch (e) {
  console.log(e)
}