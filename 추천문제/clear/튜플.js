const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}"

// s가 표현하는 튜플을 배열에 담아 return 하도록 solution 함수
function solution(s) {
    /** length 순 대로 나열하고 숫자 풀어 배열에 담기 */
    s = s.slice(2, s.length -2)
    .split('},{')
    .map(str => str.split(','))
    .sort((a, b) => a.length - b.length)
    /** reduce로 이중 배열 벗기기 */
    .reduce((acc, cul) => [...acc, ...cul])
    .map(str => parseInt(str));

    return [...new Set(s)];
}

solution(s);
// node 추천문제/튜플.js