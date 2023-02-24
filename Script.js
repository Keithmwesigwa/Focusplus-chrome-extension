// define websites we have to block
var blockedSites = [
    

]
//listen for webrequests and block them
chrome.webRequest.OnBeforeRequest.addListener(
    function(details){
        for (var i = 0; i < blockedSites.length; i++){
            if(details.url.indexOf(blockedSites[i])!=-1){
                return {cancel:true};
            }
        }
    },
    {urls:["<all_urls>"]},
    ["blocking"]
);
chrome.storage.onChanged.addListener(
    function(changes, areaName){
        if (areaName == "sync" && "blockedSites" in changes){
            blockedSites = changes.blockedSites.newValue;
        }   
    }
);

  
