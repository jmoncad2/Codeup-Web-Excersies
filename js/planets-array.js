/**
 * Created by
 * jaimemoncada on 4/12/17.
 */

(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();
    planets.unshift("Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();
    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();
    planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();
    var index = planets.indexOf("Earth");
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(index);

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var remove = planets.splice(planets.indexOf("Earth"), 1);
    console.log('Using splice to remove the planet after "Earth".');

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();
    planets.splice(planets.indexOf("Venus") + 1, 0, "Earth");
    console.log('Using splice to add back the planet after "Earth".');

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();
    planets.reverse();
    console.log("Reversing the order of the planets array.");

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();
    planets.sort();
    console.log("Sorting the planets array.");

    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    logPlanets();

})();