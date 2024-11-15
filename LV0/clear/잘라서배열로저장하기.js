const my_str = "abc1Addfggg4556b";
const n = 6;

function solution(my_str, n) {
    var answer = [];
    const splitedStr = my_str.split("").reverse();
    while(splitedStr.length > 0){
        let str = '';
        for(let i = 0; i < n; i++){
            let pe = splitedStr.pop();
            if(pe === undefined) break;
            str += pe;
        }
        answer.push(str);
    }
    return answer;
}

solution(my_str, n);