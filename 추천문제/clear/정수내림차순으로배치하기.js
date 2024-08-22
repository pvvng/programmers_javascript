const n = 118372;
const result = 873211;

function solution(n) {
    var answer = 0;
    let nToArr = n.toString().split('');
    nToArr = nToArr.sort((a, b) => b - a);
    answer = parseInt(nToArr.join(''));
    
    return answer;
}

solution(n);

// node 추천문제/정수내림차순으로배치하기.js