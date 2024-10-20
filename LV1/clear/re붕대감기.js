const bandage = [1, 1, 1]
// [시전 시간, 초당 회복량, 추가 회복량] 
const health = 20
const attacks = [[1, 5], [4, 1]]
// [공격 시간, 피해량]

// 1~3, 5, 7, 8, 10~18, 20 실패
function solution(bandage, health, attacks) {
    const lastAttackTime = attacks[attacks.length - 1][0];
    const defaultHealth = health;

    let attackMap = new Map();
    attacks.forEach(as => {
        attackMap.set(as[0], as[1]);
    });

    let engage = 0;    
    for(let i = 1; i <= lastAttackTime; i++){
        let damage = attackMap.get(i);
        if(damage !== undefined){ 
            health -= damage;
            engage = 0;
            continue;
        }
        if(health <= 0) return -1;
        if(defaultHealth > health){
            health += bandage[1];
            engage ++;
        }
        if(engage === bandage[0]){
            health += bandage[2]
            engage = 0;
        }
        if(health > defaultHealth){
            health = defaultHealth;
        }
    }

    return health > 0 ? health : -1;
}

console.log(solution(bandage, health, attacks));