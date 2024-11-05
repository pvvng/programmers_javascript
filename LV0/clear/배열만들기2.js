const l = 5
const r = 555

function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        let set = new Set([...i.toString().split('')]);
        set.delete('5');
        set.delete('0');
        if(set.size === 0){
            answer.push(i)
        }
    }
    return answer.length === 0 ? [-1] : answer;
}

solution(l, r);

// node LV0/배열만들기2.js