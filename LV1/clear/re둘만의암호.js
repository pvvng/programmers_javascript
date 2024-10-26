const s = "aukks";
const skip = "wbqd";
const index = 5;

function solution(s, skip, index) {
    var answer = '';
    const skipSet = new Set();
    skip.split('').forEach(ss => skipSet.add(ss));
    s.split('').forEach(word => {
        let codeWord = word.charCodeAt();
        for(let i = 0; i < index;){
            codeWord ++
            if(codeWord === 123) codeWord = 97;
            let addedString = String.fromCharCode(codeWord);
            if(!skipSet.has(addedString)) i++;
        }
        answer += String.fromCharCode(codeWord);
    })
    return answer;
}

solution(s, skip, index);

// node LV1/re둘만의암호.js