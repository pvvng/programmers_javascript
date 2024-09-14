const n = 110011	
const k = 10

// 14, 16 실패
function solution(n, k) {
    var answer = 0;
    n = n.toString(k);
    // 조건에 맞취서 정규식 설정
    const regex = /[0]+/;
    const splitedArr = n.split(regex).map(v => parseInt(v));

    splitedArr.forEach(sa => {
        if(sa === 2) answer ++;
        else if (sa % 2 === 1 && sa !== 1 && !Number.isInteger(Math.sqrt(sa))){  
            let isPrime = true;
            for(let i = 3; i < Math.sqrt(sa); i+=2){
                if(Number.isInteger(sa / i)) isPrime = false;
            }
            if(isPrime) answer ++;
        }   
    });

    return answer;
}

solution(n, k);

// node LV2/k진수에서소수개수구하기.js