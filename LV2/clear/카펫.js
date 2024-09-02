const brown = 8
const yellow = 1
// return [4, 3]
// return[0] * return[1] === brown + yellow
// return[0] >= return[1]

/** 풀이법 */
// 1. yellow의 약수 목록 구하기
// 2. 반환값 구하기
// yellow의 약수 (a, b) / a >= b
// 2 * ((a + 2) + b) === brown 이면
// return (a+2, b+2)
function solution(brown, yellow) {
    
    // yellow의 약수 목록 구하기
    let divisorArr = [];
    let yellowMiddleValue = Math.sqrt(yellow);
    for(let i = 1; i <= yellowMiddleValue; i++){
        if(Number.isInteger(yellow / i)) divisorArr.push([yellow / i, i]);
    }
    // 반환값 구하기
    for(let da of divisorArr){
        const [a,b] = da;
        if(2 * ((a + 2) + b) === brown){
            return [a+2, b+2];
        }
    }
}

solution(brown, yellow);

// node LV2/카펫.js