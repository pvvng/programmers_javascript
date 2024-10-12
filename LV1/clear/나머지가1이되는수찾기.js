const n = 12
// n을 x로 나눈 나머지가 1
// 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 
function solution(n) {
    for(let i = 1; i < Infinity; i++){
        if(n % i === 1) return i;
    }
}

console.log(solution(n));

// node LV1/나머지가1이되는수찾기.js