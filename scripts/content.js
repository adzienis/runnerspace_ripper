const lut = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (lut[request.tab_url]) return null;

  lut[request.tab_url] = true;

  new Array(33).fill(null).map(async (_, i) => {
    setTimeout(async () => {
      const new_url = request.url.replace(/segment\d+\.ts/g, `segment${i}.ts`);
      const resp = await fetch(`${new_url}&fakefake=fakefake`);
      const blob = await resp.blob();
      var file = window.URL.createObjectURL(blob);
      const name = `segment${i.toString().padStart(2, "0")}.ts`;

      var fileLink = document.createElement("a");
      fileLink.href = file;

      // it forces the name of the downloaded file
      fileLink.download = name;

      // triggers the click event
      fileLink.click();
    }, i * 500);
  });
});
