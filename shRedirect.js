/*
 *  GLOBAL VAR
 */

var baseURL = "https://whereisscihub-rf7h2bfl8.now.sh/"; //"https://whereisscihub.now.sh/go/";

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome

function openSciHubTab(tab) {
    if ( tab.active ){
        browser.tabs.create({
            url: baseURL + tab.url,
            index: tab.index + 1
        });
    }
}

/*
 *  EVENT LISTENER
 */

// Listener
browser.browserAction.onClicked.addListener(function(tab) { openSciHubTab(tab) });