/**
 * 알게된점
 * 
 * ***개빡치는 미친 슬라이싱***
 * 슬라이싱 기준 잡고 원하는 부분 잘라낼 수 있다
 * 
 * ***join 메소드***
 * 특정 구분자를 기준으로 배열을 문자열로 변환한다
 * 어떤 어레이가 저떤 어레이에 포함되는지 확인할?때 유용하다
 * 
 * ***스택***
 * GPT 선생님의 한마디
 * 컴퓨터 과학에서 데이터를 저장하고 관리하는 기본적인 자료 구조 중 하나입니다. 
 * 스택은 LIFO (Last In, First Out) 원칙을 따릅니다. 
 * 즉, 가장 최근에 추가된 데이터가 가장 먼저 제거됩니다.
 * 
 * 스택은 작업이나 데이터를 순차적으로 처리할 때 유용하게 사용할 수 있습니다. 
 * 스택의 LIFO (Last In, First Out) 구조 덕분에 가장 최근에 추가된 항목이 가장 먼저 처리되기 때문에, 
 * 작업의 순서를 제어하는 데 적합합니다.
 */

// 아래서부터, 빵 – 야채 – 고기 - 빵

//상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
// 빵, 야채, 고기
// 1, 2, 3

// 상수가 포장하는 햄버거의 개수를 return
// result = 2

function solution(ingredient) {

    const 레시피 = [1,2,3,1]
    let 냉장고 = [...ingredient];
    let 햄버거 = 0;
    // 스택
    let 도마 = [];

    for(const [인덱스, 재료] of 냉장고.entries()){
        도마.push(재료);

        if(도마.length === 4){
            console.log(도마)
            if(JSON.stringify(도마) !== JSON.stringify(레시피)){
                도마.shift();
            }else{
                // 인덱스(기준점) 에서 앞의 4개 냉장고에서 빼기
                console.log(인덱스)
            }
        }
    }
    var answer = 0;
    return answer;
}


solution(ingredient)


// node LV1/햄버거만들기.js