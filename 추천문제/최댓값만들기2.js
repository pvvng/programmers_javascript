const numbers = [10, 20, 30, 5, 5, 20, 5]

function solution(numbers) {
    numbers.sort((a,b) => a - b);
    let maxArr = [];
    if(numbers[0]<0 && numbers[1]<0) maxArr.push(numbers[0] * numbers[1]);
    maxArr.push(numbers[numbers.length - 1] * numbers[numbers.length - 2])
    return Math.max(...maxArr);
}

solution(numbers);

// node 추천문제/최댓값만들기.js