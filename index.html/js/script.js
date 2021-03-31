/*
1- Prompt the user for the pet's name
2- Keep track of the pet's happiness and energy levels. Both start out at zero.
3- Use a loop to repeat the following six times…
    1- Prompt the user for an action. They can type one of three options: feed, pet, or walk.
    2- The feed option increases energy by 2.
    3- The pet option increases happiness by 1
    4- The walk option increases happiness by 2 but decreases energy by 1.
4- If the user chooses "walk" but the energy level is currently at zero, do not increase happiness
or decrease energy. Instead, alert the following message: "Not enough energy to enjoy a
walk."
5- At the end, after the six actions, log the pet's name, happiness, and energy level to the
console.
*/

var energy = 0;
var happiness = 0;
var actionEntry;
let petname = prompt("What would you name your dog?");

var i;
for (i = 0; i < 6; i++) {

let actionEntry = prompt("feed, pet or walk?");

if(actionEntry==="pet"){ happiness = happiness + 1;}

if(actionEntry==="walk"){
if(energy===0){confirm("Not enough energy");}
else{happiness = happiness + 2;energy = energy - 1;}
}
if(actionEntry==="feed") { energy = energy + 2;}
}//For Loop

console.log(petname,"has happiness",happiness,"and Energy",energy,".");