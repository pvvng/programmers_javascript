const babbling = ["aya", "yee", "u", "maa", "wyeoo"]
// 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return
const result  = 1

function solution(babbling) {
    var answer = 0;
    const sounds = ["aya", "ye", "woo", "ma"];

    // 가능한 word의 조합 상관없이 
    // word에 includes된 sound의 특정 조합의 길이와 옹알이 길이가 일치한다면 
    // 같다고 할수 있지 않을까?
    babbling.forEach(b => {
        let availableWord = '';
        sounds.forEach(s => {
            if(b.includes(s)){
                availableWord = availableWord + s;
            }
        })
        if(availableWord.length === b.length){
            answer ++;
        }
    })

    console.log(answer)
    return answer;
}

solution(babbling);

// node 추천문제/옹알이1.js