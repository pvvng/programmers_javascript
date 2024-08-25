/**
 * 알게된점
 * 
 * reduce 메소드
 * 배열의 모든 요소를 순회하며 하나의 결과값으로 줄여준다
 * 
 * array.reduce(callback[, initialValue])
 * reduce (조절할 값(acc), 배열의 요소(cur) [, 초깃값(initial)])
 * 
 * accumulator > 전 함수 실행의 반환 값 또는 initialValue
 * currentValue > 현재 처리 중인 요소
 * initialValue > 기본값
 * 
 * number에 boolean 값을 더하면 false => 0증가, true => 1 증가한다.
 */

// 부서별로 신청한 금액이 들어있는 배열 d
const d = [1,3,2,5,4]
// 예산 budget
const budget = 9
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return
const result = 3

function solution(d, budget) {
    /** 
     * reduce (조절할 값, 배열의 요소 [, 초깃값])
     */
    return d.sort((a, b) => a - b).reduce((count, price) => {
        /** 
         * 굳이 모든 경우를 더할 필요 없이 가장 작은 수부터 오름차순으로 
         * 더하다가 음수 (-) 가 나오는 부분부터는 count 증가를 멈추면 된다.
         * 
         * 순회하면서 예산을 줄여나간다.
         * 예산이 음수가 되는 부분부터는 count 증가를 종료한다.
         * 
         * number + true => 1증가
         * number + false => 0증가
        */
        return count + ((budget -= price) >= 0);
    }, 0);
}

solution(d, budget);

// node 추천문제/예산.js