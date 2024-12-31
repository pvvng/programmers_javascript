const num_list = [12, 4, 15, 1, 14]
// ans = 11

function solution(num_list) {
  var answer = 0;

  function convert(req){
    if(req % 2 == 0){
      return req / 2;
    }
  
    return (req - 1) / 2;
  }

  num_list.forEach(e => {
    while (e !== 1){
      e = convert(e);
      answer ++;
    }
  });

  return answer;
}

solution(num_list);

// node LV0/1로만들기.js