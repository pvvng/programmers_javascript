const i = 1	
const j = 13	
const k = 1

function solution(i, j, k) {
    // var answer = 0;
    // const strK = k.toString();
    // for(let v = i; v <= j; v++){
    //     answer += v.toString().split('').filter (e => e === strK).length;
    // }
    // return answer;
    let answer = '';
    for(let v = i; v <= j; v++) answer += v;
    return answer.split('').filter(v => v === k.toString()).length;
}

solution(i, j, k);

// node LV0/k의개수.js