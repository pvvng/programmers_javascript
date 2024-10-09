const a = [1,2,3,4]
const b = [-3,-1,0,2]

function solution(a, b) {
    var answer = 0;
    let l = a.length;
    let t = [...a, ...b];
    for(let i = 0; i < l; i++){
        answer += (t[i] * t[i+l])
    }
    return answer;
}

solution(a,b);

// node LV1/내적.js