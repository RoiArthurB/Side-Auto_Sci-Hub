/*
 *  GLOBAL VAR
 */

// const BASE_URL = "https://whereisscihub.now.sh/go/";
const BASE_URL = "https://whereisscihub-rf7h2bfl8.now.sh/go/";

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome

function openSciHubTab(tab, url) {
    if (tab.active) {
        browser.tabs.create({
            url: BASE_URL + url,
            index: tab.index + 1
        });
    }
}

/*
 *  EVENT LISTENER
 */

// browserAction listener
browser.browserAction.onClicked.addListener(function (tab) { openSciHubTab(tab, tab.url) });

/**
 * Add context menu to save page.
 * Docs: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/ContextMenus/create
 */
browser.contextMenus.create({
    id: 'openscihubtab-page',
    contexts: ['page'],
    title: 'Open page in Sci-hub',
    onclick: function (info, tab) { openSciHubTab(tab, info.pageUrl) }
});

/**
 * Add context menu to save a selected link.
 */
browser.contextMenus.create({
    id: 'openscihubtab-link',
    contexts: ['link'],
    title: 'Open link in Sci-hub',
    onclick: function (info, tab) { openSciHubTab(tab, info.linkUrl) }
});
