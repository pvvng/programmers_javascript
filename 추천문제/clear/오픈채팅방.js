const record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Enter uid1221 김뿅망치",
    "Leave uid1234",
    "Leave uid1221",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

// 1, 16 제외 실패
/** 방을 나가고 다시 들어오지 않는 경우의 예외처리가 되지 않음 */
function solution(record) {
    var answer = [];
    const recordMap = new Map();

    record.forEach(r => {
        const [state, id, name] = r.split(' ');
        if(state === 'Enter'){
            recordMap.set(id, name);
            answer.push(id + '/' + '님이 들어왔습니다.');
        }else if (state === 'Leave'){
            answer.push(id +  '/' + '님이 나갔습니다.');
        }else if (state === 'Change'){
            recordMap.set(id,name);
        }
    })

    return answer.map(a => {
        let [id, text] = a.split('/');
        let name = recordMap.get(id);
        return `${name}${text}`;
    });
}

solution(record);

// node 추천문제/오픈채팅방.js