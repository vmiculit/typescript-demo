var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isDone = false;
var lines = 42;
var name = "Anders";
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var list = [1, 2, 3];
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
function bigHorribleAlert() {
    alert("I'm a little annoying box!");
}
var f1 = function (i) { return i * i; };
var f2 = function (i) { return i * i; };
var f3 = function (i) { return i * i; };
var f4 = function (i) { return i * i; };
var f5 = function (i) { return i * i; };
var p = { name: "Bobby", move: function () { } };
var validPerson = { name: "Bobby", age: 42, move: function () { } };
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
var Point = (function () {
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    Point.prototype.dist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    Point.origin = new Point(0, 0);
    return Point;
}());
var p1 = new Point(10, 20);
var p2 = new Point(25);
var Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        _super.call(this, x, y);
        this.z = z;
    }
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
var Geometry;
(function (Geometry) {
    var Square = (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
var G = Geometry;
var s2 = new G.Square(10);
var Tuple = (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
var pairToTuple = function (p) {
    return new Tuple(p.item1, p.item2);
};
var tuple = pairToTuple({ item1: "hello", item2: "world" });
var name = 'Tyrone';
var greeting = "Hi " + name + ", how are you?";
var multiline = "This is an example\nof a multiline string";
