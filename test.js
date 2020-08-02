var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.text = message;
    }
    Greeting.prototype.greet = function () {
        if (this.text == "")
            return "Welcome user";
        else
            return "Welcome to " + this.text;
    };
    return Greeting;
}());
var greetingOne = new Greeting("");
console.log(greetingOne.greet());
var greetingTwo = new Greeting("UpGrad");
console.log(greetingTwo.greet());
