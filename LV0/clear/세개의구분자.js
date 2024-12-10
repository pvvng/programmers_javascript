const myStr = "baconlettucetomato"

function solution(myStr) {
    var answer = [];
    ["a", "b", "c"].forEach(v => {
        myStr = myStr.replaceAll(v, " ");
    });
    myStr.split(" ").forEach(v => {
        if(v !== "") answer.push(v);
    })
    return answer.length > 0 ? answer : ["EMPTY"];
}

solution(myStr);

// node LV0/세개의구분자.js