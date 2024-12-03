const rank = [3, 7, 2, 5, 4, 6, 1]
const attendance = [false, true, true, true, true, false, false]
// 10000 × a + 100 × b + c를 return 

function solution(rank, attendance) {
    var answer = 0;
    const rankMap = new Map();
    rank.forEach((v, i) => {
        if(attendance[i]) rankMap.set(v, i);
    });
    const sortMap = [...rankMap].sort((a, b) => a[0] - b[0]).splice(0, 3);
    sortMap.forEach((v, i) => {
        answer += v[1] * (100 ** (2-i));
    });
    return answer;
}

solution(rank, attendance)

// node LV0/전국대회선발고사.js