/**
 * Created by
 * jaimemoncada on 4/13/17.
 */

(function(){
    "use strict";
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = ["Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune"];
    var splitPlanets = planetsString.split('|');
    var brPlanets = splitPlanets.join('<br>');

    // TODO: Convert planetsString to an array, save it to planetsArray.
    console.log(brPlanets);
    console.log(splitPlanets);
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();