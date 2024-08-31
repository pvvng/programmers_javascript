// 최빈값을 return
// 최빈값이 여러 개면 -1을 return
const array = [1]

function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    console.log([...m])
    /** count 순서대로 역순 정렬 */
    m = [...m].sort((a,b)=>b[1]-a[1]);
    /** 역순 정렬시 두개의 값이 같은지 체크 */
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

console.log(solution(array));

// node 추천문제/최빈값구하기.js