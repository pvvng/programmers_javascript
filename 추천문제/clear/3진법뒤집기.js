/**
 * 3진법으로 변환하는 단계
 * 
 * 1. 숫자를 3으로 나눕니다.
 * 2. 나머지를 기록합니다.
 * 3. 몫을 다시 3으로 나눕니다.
 * 4. 몫이 0이 될 때까지 이 과정을 반복합니다.
 * 5. 나머지를 역순으로 나열하기
 */

/** 알게된점
 * 
 * parseInt (str, num) 으로 num진법을 10진법으로 변환 가능하다.
 * toString(num) 으로 10진법을 num진법으로 변환 가능하다.
 */
const n = 45
//자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 
// 이를 다시 10진법으로 표현한 수를 return

function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

solution(n)

// node 추천문제/3진법뒤집기.js