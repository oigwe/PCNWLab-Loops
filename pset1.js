/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
let newArr1 = [1,2,3,4];
let sum = 0
const average = newArr1.forEach((currentIndex) => {
sum += currentIndex;
});
console.log(sum/newArr1.length);

newArr1 = [1,2,3,4];
const average3 = newArr1.reduce((acc, currentItem) => {
  return acc += currentItem;
}, 0);
console.log(average2/newArr1.length);


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
return console.log(newer);
}
console.log(squareEach([1,2,3,4]));
console.log(squareEach([2,4,6,8]));

let newArr2 = [1,2,3,4];
const square = newArr1.map((currentItem) => {
    return currentItem **2;
})
console.log(square);


const square1 = newArr1.reduce((acc, currentItem)=> {
     acc.push(currentItem**2);
return acc;
},[])

console.log(square1);

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
const newArr3 = [1,2,3,4];
let newArr4 =[]
let sum2 = 0
const square2 = newArr3.map((currentIndex) => {
    return newArr4.push(currentIndex **2);
})
const average2 = newArr4.forEach((currentIndex) => {
    sum2 += currentIndex;
    });
    console.log(sum2/newArr4.length);


    const averageSquare2 = (arr) => {
    let sum = 0;
    arr.map((element) => {
        element ** 2;
        sum += element;
        return sum;
    })
    return sum/arr.length;
}


const averageSquare3 = (arr) => {(acc, currentItem) =
    let squaredArray = squareEach(arr);
    let averageArray = average(squaredArray);
    return averageArray;
}

const averageSquare4 = newArr1.reduce((acc, currentItem)=> {
    
    acc.push(currentItem**2);

},0)


/*const averageSquare = (arr) => {
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
console.log(averageSquare([2,4,6,8]));*/

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const newArr5 = [1,2,3,4,5];
const negateArr = newArr5.map((currentIndex) =>{
    return currentIndex * (-1);
});
console.log(negateArr);
/*const negateArr = (arr) => {
    let nArr = arr.slice(0);
    let newer = [];
for (let i = 0; i < arr.length; i++){
       newer.push(nArr[i] * -1);
}
return newer;
}
console.log(negateArr([1,2,3,4]));
console.log(negateArr([2,4,6,8]));
*/
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
const newArr6 = [1,2,3,4,5];
let newArr7 = [];
const reverseArr = newArr6.map((currentIndex) => {
newArr6.reverse();
return newArr6;
})
console.log(newArr6);

const reverseArr1 = (arr) => {
    let newArry =[]
    arr.forEach((currentElement) =>{
        newArry.unshift(currentElement);
    })
    return newArray;
}


/*const reverseArr = (arr) => {
    let newer = [];
    for (let i=(arr.length-1); i >= 0; i--){
        newer.push(arr[i])
    }
    return newer;
}
console.log(reverseArr([1,2,3,4]));
console.log(reverseArr([2,4,6,8]));*/
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
let newArr8 = [1,2,3,4,5];
let newArr9 = [];
const negateBackwards = newArr8.map((currentIndex) => {
     newArr9.push(currentIndex * (-1));
     newArr9.reverse();
});
console.log(newArr9);
/*const negateBackwards = (arr) => {
    let newer = [];
    
    for (let i=(arr.length-1); i >= 0; i--){
        newer.push((arr[i] * -1))
    }
    return newer;
}
console.log(negateBackwards([1,2,3,4]));
console.log(negateBackwards([2,4,6,8]));

const negateBackwards2 = (arr) => negateArr(reverseArr(arr));*/
