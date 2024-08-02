/**
 * 배운점
 * 
 * 존놔쉽다ㅋㅋ 벌레 컷~~
 * 
 */

// 그리워하는 사람의 이름을 담은 문자열 배열 name
// 각 사람별 그리움 점수를 담은 정수 배열 yearning
//  각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo

// 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

// result = [19, 15, 6]

function solution(name, yearning, photo) {

    const 너의이름은 = [...name];
    const 그리움점수 = [...yearning];
    const 사진첩 = [...photo];

    const 너의이름과그리움점수판데기 = new Map();

    for (const [몇번이냐, 이름] of 너의이름은.entries()){
        너의이름과그리움점수판데기.set(이름, 그리움점수[몇번이냐]);
    }
    // console.log(너의이름과그리움점수판데기)
    var answer = [];

    사진첩.forEach(사진 => {
        let 사진하나총점 = 0;
        사진.forEach(누구세요 => {
            let 누구세요니점수 = 너의이름과그리움점수판데기.get(누구세요);
            if(누구세요니점수 === undefined){
                누구세요니점수 = 0;
            }
            사진하나총점 = 사진하나총점 + 누구세요니점수;
        })
        answer.push(사진하나총점)
    })

    return answer;
}

solution(name, yearning, photo)

// node LV1/추억점수.js