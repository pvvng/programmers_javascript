const land = [[1,1,1,1],[2,2,2,3],[3,3,3,6],[4,4,4,7]]

// 타임아웃
// https://shanepark.tistory.com/183
function solution(land) {
    let dp = Array.from(Array(land.length), () => new Array(4).fill(0));

    // 마지막 열 기록 (bottom-up)
    dp[land.length-1] = [...land[land.length-1]];

    // 열의 뒤에서 2번째 인덱스부터 출발
    for (let i = land.length - 2; i >= 0; i--) {
        // dp에 기록된 이전 열의 max 값과 현재 인덱스의 값 더해서 dp arr에 저장
        dp[i][0] = land[i][0] + Math.max(dp[i+1][1], dp[i+1][2], dp[i+1][3]);
        dp[i][1] = land[i][1] + Math.max(dp[i+1][0], dp[i+1][2], dp[i+1][3]);
        dp[i][2] = land[i][2] + Math.max(dp[i+1][1], dp[i+1][0], dp[i+1][3]);
        dp[i][3] = land[i][3] + Math.max(dp[i+1][1], dp[i+1][2], dp[i+1][0]);
    }

    return Math.max(...dp[0]);
}

console.log(solution(land));

// node LV2/땅따먹기.js