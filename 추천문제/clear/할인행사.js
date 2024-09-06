// 자신이 원하는 제품과 수량이 
// 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입

// 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
// 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 
// 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나

// 회원등록시 정현이가 원하는 제품을 
// 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return
// 가능한 날이 없으면 0을 return

const want = ["apple"]
const number = [10]
const discount = ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]

function solution(want, number, discount) {
    var answer = 0;

    const wantMap = new Map();
    for(let i = 0; i < want.length; i++){
        wantMap.set(want[i], i);
    }
    for(let i = 0; i<= discount.length - 10; i++){
        let tempArr = new Array(want.length).fill(0);
        for(let j = i; j < i+10; j++){
            let wantIndex = wantMap.get(discount[j]);
            if(wantIndex !== undefined){
                tempArr[wantIndex]++;
            }
        }
        if(JSON.stringify(tempArr) === JSON.stringify(number)) answer++;
    }
    console.log(answer)
    return answer;
}

solution(want, number, discount);

// node 추천문제/할인행사.js