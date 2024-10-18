// 1, 2, 3 빵 야 고
// 1 2 3 1
// 빵 – 야채 – 고기 - 빵

const ingredient = [1, 2, 3, 1, 1, 2, 3, 1]

function solution(ingredient) {
    var answer = 0;
    const pattern = "1231";

    let stack = [];
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack.length >= 4){
            if(stack.slice(-4).join('') === pattern){
                stack.splice(-4);
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(ingredient));

// node LV1/re햄버거만들기.js