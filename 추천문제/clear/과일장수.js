// 사과의 최대 점수 k
const k = 4;
// 한 상자에 들어가는 사과의 수 m
const m = 5;
// 사과들의 점수 score
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]

// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 
// 사과 한 상자의 가격은 p * m 입니다.

// 과일 장수가 얻을 수 있는 최대 이익을 return
function solution(k, m, score) {
    var answer = 0;
    // 오름차순으로 정렬하고 남는 사과를 slice 한다
    const sortedScore = 
    score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        // 제일 앞자리에 존재하는 사과는 반드시 최솟값이다
        answer += sortedScore[i] * m;
    }
    return answer;
}

solution(k, m, score);

// node 추천문제/과일장수.js