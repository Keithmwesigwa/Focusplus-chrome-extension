// define websites we have to block
var blockedSites = ["facebook.com",   
                    "twitter.com",
                    "instagram.com",
                    "tiktok.com",
                    "linkedin.com",
                    "pinterest.com",
                    "reddit.com",
                    "snapchat.com",
                    "discord.com",
                    "tumblr.com",
                    "twitch.tv",
                    "youtube.com",
                    "vimeo.com",
                    "flickr.com",
                    "myspace.com",   
                    "meetup.com",    
                    "whatsapp.com",    
                    "telegram.org",    
                    "weibo.com",    
                    "qzone.qq.com",    
                    "vk.com",    
                    "odnoklassniki.ru",    
                    "renren.com",    
                    "mixi.jp"
                    ];
// listen for web requests and block them
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        for (var i = 0; i < blockedSites.length; i++) {
            if (details.url.indexOf(blockedSites[i]) != -1) {
                return { cancel: true };
            }
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);

// listen for changes to blocked sites and update the array
chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (areaName === "sync" && "blockedSites" in changes) {
        blockedSites = changes.blockedSites.newValue;
    }   
});


  
