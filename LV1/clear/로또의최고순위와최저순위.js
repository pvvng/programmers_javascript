/**
 * 알게된점
 * 
 * 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
 * 
 * 문제 설명 중 저 부분이 핵심이었다. 
 * 처음엔 주어진 배열을 slice하고 filter해서 일치하는 번호 제거하고 어쩌고 이런거 생각했는데 
 * 그냥 일치하는 번호들의 갯수 = 최저 순위  
 * 최저순위갯수 + 0의 갯수 => 최고 순위 이런식으로 하는게 더 효율적임. 
 * 
 * 이게 왜 정답률이 59% 밖에 안되지... 알다가도 모르겠다.
 */

// 알아볼 수 없는 번호를 0으로 표기
const lottos = [45, 4, 35, 20, 3, 9]
const win_nums = [20, 9, 3, 45, 4, 35]

// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6    (낙첨)그 외

// 최고 순위와 최저 순위를 차례대로 배열에 담아서 return
// result [3, 5]

function solution(lottos, win_nums) {
    var answer = [];

    // 정답을 맞힌 경우를 카운트
    let correctCounter = 0;
    // 지워진 숫자(0)을 카운트
    let zeroCounter = 0;

    for ([index1, number] of lottos.entries()){
        if(number === 0){
            zeroCounter ++;
        }
        for ([index2, correct] of win_nums.entries()){
            if(number === correct){
                correctCounter ++;
            }
        }
    }

    // 최고의 경우는 지워진 숫자가 모두 맞는 경우
    const best = correctCounter + zeroCounter;
    // 최악의 경우는 지워진 숫자가 모두 틀린 경우
    const worst = correctCounter;

    const counterArr = [best, worst];
    const returnArr = [];
    // 등수 뽑기
    counterArr.forEach(c => {
        if(c === 6){
            returnArr.push(1);
        }else if (c === 5){
            returnArr.push(2);
        }else if (c === 4){
            returnArr.push(3);
        }else if (c === 3){
            returnArr.push(4);
        }else if (c === 2){
            returnArr.push(5);
        }else{
            returnArr.push(6);
        }
    })

    answer = [...returnArr];

    console.log(answer)


    return answer;
}

solution(lottos, win_nums);

// node LV1/로또의최고순위와최저순위.js