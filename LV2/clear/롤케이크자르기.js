const topping = [1, 2, 3, 1, 4]

// 2 ~ 타임아웃
function solution(topping) {
    var answer = 0;
    const toppingMap = new Map();
    const brotherMap = new Map();

    topping.forEach(t => {
        let getter = toppingMap.get(t) || 0;
        toppingMap.set(t, getter + 1);
    })

    let index = 0;
    while (index !== topping.length){
        let brotherGetter = brotherMap.get(topping[index]) || 0;
        let toppingGetter = toppingMap.get(topping[index]) || 0;

        let minusToppingGetter = toppingGetter - 1;
        if(minusToppingGetter > 0){
            toppingMap.set(topping[index], minusToppingGetter);
        }else if (minusToppingGetter === 0){
            toppingMap.delete(topping[index]);
        }

        brotherMap.set(topping[index], brotherGetter + 1);

        if(toppingMap.size === brotherMap.size) answer ++;
        index ++;
    }
    console.log(answer)
    return answer;
}

solution(topping);

// node LV2/롤케이크자르기.js