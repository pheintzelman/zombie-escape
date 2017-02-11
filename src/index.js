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
        this.handler.state = startingRoom;
        this.emitWithState('NewSession');
    },
    'Unhandled': function() {
        console.log('UnhandledIntent');
        this.emit(':tell', 'Something when wrong');
    }
};