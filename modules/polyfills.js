if (typeof String.prototype.repeatt !== "function") { //sprawdzenie czy funkcja w obiekcie JS istnieje
    // safe to use the function
    String.prototype.repeatt = function (count) {
        return (new Array(count + 1)).join(this.toString());
    }
}
