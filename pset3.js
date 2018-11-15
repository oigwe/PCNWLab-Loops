/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [3]
               getMiddle([1,2,3,4]); // [2,3]
*/


const getMiddle = arr => {
let newArr = [];
    for (let i=0; i < arr.length; i++); {
        
        if (arr.length % 2 === 0){
           newArr.push(arr[(arr.length/2)-1]);
           newArr.push(arr[arr.length/2]);
           return newArr;
        }
    
     newArr.push(arr[Math.ceil(arr.length/2)]);
    }
return newArr;
}
console.log(getMiddle([1,2,3])); // [3]
console.log(getMiddle([1,2,3,4])); // [2,3]
console.log(getMiddle([1,2,3,4,5,6])); // [3,4]
console.log('---')

/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/
const addToMiddle = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 1) {
        arr.splice((Math.ceil(arr.length/2)),0,element);
        return arr;
    }
        arr.splice(arr.length/2,0,element);
        return arr;
  }
}

        console.log(addToMiddle([1,2,3], 0)); // [1,2,0,3];
        console.log(addToMiddle([1,2,3,4], 0)); // [1,2,0,3,4]
        console.log('---')

/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/
const hasAtSymbol = string => {
    if (string.includes('@')) {
        return true;
    }
    return false;
}

    console.log(hasAtSymbol('taq@karim.com')); // true
    console.log(hasAtSymbol('foobar')); // false
    console.log('---')


/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/

const capitalize = str => {
    let upper = str.charAt(0).toUpperCase();
    str.charAt(0) = upper;
    return str;
    
    
}
console.log(capitalize('taq'));
console.log(capitalize('Taq'));
console.log(capitalize('TAQ'));
console.log('---')



/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/


/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/




