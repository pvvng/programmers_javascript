const q = 3
const r = 1
const code =  "qjnwezgrpirldywt";


function solution(q, r, code) {
    var answer = '';
    for(let i = 0; i < code.length; i++){
        if(i%q === r) answer += code[i];
    }
    return answer;
}

solution(q, r, code);

// node LV0/qrcode.js