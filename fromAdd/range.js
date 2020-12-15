function range1(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
console.log(range1(12, 14));

function range2(start, end) {
    if (start === end) return [start];
    return [start, ...range2(start + 1, end)];
}
console.log(range2(11, 15));

function range3(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}
console.log(range3(8, 14));
