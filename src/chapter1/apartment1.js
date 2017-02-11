'use strict';

var Alexa = require("alexa-sdk");
var responses = require("./responses");
var cards = require("./cards");
var stateManager = require("./stateManager");
var states = stateManager.States;
var apartment1 = {};

apartment1.handlers = Alexa.CreateStateHandler(states.Apartment1, {
    'NewSession': function () {
        console.log('Apartment1 NewSession');
        this.emit(':askWithCard', responses.apartment1LongIntro, responses.reprompt, cards.start.title, cards.start.content);
    },
    'ExitRoomIntent': function () {
        console.log('Apartment1 ExitRoomIntent');
        this.emit(':tell', responses.notImplemented);
    },
    'Unhandled': function() {
        console.log('Apartment1 UnhandledIntent');
        this.emit(':ask', responses.apartment1Unhandled);
    }
});

module.exports = apartment1;