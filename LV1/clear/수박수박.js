const n = 7;
const result = '수박수'

function solution(n) {
    var answer = '';
    answer = ('수박'.repeat(n/2)) + (n % 2 === 1 ? '수' : '')

    return answer;
}
solution(n);
// node LV1/수박수박.js