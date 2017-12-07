'use strict';

/******************************************************************************/

chrome.runtime.onConnectExternal.addListener(function(port) {
        console.log("PORT!", port);
        
        port.onMessage.addListener(function(msg) {
        // See other examples for sample onMessage handlers.
        console.log("msg received: ", msg);
        var encoded = encodeURIComponent(msg);
        console.log(encoded)
        if (confirm("This webpage is requesting to be added to Ublock Origin's whitelist.\n\nUblock origin works with non-profits, open-source projects, and similar entities that follow best practices for online advertisement and respect your privacy.\n\nThe choice is ultimately yours. Click OK to be taken to the Ublock Origin's whitelist settings.")) {
            window.open('whitelist.html?str=' + encoded , '_blank');
        } else {
            // Do nothing!
        }
        });
    });