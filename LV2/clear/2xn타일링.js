const n = 4
// 경우의 수가 많아 질 수 있으므로, 
// 경우의 수를 1,000,000,007으로 나눈 나머지를 return

// (x+y)!/x!*y!

// 피보나치임;
// 1 => 1
// 2 => 2
// 3 => 3
// 4 => 5
// 5 => 8

function solution(n) {
    let memo = {}
    for(let i = 1; i <=n; i++){
        if(i === 1) memo[i] = 1;
        else if(i === 2) memo[i] = 2;
        else {
            let p = memo[i-1] > 1000000007 ? memo[i-1] % 1000000007 : memo[i-1] 
            let pp = memo[i-2] > 1000000007 ? memo[i-2] % 1000000007 : memo[i-2] 
            memo[i] = p + pp
        }
    }
    return memo[n] % 1000000007
}

console.log(solution(n));

// node LV2/2xn타일링.js