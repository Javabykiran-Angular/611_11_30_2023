"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    // constructor(){
    //     console.log("no arg. constr. is called ")
    // }
    function Myclass(id, f, l) {
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n                ID          :: ".concat(this.id, "\n                First name  :: ").concat(this.fname, "\n                Last Name   :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
