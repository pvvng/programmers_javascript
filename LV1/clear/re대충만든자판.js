const keymap = ["BC"]
const targets = ["AC", "BC"]

// 11, 12, 14 ~ 23 실패
function solution(keymap, targets) {
    var answer = [];

    targets.forEach(target => {
        let a = 0;
        let splitedTarget = target.split('')
        for(let i = 0; i < splitedTarget.length; i++){
            let t = splitedTarget[i];
            let temp = [];
            for(let j =0; j < keymap.length; j++){
                let km = keymap[j];
                let index = km.indexOf(t)
                if(index !== -1) temp.push(index);
            };
            let add = Math.min(...temp);
            a += add + 1;
        };
        if(a === Infinity) a = -1;
        answer.push(a);
    });
    return answer;
}

console.log(solution(keymap, targets));

// node LV1/re대충만든자판.js