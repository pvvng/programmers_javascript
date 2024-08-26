/**
 * 알게된점
 * splice는 원본 배열을 훼손한다
 */

// arr 에서 가장 작은 수를 제거한 배열을 리턴
// 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
const arr = [4,3,2,1,5]

// result [432]

function solution(arr) {
    if(arr.length === 1) return [-1];
    // splice로 원본 배열 훼손하여 리턴
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr; 
}

solution(arr)

// node 추천문제/제일작은수제거하기.js