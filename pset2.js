/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

const removeNegative = (arr) => {
    let newArr =  arr.map((e) => {
     if (e < 0) {
         return  e * -1;
     }
     return e; 
    });
    return newArr;
}

console.log(removeNegative([-3,-2,1,2,3,-4]));
console.log('-----')

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/

const findVal = (arr, val) => {
for (let i=0; i <= arr.length; i++){
    if (arr[i] === val) {
        return arr.indexOf(val);
    }
}
return -1;
}
console.log(findVal([1,2,3,4], 1));
console.log(findVal([1,2,3,4], 4)); // 3
console.log(findVal([1,2,3,4], 9)); // -1)
console.log('-----')

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

const removeOdds = (arr) =>{
     let newArr = arr.reduce((acc, e) =>{
        if (typeof e === 'number' && e % 2 === 0){
            acc.push(e)
        }
        return acc;
    }, [])
    return newArr;
}

console.log(removeOdds([1,2,3,4]));
console.log(removeOdds([1,"2",3,4]));
console.log('-----')

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/

const addSquare = (arr) => {
    let newArr = arr.map((e)=>{
        return e**2;
    })
    return newArr;
}
console.log(addSquare([1,2,3,4]));
console.log('-----')

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = arr => {
    let newArr = arr.reduce((acc, e)=>{
       acc.push(e, e);
       return acc;
    }, []);
    return newArr;
}

console.log(doubleify([1,2,3,4]));
console.log(doubleify(["a"]));
console.log(doubleify([]));
console.log('-----')




/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

const findMax = arr => {
    let maxNum = arr.reduce((acc, e) =>{
        if (acc < e && typeof e === 'number'){
            acc = e;
        }
        return acc;
    },0);
    return maxNum;
}
console.log(findMax([1,2,3,99,4]));
console.log(findMax([1,2,150,99,4]));
console.log(findMax([1000,2,3,99,10000]));
console.log(findMax([1000,2,3,"a",10000]));
  


