const s = "-1 -2 -3 Z"

function solution(s) {
    var answer = [];
    s.split(' ').forEach(v => {
        if(v === "Z") answer.pop();
        else answer.push(parseInt(v));
    });
    
    return answer.length > 0 ? answer.reduce((acc, cul) => acc + cul) : 0;
}

solution(s);

// node LV0/컨트롤제트.js