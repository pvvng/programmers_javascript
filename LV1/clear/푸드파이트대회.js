const food = [1, 7, 1, 2]	

function solution(food) {
    let ls = [];
    food.shift();
    food.forEach((f, i) => {
        let set = f % 2 === 1 ? (f-1)/2: f/2;
        for(let s = 0; s < set; s++){ ls.push(i+1);}
    })

    return `${ls.join('')}0${[...ls].reverse().join('')}`;
}

solution(food);

// node LV1/푸드파이트대회.js