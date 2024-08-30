// 연속된 자연수들로 n을 표현하는 방법의 수를 return
const n = 15
// result 4

// x = 15
// 2x = 15 - 1 (1)
// 3x = 15 - (2 + 1) (3)
// 4x = 15 - (3 + 2 + 1) (6)
// 5x = 15 - (4 + 3 + 2 + 1) (10)
function solution(n) {
    var answer = 0;
    for(let i = 0; i <= n ;i ++){
        let off = 0
        for(let j = i; j >= 1; j--){
            off += j;
            if(off > n) break;
        }
        if(off > n) break;
        let x = (n - off) / (i + 1);
        if(Number.isInteger(x) && x !== 0) answer ++;
    }
    return answer;
}

solution(n);

// node LV2/숫자의표현.js