const A = [1,2]
const B = [3,4]

function solution(A,B){
    var answer = 0;
    // A는 내림차순 B는 오름차순해서 곱하기
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a)

    for(let i = 0; i < A.length; i++){
        answer += A[i] * B[i];
    }

    return answer;
}
solution(A, B)

// node LV2/최솟값만들기.js