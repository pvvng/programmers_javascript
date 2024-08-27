// n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
const n = 3
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1)**2 : -1;
}

solution(n);

// node 추천문제/정수제곱근판별.js