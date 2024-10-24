const n = 3
const lost = [3]	
const reserve = [1]

function solution(n, lost, reserve) {
    var answer = 0;

    const clothMap = new Map();

    for(let i = 1; i <= n; i++){
        let counter = 1;
        if(lost.includes(i)) counter--;
        if(reserve.includes(i)) counter ++;
        clothMap.set(i, counter);
    }

    [...clothMap].filter(v => v[1] === 0).map(v => v[0])
    .forEach(zs => {
        let pre = clothMap.get(zs-1) || 0;
        let next = clothMap.get(zs+1) || 0;
        if(pre >= 2){ 
            clothMap.set(zs-1, pre-1);
            clothMap.set(zs, clothMap.get(zs) + 1);
        }else if (next >= 2){
            clothMap.set(zs+1, next-1);
            clothMap.set(zs, clothMap.get(zs) + 1);
        }
    });
    
    clothMap.forEach(cm => {
        if(cm !== 0) answer ++
    })
    return answer;
}

solution(n, lost, reserve);

// node LV1/re체육복.js