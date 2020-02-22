/*
 * Code based on a copy-paste from https://github.com/bekicot/scihub-firefox/blob/6cb5e3d9294a01c28cf18ae052b8d5f68e4d6e99/options.js
 * Love you @bekicot <3
 */
const SCIHUB_URL = 'ASH-baseUrl';
const DEFAULT_SCIHUB_URL = 'https://whereisscihub.now.sh/go/';

let storage = browser.storage.local;
let defaultUrlInput = document.getElementById("defaultUrl");
defaultUrlInput.disabled = true;

let last_url = DEFAULT_SCIHUB_URL;
let config = {};

config[SCIHUB_URL] = DEFAULT_SCIHUB_URL;

storage.get(config).then(function(config) {
  defaultUrlInput.value = config[SCIHUB_URL];
  last_url = config[SCIHUB_URL];
  defaultUrlInput.disabled = false;
});

function registerChanges(e) {
  if (!e.target.value.match(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?\/$/)) {
    document.getElementById("defaultUrlError").style.display = 'block';
    document.getElementById("defaultUrlSaved").style.display = 'none';
  } else {
    document.getElementById("defaultUrlError").style.display = 'none';
    document.getElementById("defaultUrlSaved").style.display = 'block';
    let config = {};
    config[SCIHUB_URL] = e.target.value;
    storage.set(config);
  }
}

defaultUrlInput.addEventListener("input", registerChanges);

