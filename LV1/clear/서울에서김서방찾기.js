const seoul = ["Jane", "Kim"];

function solution(seoul) {
    for(let i = 0; i < seoul.length; i ++){
        if(seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
    }
}

console.log(solution(seoul));

// node LV1/서울에서김서방찾기.js