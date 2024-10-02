const phone_number = "01033334444"	

function solution(phone_number) {
    var answer = '';
    for(let i = 0; i< phone_number.length - 4; i++){
        answer += '*';
    }
    answer+=phone_number.slice(-4);
    console.log(answer)
    return answer;
}

solution(phone_number);

// node LV1/핸드폰번호가리기.js