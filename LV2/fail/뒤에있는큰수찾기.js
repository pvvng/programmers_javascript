// 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수
const numbers = [9, 1, 5, 3, 6, 2]

// 20, 21, 22 23 타임아웃
function solution(numbers) {
    // 뒷 큰수가 없는 경우는 -1로 기본 설정
    const answer = Array(numbers.length).fill(-1); 
    let stack = [];
    for (let i = 0; i < numbers.length; i++) {
        // 스택이 비어 있지 않고 현재 숫자가 스택의 마지막 인덱스에 해당하는 숫자보다 크면
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const idx = stack.pop();  // 스택에서 인덱스를 꺼냄
            answer[idx] = numbers[i];  // 해당 인덱스의 뒷 큰수를 현재 숫자로 설정
        }
        stack.push(i);  // 현재 인덱스를 스택에 저장
    }
    return answer;
}

solution(numbers);

// node LV2/뒤에있는큰수찾기.js