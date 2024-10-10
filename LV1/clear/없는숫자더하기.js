const numbers = [1,2,3,4,6,7,8,0]

function solution(numbers) {
    return 45 - numbers.reduce((acc, cul) => acc + cul);
}

solution(numbers);

// node LV1/없는숫자더하기.js