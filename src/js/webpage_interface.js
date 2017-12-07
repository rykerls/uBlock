'use strict';

/******************************************************************************/

chrome.runtime.onConnectExternal.addListener(function(port) {
        console.log("PORT!", port);
        if (confirm("This webpage is requesting you add it to your adblocker's whitelist as part of Ublock Origin's responsible ad program. By clicking yes below, you will be taken to your whitelist settings to confirm these changes.")) {
            window.open('whitelist.html', '_blank');
        } else {
            // Do nothing!
        }
        
        
        port.onMessage.addListener(function(msg) {
        // See other examples for sample onMessage handlers.
        console.log("msg received: ", msg);
        });
    });