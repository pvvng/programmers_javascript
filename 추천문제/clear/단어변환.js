const begin = "hit"
const target = "cog"
const words = ["hot", "dot", "dog", "lot", "log", "cog"]

function solution(begin, target, words) {
    var answer = 0;
    /** 바꿀 수 없는 경우 얼리리턴 */
    if(!words.includes(target)) return 0;   

    let nowWord = begin;
    while(nowWord !== target){
        let tempArr = [];
        let splitedBegin = nowWord.split('');
        for(let word of words){
            let wrongCounter = 0;
            let splitedWord = word.split('');
            /** 현재 단어와 words 배열의 단어의 유사도를 비교 */
            for(let i = 0; i<splitedBegin.length; i++){
                if(splitedBegin[i] !== splitedWord[i]){
                    wrongCounter ++;
                }
            }
            tempArr.push([word, wrongCounter]);
        }
        /** 알파벳이 1개만 다른게 없으면 얼리리턴 */
        if(!tempArr.filter(a => a[1] === 1).pop()) return 0;
        /** 알파벳 1개만 다른 배열에서 아무거나 하나 pop */
        nowWord = tempArr.filter(a => a[1] === 1).pop()[0];
        /** 해당 단어 삭제 */
        words.splice(words.indexOf(nowWord), 1)
        answer ++;
    }
    console.log(nowWord, answer)

    return answer;
}

solution(begin, target, words);

// node 추천문제/단어변환.js