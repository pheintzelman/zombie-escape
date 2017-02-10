'use strict';
var Alexa = require("alexa-sdk");
var responses = require("./responses");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':askWithCard', responses.intro, responses.reprompt, "The journey begins", "Brains still turn your stomach you are doing ok so far.");
    }
};