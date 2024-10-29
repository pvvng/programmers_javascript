const numbers = [2,1,3,4,1]

function solution(numbers) {
    var answer = new Set();
    for(let i = 0; i < numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
            answer.add(numbers[i]+numbers[j])
        }
    }
    return [...answer].sort((a,b) => a-b);
}

solution(numbers);

// node LV1/re두개뽑아서더하기.js