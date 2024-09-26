const sequence = [1, 2, 3, 4, 5]
const k = 7

function solution(sequence, k) {
    var answer = new Map();
    // 누적합 배열 구하기
    let sum = [];
    let temp = 0
    sequence.forEach(se => {
        temp += se;
        sum.push(temp);
    })
    // 누적합으로 찾기
    let tempMap = new Map();
    sum.forEach((s, i) => {
        if(tempMap.has(s-k)){
            answer.set([tempMap.get(s-k), i], i-tempMap.get(s-k));
        }else if(s === k){
            answer.set([0, i], i);
        }
        tempMap.set(s, i + 1);
    })
    // 정렬해서 리턴
    return Array.from(answer).sort((a,b) => a[1] - b[1])[0][0];
}

console.log(solution(sequence, k));

// node LV2/연속된부분수열의합.js