const n = 16
const result = 28

// 테스트 1, 2, 12 실패
function solution(n) {
    var answer = 0;
    // n의 제곱근은 중앙값임
    let middleValue = parseInt(Math.sqrt(n).toString())
    // 중앙값이 될때까지 i = 1 부터 증가시키기
    for (let i = 1; i <= middleValue; i++){
        // 12에서 i를 나누었을때 정수가 되는 값만 약수라고 할수있음
        if(Number.isInteger(n / i)){
            /** n과 n/i 가 같을때 ㅊ  */
            n/i === i?
            answer = answer + i:
            answer = answer + i + (n / i);
        }
    }

    console.log(answer)
    
    return answer;
}

solution(n);

// node 추천문제/약수의합.js