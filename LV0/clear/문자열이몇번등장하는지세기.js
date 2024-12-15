const myString = "banana"	
const pat = "ana"	

function solution(myString, pat) {
    var answer = 0;
    const patLength = pat.length;
    for(let i = 0; i < myString.length - patLength + 1; i++){
        let sw = myString.slice(i, patLength + i);
        if(sw === pat) answer ++;
    }
    return answer;
}

solution(myString, pat);

// node LV0/문자열이몇번등장하는지세기.js