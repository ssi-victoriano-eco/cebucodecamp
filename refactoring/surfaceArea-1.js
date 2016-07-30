function Box(w, h, l) {
    this.width = w;
    this.height = h;
    this.length = l;
}
// 
var boxes = [
    new Box(2, 3, 4),
    new Box(1, 1, 10)
];

/**
 * Calculate surface area of a box with slack allocation
 * surfaceArea = 2lw + 2lh + 2wh
 * 
 * @param  {box[]} boxes
 */
function getTotalSurfaceArea(boxes) {
    var totalSurfaceArea = 0;
    for (var box of boxes) {
        var sidesArea = [
            box.length * box.width,
            box.length * box.height,
            box.width * box.height
        ];
        var areaSlack = Math.min(sidesArea[0], sidesArea[1], sidesArea[2]);
        var surfaceArea = (sidesArea[0] + sidesArea[1] + sidesArea[2]) * 2 + areaSlack;

        totalSurfaceArea += surfaceArea;
    }

    return totalSurfaceArea;
}

console.log(getTotalSurfaceArea(boxes));
