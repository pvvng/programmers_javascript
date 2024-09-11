const skill = "CBD"
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]

function solution(skill, skill_trees) {
    var answer = 0;
    const skillMap = new Map();
    skill.split('').forEach((ss, i) => {
        skillMap.set(ss, i)
    })
    skill_trees.forEach(st => {
        let str = ''
        st.split('').forEach(sts => {
            if(skillMap.get(sts) !== undefined) {
                str += sts;
            }
        })
        if(skill.startsWith(str)) answer++;
    })

    return answer;
}

solution(skill, skill_trees);

// node 추천문제/스킬트리.js