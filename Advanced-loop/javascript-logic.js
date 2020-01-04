// Question 1: Clean the room function: given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into individual array that is ordered.
//For example answer(ArrayFromAbove) should return: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].
// Bonus: Make it so it organizes strings differently from number types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]


const cleanRoom = array=> {
    let cleanedArray = [];
    let innerArray = [];
    array.map((number1) =>{
        if (!cleanedArray.includes(number1)){

            array.map((number2)=>{
            if (number1 === number2){
                innerArray.push(number2);
            }
            cleanedArray.concat([innerArray]);
        });
        console.log("inner array" + innerArray);

        innerArray=[];
    }
        return cleanedArray;
    });

}
console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));



// Question 2:
// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1, 2, 3], 4)should return [1, 3]

const funct = (arr, target) => {
    let newArr = []
    arr.forEach((ele1, idx1 )=> {
        arr.forEach((ele2,idx2) =>{
            if((idx1 < idx2) && (ele1 + ele2===target)){
                newArr.push([ele1,ele2]);
            }
        })
    });
    return newArr;
}

console.log(funct([1, 2, 3], 4));
console.log(funct([1, 2, 3,2], 4));


// Question 3:
// Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


const rgbToHex = function(rgb){
  let hex = Number(rgb).toString(16);
  console.log(hex);
}

rgbToHex(123);


// const hexToRgb = function (hexColor) {
//     return {
//         red: (hexColor >> 16) & 0xFF,
//             green: (hexColor >> 8) & 0xFF,
//                 blue: hexColor & 0xFF,
//     }
// }
rgbToHex(255);

function RGBToHex(r, g, b) {

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    return "#" + r + g + b;
}

console.log(RGBToHex(255, 255, 255));

const hexadecimalToRgb = function(hex){
    let r,g,b;
    if(hex.length === 4){
        r = hex[1] + hex[1];
        g = hex[2] + hex[2];
        b = hex[3] + hex[3];

    }
    else if(hex.length === 7){
        r = hex[1] + hex[2];
        g = hex[3] + hex[4];
        b = hex[5] + hex[6];
    }
    else{
        return `please enter valid format, valid format should be "# with three numbers(#fff)" OR "# with six numbers(#ffffff)"`;
    }

    return ` RGB(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)})`;  // radix said that string should be parsed from a hexadecimal number to a decimal number.

    //return "rgb(" + +r + "," + +g + "," + +b + ")";   // meya magin sidu kirimata +r magin decimal walata convert kirimata
                                                     // 0xff format eken string eka parse wiya uthui

}
console.log(hexadecimalToRgb("#fff"));



// // NOTE:

// The toString() function in Javascript is used with a number and converts the number to a string.It is used to
// return a string representing the specified number object.

// ----------------------------------------------------
//     Syntax - num.toString(base)  16-can convert to hexa decimal, 2- can convert to binary
// ----------------------------------------------------

// text field eken value eka ganna eya detect kala yuthui hexa da rgb da kiyala


// The parseInt() function parses a string and returns an integer.
// The radix parameter is used to specify which numeral system to be used, for example,
// a radix of 16(hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

// -------------------------------------------------------------------------
// parseInt(string, radix)
// -------------------------------------------------------------------------

// If the radix parameter is omitted(athaharinawa/exclude), JavaScript assumes the following:

        // If the string begins with "0x", the radix is 16(hexadecimal)
        // If the string begins with "0", the radix is 8(octal).This feature is deprecated
        // If the string begins with any other value, the radix is 10(decimal)

//console.log((Math.pow(16, 0)*12));  - memaagin apita c = 12 nisa tiyena position eka anuwa 0 da 1 da dalat gatahaka (hex to decimal)
//console.log((Math.pow(16, 1) * 12));


// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
