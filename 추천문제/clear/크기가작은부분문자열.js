const t = "10203"
const p = "15"
// t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592
// 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개
// result 2

function solution(t, p) {
    var answer = 0;

    for(let i = 0; i < t.length; i++){
        let slicedT = t.slice(i, i + p.length);
        if(slicedT.length === p.length && +p >= +slicedT) answer ++;
    }
    return answer;
}

solution(t, p)

// node 추천문제/크기가작은부분문자열.js