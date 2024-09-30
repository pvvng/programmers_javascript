const s = "qwer"

function solution(s) {
    return s.length % 2 === 0 ? 
    s[s.length/2 - 1] + s[s.length/2]:
    s[(s.length+1)/2 - 1];
}

console.log(solution(s));

// node LV1/가운데글자가져오기.js