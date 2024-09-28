// 각 원소의 합이 S가 되는 수의 집합
// 위 조건을 만족하면서 각 원소의 곱 이 최대가 되는 집합
const n = 3
const s = 14

function solution(n, s) {
    if(n>s) return [-1];
    var answer = [];
    for(let i = n; i > 0; i--){
        let middle = (s/i).toFixed(0);
        answer.push(middle);
        s -= middle;
    }
    return answer.map(v => parseInt(v)).sort((a, b) => a-b)
}

solution(n, s)

// node 추천문제/최고의집합.js