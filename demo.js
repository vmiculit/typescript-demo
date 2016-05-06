var foo = 123;
var boo = 'qwe';
boo = 'something';
var inc = function (x) { return x + 1; };
var Points = (function () {
    function Points(x, y) {
        this.x = x;
        this.y = y;
    }
    Points.prototype.add = function (point) {
        return new Points(this.x + point.x, this.y + point.y);
    };
    return Points;
}());
var p1 = new Points(0, 10);
var p2 = new Points(10, 20);
var p3 = p1.add(p2);
var person = {
    firstName: 'John',
    lastName: 'Test',
    age: 3
};
