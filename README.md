# Auto Sci-Hub ![Auto Sci-Hub Logo](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/icons/logo-128.png)

[![Language](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![GitHub](https://img.shields.io/github/license/RoiArthurB/Side-Auto_Sci-Hub.svg) 

![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)

[![Available on addons.mozilla.org](https://cdn-images-1.medium.com/max/1200/1*gbwMHf0PfoFJAPmL3L4Vrg.png)](https://addons.mozilla.org/en-US/firefox/addon/auto-sci-hub/)

[~~Available on chrome.google.com~~](https://chrome.google.com/webstore/detail/auto-sci-hub/nlogbpfgpkffmombiknfdoogphkimmmd/related?hl=en-US&authuser=0) 

> Don't respect Google's rules 😒
>
> _We do not authorize products or services that facilitate unauthorized access to content on websites, such as circumventing paywalls or login restrictions._

## Background

I was tired to copy the URL of pages to paste it in [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub) website 100 times per hours while I was reading scientific papers. 

So I've created a very simple button addon for [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/) which do it all for me.

## Installing

This part will explain you how to load the plugin in developper mode. I would recommand you to prefer installing the plugin from the official stores (with links above).

### Firefox

<!-- https://blog.mozilla.org/addons/2015/12/23/loading-temporary-add-ons/ -->

Open the debug page on the addon section

```
about:debugging#addons
``` 

> Depending on your version of Firefox, this link may redirect you somewhere else. e.g. Ff 71 => `about:debugging#/runtime/this-firefox`

From that webpage, press the bug button **Load Temporary Addon-On...** and choose the _manifest.json_.

### Chrome/Chromium

IDK the way to, but the plugin is working on it (because it's using the very raw functions of any browser If you want to complete that part, feel free to PR it 😉

Also, as written above, the plugin is not (and will never be) on the chrome store because it doesn't respect [it's policy](https://developer.chrome.com/webstore/program_policies#content_policies)

> Prohibited Products:
>
>   We don't allow products or services that:
>
>    * __Facilitate unauthorized access to content on websites, such as circumventing paywalls or login restrictions__
>    * Encourage, facilitate, or enable the unauthorized access, download, or streaming of copyrighted content or media
>    * Mine cryptocurrency

## How to use

Go on scientific page with PDF hidden behind a paywall, click on the _Auto Sci-Hub_ button, and Sci-Hub will pop up with your PDF on another tab 😀


Before | After
--- | ---
![Before screen](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/ressources/before.jpg) | ![After screen](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/ressources/after.jpg)

## Built With
* [Where Is Sci-Hub Now ?](https://whereisscihub.now.sh/) - List several alternative working links to active Sci-Hub mirrors

## Authors

* **Arthur Brugiere** - *Initial work* - [RoiArthurB](https://github.com/RoiArthurB)
* **Giacomo Rossetto** - *Upgraded almost everything* - [Jackymancs4](https://github.com/Jackymancs4)

## License

This project is licensed under the GPL 3 License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

PS: If the plugin is not available on markets anymore, it must be due to the fact that it doesn't respect Market Policy, so build it from source (it's a very simple plugin based on JS API, so it should work on any browser version) and enjoy the plugin ! 😀😀

PPS: If you love Sci-Hub too, support the project by sending a contribution to the Sci-Hub Bitcoin address: ***1K4t2vSBSS2xFjZ6PofYnbgZewjeqbG1TM***

PPPS: If it's too complicated to install the plugin on Chrome/ium, consider switching to Firefox 🦊
