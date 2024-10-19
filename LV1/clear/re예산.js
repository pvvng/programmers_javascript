const d = [2,2,3,3]
const budget = 10

// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return
function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b).forEach(e => {
        if(budget - e >= 0){
            budget -= e;
            answer ++;
        }
    })
    return answer;
}

solution(d, budget);

// node LV1/re예산.js