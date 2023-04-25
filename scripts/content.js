const lut = {};


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request)
      

      if(lut["blah"]) return null;

      lut["blah"] = true;

      new Array(33).fill(null).map(async (_, i) => {

        setTimeout(async () => {
            const new_url = request.url.replace(/segment\d+\.ts/g, `segment${i}.ts`)
            console.log(new_url)
            const resp = await fetch(`${new_url}&fakefake=fakefake`)
            const blob = await resp.blob()
            var file = window.URL.createObjectURL(blob);
            const name = `segment${i.toString().padStart(2, '0')}.ts`
            //window.location.assign(file);

            var fileLink = document.createElement('a');
            fileLink.href = file;

            // it forces the name of the downloaded file
            fileLink.download = name;

            // triggers the click event
            fileLink.click();
        }, i *500)
      })
    }
  );