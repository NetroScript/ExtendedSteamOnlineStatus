// ==UserScript==
// @name         ExtendedSteamOnlineStatus
// @namespace    https://github.com/NetroScript/ExtendedSteamOnlineStatus
// @version      0.1
// @description  Add Busy, Looking to Play and Looking to Trade back to the Steam Chat
// @author       NetroScript
// @match        https://steamcommunity.com/chat
// @icon         https://steamcommunity.com/favicon.ico
// @grant        none
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.6.0.slim.js
// ==/UserScript==

// Helper function to set the current online state
window.setPersonaState = (state = 1) => {
    // Create an Array Buffer fitting for the ProtoBuf object which is used to send the persona state message
    /*
    Following Online states are possible:
    enum EPersonaState {
        'Offline' = 0,
        'Online' = 1,
        'Busy' = 2,
        'Away' = 3,
        'Snooze' = 4,
        'LookingToTrade' = 5,
        'LookingToPlay' = 6,
        'Invisible' = 7,
        'Max' = 8,
    } */
    let buffer = new Uint8Array([204, 2, 0, 128, 15, 0, 0, 0, 9, 236, 188, 221, 7, 1, 0, 16, 1, 16, 140, 203, 160, 140, 2, 8, state, 40, 1, 56, 0, 64, 0]);

    // If we don't have a global steam websocket yet, declare it
    if (!window.hasOwnProperty("SteamWebSocket")) {
        // Pick the first connected websocket;
        window.SteamWebSocket = window.WebSocket.instances.filter(socket => socket.readyState === 1)[0];
    }

    // Send our specific buffer;
    window.SteamWebSocket.send(buffer.buffer)
}

(function() {
    'use strict';

    // We don't make use of it, but just keep a copy of it, just to be sure
    const original_websocket = WebSocket;

    // Extend the WebSocket class of the browser, to be able to hook into its creation
    class CustomWebsocket extends WebSocket {

        // Statically keep a list of all ever created websocket instances
        static instances = [];

        // On creation, log our websocket
        constructor(){
            console.log("Creating Websocket: ", ...arguments)
            // Call the default construction
            super(...arguments);
            // Add the new instance to our list of instances
            CustomWebsocket.instances.push(this);
        }
    }

    // Overwrite the old object with the newly created class.
    window.WebSocket = CustomWebsocket

    // When the document is ready
    $(() => {

        // Create an observer
        const observer = new MutationObserver((mutations)=>{
            // Keep track of added nodes
            let addedNodes = [];

            // Iterate every mutation
            mutations.forEach(mutation => {
                // For each mutation, iterate the newly added nodes
                mutation.addedNodes.forEach(node => {

                    // Store the added node
                    addedNodes.push(node);

                    // Create a variable referring to the current node
                    const el = $(node);

                    // Check if the newly created DOM element is the user persona status drop down
                    if(el.find(".persona_menu_dnd_descriptor").length > 0) {

                        // create a utility function to add an online status

                        const addAdditionalButton = (displayName, personaState = 1) => {
                            // Create a clone of the first button to have the correct css names
                            el.find(".contextMenuSectionContent").children().first().clone()
                                // Remove the default selected class if it comes from online
                                .removeClass("menuChecked")
                                // Now add the active class, if the current display text of the status is the same as the wanted online status
                                .addClass(($(".AvatarAndUser > div > div > div").last().text() === displayName) ? "menuChecked" : "")
                                // Set the displayed string
                                .text(displayName)
                                // Add it at the end of the dropdown (of the normal states)
                                .insertAfter(el.find(".contextMenuSectionContent").children().last())
                                // Bind the on click event
                                .click(()=>{
                                    // Use the utility function to set the state
                                    window.setPersonaState(personaState);
                                    // hide all newly added nodes so the user doesn't see the menu anymore
                                    // and the steam react UI doesn't lose reference to its own menu
                                    addedNodes.forEach(entry => $(entry).hide());
                                });

                        }

                        // Add all our new online persona status buttons which were removed in Steam previously
                        addAdditionalButton("Busy", 2)
                        addAdditionalButton("Looking to Trade", 5)
                        addAdditionalButton("Looking to Play", 6)
                    }

                })
            })
        })

        // Watch all changes of the body element (just concering changing children)
        observer.observe(document.body, {childList: true})
    })
})();

