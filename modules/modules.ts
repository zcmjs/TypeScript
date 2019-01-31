//export default może dotyczyc tego jednego elementu + można tylko raz uzyć export default

let cos = 123;//Zmienna lokalna tutaj nie zostanie i zostaje zmienną prawatna

class One {
    name: string;

    constructor(name: string) {
        console.log("Class One");
        this.name = name;
    }

    sayHello() {
        return `Nazywa, sie ${this.name}`;
    }
}


export class Two {
    constructor() {
        console.log("Class Two");
    }
}

export const PI = 3.14;

export default One;
