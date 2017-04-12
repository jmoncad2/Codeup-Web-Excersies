/**
 * Created by
 * jaimemoncada on 4/12/17.
 */

(function () {
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var people = ["bob", "tom", "jon", "tye"];

    // TODO: Create a log statement that will log the number of elements in the names array.

    // for (var i = 0 ; i < people.length; i++) {
    //
    //     console.log("Names are " + people);
    // }

    people.forEach(function (element, index) {
        console.log("Hello my name is " + element + " and I can eat " + index + " burgers.");
    });


    // console.log(people.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    // console.log(people[0]);
    // console.log(people[1]);
    // console.log(people[2]);
    // console.log(people[3]);
    //

})();


