
// 총 3번의 기회
// Single(S) ^1, Double(D) ^2, Triple(T) ^3 영역이 존재
// 스타상(*) *2 ,아차상(#) -*2 이 존재하며 스타상(*) 당첨 시 
// 해당 점수와 바로 전에 얻은 점수를 각 2배

// 아차상(#) 당첨 시 해당 점수는 마이너스
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩 가능
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩가능
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다.

const dartResult = 	"10D4S10D"

// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수

// 4, 5, 6, 7 실패
function solution(dartResult) {
    var answer = 0;

    let dartResultArr = dartResult.split('');
    let editedDartArr = [];

    // 10이 존재한다면 조정한 어레이로 만들기
    for(let i = 0; i < dartResultArr.length; i++){
        /** 두번째 10이 제대로 변경되지 않는다. */
        /** 1다음에 오는 것이 0으로 감지되면
         * 0은 건너뛰고 1만 넣어야한다.
         */
        const nowDart = dartResultArr[i];
        const nextDart = dartResultArr[i + 1]
        if(nowDart === '1' && nextDart === '0'){
            /**
             * forEach로 순회하던걸 for 반복문으로 바꾸고
             * 10이 감지되면 다음 걸로 건너뛸수 있도록 i++ 시키기
             */
            editedDartArr.push('10');
            i ++;
        }else{
            editedDartArr.push(nowDart);
        }
    }

    let tempScoreMap = new Map();

    let scoreCounter = 0;
    for ([index, dart] of editedDartArr.entries()){
        // d가 숫자라면 숫자로, 아니라면 NaN으로 지정된다.
        let temp = parseInt(dart);
        let IsNextZero = parseInt(dartResultArr[index + 1])
        // 현재 문자가 숫자인지 검사
        if(0 <= temp && temp <= 10){
            tempScoreMap.set(scoreCounter, temp);
            scoreCounter ++;

        // 아니면 점수 올리는 상황으로 간주
        }else{
            let nowAppendScore = tempScoreMap.get(scoreCounter - 1);
            // *일 경우 사용되는 직전 점수
            let preAppendScore = tempScoreMap.get(scoreCounter - 2);
            if(dart === 'D'){
                nowAppendScore = nowAppendScore ** 2;
            }else if (dart === 'T'){
                nowAppendScore = nowAppendScore ** 3;
            }else if(dart === '#'){
                nowAppendScore = -nowAppendScore;
            }else if (dart === '*'){
                nowAppendScore = nowAppendScore * 2;
                // 직전 값이 존재할 경우에만 *2
                if(preAppendScore !== undefined){
                    preAppendScore = preAppendScore * 2;
                }
            }
            tempScoreMap.set(scoreCounter - 1, nowAppendScore);
            // 직전 값이 존재할 경우에만 저장
            if(preAppendScore !== undefined){
                tempScoreMap.set(scoreCounter - 2, preAppendScore);
            }
        }
    }

    // 계산한 점수 전부 더하기
    tempScoreMap.forEach((tsm) => {
        answer = answer + tsm;
    })

    return answer;
}

solution(dartResult);

// node LV1/다트게임.js