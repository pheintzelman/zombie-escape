'use strict';

var responses = {};

/**
 * Global
 */
responses.reprompt = "What do you do?"
responses.notImplemented = "Nice try but that isn't working yet."

/**
 * Apartment1
 */
responses.apartment1LongIntro = `You awake in your friend's apartment to strange gutteral sounds. Your friend lunges at you but gets tangled in some cords. It isn't just a bad burrito your friend has become a zombie and he wants nothing more than to eat you. With a struggle you manage to lock them in the bathroom, but it is unclear how long the door will hold. Somehow you must escape. What do you do?`;

responses.apartment1ShortIntro = `Your friend lunges at you with a struggle you manage to lock them in the bathroom, but it is unclear how long the door will hold. Somehow you must escape. What do you do?`;
responses.apartment1Revisit = `You enter your friends apartment.`;
responses.apartment1Unhandled = `I'm not sure what you are trying to do but you are still in your friend's apartment. Try something else. `;

module.exports = responses;