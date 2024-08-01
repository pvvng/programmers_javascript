const bandage = [1, 1, 1]
const health = 	5
const attacks = [[1, 2], [3, 2]]

function solution (bandage, health, attacks ){

    const 최대체력 = health;
    let 현재체력 = 최대체력;

    const 시전시간 = bandage[0];
    const 초당회복량 = bandage[1];
    const 추가회복량 = bandage[2];

    let 현재시간 = 1;
    attacks.map(공격 => {
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
        console.log('A / 데미지 : ', 데미지)
        현재시간++
        console.log('현재체력 : ', 현재체력)
        console.log('======')
    })

    var answer = (현재체력 <= 0) ? -1 : 현재체력
    console.log('최종체력 : ', answer)
    return answer
}

solution(bandage, health, attacks)
