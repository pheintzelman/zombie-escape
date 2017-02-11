'use strict';

var Alexa = require("alexa-sdk");
var responses = require("./responses");
var cards = require("./cards");
var stateManager = require("./stateManager");
var states = stateManager.States;
var roomName = states.Apartment1;

var apartment1 = {};

var initialState = {'visits':0,
                    'food':true,
                    'moneySock':true,
                    'zombieCount':1,
                    'zombieInBathRoom':true,
                    'onFire':false};

apartment1.handlers = Alexa.CreateStateHandler(states.Apartment1, {
    'EnterRoomIntent': function () {
        console.log('Apartment1 NewSession');
        var room = getRoom(this.attributes);
        room.visits++;

        if(this.attributes.reset && room.visits === 1){
            this.attributes.score += 50
            this.emit(':ask', responses.apartment1ShortIntro, responses.reprompt);
        }

        if(room.visits === 1){
            this.attributes.score += 50
            this.emit(':askWithCard', responses.apartment1LongIntro, responses.reprompt, cards.start.title, cards.start.content);
        }

        this.emit(':ask', responses.apartment1Revisit, responses.reprompt);
    },

    'ExitRoomIntent': function () {
        console.log('Apartment1 ExitRoomIntent');
        this.emit(':ask', responses.notImplemented, responses.reprompt);
    },

    'Unhandled': function() {
        console.log('Apartment1 UnhandledIntent');
        this.emit(':ask', responses.apartment1Unhandled, responses.reprompt);
    },

    'RestartIntent': function () {
        console.log('Apartment1 RestartIntent');
        this.emit('RestartIntent');
    },
});

function getRoom(attributes){
    if(!attributes.rooms){
        attributes.rooms = {};
    }

    if(!attributes.rooms[roomName]){
        console.log('Apartment1 initialState');
        attributes.rooms[roomName] = Object.assign({}, initialState);
    }

    return attributes.rooms[roomName];
}

module.exports = apartment1;