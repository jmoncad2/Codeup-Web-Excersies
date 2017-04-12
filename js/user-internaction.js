/**
 * Created by jaimem
 * oncada on 4/12/17.
 */

"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var response = prompt("Hello my name is....well tell me your's first?");

while (response === null) {
    alert("Come on don't be shy.");
    response = prompt("Hello my name is....well tell me your's first?");
}

alert("Welcome " + response + "!!!");

var confirmed = confirm("Do you like pizza?");

if (confirmed) {
    alert("WOW I like pizza too!!!")
} else {
    alert("I don't like pizza either.")
}
// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.