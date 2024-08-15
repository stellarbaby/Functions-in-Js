"use strict";

//  QUESTION 1
const calcAverage = (a, b, c) => (a + b + c);
console.log(calcAverage(3, 4, 5));

// QUESTION 2
const teamDolphins = calcAverage (44, 23, 71);
const teamKoalas = calcAverage (65, 84, 19);

console.log(teamDolphins, teamKoalas);

// QUESTION 3

 function checkWinner (winDolphins, winKoalas) {

    if (winDolphins >= 2 * winKoalas) {
        console.log(`Koalas win with score of (${winKoalas}) against Dolphins point of (${winDolphins})`);       
    } else if (winKoalas >= 2 * winDolphins) {
        console.log(`Dolphin wins the game with ${winKoalas} score against ${winDolphins} score` );
    } else {
        console.log("No one wins the trophy....")
    }
    }
checkWinner(teamDolphins, teamKoalas);


// QUESTION 4

const teamDolphins2 = calcAverage (85, 54, 41);
const teamKoalas2 = calcAverage (23, 34, 27);
console.log(teamDolphins2, teamKoalas2);

function checkWinner2 (winDolphins, winKoalas) {

    if (winDolphins >= 2 * winKoalas) {
        console.log(`Dolphins win with score of (${winDolphins}) against Koalas point of (${winKoalas})`);       
    } else if (winKoalas >= 2 * winDolphins) {
        console.log(`Kaolas wins the game with ${winKoalas} score against ${winDolphins} score` );
    } else {
        console.log("No one wins the trophy....")
    }
    }
    checkWinner2 (teamDolphins2, teamKoalas2);
