const myString = "AbCdEFGacccc"
const pat = "a"

function solution(myString, pat) {
    // let newStr = "";
    // console.log(myString.lastIndexOf(pat))
    // while(myString.indexOf(pat) !== -1){
    //     let nowIndex = myString.indexOf(pat);
    //     const left = myString.slice(0, nowIndex + pat.length);
    //     const right = myString.slice(nowIndex + pat.length, myString.length);
    //     newStr += left;
    //     myString = right
    // }

    // return newStr;

    return myString.slice(0, myString.lastIndexOf(pat) + pat.length);;
}

solution(myString, pat);

// node LV0/특정문자열로끝나는가장긴부분문자열찾기.js
