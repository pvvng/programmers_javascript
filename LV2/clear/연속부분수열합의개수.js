// 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 
const elements = [7,9,1,1,4];

// 79 91 11 14 47 (1)
// 731 311 114 147 479 (2)
// 7911 9114 1147 1479 4971 (length -2)
// length

function solution(elements) {
    /** 기존 배열 2배로 키우기 (유사 원형 배열) */
    const multifiedArr = [...elements, ...elements];
    let sumSet = new Set();

    // 0, 마지막 미리 세팅
    sumSet.add(elements.reduce((acc, cul, i) => {
        if(i === 1) sumSet.add(elements[0]);
        sumSet.add(cul);
        return acc + cul;
    }))

    /** 반복문 돌리기 */
    for(let i = 1; i <= elements.length - 2; i++){
        for(let j = 0; j < elements.length; j++){
            let sum = 0;
            for(let z = j; z <= i+j; z++){
                sum += multifiedArr[z];
            }
            sumSet.add(sum);
        }
    }
    return sumSet.size;
}

solution(elements);

// node LV2/연속부분수열합의개수.js