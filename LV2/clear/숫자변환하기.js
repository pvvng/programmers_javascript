const x = 10
const y = 40
const n = 5

// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.

function solution(x, y, n) {
    const pos = ['*2', '*3', '+n'];

    let queue = [{val : y, index : 0}];

    let queueIndex = 0;
    while(queueIndex !== queue.length){
        let {val, index} = queue[queueIndex];

        queueIndex ++;

        if(val === x){
            return index;
        }
        if(val < 0 || !Number.isInteger(val)){
            continue;
        }

        for(let i = 0; i < pos.length; i++){
            let trial = pos[i];
            if(trial === '*2') queue.push({val : val/2, index : index + 1});
            else if(trial === '*3') queue.push({val : val/3, index : index + 1});
            else if(trial === '+n') queue.push({val : val-n, index : index + 1});
        }
    }
    return -1;
}

console.log(solution(x,y,n));

// node LV2/숫자변환하기.js