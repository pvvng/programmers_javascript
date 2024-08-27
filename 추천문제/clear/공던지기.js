// 친구들의 번호가 들어있는 정수 배열 numbers
const numbers = [1, 2, 3]
// 정수 k
const k = 5
// k번째로 공을 던지는 사람의 번호는 무엇인지 return
// result 3

function solution(numbers, k) {
    /** k-1회 만큼 공을 오른쪽으로 두번 넘긴다
     * ==> (k-1) * 2
     * 이를 number.length 로 나눈뒤 나머지를 구한다.
     */
    return numbers[(--k*2) % numbers.length];
}

solution(numbers, k);

// node 추천문제/공던지기.js