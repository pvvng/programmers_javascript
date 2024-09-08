const priorities = [1, 1, 1, 2]
const location = 2

/** (1트) 2, 6~11 13, 16~19 실패 */
/** 임시 배열에서의 순위를 고려하지 않음 */

/** (2트) 6~10 13, 16, 17, 19 실패 */
function solution(priorities, location) {
    var answer = 0;

    let queue = [];    
    for(let [i, p] of priorities.entries()){
        queue.push([i, p]);
    }
    let clearArr = [];

    while(queue.length !== 0){
        let shiftElement = queue.shift();
        /** 
         * some 메소드
         * 배열 안의 요소 중 적어도 하나라도 통과하는지 테스트
         */
        if(!queue.some(v => v[1] > shiftElement[1])){
            /** 우선순위가 최우선이면 clear 배열에 집어넣기 */
            clearArr.push(shiftElement);
        }else{
            /** filter에 걸리지 않으면 다시 queue에 집어넣기 */
            queue.push(shiftElement);
        }
    }
    clearArr.forEach((ca, i) => {
        if(ca[0] === location) answer = i + 1;
    })

    return answer;
}

console.log(solution(priorities, location));

// node 추천문제/프로세스.js