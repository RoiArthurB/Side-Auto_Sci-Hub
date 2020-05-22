/*
 *  GLOBAL VAR
 */

// Prepare default value in case no new has been saved
const STORAGE_KEY = "ASH-baseUrl";
const DEFAULT_URL = "https://whereisscihub-15390rb7o.now.sh/go/";
let config = {};
config[STORAGE_KEY] = DEFAULT_URL;

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome;
let storage = browser.storage.local;

function openSciHubTab(tab, url) {
    if (tab.active) {
        storage.get(config, function (config) {
            browser.tabs.create({
                url: config[STORAGE_KEY] + url,
                index: tab.index + 1
            });
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
