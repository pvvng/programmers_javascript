const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]

function solution(babbling) {
    var answer = 0;
    const avail = ["aya", "ye", "woo", "ma"];
    
    while(babbling.length > 0){
        let pe = babbling.pop().split('');
        let preStr = '';
        let tempStr = '';
        for(let i = 0; i < pe.length + 1; i ++){
            let e = pe[i];
            if(avail.includes(tempStr) && tempStr !== preStr){ 
                preStr = tempStr;
                tempStr = '';
            }
            if(e !== undefined) tempStr += e;
        };
        if(tempStr.length === 0) answer ++;
    }
    return answer;
}

solution(babbling);

// node LV1/re옹알이2.js