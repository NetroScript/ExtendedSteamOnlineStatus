[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<br />
<p align="center">

<h3 align="center">ExtendedSteamOnlineStatus</h3>

  <p align="center">
    This is a UserScript which adds Busy, Looking to Trade and Looking to Play back to the available user statuses on Steam. These additional options are only added to https://steamcommunity.com/chat but setting them should persist in other clients too, as long as you don't change them in another session.
    <br />
    <br />
    <a href="https://github.com/NetroScript/ExtendedSteamOnlineStatus/issues">Report Bug</a>
    ·
    <a href="https://github.com/NetroScript/ExtendedSteamOnlineStatus/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-userscript">About the UserScript</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About the UserScript

![Image example for status](https://i.imgur.com/s2S41mD.gif)

As you can see, all this really adds is just three more options for the status. On the top of the gif, it is also visible, how my Steam desktop client changes the online status too.

* Busy
* Looking to Trade
* Looking to Play

There isn't really much else to say :)

Feel free to take a look at the code to understand what it is doing, it should be sufficiently documented.

## Installation

As this is a userscript, it requires you to install a userscript manager to make use of this extension.

There are many userscript managers available for all browsers, I myself use Tampermonkey and only tested this with Tampermonkey. Below you have a list with some (you need only one):

* **Tampermonkey** ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
* **Greasemonkey** ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/))
* **Violentmonkey** ([Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/))

After installing the userscript manager, you can just click the following link to be prompted to install the userscript:

[ExtendedSteamOnlineStatus.user.js](https://github.com/NetroScript/ExtendedSteamOnlineStatus/raw/master/ExtendedSteamOnlineStatus.user.js)

Alternatively, you could also just install it manually. For that follow the documentation of your userscript manager.

## Contributing

Feel free to add more localisations or improve parts.
To do so:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NetroScript/ExtendedSteamOnlineStatus.svg?style=for-the-badge
[contributors-url]: https://github.com/NetroScript/ExtendedSteamOnlineStatus/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NetroScript/ExtendedSteamOnlineStatus.svg?style=for-the-badge
[forks-url]: https://github.com/NetroScript/ExtendedSteamOnlineStatus/network/members
[stars-shield]: https://img.shields.io/github/stars/NetroScript/ExtendedSteamOnlineStatus.svg?style=for-the-badge
[stars-url]: https://github.com/NetroScript/ExtendedSteamOnlineStatus/stargazers
[issues-shield]: https://img.shields.io/github/issues/NetroScript/ExtendedSteamOnlineStatus.svg?style=for-the-badge
[issues-url]: https://github.com/NetroScript/ExtendedSteamOnlineStatus/issues
[license-shield]: https://img.shields.io/github/license/NetroScript/ExtendedSteamOnlineStatus.svg?style=for-the-badge
[license-url]: https://github.com/NetroScript/ExtendedSteamOnlineStatus/blob/master/LICENSE
