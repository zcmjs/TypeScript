class CommonFunctionProblem {
    message: string = 'Hello Bitch';

    printFunction() {
        return function () {
            console.log(this.message);
        }
    };

    printFunction2() {
        return () => {
            console.log(this.message);
        }
    };
}

let example = new CommonFunctionProblem();
let exampleFunction = example.printFunction();
exampleFunction(); // --> undefinied
let exampleFunction2 = example.printFunction2();
exampleFunction2(); //'Hello Bitch!';
