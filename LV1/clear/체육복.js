/**
 * 알게된점
 * 
 * 조건을 생각보다 많이 생각해야 안틀릴듯 
 * 
 * GREEDY (탐욕법)
 * 매번 가장 최선의 선택을 하자
 *
 * <문제 조건 중 하나> 
 * 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
 * 체육수업을 들을 수 있는 학생의 **최댓값**을 return 
 * 
 */

// 1트
// 3, 5, 7, 12, 24 틀림
// 2트
//5, 12, 24

// 전체 학생의 수 n
const n = 5;
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost
const lost = [1, 2]
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
const reserve = [2, 3]

// 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// 체육수업을 들을 수 있는 학생의 최댓값을 return 
// 4

function solution(n, lost, reserve) {
    var answer = n;
    const students = Array(n).fill(0);

    const lostMap = new Map();

    lost.forEach(l => {
        lostMap.set(l, true);
    })

    const reserveMap = new Map();

    reserve.forEach(l => {
        reserveMap.set(l, true);
    })

    /***
     *  3트 ) 여분의 체육복을 들고 왔는데, 도둑이 훔쳐간 경우 
     * ***/
    reserveMap.forEach((value, key) => {
        if(lostMap.get(key)){
            // lost map과 reserve map에서 해당 key의 value false 로 변경
            lostMap.set(key, false);
            reserveMap.set(key, false);
        }
    })

    students.forEach((s, i) => {
        const studentNum = i + 1;
        // lost map에 저장된 값이 false거나, 저장되지 않았을 경우엔 시행 x
        if(lostMap.get(studentNum)){
            if(reserveMap.get(studentNum - 1)){
                // console.log(studentNum-1, '니 체육복은', studentNum, '거야')
                reserveMap.set(studentNum - 1, false);
            }else if (reserveMap.get(studentNum + 1)){
                // console.log(studentNum+1, '니 체육복은', studentNum, '거야')
                reserveMap.set(studentNum + 1, false);

            /** 2트 ) 체육복을 도둑맞은 학생이 여분의 옷을 들고 온 경우 추가 */
            // }else if (reserveMap.get(studentNum)){
            //     // console.log('하나 더 들고오길 잘했지?', studentNum)
            //     reserveMap.set(studentNum, false);
            }else{
                // console.log('호엥엥', studentNum, '쟝은 체육복이 없는 거시와요')
                answer --;
            }
        }
    })

    // console.log(answer)

    return answer;
}

solution(n, lost, reserve);

// node LV1/체육복.js