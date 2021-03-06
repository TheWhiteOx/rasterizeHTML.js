(function () {
    "use strict";

    var isWebkit = navigator.userAgent.indexOf("WebKit") >= 0 &&
            navigator.userAgent.indexOf("Chrome") < 0,
        isWebkitOrBlink = navigator.userAgent.indexOf("WebKit") >= 0,
        isPhantomJs = navigator.userAgent.indexOf("PhantomJS") >= 0,
        isLocalRunner = document.baseURI.substr(0, 'file://'.length) === 'file://',
        testDisabledOnCondition = function (condition, text, functionHandle) {
            if (condition) {
                return it(text, functionHandle);
            } else {
                console.warn('Warning: "' + text + '" is disabled on this platform');
                return xit(text, functionHandle);
            }
        };
    window.ifNotInWebkitIt = function(text, functionHandle) {
        return testDisabledOnCondition(! isWebkit, text, functionHandle);
    };
    window.ifNotInWebkitOrBlinkIt = function (text, functionHandle) {
        return testDisabledOnCondition(! isWebkitOrBlink, text, functionHandle);
    };
    window.ifNotInPhantomJsIt = function(text, functionHandle) {
        return testDisabledOnCondition(! isPhantomJs, text, functionHandle);
    };
    window.ifNotInPhantomJSAndNotLocalRunnerIt = function (text, functionHandle) {
        return testDisabledOnCondition(! isPhantomJs && ! isLocalRunner, text, functionHandle);
    };
    window.ifNotInWebKitAndNotLocalRunnerIt = function (text, functionHandle) {
        return testDisabledOnCondition(! isWebkit && ! isLocalRunner, text, functionHandle);
    };
}());
