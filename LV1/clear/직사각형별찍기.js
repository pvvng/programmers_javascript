process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let j = 0; j< b; j ++){
        let str = ''
        for(let i = 0; i < a; i++){
            str += '*';
        }
        console.log(str)
    }
});

// node LV1/직사각형별찍기.js