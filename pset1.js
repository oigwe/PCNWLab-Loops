/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average = (arr) => {
    let total = 0
    let nArr = arr.slice(0);
for (let i = 0; i < arr.length; i++) {
   total = total + nArr[i];
}
return total/(nArr.length);
}
console.log(average([1,2,3,4]));
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = (arr) => {
    let newer = [];
    let nArr = arr.slice(0);
for (let i = 0; i < arr.length; i++) {
   newer.push(nArr[i] ** 2)
}
return console.log(newer)
}
console.log(squareEach([1,2,3,4]));
console.log(squareEach([2,4,6,8]));

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
const averageSquare = (arr) => {
    let total = 0
    let nArr = arr.slice(0);
    let newer = [];
for (let i = 0; i < arr.length; i++) {
    newer.push(nArr[i] ** 2)
}
for (let i = 0; i < newer.length; i++) {
   total = total + newer[i];
}
return total/(newer.length);
}
console.log(averageSquare([1,2,3,4]));
console.log(averageSquare([2,4,6,8]));

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = (arr) => {
    let nArr = arr.slice(0);
    let newer = [];
for (let i = 0; i < arr.length; i++){
       newer.push(nArr[i] * -1);
}
return newer;
}
console.log(negateArr([1,2,3,4]));
console.log(negateArr([2,4,6,8]));
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
const reverseArr = (arr) => {
    let nArr = arr.slice(0);
    let newer = [];
    for (let i=(arr.length-1); i >= 0; i--){
        
        newer.push(nArr[i])
    }
    return newer;
}
console.log(reverseArr([1,2,3,4]));
console.log(reverseArr([2,4,6,8]));
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
const negateBackwards = (arr) => {
    let nArr = arr.slice(0);
    let newer = [];
    
    for (let i=(arr.length-1); i >= 0; i--){
        newer.push((nArr[i] * -1))
    }
    return newer;
}
console.log(negateBackwards([1,2,3,4]));
console.log(negateBackwards([2,4,6,8]));



