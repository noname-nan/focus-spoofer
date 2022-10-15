// ==UserScript==
// @name         focus-spoofer
// @namespace    https://github.com/noname-nan/focus-spoofer
// @version      1
// @description  Bypass for focus detection on websites.
// @author       noname-nan
// @match        https://example.com
// @icon         https://avatars.githubusercontent.com/u/97813360?
// @grant        none
// ==/UserScript==
// ADD URLS WITH @match url

(function () {
    document.hasFocus = () => true;
})();