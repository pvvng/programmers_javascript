/**
 * 알게된점
 * 
 * 굳이 억지로 함수를 만들 필요는 없다. 
 * 
 * 삼항연산자와 
 * OR(||) 연산자, 
 * ??연산자,
 * 객체 디스트럭처링
 * 등을 이용해서 기본값을 설정할 수 있다.
 * 
 * 다만, 삼항 연산자을 제외한 기본값 설정 메소드는 
 * falsy한 값이 들어올때만 기본값이 적용된다.
 * 
 * 고로, 기본값 설정 조건을 세밀하게 (예를 들어 >, =, <와 같은 수학 연산) 
 * 조정하고 싶다면 삼항연산자를 사용하는 편이 좋다.
 */

// survey의 원소는 
// "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.
const survey = ["AN", "CF", "MJ", "RT", "NA"]

// 1	매우 비동의 first
// 2	비동의 first 
// 3	약간 비동의 first
// 4	모르겠음 none
// 5	약간 동의 second
// 6	동의 second
// 7	매우 동의 second

// 매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
// 동의나 비동의 선택지를 선택하면 2점을 얻습니다.
// 약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
// 모르겠음 선택지를 선택하면 점수를 얻지 않습니다.

const choices = [5, 3, 2, 7, 5]

// 0점으로 동일한 점수이면 사전순으로 빠른 순서가 반환
// result = "TCMA"



function solution(survey, choices) {

    if(survey.length !== choices.length){
        return null;
    }

    const 성격유형점수판데기 = {
        R : 0, T : 0,
        C : 0, F : 0,
        J : 0, M : 0,
        A : 0, N : 0,
    };

    for([인덱스, 성격유형] of survey.entries()){
        const [성격유형1, 성격유형2] = 성격유형.split('');
        const choice = choices[인덱스];
        /*** GPT 선생님이 위치 옮겨줌 ***/
        if(choice < 4 && choice > 0){
            let 점수 = 4-choice;
            성격유형점수판데기[성격유형1] += 점수;
        }
        if(choice > 4 && choice < 8){
            let 점수 = choice - 4;
            성격유형점수판데기[성격유형2] += 점수;
        }
    }

    console.log(성격유형점수판데기)
    var answer = '';

    // answer = 엠비티아이뽑아버리기(성격유형점수판데기)

    /**
     * 킹지피티 선생님의 한마디
     * 
     * 삼항연산자를 사용해서 값이 같은 경우 사전순으로 mbti를 반환하도록
     * 엠비티아이 사전 순서를 미리 정해둔다. 
     * 
     * */
    const result = [
        성격유형점수판데기.R >= 성격유형점수판데기.T ? 'R' : 'T',
        성격유형점수판데기.C >= 성격유형점수판데기.F ? 'C' : 'F',
        성격유형점수판데기.J >= 성격유형점수판데기.M ? 'J' : 'M',
        성격유형점수판데기.A >= 성격유형점수판데기.N ? 'A' : 'N'
    ].join('');

    answer = result;
    // console.log(answer)
    return answer;
}

solution(survey, choices);

/** 고대의 유적 */
// function 엠비티아이뽑아버리기(성격유형점수판데기){
//     let mbti = { 
//         0 : ['', 0], 
//         1 : ['', 0],
//         2 : ['', 0],
//         3 : ['', 0],
//     };

//     let count = 0;
//     let mbtiKey = 0;
//     for(const 성격유형 in 성격유형점수판데기){
//         if(mbti[0] === ''){}
//         count ++;
//         mbtiKey = (count / 2).toFixed(0) - 1;
//         if(mbti[mbtiKey][0] === ''){
//             mbti[mbtiKey][0] = 성격유형;
//             mbti[mbtiKey][1] = 성격유형점수판데기[성격유형];
//         }else{
//             if(mbti[mbtiKey][1] < 성격유형점수판데기[성격유형]){
//                 mbti[mbtiKey][0] = 성격유형;
//                 mbti[mbtiKey][1] = 성격유형점수판데기[성격유형];
//             }else if (mbti[mbtiKey][1] === 성격유형점수판데기[성격유형]){
//                 let 더빠른것 = '';
//                 if(mbti[mbtiKey][0] < 성격유형){
//                     mbti[mbtiKey][1] = 성격유형점수판데기[성격유형];
//                 }
//             }
//         }
//     }

//     let returnMbti = []
//     for(최종성격 in mbti){
//         returnMbti.push(mbti[최종성격][0]);
//     }
//     returnMbti = returnMbti.join('')

//     return returnMbti

// }

// node LV1/성격유형검사하기.js