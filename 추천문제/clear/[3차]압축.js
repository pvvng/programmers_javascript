const msg = "TOBEORNOTTOBEORTOBEORNOT";

function solution(msg) {
    var answer = [];
    // 사전 생성
    const dictionary = new Map();
    let index = 1;
    for(let i = 65; i <= 90; i++){
        dictionary.set(String.fromCharCode(i), index);
        index++;
    }
    // 문자열 순회
    let arr = msg.split('');
    for(let i = 0; i < arr.length;){
        let wc = arr[i];
        let add = 1;
        // undfiend 인 값을 찾을때까지 문자열 붙히기
        while(dictionary.get(wc)){
            wc += arr[i + add];
            // 1회는 무조건 실행되니까 index는 최소 1 증가함
            i ++;
        }
        dictionary.set(wc, dictionary.size + 1);
        // undefined 문자열은 종료 문자열 e 로 변경
        wc = wc.replaceAll('undefined','e');
        let w = wc.split('')
        let c = w.pop();
        answer.push(dictionary.get(w.join('')));
    }
    return answer;
}

solution(msg);
// node 추천문제/[3차]압축.js