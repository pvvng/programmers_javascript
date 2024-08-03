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
 * 
 * *** slice와 splice ***
 * 
 * slice
 * 배열의 일부를 복사하여 새로운 배열을 반환합니다. 원본 배열은 변경되지 않습니다.
 * array.slice(start, end)
 * start: 추출 시작점의 인덱스 (포함)
 * end: 추출 끝점의 인덱스 (제외)
 * 
 * splice
 * 배열의 내용을 추가, 제거 또는 교체할 때 사용합니다.
 * array.splice(start, deleteCount, item1, item2, ...)
 * start: 변경 시작점의 인덱스
 * deleteCount: 제거할 요소의 수
 * item1, item2, ...: 추가할 요소들 (옵션)
 * 
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
    let 짬통 = [];

    function 햄버거제조머신김상수(){
        for(const [인덱스, 재료] of 냉장고.entries()){
            // 냉장고에서 재료 꺼내서 도마에 올리기
            도마.push(재료);
    
            //도마에 재료 쌓이면 레시피 검증
            if(도마.length === 4){
                // 레시피와 일치한다면
                if(JSON.stringify(도마) === JSON.stringify(레시피)){
                    // 도마 비우기
                    도마 = Array(0);
                    // 햄버거 완성
                    햄버거 ++;
                }
    
                if(도마.length > 0){
                    //짬통에 도마 앞쪽에 있는 재료 넣기
                    짬통.push(도마[0]);
                    // 도마 제일 앞쪽에 있는거 비우기
                    도마.shift();
                }
            }
        }
    
        if(도마.length > 0){
            // 도마에 남은 재료 짬통으로 보내기
            짬통 = [...짬통, ...도마];
            도마 = Array(0);
        }
    }

    햄버거제조머신김상수();

    if(짬통.join(',').includes(레시피.join(','))){
        console.log(짬통, 도마)
        도마 = [...짬통];
        짬통 = Array(0);
        console.log(짬통, 도마)
        햄버거제조머신김상수();
    }

    console.log('도마 : ', 도마, '짬통 : ', 짬통, '버거나왔어요', 햄버거)
    var answer = 0;
    return answer;
}

// solution(ingredient)

/** GPT 선생님의 일갈
 * 
 * 니놈의 코드는 너무 복잡하다
 * 더 직관적인 내 코드를 보고 감탄해라
 * 
 */
function solutionBYGPT(ingredient) {
    const 레시피 = [1, 2, 3, 1];
    let 도마 = [];
    let 햄버거 = 0;

    for (const 재료 of ingredient) {
        도마.push(재료);

        console.log(도마, 재료)
        if (도마.length >= 4) {
            // 도마 뒷자리에서 4개 잘라서 새로운 배열 만들고
            // 그 배열 문자열화 시키기
            // slice는 원본 배열을 변경하지 않고 새로운 배열 반환
            const 최근재료 = 도마.slice(-4).join(',');
            console.log(최근재료)
            // 도마에 올라간 재료의 끝 4개가 레시피와 일치한다면
            if (최근재료 === 레시피.join(',')) {
                // 도마 배열 변경 (splice 는 원본 변경)

                // splice(index, deleteCount)에서 deleteCount 생략시
                // array.splice(-4, 4): 
                // 배열의 끝에서부터 4번째 요소부터 4개의 요소를 제거합니다.
                // [0,1,2,3,4] => 4(배열의 끝)부터 4개 자르기 => [0]

                // array.splice(-4): 
                // 배열의 끝에서부터 4번째 요소부터 끝까지 모든 요소를 제거합니다.
                // [0,1,2,3,4] => 4(배열의 끝)에서부터 앞에 4개 자르기 => [0]

                /*** 도마.splice(-4); 사용에서 옵니다. 
                 * 이 구문은 배열의 끝에서부터 4개의 요소를 제거해야 하지만, 
                 * 원본 배열을 너무 많이 변경하여 잘못된 동작을 초래합니다. 
                 * 
                 * 올바른 해법은, 도마.splice(-4, 4);를 사용하여 배열의 끝에서 4개의 요소만 
                 * 제거하는 것입니다 ***/
                도마.splice(-4, 4);
                햄버거++;
            }
        }
    }

    return 햄버거;
}

solutionBYGPT(ingredient)

// node LV1/햄버거만들기.js