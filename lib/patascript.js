//  Create a Paper.js Path to draw a line into it: 
// var path = new Path();
// Give the stroke a color -->
// path.strokeColor = 'black';
// var start = new Point(0, 100);
// Move to start and draw a line from there -->
// path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more! -->
// path.lineTo(start + [500, -50]);
// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.fillColor = 'black';
var circles = [];

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor = 'orange';
    circles.push(newCircle);
}

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = 'red';

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);

    }

}