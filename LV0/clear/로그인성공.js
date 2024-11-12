const id_pw =  ["abc04", "345"]
const db = [["abc04", "335"], ["abc03", "345"]]

function solution(id_pw, db) {
    const [checkId, checkPw] = id_pw;
    const type = ["fail", "wrong pw", "login"];

    let checkedArr = db.map(([id, pw]) => {
        if(id === checkId){
            if(pw === checkPw) {
                return 2;
            }
            return 1;
        }

        return 0;
    });

    return type[Math.max(...checkedArr)];
}

solution(id_pw, db);