const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]

function solution(sizes) {
    let l = [];
    let r = [];
    sizes.forEach(s => {
        let [ll, rr] = s;
        let mx = Math.max(ll,rr);
        let mn = Math.min(ll, rr);
        l.push(mx); r.push(mn);
    })
    return Math.max(...l) * Math.max(...r);
}

solution(sizes);

// node LV1/최소직사각형.js