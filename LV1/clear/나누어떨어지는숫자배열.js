const arr = [2, 36, 1, 3]
const divisor = 1

function solution(arr, divisor) {
    let answer = []
    arr.sort((a,b) => a-b).forEach(v => {
        if(Number.isInteger(v/divisor)) answer.push(v);
    })
    return answer.length === 0 ? [-1] : answer;
    
}

console.log(solution(arr, divisor));

// node LV1/나누어떨어지는숫자배열.js