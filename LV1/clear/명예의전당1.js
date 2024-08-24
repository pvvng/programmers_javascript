// 명예의 전당 목록의 점수의 개수 k
const k = 4
// 1일부터 마지막 날까지 출연한 가수들의 점수인 score
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]
// 매일 발표된 명예의 전당의 최하위 점수를 return

function solution(k, score) {
    var answer = [];
    const fame = [];
    score.forEach(s => {
        // 명예의 전당에 넣을때는 큰거
        // answer는 명예의 전당에서 최하위 값
        if (fame.length < k) fame.push(s);
        else {
            let min = Math.min(...fame);
            if(min < s) fame.splice(fame.indexOf(min), 1, s)
        }
        answer.push(Math.min(...fame));
    });

    return answer;
}

solution(k, score);
// node LV1/명예의전당1.js