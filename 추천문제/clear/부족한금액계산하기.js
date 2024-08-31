// 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다
// 놀이기구를 count번 타게 되면 
// 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 
// 단, 금액이 부족하지 않으면 0을 return 하세요.

const price = 3;
const money = 20;
const count = 4;

// 4번 실패
function solution(price, money, count) {
    let sum = 0;
    for(let i = 1; i <= count; i++){
        sum += price * i;
    }
    return sum > money ? sum - money : 0;
}

solution(price, money, count);

// node 추천문제/부족한금액계산하기.js