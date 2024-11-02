const s = "try hello world";

function solution(s) {
    var answer = '';
    //  짝수는 대문자
    let splitedStr = s.split(' ');
    splitedStr.forEach((str, j) => {
        str.split('').forEach((s, i) => {
            if(i % 2 === 0) answer += s.toUpperCase();
            else answer += s.toLowerCase();
        })
        if(j !== splitedStr.length -1) answer += ' ';
    });
    return answer;
}

solution(s);

// node LV1/re이상한문자만들기.js