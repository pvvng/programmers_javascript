// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 
// / 스테이지에 도달한 플레이어 수

// 전체 스테이지 수
const N = 5
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
const stages = 	[2, 1, 2, 6, 2, 4, 3, 3]
// 각 스테이지의 번호를 실패율의 내림차순으로 정렬
function solution(N, stages) {
    let failMap = new Map();

    let nowIndex = 0;
    let nowTotalLength = 0;
    stages = stages.sort((a,b) => a-b);
    
    for(let i = 1; i <= N; i++){
        nowTotalLength = stages.length - nowIndex;
        let filteredArrLength = stages.filter(s => s === i).length;
        nowIndex += filteredArrLength;
        failMap.set(i, filteredArrLength/nowTotalLength);
    }
    failMap = [...failMap].sort((a,b) => b[1]-a[1]);

    return failMap.map(fm => fm[0]);
}

solution(N, stages);

// node 추천문제/실패율.js