/** 알게된 점 
 * 
 * 1. map 함수는 중간에 종료(return)가 안된다.
 * 
 * 2. for of (배열 순회)는 중간에 종료(return)가 된다.
 * 
 * 3. 안타깝게도 죽은 사람은 붕대 감기로 살릴 수 없다. 
 * 이미 체력이 0 이하가 됐다가 부활할 수도 있으니 조심하자
*/

// 내 정답
const bandage = [4, 2, 7]
const health = 	20
const attacks = [[1, 15], [5, 16], [8, 6]]

function solution (bandage, health, attacks ){

    const 최대체력 = health;
    let 현재체력 = 최대체력;

    const 시전시간 = bandage[0];
    const 초당회복량 = bandage[1];
    const 추가회복량 = bandage[2];

    let 현재시간 = 1;
    // *** 중요한 부분*** //
    for(const 공격 of attacks) {
        console.log('지금 몇시? : ' , 현재시간)
        let 다음공격시간 = 공격[0];
        let 데미지 = 공격[1];

        // 체력 회복
        let 회복시간카운터 = 0;
        for (현재시간 ; 현재시간 < 다음공격시간 ; 현재시간++){
            현재체력 = 현재체력 + 초당회복량;

            console.log('지금 몇시? : ' , 현재시간)
            회복시간카운터 = 회복시간카운터 + 1;
            console.log('카운터 작동 : ', 회복시간카운터)
            if (회복시간카운터 === 시전시간){
                현재체력 = 현재체력 + 추가회복량;
                console.log('추가회복 성공')
                회복시간카운터 = 0;
            }

            if(현재체력 > 최대체력){
                현재체력 = 최대체력
                console.log('현재 체력이 최대체력과 동일함')
            }
            console.log('회복후 현재체력 : ' , 현재체력)
            console.log('~~~~')
        }

        console.log('지금 몇시? : ' , 현재시간)
        현재체력 = 현재체력 - 데미지
        // 사망시 return
        // *** 중요한 부분*** //
        if(현재체력 <= 0){
            console.log('you died')
            return -1;
        }
        console.log('A / 데미지 : ', 데미지)
        현재시간++
        console.log('현재체력 : ', 현재체력)


        console.log('======')
    }

    var answer = (현재체력 <= 0) ? -1 : 현재체력
    return answer
}

solution(bandage, health, attacks)

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** GPT 선생님의 첨삭본 */
function solutionBYGPT(bandage, health, attacks) {
    const 최대체력 = health;
    let 현재체력 = 최대체력;

    const 시전시간 = bandage[0];
    const 초당회복량 = bandage[1];
    const 추가회복량 = bandage[2];

    let 현재시간 = 1;

    // for of 로 배열 순회
    for (const 공격 of attacks) {
        let 다음공격시간 = 공격[0];
        let 데미지 = 공격[1];

        // 체력 회복
        let 회복시간카운터 = 0;
        // while문 사용으로 간결한 처리
        while (현재시간 < 다음공격시간) {

            // Math.min 함수는 두 값 중 작은 값을 반환하는 함수입니다. 
            // 따라서 Math.min(현재체력 + 초당회복량, 최대체력)는 
            // 회복 후의 체력(현재체력 + 초당회복량)과 최대 체력(최대체력)을 비교하여 
            // 더 작은 값을 반환합니다.
            현재체력 = Math.min(현재체력 + 초당회복량, 최대체력);

            회복시간카운터++;

            if (회복시간카운터 === 시전시간) {
                현재체력 += 추가회복량;
                회복시간카운터 = 0;
            }

            if (현재체력 <= 0) {
                console.log('죽어버림');
                return -1;
            }

            현재시간++;
        }

        // 공격 처리
        현재체력 -= 데미지;

        if (현재체력 <= 0) {
            console.log('죽어버림');
            return -1;
        }

        현재시간 = 다음공격시간 + 1; // 현재시간을 다음 공격시간 이후로 설정
    }

    // 모든 공격 후에도 살아있는 경우
    return 현재체력;
}

console.log(solutionBYGPT(bandage, health, attacks)); // 결과 출력