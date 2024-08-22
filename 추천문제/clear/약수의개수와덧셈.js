// left부터 right까지의 모든 수들 중에서, 
// 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return

const left = 24;
const right = 27;
const result = 52;

function solution(left, right) {
    var answer = 0;
    // 약수의 갯수가 홀수인 조건은 뭘까?
    // 모든 제곱수의 약수 개수는 홀수인가?
    // 그런것같은데
    for(let i = left; i <= right; i++){
        // if(!Math.sqrt(i).toString().split('.')[1]){
        /**
         * isInteger 메소드는 숫자가 정수인지 검사하는 메소드임
         */
        if(Number.isInteger(Math.sqrt(i))){
            answer = answer - i;
        }else{
            answer = answer + i;
        }
    }
    console.log(answer)
    return answer;
}

solution(left, right)

// node 추천문제/약수의개수와덧셈.js