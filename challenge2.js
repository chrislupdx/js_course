/*************
 * Challenge #2
 */

/*
 John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120, and 103 pts, while Mike's team scored 116, 94, 123 points
 
 1. calculate average score for each team
 2. decide which team wins in average (highest average score), and print the winner to console and include average score in output
 3. then change the scores to show different winners.  don't forget to take into account there might be a draw (the same average score)

 4. Extra: Mary also plays and her team scored 97, 134, 105 points.  Log the avg winner to the console.  Hint: you'll need the && operator. 
 5. change the scores to generate different winners

*/
winner = '';
let johnscores = [89, 120, 103];
let mikscores = [116, 94, 123];
let maryscores = [97, 134, 105];

let johnsum = johnscores.reduce((sum, current) => current += sum);
let johnaverage = johnsum / johnscores.length;
console.log('johnsum is ' + johnsum);
console.log('johnaverage is ' + johnaverage);

let mikesum = mikscores.reduce((sum, current) => current += sum);
let mikeaverage = mikesum / mikscores.length;
console.log('mikesum is ' + mikesum);
console.log('mikeaverage is ' + mikeaverage);

let marysum = maryscores.reduce((sum, current) => current += sum);
let maryaverage = marysum / maryscores.length;
console.log( 'marysum is ' + marysum);
console.log('maryaverage is ' + maryaverage);

    if (johnaverage > mikeaverage && johnaverage > maryaverage) {
        winner = 'john';
        console.log('ranked winner is ' + winner + ' with an avg score of '+ johnaverage);
    }
    else if (mikeaverage > johnaverage && mikeaverage > maryaverage ) {
        winner = 'mike';
        console.log('ranked winner is ' + winner + ' with an avg score of '+ mikeaverage);
    }
    else if (maryaverage > mikeaverage && maryaverage > johnaverage) {
        winner = 'mary';
        console.log('ranked winner is ' + winner + ' with an avg score of '+ maryaverage);
    }
    else {
        console.log('tie')
    }

// switch ( winner ) {
//     case 'mike':
//         console.log(' mike wins with an avg of ' + mikeaverage);
//     case 'mary':
//         console.log('mary wins with an avg of ' + maryaverage);
//     case 'john':
//         console.log('john wins with an avg of ' + johnaverage);
    
    
// }