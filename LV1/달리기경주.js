// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players
// 해설진이 부른 이름을 담은 문자열 배열 callings
// 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 

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

    console.log(현재순위판데기)


    for(const 빠른놈 of callings){
        // 지금 빠른놈 오브젝트 찾기
        let 빠른놈현재순위 = 현재순위판데기.get(빠른놈);
        let 재낀놈현재순위 = 빠른놈현재순위 - 1;


  
    }

    //*** 시간 복잡도 문제 ***//
    // 현재순위판데기 = 현재순위판데기.sort((a,b) => a.ranking - b.ranking);

    var answer = [];

    return answer;
}

solution2(players, callings)