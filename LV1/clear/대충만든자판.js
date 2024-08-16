// 이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 
// 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.

// 1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap
const keymap = ["ABACD", "BCEFD"]
// 입력하려는 문자열들이 담긴 문자열 배열 targets
const targets =  ["ABCD", "DG", "AABB"]
// 각 문자열을 작성하기 위해 
// 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 
// 목표 문자열을 작성할 수 없을 때는 -1을 저장

// 14 ~ 23 오답
function solution(keymap, targets) {
    var answer = [];
    answer = Array(targets.length).fill(0);

    // 생짜로 반복문 돌리면 시간 복잡도가 어느정도일까?
    // 일단 targets 안에서 keymap을 돌리고 최선의 경우의 수를 뽑아야하니까
    // 100 * 100 근데 원소의 길이가 최대 100이라서 100^4 
    // 쓰읍..

    // 적어도 target은 돌려야함. target 반복문 돌리고 원소 split 해야할듯
    // keymap을 반복문 하나로 만들어버리면 되지 않을까?
    // keymap을 새로운 어레이로 만드는데
    // '1 : string / 2: 몇번째 키패드인지 / 3 : key를 몇번 눌러야하는지' 로 만들기
    // [
    //     'A/0/0', 'B/0/1',
    //     'A/0/2', 'C/0/3',
    //     'D/0/4', 'B/1/0',
    //     'C/1/1', 'E/1/2',
    //     'F/1/3', 'D/1/4'
    // ]
    const keyMapArr = [];
    for ([keyLineIndex, keyLine] of keymap.entries()){
        let keyArr = keyLine.split('')
        for ([keyIndex, key] of keyArr.entries()){
            keyMapArr.push(
                key + '/' +
                keyLineIndex + '/' +
                (parseInt(keyIndex) + 1).toString()
            )
        }
    }

    // target도 똑같이 하나의 배열로 만들기
    let targetsMap = new Map();
    targets.forEach((t, targetsIndex) => {
        const targetStrArr = t.split('');
        targetStrArr.forEach((targetStr, index) => {
            let newObjKey = targetStr + '/' +targetsIndex + '/' + index
            // 최초로 저장 시도하는 수가 항상 저장되도록 infinity를 기본값으로 부여
            targetsMap.set(newObjKey, Infinity)

        })
    })

    // targetsMapArr 순회하면서 keyMapArr 중첩 반복문 돌리기.
    // targets의 1번째는 key
    // targets의 2번째는 저장되는 위치

    targetsMap.forEach((i, tm) => {
        const [key, returnType, index] = tm.split('/');
        keyMapArr.forEach(km => {
            // 최솟값 저장하기
            if(km.includes(key)){
                let mapGetter = targetsMap.get(tm)
                targetsMap.set(tm, Math.min(mapGetter, km.split('/')[2]));
            }
        })
    })

    /** 한번이라도 infinity가 나오면 무조건 -1로 설정해야함
     * 지금은 infinity가 나왔다가 안나오면 작은 수로 설정하게 됨
     * 
     * 반례에서 0이 나온 이유?
     * 첫번째 순회에서 infity가 발견되어 answer[saveLoc] = -1
     * 두번째 순회에서 1이 되어 answer[saveLoc] = -1 + 1
     * 
     * 그래서 0이 나옴
     * 
     * 해결 방법? 
     * for of로 바꿔서 infinity 발견되면 break 하도록 하자
     */

    /**
     * 2트의 코드는 Map 중간에 infinity가 위치한다면 배열을 아예 종료시키게 된다.
     * 그래서 infinity 뒤에 있는 코드가 실행되지 않는 문제가 생김
     * 
     * 
     */
    for([key, index] of targetsMap.entries()){
        let saveLoc = key.split('/')[1]
        answer[saveLoc] = answer[saveLoc] + index;
    }

    /**
     * break를 사용하지 않고, 다시 반복문을 돌리면서
     * infinity 발견시 -1로 변경하도록 설정
     */
    answer.forEach((a, i) => {
        if(a === Infinity){
            let temp = [...answer];
            temp[i] = -1
            answer = [...temp];
        }
    })

    console.log(answer)

    return answer;
}

solution(keymap, targets)

// node LV1/대충만든자판.js