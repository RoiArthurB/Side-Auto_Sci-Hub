/*
 * Code freely based on https://github.com/bekicot/scihub-firefox/blob/6cb5e3d9294a01c28cf18ae052b8d5f68e4d6e99/options.js
 * Love you @bekicot <3
 * 
 * By: @RoiArthurB
 */

const SCIHUB_URL = 'ASH-baseUrl';
const DEFAULT_SCIHUB_URL = 'https://whereisscihub.now.sh/go/';

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome;
let storage = browser.storage.local;
let defaultUrlInput = document.getElementById("defaultUrl");
defaultUrlInput.disabled = true;

let last_url = DEFAULT_SCIHUB_URL;
let config = {};

config[SCIHUB_URL] = DEFAULT_SCIHUB_URL;

storage.get(config, function (config) {
  defaultUrlInput.value = config[SCIHUB_URL];
  last_url = config[SCIHUB_URL];
  defaultUrlInput.disabled = false;
});

function buildURL(url) {
  // Check protocol
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    // if absent, assume is http
    url = "http://" + url
  }
  // Check trailing slash
  if (!url.endsWith("/")) {
    url = url + "/"
  }
  return url
}

// https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
function isValidUrl (url) {
  try {
    new URL(url)
  } catch (error) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
    return false
  }
  return true
}

function registerChanges(e) {
  let config = {};
  if (e.target.value == "") {
    document.getElementById("defaultUrlError").style.display = 'none';
    document.getElementById("defaultUrlSaved").style.display = 'block';
    config[SCIHUB_URL] = DEFAULT_SCIHUB_URL;
    storage.set(config);
  } else {
    let url = buildURL(e.target.value)
    if (!isValidUrl(url)) {
      document.getElementById("defaultUrlError").style.display = 'block';
      document.getElementById("defaultUrlSaved").style.display = 'none';
    } else {
      document.getElementById("defaultUrlError").style.display = 'none';
      document.getElementById("defaultUrlSaved").style.display = 'block';
      config[SCIHUB_URL] = url;
      storage.set(config);
    }
  }
}

defaultUrlInput.addEventListener("input", registerChanges);

