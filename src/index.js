'use strict';

var Alexa = require("alexa-sdk");
var stateManager = require("./chapter1/stateManager");
var apartment1 = require("./chapter1/apartment1");
var startingRoom = stateManager.States.Apartment1;


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers, apartment1.handlers);
    alexa.execute();
};

var handlers = {
    'NewSession': function () {
        console.log('NewSession');
        this.attributes.score = 0;
        this.handler.state = startingRoom;
        this.emitWithState('EnterRoomIntent');
    },
    'RestartIntent': function() {
        console.log('RestartIntent');
        this.attributes.score = 0;
        this.attributes.reset = true;
        this.attributes.rooms = {};

        this.emit('NewSession');
    },
    'Unhandled': function() {
        console.log('UnhandledIntent');
        this.emit(':tell', 'Something when wrong');
    }
};