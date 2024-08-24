// 숫자들이 들어있는 배열 nums
const nums = [1, 2, 3]
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수

// 17 22 23 실패
function solution(nums) {
    var answer = 0;

    let sumArr = [];
    for (let x = 0 ; x < nums.length - 2; x++){
        for(let y = x + 1; y < nums.length - 1; y++){
            for (let z = y + 1; z < nums.length; z++){
                let sum = nums[x] + nums[y] + nums[z];
                if (!(sum % 2 === 0) && !(Number.isInteger(Math.sqrt(sum)))){
                    sumArr.push(sum);
                } 
            }
        }
    }
    sumArr.forEach(sa => {
        let isPrime = false;
        for(let i = 3 ; i < Math.sqrt(sa); i++){
            if(Number.isInteger(sa/i)) isPrime = true;
        }
        if(!isPrime) answer ++;
    })

    return answer;
}

solution(nums);

// node 추천문제/소수만들기.js