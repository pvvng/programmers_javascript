const bin1 = "10"
const bin2 = "11"

function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

solution(bin1, bin2);

// node LV0/이진수더하기.js