const n = 40
// 3의 배수와 숫자 3 XXX
// n을 3x 마을에서 사용하는 숫자로 바꿔 return
const result = 25;

function solution(n) {
    var answer = 0;
    let endPoint = n;
    let testArr = [];
    for(let i = 1; i <= endPoint ; i++){
        if(i.toString().includes('3') || i % 3 == 0) endPoint ++;
        else testArr.push(i);
    }
    answer = testArr[testArr.length - 1];
    return answer;
}

solution(n);

// node 추천문제/저주의숫자.js