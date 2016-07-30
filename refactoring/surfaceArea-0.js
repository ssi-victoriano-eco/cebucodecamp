const boxes = [
    [2, 3, 4],
    [1, 1, 10]
];

// Calculates the total surface area of a box.
function total(bs) {
    var total = [];

    for (var b of bs) {
        sides = [b[0] * b[1], b[1] * b[2], b[2] * b[0]];
        m = Math.min(sides[0], sides[1], sides[2]);
        box = (sides[0] + sides[1] + sides[2]) * 2 + m;
        // console.log(box, sides, b);
        total.push(box);
        console.log(total);
    }

    return total.reduce((a, b) => a + b, 0);
}

console.log(total(boxes));