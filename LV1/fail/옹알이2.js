const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]
// 연속해서 같은 발음을 하는 것을 어려워합니다.
/** 연속이 아니라면 가능함  */

// 1, 11, 14, 16, 17 실패
function solution(babbling) {
    var answer = 0;
    const sounds = ["aya", "ye", "woo", "ma"];

    for(b of babbling){
        let isValidate = false;
        let tempList = [...b];
        let [preWord, nowWord] = ['', ''];

        while (tempList.length){
            // templist의 글자 앞부터 shift하면서 nowword에 집어넣기
            nowWord += tempList.shift();
            // 글자가 포함되면 플래그 변수 변경
            isValidate = sounds.includes(nowWord);

            // 플래그 변수가 true 즉, sounds 배열에 nowWord 단어가 있을경우
            if(isValidate){
                // 이전 단어와 현재 단어가 같다. 
                // 즉 연속된 단어일때 while문 종료
                if(nowWord === preWord){
                    break;
                }
                // 연속된 단어가 아닐때는 nowWord를 preWord로 변경
                preWord = nowWord;
                // nowWord는 초기화
                nowWord = '';
            }
        }
        if(nowWord === ''){
            answer ++;
        }
    }

    console.log(answer)
    return answer;
}

solution(babbling)

// node LV1/옹알이2.js