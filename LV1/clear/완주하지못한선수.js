/**
 * 알게된점
 * 
 * 원트컷 푸하핫
 * 벌레컷ㅋㅋ
 */

// 참여한 선수들의 이름이 담긴 배열 participant
const participant = ["mislav", "stanko", "mislav", "ana"];
// 완주한 선수들의 이름이 담긴 배열 completion
const completion = ["stanko", "ana", "mislav"];

// 완주하지 못한 선수의 이름을 return 
// return "leo"

function solution(participant, completion) {
    const copyParticipant = [...participant];
    const copyCompletion = [...completion];
    var answer = '';

    const mapParticipant = new Map();

    for(const name of copyParticipant){
        mapParticipant.set(name , mapParticipant.get(name) + 1 || 1);
    }

    for(const completeName of copyCompletion){
        mapParticipant.set(completeName , mapParticipant.get(completeName) - 1);
    }

    for(const [failan, index] of mapParticipant.entries()){
        if(index >= 1){
            answer = failan;
        }
    }
    return answer;
}

solution(participant, completion);

// node LV1/완주하지못한선수.js