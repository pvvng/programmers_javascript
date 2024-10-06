const book_time =[["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]

function solution(book_time) {
    let bt = book_time.map(v => {
        let [start, end] = v;
        start = start.split(':'); end = end.split(':');
        start = parseInt(start[0]) * 60 + parseInt(start[1]);
        end = parseInt(end[0]) * 60 + parseInt(end[1]) + 10;
        return [start, end];
    }).sort((a, b) => a[0] - b[0]);

    let room = [];
    for(let i = 0; i < bt.length; i++){
        let [start, end] = bt[i];
        let fr = room.findIndex(v => v <= start);
        if(fr !== -1) room[fr] = end;
        else { room.push(end); }
    }
    return room.length;
}

solution(book_time);

// node Lv2/호텔대실.js