const absolutes = [1,2,3]
const signs = [false,false,true]

function solution(absolutes, signs) {
    return absolutes.reduce((acc, cul, i) => {
        let c = signs[i] ? cul : -cul
        return acc + c;
    }, 0);
}

console.log(solution(absolutes, signs));

// node LV1/음양더하기.js