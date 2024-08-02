// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players
// 해설진이 부른 이름을 담은 문자열 배열 callings
// 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 

/** 알게된점
 * 
 * 시간 복잡도 이 개미친놈
 * Map은 객체처럼 사용 가능하다 (key - value)
 * 근데 객체를 사용하지 않은 이유에 대해 갓지피티 선생님은 이렇게 말씀하셨다.
 * 
 * 1. 키의 유형
 * Object: 키는 문자열 또는 심볼만 가능. 문자열이나 심볼 외의 다른 타입은 자동으로 문자열로 변환됩니다.
 * Map: 모든 데이터 타입을 키로 사용할 수 있습니다. 객체, 함수, 기본 타입 등
 * 
 * 2. 순서 보장
 * Object: 키의 순서를 보장하지 않습니다.
 * Map: 삽입된 순서를 보장합니다. 순회를 할 때 삽입된 순서대로 값을 반환합니다.
 * 
 * 3. 성능
 * Object: 키-값 쌍의 추가, 삭제, 조회는 일반적으로 O(1)입니다. 
 * 그러나, 많은 키가 있을 때 성능이 저하될 수 있습니다.
 * Map: 평균적으로 O(1)의 시간 복잡도로 성능이 보장됩니다. 
 * 키-값 쌍의 추가, 삭제, 조회가 일관되게 빠릅니다.
 * 
 * 그럼 객체 왜씀 개쓰레기 아님?ㅋㅋ
 * 
 * GPT 선생님 : "꾸짖을 갈!!!!!!!!!"
 * 다 쓸데가 있답니다.
 * 언제 Object를 사용하는 것이 좋을까요?
 * 단순 키-값 쌍: 간단한 키-값 저장과 조회가 필요할 때 Object가 충분합니다.
 * JSON 호환성: JSON 포맷을 사용하여 데이터를 직렬화하고 싶을 때 Object가 유용합니다.
 * 메모리 효율성: 메모리 사용을 최소화하려는 경우 Object가 더 적합할 수 있습니다.
 */

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

// result = ["mumu", "kai", "mine", "soe", "poe"];

function solution(players, callings) {
    let 현재순위 = [...players];
    let 해설진부르는순서 = [...callings];

    let 현재순위판데기 = [];
    // *** for of 반복문 사용시 index를 알고 싶으면 entries 메소드 사용 ***
    for(const [몇등임, 말딸] of 현재순위.entries()){
        let 임시오브젝트 = { name : 말딸 , ranking : 몇등임 + 1};
        현재순위판데기.push(임시오브젝트)
    }

    for(const 빠른놈 of callings){
        // 지금 빠른놈 오브젝트 찾기

        //*** 시간 복잡도 문제 ***//
        // GPT 선생님의 한말씀
        // filter 메서드의 사용: filter 메서드는 배열을 
        // 전체적으로 순회하여 조건에 맞는 요소를 찾기 때문에 시간 복잡도가 O(n)입니다. 
        // 이 과정이 callings 배열의 길이만큼 반복되므로 전체 시간 복잡도가 O(n^2)에 가까워집니다.

        // 배열의 길이가 n일 때 filter 메서드는 O(n)의 시간 복잡도를 가짐
        // 만약 여러 번 호출하면, 전체 배열을 매번 순회하게 되므로 비효율적임

        let 빠른놈데이터 = 현재순위판데기.filter(말딸 => 말딸.name === 빠른놈)[0];
        let 빠른놈직전순위 = 빠른놈데이터.ranking;

        let 재껴진놈데이터 = 현재순위판데기.filter(말딸 => 말딸.ranking === 빠른놈직전순위 - 1)[0];
        let 재껴진놈직전순위 = 재껴진놈데이터.ranking;

        재껴진놈데이터.ranking = 빠른놈직전순위
        빠른놈데이터.ranking = 재껴진놈직전순위

    }

    //*** 시간 복잡도 문제 ***//
    // GPT 선생님의 한말씀
    // 정렬은 O(n log n)의 시간 복잡도를 가지며, 이 작업이 추가로 수행됩니다.

    현재순위판데기 = 현재순위판데기.sort((a,b) => a.ranking - b.ranking);

    var answer = [];

    for (새로운말딸 of 현재순위판데기){
        answer.push(새로운말딸.name)
    }
    console.log(answer)
    return answer;
}

// solution(players, callings)

// 시간 초과!!!
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function solution2(players, callings) {
    let 현재순위 = [...players];
    let 해설진부르는순서 = [...callings];

    // Map은 JavaScript의 내장 객체로, 키와 값의 쌍을 저장하는 데이터 구조
    // Array.prototype.map은 배열의 길이만큼 순회하므로 시간 복잡도가 O(n) = 존내낮음
    let 현재순위판데기 = new Map();
    // *** for of 반복문 사용시 index를 알고 싶으면 entries 메소드 사용 ***
    for(const [몇등임, 말딸] of 현재순위.entries()){
       현재순위판데기.set(말딸 , 몇등임);
    }

    for(const 빠른놈 of callings){
        const 빠른놈현재순위 = 현재순위판데기.get(빠른놈);
        const 재낀놈 = 현재순위[빠른놈현재순위 - 1];
        const 재낀놈현재순위 = 현재순위판데기.get(재낀놈);

        // ***직접 현재 순위 변경함으로서 sort 사용을 하지 않음*** ///
        // *** 시간 복잡도 줄어든다*** ///
        현재순위[재낀놈현재순위] = 빠른놈;
        현재순위[빠른놈현재순위] = 재낀놈; 

        현재순위판데기 = new Map();
        for(const [몇등임, 새말딸] of 현재순위.entries()){
            현재순위판데기.set(새말딸 , 몇등임);
         }

    }

    //*** 시간 복잡도 문제 ***//
    // 현재순위판데기 = 현재순위판데기.sort((a,b) => a.ranking - b.ranking);

    var answer = [...현재순위];

    return answer;
}

// solution2(players, callings)

// 시간 초과!!!
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function solution3(players, callings) {
    let 현재순위 = [...players];
    let 해설진부르는순서 = [...callings];

    let 현재순위판데기 = new Map();
    for(const [몇등임, 말딸] of 현재순위.entries()){
       현재순위판데기.set(말딸 , 몇등임);
    }

    for(const 빠른놈 of callings){
        const 빠른놈현재순위 = 현재순위판데기.get(빠른놈);
        const 재낀놈 = 현재순위[빠른놈현재순위 - 1];
        const 재낀놈현재순위 = 현재순위판데기.get(재낀놈);

        현재순위[재낀놈현재순위] = 빠른놈;
        현재순위[빠른놈현재순위] = 재낀놈; 

        /** 
         * GPT 선생님의 일침!!
         * Map 재구성: callings 배열을 처리할 때마다 현재순위판데기를 새로 생성하고 
         * for 루프를 사용하여 Map을 업데이트합니다. 
         * 이 작업은 O(n)의 시간 복잡도를 가지며, 이를 m 번 반복하면 총 시간 복잡도는 O(m * n)이 됩니다. 
         * 여기서 n은 players의 길이, m은 callings의 길이입니다.
         */
        // 현재순위판데기 = new Map();
        // for(const [몇등임, 새말딸] of 현재순위.entries()){
        //     현재순위판데기.set(새말딸 , 몇등임);
        //  }

        //*** 선수의 위치를 변경할 때, Map의 키-값 쌍을 갱신하는 것이 필요합니다. ***//
        현재순위판데기.set(빠른놈, 재낀놈현재순위);
        현재순위판데기.set(재낀놈, 빠른놈현재순위);
    }

    var answer = [...현재순위];

    return answer;
}

console.log(solution3(players, callings))
// node LV1/달리기경주.js