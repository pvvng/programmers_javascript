const s = "hello";

function solution(s) {
    var answer = [];
    const smap = new Map();
    s.split('').forEach(v => smap.set(v, (smap.get(v) || 0  ) + 1));
    new Array(...smap).forEach(([k, v]) => {
        if(v === 1) answer.push(k);
    })
    return answer.sort().join('');;
}

solution(s);

// node LV0/한번만등장한문자.js