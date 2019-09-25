/*
 *	GLOBAL VAR
 */

var baseURL = "https://whereisscihub.now.sh/go/";

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome

function logTabs(tab) {
    if ( tab.active ){
        browser.tabs.create({
            url: baseURL + escape(tab.url)
        });
        console.log(tab);
    }
}

/*
 *	EVENT LISTENER
 */

// Listener
browser.pageAction.onClicked.addListener(function(tab) { logTabs(tab) });

function checkForValidUrl(tabId, changeInfo, tab)
    {
        if(typeof tab != "undefined" && typeof tab != "null" )
        {
                // ... show the page action.
                browser.pageAction.show(tabId);
        }
    };

// Listen for any changes to the URL of any tab.
// Since Chrome does'nt support hide_match or show_match
browser.tabs.onUpdated.addListener(checkForValidUrl);
browser.tabs.onActivated.addListener(checkForValidUrl);
