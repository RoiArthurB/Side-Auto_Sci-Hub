# Auto Sci-Hub ![Auto Sci-Hub Logo](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/icons/logo-128.png)

[![Language](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![GitHub](https://img.shields.io/github/license/RoiArthurB/Side-Auto_Sci-Hub.svg) 

![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)

[~~Available on addons.mozilla.org~~](https://addons.mozilla.org/en-US/firefox/addon/auto-sci-hub/)

> Don't respect Mozilla's rules 😒
> <details><summary>View report mail</summary>
> Dear contributor,
>
> We received a notification under Mozilla’s Digital Millennium Copyright Act (“DMCA”) and Trademark policy (https://www.mozilla.org/about/legal/report-infringement/) complaining of allegedly infringing activity by you on our service at https://addons.mozilla.org/en-US/firefox/addon/auto-sci-hub. We have removed or disabled access to your add-on identified by the claimant as infringing the claimant's trademark.
>
> The notice included the following report:
>
> From DeVore & DeMarco LLP:
>
> We are litigation counsel for Elsevier Inc., a leading publisher of scientific, engineering, and medical books and journals. Elsevier provides , among other things, the ScienceDirect platform, through which it distributes scientific journal articles in which it holds the copyright. In order to protect its copyright interest in those articles, Elsevier brought a civil action against a number of websites commonly known as "Sci-Hub" and "LibGen" or "Library Genesis" and their respective mirrors which engage in the large-scale infringement of those copyrights. On June 21, 2017, Elsevier obtained a judgement against those websites which, among other things, enjoined the websites, their operators, and anyone acting in concert with them, from infringing Elsevier' s copyrighted works or assisting others in doing so.
>
> We write to inform you of the presence of a number of add-ons for the Firefox web browser which are designed specifically to assist their users in infringing Elsevier 's (and other publisher') copyrights through the websites operated by the defendants in the above-mentioned civil action. We request that these extensions be removed from the Firefox Browser Add-Ons website (addons.mozilla.org) because they (1) violate the DMCA, including Section 1201 (circumvention of copyright protection systems); (2) operate in concert with the defendants in the above-mentioned civil action to violate Elsevier's copyrights in violation of the court 's order enjoining such conduct; and (3) are manifestly in violation of Mozilla's Conditions of Use (https://www.mozilla.om:/enUS/about/legal /acceptable-useD which expressly prohibit, among other things, illegal content and content which violates the copyright or other intellectual property rights of others. We therefore request that the following add-ons be promptly removed.
> </details>

[~~Available on chrome.google.com~~](https://chrome.google.com/webstore/detail/auto-sci-hub/nlogbpfgpkffmombiknfdoogphkimmmd/related?hl=en-US&authuser=0) 

> Don't respect Google's rules 😒
>
> <details><summary>View report mail</summary>
> Dear developer,
> 
> Your Google Chrome item "Auto Sci-Hub" with the ID nlogbpfgpkffmombiknfdoogphkimmmd did not comply with our rules and has been removed from the Chrome Web Store.
> 
> Your item did not comply with the following section of our Program Rules :
> 
> "Content Rules"
> 
> * We do not authorize products or services that facilitate unauthorized access to the content of websites that bypass paywalls.
> 
> 
> Once your item complies with the Chrome Web Store rules, you will be able to request that it be republished on the Chrome Web Store Developer Dashboard. Before publishing it again, we will check if it is compliant.
> 
> Please respond to this email if you have any questions about its content. The Chrome Web Store Developer Support team will contact you to follow up on your request.
> 
> 
> Important Note :
> 
> Repeated or harmful non-compliance with the Chrome Web Store rules can lead to suspension of your developer account or banning from using the Chrome Web Store platform.
> 
> It may also lead to the suspension of related Google services associated with your Google Account.
> 
> 
> Sincerely,
> 
> Chrome Web Store Developer Support
> </details>

[Available on Github release](https://github.com/RoiArthurB/Side-Auto_Sci-Hub/releases/latest)

> Check the doc (quick link [here](https://roiarthurb.github.io/Side-Auto_Sci-Hub/#installing)) to see how to simply install on your browser 🐻

## Background

I was tired to copy the URL of pages to paste it in [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub) website 100 times per hours while I was reading scientific papers. 

So I've created a very simple button addon for [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/) which do it all for me.

## Installing

### Firefox

<details>
  <summary>View contents</summary>
  <ol>
    <li>Download the <code>.xpi</code> file from the <a href="https://github.com/RoiArthurB/Side-Auto_Sci-Hub/releases">latest release</a></li>
    <li>Click the <em>Continue to install</em> pop-up button</li>
    <li>Enjoy the plugin <g-emoji class="g-emoji" alias="bear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png"><img class="emoji" alt="bear" src="https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png" width="20" height="20"></g-emoji></li>
  </ol>
</details>
  
### Chrome/Chromium

<details>
  <summary>View contents</summary>
  <ol>
    <li>Download the <code>.crx</code> file from the <a href="https://github.com/RoiArthurB/Side-Auto_Sci-Hub/releases">latest release</a></li>
    <li>Open the chrome://extensions/ link</li>
    <li>Enable the <code>Developer Mode</code></li>
    <li>Drag and drop the downloaded crx file in the browser window</li>
    <li>Click the <em>Add extension</em> pop-up button</li>
    <li>Enjoy the plugin <g-emoji class="g-emoji" alias="bear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png"><img class="emoji" alt="bear" src="https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png" width="20" height="20"></g-emoji></li>
  </ol>
</details>

### Zip developper install (hard mode)

<details>
  <summary>View contents</summary>
  
  <h4>Firefox</h4>

  <p>Open the debug page on the addon section</p>
  <pre><code>about:debugging#addons</code></pre>
  <blockquote>
    <p>Depending on your version of Firefox, this link may redirect you somewhere else. e.g. Ff 71 =&gt; <code>about:debugging#/runtime/this-firefox</code></p>
  </blockquote>
  <p>From that webpage, press the bug button <strong>Load Temporary Addon-On...</strong> and choose the <em>manifest.json</em>.</p>
  
  <h4>Chrome/Chromium</h4>
  
  <ol>
    <li>Download and extract the latest zip from <a href="https://github.com/RoiArthurB/Side-Auto_Sci-Hub/releases">https://github.com/RoiArthurB/Side-Auto_Sci-Hub/releases</a></li>
    <li>Delete _config.yml from the folder (Chrome doesn't like reading files starting with _ for some reason but this file is for <a href="https://roiarthurb.github.io/Side-Auto_Sci-Hub/" rel="nofollow">the GitHub Pages site</a> so removing it isn't an issue)</li>
    <li>Go to Chrome's extensions page, enable Developer Mode</li>
    <li>Click Load unpacked, and select the extracted zip folder.</li>
  </ol>
  <p>You'll also need to right click the Open in Sci Hub toolbar icon now, click Options, then change the URL to another Sci-Hub mirror because whereisscihub.now.sh is down.</p>
  <p>Also, as written above, the plugin is not (and will never be) on the chrome store because it doesn't respect <a href="https://developer.chrome.com/webstore/program_policies#content_policies" rel="nofollow">it's policy</a></p>
  <blockquote>
    <p>Prohibited Products:</p>
    <p>We don't allow products or services that:</p>
    <ul>
      <li><strong>Facilitate unauthorized access to content on websites, such as circumventing paywalls or login restrictions</strong></li>
      <li>Encourage, facilitate, or enable the unauthorized access, download, or streaming of copyrighted content or media</li>
      <li>Mine cryptocurrency</li>
    </ul>
  </blockquote>
</details>

## How to use

### Firefox addon button

Go on scientific page with PDF hidden behind a paywall, click on the _Auto Sci-Hub_ button, and Sci-Hub will pop up with your PDF on another tab 😀

Before | After
--- | ---
![Before screen](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/ressources/before.jpg) | ![After screen](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/ressources/after.jpg)

### Context Menu

If you right click on a link, you'll see in the contextual menu a line to open to location of that link in sci-hub.

It's also possible to do the same by right clicking anywhere on the webpage. In that case it will open the current web page on sci-hub.

Link | Page
--- | ---
![contextual link](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/ressources/link.png) | ![contextual page](https://raw.githubusercontent.com/RoiArthurB/Side-Auto_Sci-Hub/master/ressources/page.png)

<!-- A huge thanks to @Jackymancs4 for that awesome work ! :D -->

### Options

Also, from the version 2.0, you're now free to choose your how redirection. That way you're able to use a raw IP address, your own instance of [WhereIsSciHub](https://gitlab.com/Flockademic/whereisscihub), or whatever you want 😀

![ASH option view](https://user-images.githubusercontent.com/6759913/73458392-7caa6d80-4375-11ea-96b9-a25a754c6707.png)

## Built With
* [Where Is Sci-Hub Now ?](https://whereisscihub.now.sh/) - List several alternative working links to active Sci-Hub mirrors

> FYI - The plugin currently use a fork fixed of the official WhereIsSciHub, _Vinni_ (the author of that tool) can't update his version now so I'm using [a fork](https://gitlab.com/Flockademic/whereisscihub/-/merge_requests/4) to have a working plugin ! :D 

## Authors

* **Arthur Brugiere** - *Initial work* - [RoiArthurB](https://github.com/RoiArthurB)

## Contribution

* **Giacomo Rossetto** - *Upgraded almost everything* - [Jackymancs4](https://github.com/Jackymancs4)
* **clef** - *Helped for the Firefox signing release* - [Clef-0](https://github.com/Clef-0)

## License

This project is licensed under the GPL 3 License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

PS: If the plugin is not available on markets anymore, it must be due to the fact that it doesn't respect Market Policy, so build it from source (it's a very simple plugin based on JS API, so it should work on any browser version) and enjoy the plugin ! 😀😀

PPS: If you love Sci-Hub too, support the project by sending a contribution to the Sci-Hub Bitcoin address: ***12PCbUDS4ho7vgSccmixKTHmq9qL2mdSns*** (check if it hasn't changed before giving ;) )

