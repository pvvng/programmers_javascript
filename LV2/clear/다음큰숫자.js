// n의 다음 큰 숫자
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
const n = 15;
function solution(n) {
    for(let i = n + 1; i < Infinity; i++){
        if(n.toString(2).replaceAll('0', '') === i.toString(2).replaceAll('0', '')){
            return i;
        }
    }
}

console.log(solution(n));

// node LV2/다음큰숫자.js