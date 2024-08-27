// 모든 수를 1로 만들 수 있다는 추측
// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 

const num = 16;
// 위 작업을 몇 번이나 반복해야 하는지 반환
// 단, 주어진 수가 1인 경우에는 0을 반환
// 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
// result 8

/** 13번 실패 */
function solution(num) {
    var answer = num;
    if(num === 1) return 0;

    let counter = 0;
    // 둘 중 하나라도 거짓이면 false 반환
    while(counter !== 500 && answer !== 1){
        answer % 2 === 0 ? answer = answer/2 : answer = answer * 3 + 1;
        counter ++;
    }
    return counter !== 500 ? counter : -1;
}

solution(num);

// node 추천문제/콜라츠추측.js