// 약수의 개수가 세 개 이상인 수를 합성수
const n = 35
// n이하의 합성수의 개수를 return
const result = 5;

// 1, 5실패
function solution(n) {
    var answer = 0;
    let testArr = []
    for(let i = 4; i <= n; i++){
        // 일단 2를 제와한 짝수는 전부 합성수임
        if (i % 2 === 0) answer ++; 
        // 홀수 중에서 제곱수는 합성수임
        else if (Number.isInteger(Math.sqrt(i))) answer ++;
        else {
            // 1과 1부터 시작 거르고 반복문 돌려서 합성수 찾기
            /** 기존에 생짜로 answer ++ 하는 코드는 
             * Number.isInteger(i / j)일때 중복해서 answer ++ 되는 문제가 있었음
             */
            let isCompositeNum = false;
            for (let j = 3 ; j < Math.sqrt(i); j ++){
                if(Number.isInteger(i / j)) isCompositeNum = true;
            }
            if(isCompositeNum) answer ++;
        }
    }
    return answer;
}

solution(n);