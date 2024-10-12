const a = 3
const b = 3

function solution(a, b) {
    var answer = 0;
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    for(let i = min; i <= max; i++){answer += i;}
    return answer;
}

solution(a,b);

// node LV1/두정수사이의합.js