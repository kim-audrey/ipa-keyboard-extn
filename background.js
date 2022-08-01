chrome.tabs.onUpdate.addLister((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")){
        const queryParameters = tab.url.split("?")[1];
        const urlParams = new URLSearchParams(queryParameters);
        // send message to content script with the new video url
        // send message takes tabId, unique object, and callback function
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("V"),
            // somethingTHat: "...content script has access to"
        })
    }
})