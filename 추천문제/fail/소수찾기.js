const n = 31
// 소수의 개수를 반환
function solution(n) {
    answer = 0;
    let sieve = new Array(n + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false; // 0과 1은 소수가 아님
    /**범위가 n으로 주어질때, n 범위 안에 존재하는 소수를 구한다.*/
    for (let p = 2; p * p <= n; p++) {
        /**p가 소수가 아니더라도 이전 반복에서 false로 변경되었을 것이다*/
        if (sieve[p]) {
            // // 그 수의 배수들을 모두 false로 설정
            for (let i = p * p; i <= n; i += p) {
                sieve[i] = false;
            }
        }
    }
    console.log(sieve)
    sieve.forEach(s => {
        if(s) answer ++
    })
    return answer;
}

solution(n)

// node 추천문제/소수찾기.js