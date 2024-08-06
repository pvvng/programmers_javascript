/**
 * 알게된점
 * 
 * while을 사용할 때는 무한 루프가 발생하지 않게 조건을 상세히 파악해야한다.
 * 
 * 원트컷ㅋ
 */

// 문자열 s
const s = "abracadabra"

// result 3

// 1. 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 2. 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
// 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
// 3. s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 
// 남은 부분이 없다면 종료합니다.
// 4. 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 
// 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.

// 종료조건 1 :  남은 부분이 없다.
// 두 횟수가 같은 상태에서 더 이상 읽을 문자가 없다

function solution(s) {
    let sToArray = s.split('');

    let sameXcounter = 0;
    let notXcounter = 0;
    let returnCounterArr = [];
    var answer = 0;

    while(
        // 더 이상 남은 부분이 없다면 종료
        sToArray.length > 0 
        // ||((sameXcounter !== notXcounter) && ) 
    ){
        let x = sToArray[0];
        for ([index, stringItem] of sToArray.entries()){
            if(stringItem === x){
                sameXcounter ++;
            }else{
                notXcounter ++;

            }
            if(sToArray[index + 1] === undefined){
                returnCounterArr.push(sToArray);
                // while 무한 반복을 막기 위해 sToArray 비우기
                sToArray= Array(0);
                sameXcounter = 0;
                notXcounter = 0;
                break;
            }
            if(sameXcounter === notXcounter){
                let sliceSame = sToArray.slice(0, index + 1);
                let sliceRemain = sToArray.slice(index + 1, sToArray.length);
                returnCounterArr.push(sliceSame);
                sToArray = [...sliceRemain];
                sameXcounter = 0;
                notXcounter = 0;
                break;
            }
            // console.log(index, sameXcounter,notXcounter,sToArray[1], sToArray)
        }
        answer = returnCounterArr.length;
    }
    
    // console.log(answer)
    return answer;
}

solution(s);

// node LV1/문자열나누기.js