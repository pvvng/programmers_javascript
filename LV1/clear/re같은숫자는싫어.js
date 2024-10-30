const arr =[4,4,4,3,3]

function solution(arr){
    let answer = [];
    let pre = -1;
    arr.forEach(e => {
        if(pre !== e){
            answer.push(e);
            pre = e;
        }
    })
    return answer;
}

solution(arr);

// node LV1/re같은숫자는싫어.js