/**
 * 알게된점
 * 
 * 정수 A를 약수로 가지는 값을 파악하기 위해서 등차수열을 이용할 수 있다.
 * 시간 복잡도를 해결하기 위해 중첩 for문은 지양하는게 좋지만, 
 * 최소한의 시간 복잡도를 가질 수 있게 설정해줄 수 있다.
 * 
 * 예를 들면, 
 * for (let j = i; j <= number; j = j + i) {} 
 * 이런 식으로 단순히 j++만 하는게 아니라 특정 값을 더해서 좀더 적은 순회를 할 수 있다.
 * 
*/
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

    let countArr = [];

    // 약수니까 최소 공격력은 2 (1, number)
    for (let i = 1; i <= number; i++){
        // 약수의 갯수를 어떻게 구해야할까?
        // i의 루트 값을 구했을때, i가 짝수일 경우엔 루트 값 이하의 정수를 확인한다.
        const sqrtNumber = parseInt(Math.sqrt(i).toString());

        let counter = 0;

        // i에서 1 ~ sqrt number를 나눈다
        for(let j = 1; j <= sqrtNumber; j++){

            // 나눈 값이 정수인지, 소수인지 확인하고 정수면 counter 값 +2 
            // 만약에 j^2 값이 i와 같다면 counter + 1
            
            // 기사 개인 숫자 (i)

            // 개인 숫자를 루트 씌운 값이 될때까지 1에서 증가시키는 값 (j)

            // 만약 j^2이 i와 같다면 i는 j의 제곱수임 ((j * j === i) ? 1 : 2)

            // i / j 가 정수 j는 i의 약수 중 하나임
            // 그럼 정수 / 소수 판단은 어떻게 하지?
            // i/j의 값을 문자열화 시키고 '.' 단위로 split해서 [1]번째 값이 undefined면 정수겠지?
            // 정상 작동하는듯 그럼 정수임이 확인되면 j는 i의 약수임이 증명되는거니까 count + 2 시키도록하자
            // 근데 i가 j의 제곱수인 경우에는 count + 1해야하니까 해당 조건도 추가하자

            if((i / j).toString().split('.')[1] === undefined){
                // 왜 counter가 항상 초기화되는걸까?

                // 기존 코드
                // counter = counter + (j * j === i) ? 1 : 2;

                // 바뀐 코드
                // let checkIsSquare = (j * j === i) ? 1 : 2;
                // counter = counter + checkIsSquare;

                /** 
                 * 왜 기존 코드는 정상 작동 하지 않았을까?
                 * GPT 센세한테 물어보자
                 * 
                 * GPT 센세의 한마디
                 * 
                 * 기존 코드가 정상적으로 작동하지 않은 이유는?
                 * 
                 * 삼항 연산자(?:)의 우선순위 때문
                 * 삼항 연산자의 우선순위가 + 연산자보다 낮아서 의도한 대로 동작하지 않은 것
                 * 
                 * counter + (j * j === i) 부분이 먼저 평가됩니다. 
                 * 이 결과는 (counter + (j * j === i)) ? 1 : 2가 됩니다
                 */
                // 그러니까 삼항 연산자 부분에 괄호를 넣으면 
                // 우선순위가 ? 연산자로 설정돼서 코드가 원하는대로 작동함

                // 최종 코드
                counter = counter + ((j * j === i) ? 1 : 2);
            }
        }
        countArr.push(counter)
    }

    for(swordPower of countArr){
        // 제한 공격력을 초과할때
        if(swordPower > limit){
            answer = answer + power;   
        }else{
            answer = answer + swordPower;   
        }
    }

    console.log(answer)
    return answer;
}

// solution(number, limit, power); 

/*** 실패!! 타임아웃 ***/
/** 역시 2중 반복문이 문제가 되는군하 
 * 
 * 최대 기사의 수가 10만이니까 최악의 경우 10만^2의 시간 복잡도를 가짐 
 * */

function solutionBYGPT(number, limit, power) {
    let answer = 0;

    // 각 숫자의 약수 개수를 저장할 배열
    const divisorCounts = new Array(number + 1).fill(0);

    // 1부터 number까지 반복
    for (let i = 1; i <= number; i++) {
        // i의 배수들의 약수 개수를 증가시킴
        for (let j = i; j <= number; j = j + i) {
            divisorCounts[j]++;
        }
    }
    /**
     * 나 : 이거 뭐에요 센세
     * 
     * GPT : 멍청한 쉑 설명 들어간다 입벌려
     * 
     * 가령 number = 6인 경우를 살펴봅시다.
     * 
     * i = 1일 때:
     * j = 1, 2, 3, 4, 5, 6에서 divisorCounts[j]++를 수행합니다.
     * 즉, 1, 2, 3, 4, 5, 6은 모두 1을 약수로 가지므로 각각의 divisorCounts 값이 1씩 증가합니다.
     * divisorCounts는 [0, 1, 1, 1, 1, 1, 1]이 됩니다.
     * 
     * i = 2일 때:
     * j = 2, 4, 6에서 divisorCounts[j]++를 수행합니다.
     * 2, 4, 6은 모두 2를 약수로 가지므로 각각의 divisorCounts 값이 1씩 증가합니다.
     * divisorCounts는 [0, 1, 2, 1, 2, 1, 2]이 됩니다.
     * 
     * i = 3일 때:
     * j = 3, 6에서 divisorCounts[j]++를 수행합니다.
     * 3, 6은 3을 약수로 가지므로 각각의 divisorCounts 값이 1씩 증가합니다.
     * divisorCounts는 [0, 1, 2, 2, 2, 1, 3]이 됩니다.
     * 
     * ...
     * 
     * i = 6일 때:
     * j = 6에서 divisorCounts[j]++를 수행합니다.
     * 6은 6을 약수로 가지므로 divisorCounts[6] 값이 1 증가합니다.
     * divisorCounts는 [0, 1, 2, 2, 3, 2, 4]이 됩니다.
     * 
     * 우와 개쩐다. 굳이 sqrt 안쓰고 이렇게 할 수 있는 이유가 뭘까?
     * 고등학생 때 배운 등차수열 생각하면 될것같다
     * 
     * 어떤 정수 i를 약수로 가지는 모든 정수는 일종의 등차수열일 것임
     * i = 2일때 i를 약수로 가지는 값은 
     * i + (2 * 0), 
     * i + (2 * 1), 
     * i + (2 * 2) ... 이니까
     * 곱 연산도 결국 합 연산을 여러번 한거랑 같으니께
     * 
     * for (let j = i; j <= number; j = j + i) {
     *      divisorCounts[j]++;
     * }
     * 
     * j의 값을 i의 값 만큼 계속 더해주는거지
     * 그럼 i = 2이고 number가 6이라고 가정하면 j의 값은 2, 2 + 2, 2 + 4 이렇게 되겠지
     * 그럼 앞서 설명한거랑 같이 
     * 2 + (2 * 0), 
     * 2 + (2 * 1), 
     * 2 + (2 * 2) 요런 형태를 가지게 됨. 이것들은 정수 i의 약수와 같음
     * 
     * 이런 방식으로 미리 약수의 갯수를 구할 수 있음
     * 
     * 결론적으로 등차수열은 일정한 차이(공차) 만큼 증가하는 수열임
     * 약수는 어떤 규칙으로 정해지는건 아니지만, 
     * 어떤 정수 A가 다른 정수 B의 약수가 맞는지는 등차수열로 미리 확인 가능함
     * 
     * 예를들어 어떤 정수 A를 7의 공차로 증가시키면
     * 
     * 7, 14, 21, 28 ... 이런 값을 가질거임.
     * 방금 적은 값들은 모두 7을 약수로 가지는 정수가 되는거셈
     */

    // 무기 공격력 계산
    for (let i = 1; i <= number; i++) {
        const swordPower = divisorCounts[i];
        if (swordPower > limit) {
            answer += power;
        } else {
            answer += swordPower;
        }
    }

    return answer;
}

solutionBYGPT(number, limit, power)

// node LV1/기사단원의무기.js