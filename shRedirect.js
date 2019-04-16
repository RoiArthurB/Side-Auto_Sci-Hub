function logTabs(tabs) {
	for (let tab of tabs) {
		if ( tab.active ){
			browser.tabs.create({
				url: "https://whereisscihub.now.sh/go/"+tab.url
			});
			console.log(tab);
		}
	}
}

function onError(error) {
	console.log(`Error: ${error}`);
}

function startQuery() {
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(logTabs, onError);
}

browser.browserAction.onClicked.addListener( startQuery );
