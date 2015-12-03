var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        alert(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        alert("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);

var word = "true";
var favSingers = ["Avril", "Halsey", "Justin", "Selena"];
var x = "gafd";
var y = ["asfds", "fsafs"];
;
var female = 1 /* Female */;
var male = 0 /* Male */;
var none = "null";
console.log("Hello world!");
console.log("Visual Studio code runs like a breeze");

var x = "hello world";
var yo = "ok";

// union types
var values;
values = [123, 123908, 132, 231313131312322132123, 123123213, 312312];
var x = "123";
