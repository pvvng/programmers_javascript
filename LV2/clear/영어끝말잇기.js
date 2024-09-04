// 끝말잇기 실패
// 같은 단어 중복

const n = 3
const words = 		["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
function solution(n, words) {
    var answer = [];
    let lastword = '';
    const preAnswer = [];
    let counterArr = new Array(n).fill(0);

    for([i,w] of words.entries()){
        counterArr[i%n]++;
        if(i > 0){
            if(lastword !== w[0] || preAnswer.includes(w)){
                answer = [i%n + 1, counterArr[i%n]];
                break;
            }
        }
        lastword = w[w.length - 1];
        preAnswer.push(w);
    };
    if(!answer.length) answer = [0, 0];

    return answer;
}

solution(n, words)

// node Lv2/영어끝말잇기.js