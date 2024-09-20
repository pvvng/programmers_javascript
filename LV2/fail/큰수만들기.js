const number =  "4177252841"
const k = 4

// 2 타임아웃 / 3~6 (signal: aborted (core dumped)) / 7~10 런타임 에러
// 8, 9, 10 타임아웃

// 뒤에 큰 수가 존재하는지 여부가 중요한듯
function solution(number, k) {
    const stack = [];
    const n = number.length;
    
    for (let i = 0; i < n; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < number[i]) {
            stack.pop(); // 현재 숫자가 스택의 마지막 숫자보다 크면 제거
            k--;
        }
        stack.push(number[i]); // 현재 숫자 추가
    }

    // k가 남아있다면 끝에서부터 제거
    if (k > 0) {
        stack.splice(stack.length - k, k);
    }

    return stack.join('');
}

console.log(solution(number, k));
