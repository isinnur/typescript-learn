var a;
// a=5;
// a='a';   x
// a=true;  x
var b = "a";
var c = "false";
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 5, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; //0
var havale = Payment.havale; //1
var eft = Payment.eft; //2