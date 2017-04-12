
var cameron = 180;
var ryan = 250;
var george = 320;
var priceLimit = 200;
var discount = 15;


if (priceLimit <= cameron) {
    priceC = "Discount was applied Cameron";
} else {
    priceC = "Discount was not applied Cameron";
}

if (priceLimit <= ryan) {
    priceR = "Discount was applied Ryan";
} else {
    priceR = "Discount was not applied Ryan";
}

if (priceLimit <= george) {
    priceG = "Discount was applied George";
} else {
    priceG = "Discount was not applied George";
}

console.log(priceC);
console.log(priceR);
console.log(priceG);

var grades = (70 + 80 + 95) / 3;

if (grades >= 80) {
    message = "You're awesome!";
} else {
    message = "You need to practice more";
}

console.log(message);
