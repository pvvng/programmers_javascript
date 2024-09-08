const n = 2
const t = 4
const m = 2
const p = 1

// t*m 구해야할 게임의 개수
function solution(n, t, m, p) {
    let gamset = [];

    /** 게임판 만들기 */
    for(let i = 0; i < Infinity; i++){
        let str = i.toString(n).split('').map(s => s.toUpperCase());
        gamset.push(...str);
        if(gamset.length >= t*m) break;
    }
    /** 튜브 순서의 정답만 골라내기 */
    let answerArr = [];
    for(let i = p-1; i < gamset.length; i+=m){
        answerArr.push(gamset[i]);
    }
    /** answerArr의 length 가 정답보다 길면 pop */
    if(answerArr.length > t){
        for(let i = 0; i < answerArr.length - t; i++){
            answerArr.pop();
        }
    }
    return answerArr.join('');
}

solution(n,t,m,p)

// node 추천문제/N진수게임.js