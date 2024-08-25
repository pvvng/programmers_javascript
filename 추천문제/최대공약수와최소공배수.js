// 3, 12의 
const n =  11
const m = 22
// 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환
const result  = [3, 12]

// 11, 15 실패
function solution(n, m) {
    var answer = [1, 1];
    const divArr = [2, 3, 5, 7];
    let [divedN, divedM] = [n, m]
    for(let i = 0; i < divArr.length; i++){
        let [da, nowIndex] = [divArr[i], i];
        let checkInteger = Number.isInteger(divedN / da) && Number.isInteger(divedM / da);

        if(checkInteger){
            [divedN, divedM] = [divedN / da, divedM / da];
            answer[0] *= da; 
            if(da !== 1) { i = nowIndex - 1 };
        }else{ 
            answer[1] = answer[0] * divedN * divedM
        }
    }
    console.log(answer)
    return answer;
}


solution(n, m);

// /**
//  * 유클리드 호제법 사용하는 경우
//  */
// function UCDsolution(n,m){
//     // 필요한건 나머지, 몫
//     let [copyN, copyM] = [n ,m];
//     console.log(몫, 나머지)
    

// }

// UCDsolution(n,m);

// node 추천문제/최대공약수와최소공배수.js