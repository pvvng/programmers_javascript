// 배열 array
const array = [10, 2]
// [i, j, k]를 원소로 가진  2차원 배열 commands가 매개변수
const commands = [[1, 2, 1]]

// 1. slice(i, j)
// 2. sort()
// 3. k번째 찾기
// 나온 결과를 배열에 담아 return 
const result = [5, 6, 3];

function solution(array, commands) {
    var answer = [];
    commands.forEach(c => {
        const [start, end, k] = c;
        console.log(array.slice(start-1, end))
        /** 두자리수에선 sort가 제대로 되지 않음 */
        answer.push(array.slice(start - 1, end)
        .sort((a, b) => a - b)[k - 1])
    });
    console.log(answer)
    return answer;
}

solution(array, commands);

// node LV1/K번째수.js