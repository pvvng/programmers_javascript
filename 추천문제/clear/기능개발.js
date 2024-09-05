const progresses = [95, 95, 95, 95]
const speeds = [4, 3, 2, 1]
// 각 배포마다 몇 개의 기능이 배포되는지를 return
// 2~4, 7~11 실패
function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length !== 0){
        let counter = 0; 
        progresses.forEach((p, index) => {
            progresses[index] = p += speeds[index];
        })
        /** progresses의 값이 정확히 100이 될때도 루프 탈출해야함 */
        while(progresses[0] >= 100){
            progresses.shift();
            /** index의 값도 shift 해줘야함 */
            speeds.shift();
            counter++;
        }
        if(counter !== 0) answer.push(counter)
    }
    return answer;
}

solution(progresses, speeds);

// node 추천문제/기능개발.js