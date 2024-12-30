const picture = ["x.x", ".x.", "x.x"];
const k = 3;

function solution(picture, k) {
  var answer = [];

  picture.map(v => {
    let newelement = '';
    v.split('').forEach(e => {
      for(let i = 0; i < k; i++){
        newelement += e;
      }
    });
    return newelement;
  }).forEach(v => {
    for(let i = 0; i < k; i++){
      answer.push(v);
    }
  });

  return answer;
}

solution(picture, k);

// node LV0/그림확대.js