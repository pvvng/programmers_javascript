const x = 10

function solution(x) {
    let sx = x.toString().split('').map(v => parseInt(v)).reduce((acc, cul) => {
        return acc + cul;
    })
    return x % sx === 0 ? true : false;
}

solution(x)

// node LV1/히샤드수.js