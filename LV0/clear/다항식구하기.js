const polynomial =  "x + 1"

function solution(polynomial) {

    let total = {
        'x' : 0,
        'num' : 0,
    };

    polynomial.split(' + ').forEach(sp => {
        if(sp.includes('x')){
            if(sp.length > 1){
                sp = sp.slice(0, sp.length-1);
                total["x"] += parseInt(sp);
            }else{
                total["x"] += 1;
            }
        }else{
            total["num"] += parseInt(sp);
        }
    });

    let temp = [];
    for(const key in total){
        if(total[key] > 0){
            if(key === "x"){
                let str;
                total[key] > 1 ? str = total[key] + key : str = key;
                temp.push(str);
            }else{
                temp.push(total[key]);
            }
        }
    }

    return temp.join(' + ');
}

console.log(solution(polynomial));

// node LV0/다항식구하기.js