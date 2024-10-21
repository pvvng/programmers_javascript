const new_id = "abcdefghijklmn.p"

function solution(new_id) {
    var answer = [];
    let pre = "";
    // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)
    new_id.toLowerCase().split('').forEach(ni => {
        if(ni.charCodeAt() >= 97 && ni.charCodeAt() <= 122){
            answer.push(ni);
            pre = ni;
        }else if(Number.isInteger(parseInt(ni))){
            answer.push(ni);
            pre = ni;
        }else if(ni === '-' || ni === '_'){
            answer.push(ni);
            pre = ni;
        }else if( ni === '.'){
            if(pre !== ".") answer.push(ni);
            pre = ".";
        }
    })
    if(answer.length === 0){
        answer.push("a");
    }
    if(answer[0] === "."){
        answer.shift();
    }
    if(answer[answer.length - 1] === "."){
        answer.pop();
    }
    if(answer.length === 0){
        answer.push("a");
    }
    if(answer.length >= 16){
        answer.splice(15);
    }
    if(answer[0] === "."){
        answer.shift();
    }
    if(answer[answer.length - 1] === "."){
        answer.pop();
    }
    if(answer.length <= 2){
        let pe = answer[answer.length - 1];
        while(answer.length < 3){
            answer.push(pe);
        }
    }
    return answer.join('');
}

solution(new_id);

// node LV1/re신규아이디추천.js