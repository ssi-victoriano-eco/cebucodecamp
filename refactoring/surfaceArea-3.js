var boxes = [
    [2, 3, 4],
    [1, 1, 10]
];

/**
 * Calculate surface area of a box with slack allocation
 * surfaceArea = 2lw + 2lh + 2wh
 * 
 * @param  {box[]} boxes
 */
function getTotalSurfaceArea(boxes) {
    var totalSurfaceArea = [];
    for (var box of boxes) {
        var sidesArea = [
            box[0] * box[1],
            box[1] * box[2],
            box[2] * box[0]
        ];
        var areaSlack = Math.min(sidesArea[0], sidesArea[1], sidesArea[2]);
        var surfaceArea = (sidesArea[0] + sidesArea[1] + sidesArea[2]) * 2 + areaSlack;
        totalSurfaceArea.push(surfaceArea);
    }

    return totalSurfaceArea.reduce(function(x, y) {
        return x + y;
    }, 0);
}

console.log(getTotalSurfaceArea(boxes));
