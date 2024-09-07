const n = 3
const left = 2
const right = 5

// 3x3 행렬일 때
// (1,1) = 1 (1,2) = 2 (1,3) = 3
// (2,1) = 2 (2,2) = 2 (2,3) = 3
// (3,1) = 3 (3,2) = 3 (3,3) = 3
// 간단하게 각 좌표 x, y 값중 큰 값이 해당 값이 됩니다.

// 시작좌표 => Math.floor(left/n) + 1, (left%n) + 1
// 종료좌표 => Math.floor(right/n) + 1, (right%n) + 1

function solution(n, left, right) {
    var answer = [];
    for(let i = left; i<=right; i++){
        let dot = Math.max(Math.floor(i/n) + 1, i%n + 1);
        answer.push(dot);
    }
    return answer;
}

solution(n, left, right);

// node 추천문제/n^2배열자르기.js