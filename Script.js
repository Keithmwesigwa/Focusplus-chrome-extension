var blockedSites = [    "facebook.com",    "instagram.com",    "tiktok.com",    "reddit.com"];

//listen for webrequests and block them
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        for (var i = 0; i < blockedSites.length; i++){
            if(details.url.indexOf(blockedSites[i])!=-1){
                return {cancel:true};
            }
        }
    },
    {urls:["<all_urls>"]
    ["blocking"]
);
chrome.storage.onChanged.addListener(
    function(changes, areaName){
        if (areaName == "sync" && "blockedSites" in changes){
            blockedSites = changes.blockedSites.newValue;
        }   
    }
);

  
