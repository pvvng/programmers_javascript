const numbers = "225"

// 1, 2, 6, 9, 10 실패
function solution(numbers) {
    let splitedNum = numbers.split('');
    let visited = Array(numbers.length).fill(false);
    let primeSet = new Set();

    function dfs(val, index){
        visited[index] = true;
        // 종료 조건
        if(val.length > splitedNum.length) return;

        let parsedVal = parseInt(val);

        // 2인 경우 체크
        if(parsedVal === 2) primeSet.add(parsedVal);

        if(
            parsedVal !== 1 && 
            parsedVal % 2 === 1 && 
            !Number.isInteger(Math.sqrt(parsedVal))
        ){
            let isPrime = true;
            for(let j = 3; j < Math.sqrt(parsedVal); j+=2){
                if(Number.isInteger(parsedVal/j)){
                    isPrime = false;
                }
            }
            if(isPrime){
                primeSet.add(parsedVal);
            }
        }

        for(let i = 0; i < splitedNum.length; i++){
            if(!visited[i]){
                dfs(val + splitedNum[i], i);
            }
        }

        // 백트래킹
        visited[index] = false;
    }

    for(let i = 0; i < splitedNum.length; i++){
        dfs(splitedNum[i], i);
    }

    console.log(primeSet)
    
    return primeSet.size;
}

solution(numbers);

// node 추천문제/소수찾기.js