var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.TravelTo = function (point) {
        console.log("taksi X: ".concat(point.x, "  Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.TravelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, "  Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi;
taxi_1.TravelTo({ x: 1, y: 2 });
