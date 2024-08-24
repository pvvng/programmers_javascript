// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers
const answers = [1,2,3,4,5]

// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
const result = [1,2,3]

function solution(answers) {
    var answer = [];
    // 찍는 방식
    const methods = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    let countArr = Array(methods.length).fill(0);

    answers.forEach((a, i) => {
        let [method0, method1, method2] = methods;
        if (a === method0[i % method0.length]) countArr[0] ++;
        if (a === method1[i % method1.length]) countArr[1] ++;
        if (a === method2[i % method2.length]) countArr[2] ++;
    })

    let max = Math.max(...countArr)
    countArr.forEach((c, i) => {
        if(max === c) answer.push(i + 1)
    })

    return answer;
}

solution(answers)

// node LV1/모의고사.js