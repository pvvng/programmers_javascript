const array = [7, 77, 17];

function solution(array) {
    var answer = 0;
    array.join('').split('').forEach(e => {
        if(e === "7") answer ++;
    });
    return answer;
}

solution(array);

// node LV0/7의개수.js