export function capitalize(str) {
    return str. charAt(0). toUpperCase() + str.slice(1)
}
export function reverseString(str) {
    let reversed = '';
    for(let i = str.length-1; i >= 0; i-- ){
        reversed += str[i]
    }
    return reversed;
}

export function calculator(a, b){
    const obj = {
        add(a, b){
            return a+b;
        },
        substract(a,b) {
            return a-b;
        },
        multiply(a, b) {
            return a*b;
        },
        divide(a,b) {
            return a/b;
        }
    };
    return obj;
}

export function caesarCipher(str, shiftFactor){
   let cipheredStr = ''

    for(let i = 0; i <str.length; i++){
        const char = str[i]

        if(char >= 'a' && char <= 'z'){
            const code = str.charCodeAt(i);
            const newCode = ((code - 97 + shiftFactor) % 26) +97;
            cipheredStr += String.fromCharCode(newCode)
        }
        else if(char >= 'A' && char <= 'Z'){
            const code = str.charCodeAt(i);
            const newCode = ((code - 65 + shiftFactor) % 26) +65;
            cipheredStr += String.fromCharCode(newCode)
        }
        else cipheredStr += str[i]
    }
    return cipheredStr;
}


export function analyzeArray(arr){
    const object = {
        'average': average(arr),
        'min': min(arr),
        'max': max(arr),
        'length': arr.length
    }
    return object
}
function average(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    sum = sum/arr.length;
    return sum
}
function min(arr){
    let min;
    for(let i = 0; i < arr.length; i++){
        if(!min){
            min = arr[i]
        }
        else if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
function max(arr){
    let max;
    for(let i = 0; i < arr.length; i++){
        if(!max){
            max = arr[i]
        }
        else if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
 