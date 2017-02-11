'use strict';

var Alexa = require("alexa-sdk");
var responses = require("./chapter1/responses");
var cards = require("./chapter1/cards");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        console.log('LaunchRequest');
        this.emit(':askWithCard', responses.intro, responses.reprompt, cards.start.title, cards.start.content);
    },
    'ExitRoomIntent': function () {
        console.log('ExitRoomIntent');
        this.emit(':tell', responses.notImplemented);
    },
    'Unhandled': function() {
        console.log('UnhandledIntent');
        this.emit(':tell', 'Something when wrong');
    }
};