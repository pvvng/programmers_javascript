const arr = [0, 1, 2, 3, 4, 5]
const query = [4, 1, 2]

function solution(arr, query) {
    for(let i = 0; i< query.length; i++){
        let index = query[i];

        if(i % 2 === 0){
            arr = arr.slice(0, index+1);
            continue;
        }

        arr = arr.slice(index, arr.length);
    }

    return arr;
}

solution(arr, query);

// node LV0/배열조각하기.js