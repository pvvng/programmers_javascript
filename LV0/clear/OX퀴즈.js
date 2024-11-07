const quiz = ["3 - 4 = -3", "5 + 6 = 11"]

function solution(quiz) {
    var answer = [];
    quiz.forEach(qz => {
        let [q,a] = qz.split(' = ');
        if(eval(q) == parseInt(a)) answer.push('O');
        else answer.push('X');
    })
    return answer;
}

solution(quiz);

// node LV0/OX퀴즈.js