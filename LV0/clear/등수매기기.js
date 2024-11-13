const score = [[80, 70], [90, 50], [40, 70], [50, 80]]

function solution(score) {
    var answer = Array.from({ length : score.length }).fill(0);
    const indexedScoreMap = new Map();

    score.forEach(([x, y], i) => {
        const avg = (x + y) / 2;
        const getter = indexedScoreMap.get(avg) || [];
        getter.push(i);
        indexedScoreMap.set(avg, getter);
    });

    let rank = 1;
    
    [...indexedScoreMap].sort((a, b) => b[0] - a[0]).map(([_, indexArr]) => {
        indexArr.forEach(ia => answer[ia] = rank);
        if(indexArr.length > 1) rank += indexArr.length;
        else rank ++;
    });

    return answer;
}

solution(score);

// node LV0/등수매기기.js