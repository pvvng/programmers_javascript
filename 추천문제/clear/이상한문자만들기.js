const s = "try hello world";
// 단어(공백을 기준)별로 짝/홀수 인덱스를 판단
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로

// 2번 제외 실패
function solution(s) {
    var answer = '';
    let entries = 0;
    for(let ss of s){
        if(ss === ' ') entries = -1;
        else if(entries % 2 === 0) ss = ss.toUpperCase();
        else if(entries % 2 === 1) ss = ss.toLowerCase();
        answer += ss;
        entries++;
    };
    return answer;
}

solution(s);

// node 추천문제/이상한문자만들기.js