const citations = [10, 8, 5, 4, 3]

/** 11,16 제외 실패 */
// https://school.programmers.co.kr/questions/64629
function solution(citations) {
    var answer = 0;

    const n = citations.length;
    citations.sort((a, b) => b - a);
    for(let i = 0; i < n; i++){
        const h = citations[i];
        answer = Math.max(answer, Math.min(h, i+1))
    }
    console.log(answer)
    return answer;
}

solution(citations);

// node LV2/HIndex.js