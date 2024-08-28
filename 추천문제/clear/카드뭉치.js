const cards1 = ["i", "drink", "water"]
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];
// result no

// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

function solution(cards1, cards2, goal) {
    // 배열이 아니라 다음 카드를 알 수 없는 카드 뭉치라고 생각하면 될듯
    let available = true;
    for(const word of goal){
        if(word === cards1[0]) cards1.splice(0, 1);
        else if(word === cards2[0]) cards2.splice(0, 1);
        else { available = false; break; }
    };
    console.log(available)
    return available ? 'Yes' : 'No';
}

solution(cards1, cards2, goal);

// node 추천문제/카드뭉치.js