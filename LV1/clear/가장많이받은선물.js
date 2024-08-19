// 1차원 문자열 배열 friends
const friends = ["muzi", "ryan", "frodo", "neo"]
// 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts
const gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
// 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 

// 두 사람이 선물을 주고받은 기록이 있다면
// 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.

// 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면
// 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
// 선물 지수는 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.
// 만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.

function solution(friends, gifts) {
    var answer = 0;

    // 선물지수 매핑
    const giftIndexMap = new Map();
    // 선물 카운터 맵
    const giftCounterMap = new Map();
    // 다음달에 받을 최종 선물 갯수 매핑
    const nextMonthGiftMap = new Map();

    friends.forEach(name => {
        // 선물 지수 map 기본값 세팅
        giftIndexMap.set(name, 0);
        // 다음달 받을 선물 총합 기본값 매핑
        nextMonthGiftMap.set(name,  0);
        // 선물을 주고받는 모든 상황에 대해 giftCounterMap에 기록
        friends.forEach(name2 => {
            if(name !== name2){
                giftCounterMap.set(`${name} ${name2}`, 0);
            }
        })
    })

    for(giftData of gifts){
        /** 값이 undefiend이면 0으로 */
        let getItem = giftCounterMap.get(giftData) || 0;
        giftCounterMap.set(giftData, getItem + 1);

        // 선물 지수 측정
        const [giveName, getName] = giftData.split(' ');
        giftIndexMap.set(giveName, giftIndexMap.get(giveName) + 1);
        giftIndexMap.set(getName, giftIndexMap.get(getName) - 1);
    }

    giftCounterMap.forEach((count, data) => {
        const [left, right] = data.split(' ');
        const reverseData = `${right} ${left}`;
        const reverseDataCount = giftCounterMap.get(reverseData) || 0;
        let plusGiftName = '';

        let getLeftData = giftIndexMap.get(left);
        let getRightData = giftIndexMap.get(right);

        if(count > reverseDataCount){
            plusGiftName = left;
        }
        else if(count < reverseDataCount){
            plusGiftName = right;
        }
        /** 앞선 조건문에서 === 이 아닌 조건은 
         * 전부 걸러졌으므로 굳이 적지 않아도 됨 */
        else if(getLeftData > getRightData){
            plusGiftName = left;
        }
        else if(getRightData > getLeftData){
            plusGiftName = right;
        }

        // 선물지수마저 일치하는 경우에는 빈 문자열이 plusGiftName이 된다. 이걸 처리
        if(plusGiftName !== ''){
            nextMonthGiftMap.set(plusGiftName, nextMonthGiftMap.get(plusGiftName) + 1);
        }
        // reverse 중복 삭제
        giftCounterMap.delete(reverseData);
    })

    nextMonthGiftMap.forEach(nmgm => {
        answer = Math.max(answer, nmgm);
    })

    return answer;
}

solution(friends, gifts);

// node Lv1/가장많이받은선물.js