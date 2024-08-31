const n = 10;
const m = 4;
const section = [1, 2, 3, 10]
// 페인트칠해야 하는 최소 횟수를 return

function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            /** painted 를 m만큼 변화시켜 다음 반복문에서의 작동 여부를 결정 */
            painted = section+m-1;
        }
    }
    return answer;
}
solution(n, m, section);

// node 추천문제/덧칠하기.js