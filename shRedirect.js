/*
 *	GLOBAL VAR
 */

baseURL = "https://whereisscihub.now.sh/go/";

function logTabs(tabs, nav = false) {

	// Diff beetween Chrome / Firefox ...
	if(nav){
		brw = chrome;
	}else{
		brw = browser;
	}

	for (let tab of tabs) {
		if ( tab.active ){
			brw.tabs.create({
				url: baseURL + escape(tab.url)
			});
			console.log(tab);
		}
	}
}

/*
 *	FIREFOX
 */

function onError(error) {
	console.log(`Error: ${error}`);
}

function startQuery() {
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(logTabs, onError);
}

/*
 *	EVENT LISTENER
 */

if(chrome){
	// Listener
	chrome.browserAction.onClicked.addListener(function(tab) {
		// Query current tab
		chrome.tabs.query(
			{active: true, currentWindow: true},
			(arrayOfTabs) => { logTabs(arrayOfTabs, true) }
		);
	});
}else{
	browser.browserAction.onClicked.addListener( startQuery );
}