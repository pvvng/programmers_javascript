const prices = [1, 2, 3, 2, 3]

function solution(prices) {
    return prices.map((price, i) => {
        for(let j = i + 1; j < prices.length; j++){
            // 가격 떨어지면 바로 리턴
            if (price > prices[j]) return j-i;
        }
        return prices.length - i - 1;
    })
}

solution(prices);