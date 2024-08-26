// 정수 num
const num = 5;
// 연속된 수 num개를 더한 값이 total
const total = 5;
// 정수 배열을 오름차순으로 담아 return
const result = [2,3,4,5]
function solution(num, total) {
    var answer = [];
    // x-4 + x-3 + x-2 + x-1 + x = 5x - 10 = 5
    let sum = 0;
    for (let i = 1; i < num; i++){ sum += i; }
    let x = (total + sum) / num
    for(let i = (x-num)+1 ; i<=x; i++){
        answer.push(i)
    }
    return answer;
}

solution(num, total);

// node 추천문제/연속된수의합.js