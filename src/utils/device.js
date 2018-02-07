let userAgent = (window.navigator && navigator.userAgent) || "";

function detect(pattern) {
    return function () {
        return (pattern).test(userAgent);
    };
}

export default {
    /**
     * Return true if the browser is Chrome or compatible.
     *
     * @method isChrome
     */
    isChrome: detect(/webkit\W.*(chrome|chromium)\W/i),

    /**
     * Return true if the browser is Firefox.
     *
     * @method isFirefox
     */
    isFirefox: detect(/mozilla.*\Wfirefox\W/i),

    /**
     * Return true if the browser is using the Gecko engine.
     *
     * This is probably a better way to identify Firefox and other browsers
     * that use XulRunner.
     *
     * @method isGecko
     */
    isGecko: detect(/mozilla(?!.*webkit).*\Wgecko\W/i),

    /**
     * Return true if the browser is Internet Explorer.
     *
     * @method isIE
     */
    isIE: function () {
        if (navigator.appName === "Microsoft Internet Explorer") {
            return true;
        } else if (detect(/\bTrident\b/)) {
            return true;
        } else {
            return false;
        }
    },


    /**
     * Return true if the browser is running on Kindle.
     *
     * @method isKindle
     */
    isKindle: detect(/\W(kindle|silk)\W/i),

    /**
     * Return true if the browser is running on a mobile device.
     *
     * @method isMobile
     */
    isMobile: detect(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),

    /**
     * Return true if we are running on Opera.
     *
     * @method isOpera
     */
    isOpera: detect(/opera.*\Wpresto\W|OPR/i),

    /**
     * Return true if the browser is Safari.
     *
     * @method isSafari
     */
    isSafari: detect(/webkit\W(?!.*chrome).*safari\W/i),

    /**
     * Return true if the browser is running on a tablet.
     *
     * One way to distinguish Android mobiles from tablets is that the
     * mobiles contain the string "mobile" in their UserAgent string.
     * If the word "Android" isn't followed by "mobile" then its a
     * tablet.
     *
     * @method isTablet
     */
    isTablet: detect(/(ipad|android(?!.*mobile)|tablet)/i),

    /**
     * Return true if the browser is running on a TV!
     *
     * @method isTV
     */
    isTV: detect(/googletv|sonydtv/i),

    /**
     * Return true if the browser is running on a WebKit browser.
     *
     * @method isWebKit
     */
    isWebKit: detect(/webkit\W/i),

    /**
     * Return true if the browser is running on an Android browser.
     *
     * @method isAndroid
     */
    isAndroid: detect(/android/i),

    /**
     * Return true if the browser is running on any iOS device.
     *
     * @method isIOS
     */
    isIOS: detect(/(ipad|iphone|ipod)/i),

    /**
     * Return true if the browser is running on an iPad.
     *
     * @method isIPad
     */
    isIPad: detect(/ipad/i),

    /**
     * Return true if the browser is running in Wechat.
     *
     * @method isIPad
     */
    isWechat: detect(/MicroMessenger/i),

    /**
     * Return true if the browser is running on an iPhone.
     *
     * @method isIPhone
     */
    isIPhone: detect(/iphone/i),

    /**
     * Return true if the browser is running on an iPod touch.
     *
     * @method isIPod
     */
    isIPod: detect(/ipod/i),

    /**
     * Return the complete UserAgent string verbatim.
     *
     * @method whoami
     */
    whoami: function () {
        return userAgent;
    }
};
