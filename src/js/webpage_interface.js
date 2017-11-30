'use strict';

/******************************************************************************/

(function() {

/******************************************************************************/

console.log("At least we're hooking in the right file.....");
chrome.runtime.onConnectExternal.addListener(function(port) {
        console.log("PORT!", port);

        // say hello every second once connection is made
        setInterval(function() {
        port.postMessage("hi from chrome app");
        console.log("trying to say hi")
    }, 1000);

        port.onMessage.addListener(function(msg) {
        // See other examples for sample onMessage handlers.
        console.log("msg received: ", msg);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        });
    });
})();