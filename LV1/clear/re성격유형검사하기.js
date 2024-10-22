const survey = ["TR", "RT", "TR"]
const choices = [7, 1, 3]

// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// 1	매우 비동의
// 2	비동의
// 3	약간 비동의
// 4	모르겠음 0
// 5	약간 동의
// 6	동의
// 7	매우 동의

function solution(survey, choices) {
    var answer = '';
    const personalityMap = new Map();
    const personality = ["R", "T", "C", "F", "J", "M", "A", "N"];
    personality.forEach(p => personalityMap.set(p, 0));

    survey.forEach((s, i) => {
        const [a, b] = s.split('');
        if(choices[i] < 4){
            personalityMap.set(a, personalityMap.get(a) + 4 - choices[i]);
        }else if (choices[i] > 4){
            personalityMap.set(b, personalityMap.get(b) + choices[i] - 4);
        }
    });

    const toArr = [...personalityMap];

    for(let i = 0; i < toArr.length; i += 2){
        let a = toArr[i];
        let b = toArr[i+1];
        if(a[1] > b[1]) answer += a[0];
        else if(a[1] < b[1]) answer += b[0];
        else if (a[1] === b[1]) answer += a[0];
    }

    console.log(answer)
    return answer;
}

solution(survey, choices);

// node LV1/re성격유형검사하기.js