//  Create a Paper.js Path to draw a line into it: 
var path = new Path();
// Give the stroke a color -->
path.strokeColor = 'black';
var start = new Point(0, 100);
// Move to start and draw a line from there -->
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more! -->
// path.lineTo(start + [500, -50]);
// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.fillColor = 'black';

// var circle2 = new Path.Circle(new Point(0, 0), 10);
// circle2.fillColor = "rgb(0, 200, 0, 0)";
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}


for (var i = 0; i < 1000; i += 100) {
    for (var j = 0; j < 1000; j += 100) {
        var circle2 = new Path.Circle(new Point(i, j), 10).fillColor = randomColor();
    }

}