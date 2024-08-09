// 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 
// 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매

// 공격력의 제한수치를 정하고, 
// 제한수치를 초과하는 공격력을 가진 무기를 구매해야 하는 기사는 
// 협약기관에서 정한 공격력을 가지는 무기를 구매
// 무기의 공격력 1당 1kg의 철이 필요

// 기사단원의 수를 나타내는 정수 number 
const number = 10;
// 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit
const limit = 3;
// 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power
const power = 2
// 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return
// result 10

function solution(number, limit, power) {
    var answer = 0;

    // 약수니까 최소 공격력은 2 (1, number)
    for (let i = 1; i <= number; i++){
        // 약수의 갯수를 어떻게 구해야할까?
        const sqrtNumber = parseInt(Math.sqrt(i).toString());
        // i의 루트 값을 구했을때, i가 짝수일 경우엔 루트 값 이하의 정수를 확인한다.

        // i에서 1 ~ sqrt number를 나눈다
        let counter = 0;
        for(let i = 1; i <= sqrtNumber; i++){
            // 나눈 값이 정수인지, 소수인지 확인하고 정수면 counter 값 +2
            
        }
    }
    return answer;
}

solution(number, limit, power); 

// node LV1/기사단원의무기.js