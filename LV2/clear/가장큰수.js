const numbers = [3, 30, 34, 5, 9]

// 1 ~ 6, 13, 14 실패
function solution(numbers) {
    let answer = numbers.sort((a, b) => {
        console.log(`${b}${a}`, `${a}${b}`)
        // 앞뒤 문자열 붙혀서 비교해보기
        return `${b}${a}` - `${a}${b}`
    }).join('');

    return answer[0]==='0'?'0':answer;
}

console.log(solution(numbers));