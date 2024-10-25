const players = ["mumu", "soe", "poe", "kai", "mine"]
const callings = ["kai", "kai", "mine", "mine"]

function solution(players, callings) {
    const playersMap = new Map();
    players.forEach((player, i) => {
        playersMap.set(player, i);
    });

    callings.reverse();
    
    while(callings.length > 0){
        let fastMan = callings.pop();
        let getter = playersMap.get(fastMan);
        let lostMan = players[getter - 1];
        playersMap.set(fastMan, getter - 1);
        playersMap.set(lostMan, getter);
        players[getter - 1] = fastMan;
        players[getter] = lostMan;
    }
    return players;
}

solution(players, callings);

// node LV1/re달리기경주.js