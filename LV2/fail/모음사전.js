const word = "AAAE"

function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    var answer = 0;
    let count = 0;

    function dfs (currentWord, targetWord){
        if (currentWord === targetWord) {
            result = count;
            return;
        }
        if (currentWord.length > 5) {
            return;
        }
    
        count++;  // 새로운 단어를 만들 때마다 카운트 증가
    
        /**
         * 자바스크립트의 스택과 dfs 백트레킹
         * 
         * 1. 자바스크립트 스택에 currentWord의 length 가 5가 될때까지 쌓인다
         * A => AA => AAA => AAAA => AAAAA
         * 2. length 가 5가되면 스택에서 반환된다.
         * AAAAA 반환
         * 3. 아직 반환되지 않은 AAAA로 백트래킹하여 가능한 경우를 확인한다.
         * AAAAE(반환) => AAAAI(반환) => AAAAO(반환) => AAAAU(반환)
         * 4. 모든 호출이 반환되면 AAA로 백트래킹하여 가능한 경우를 확인한다.
         * 
         * 스택에 쌓이는 순서
         * ['A']
         * ['A', 'AA']
         * ['A', 'AA', 'AAA']
         * ['A', 'AA', 'AAA', 'AAAA']
         * ['A', 'AA', 'AAA', 'AAAA', 'AAAAA'] → 반환
         * ['A', 'AA', 'AAA', 'AAAA', 'AAAAE'] → 반환
         * (다른 'AAAA'의 경우를 모두 탐색 후) ...
         * ['A', 'AA', 'AAA', 'AAAE'] → 'AAAE'부터 탐색 시작
         * ['A', 'AA', 'AAA', 'AAAE', 'AAAEA'] → 반환
         * 
         * 이러한 작업이 가능한 이유는 for문을 통해 가능한 모든 경로를 탐색하기 때문
         */
        for (let i = 0; i < vowels.length; i++) {
            dfs(currentWord + vowels[i], targetWord);
        }
    }
    dfs('', word);

    return answer;
}

console.log(solution(word));

// node LV2/모음사전.js