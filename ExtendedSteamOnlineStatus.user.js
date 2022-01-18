// ==UserScript==
// @name         ExtendedSteamOnlineStatus
// @namespace    https://github.com/NetroScript
// @version      0.1
// @description  Add Busy, Looking to Play and Looking to Trade back to the Steam Chat
// @author       NetroScript
// @match        https://steamcommunity.com/chat
// @icon         https://steamcommunity.com/favicon.ico
// @grant        none
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.6.0.slim.js
// ==/UserScript==


window.setPersonaState = (state = 1) => {
    let buffer = new Uint8Array(("cc0200800f00000009ecbcdd0701001001108ccba08c02080"+state+"280138004000").match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)}));
    window.WebSocket.instances.filter(socket => socket.readyState == 1)[0].send(buffer.buffer)
}

(function() {
    'use strict';

    const original_websocket = WebSocket;

    class CustomWebsocket extends WebSocket {

        static instances = [];

        constructor(){
            console.log("Creating Websocket: ", ...arguments)
            super(...arguments);
            CustomWebsocket.instances.push(this);
        }
    }

    window.WebSocket = CustomWebsocket


    $(() => {

        const observer = new MutationObserver((mutations)=>{
            let addedNodes = [];

            mutations.forEach(mutation => {
                console.log(mutation)
                mutation.addedNodes.forEach(node => {

                    addedNodes.push(node);
                    const el = $(node);

                    if(el.find(".persona_menu_dnd_descriptor").length > 0) {

                        el.find(".contextMenuSectionContent").children().first().clone().text("Busy").addClass("busy-status-button").removeClass("menuChecked").insertAfter(el.find(".contextMenuSectionContent").children().last())
                        el.find(".contextMenuSectionContent").children().first().clone().text("Looking to trade").addClass("trade-status-button").removeClass("menuChecked").insertAfter(el.find(".contextMenuSectionContent").children().last())
                        el.find(".contextMenuSectionContent").children().first().clone().text("Looking to play").addClass("play-status-button").removeClass("menuChecked").insertAfter(el.find(".contextMenuSectionContent").children().last())

                        $(".busy-status-button").click(()=>{
                            window.setPersonaState(2);
                            addedNodes.forEach(entry => $(entry).hide());
                        });

                        $(".trade-status-button").click(()=>{
                            window.setPersonaState(5);
                            addedNodes.forEach(entry => $(entry).hide());
                        });

                        $(".play-status-button").click(()=>{
                            window.setPersonaState(6);
                            addedNodes.forEach(entry => $(entry).hide());
                        });
                    }

                })
            })
        })

        observer.observe(document.body, {childList: true})

    })


})();

