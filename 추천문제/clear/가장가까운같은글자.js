const s = "oxo"
function solution(s) {
    var answer = [];
    let answerMap = new Map();
    [...s].forEach((str, i) => {
        answerMap.get(str) !== undefined ? 
        answer.push(i - answerMap.get(str)) : 
        answer.push(-1);

        answerMap.set(str, i)
    })
    return answer;
}

solution(s)

// node 추천문제/가장가까운같은글자.js