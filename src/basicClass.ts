class BasicClass {

    name: string = 'Reksio'; // kompilator bedzie wiedziec, ze chcemy korzystac ze chcemy przypisac String i nie musimy wpisywać tego type
    age: number = 5; // nie ma znaczenia, czy stała lub zmiennoprzecinkowa
    colors: string[] = ['czarny', 'bialy', 'zielony'];
    dates: Array<Date> = [new Date(), new Date()];
    pair: [string, number] = ['Monday', 3]; //tuple(krotka)
    //pair = ["hello", 10]; // OK
    // Initialize it incorrectly
    //pair = [10, "hello"]; // Error
    xyz: any = 233; //dowolny typ

    message = 'Secret message';

    showMessage() {
        console.log(this.message);
    }

    hello(): string {
        return 'Hello world, function return'; // starac jak najczesniej dawac typ zwracany. gdy 1linijkowe funkcje, opis moze byc zbedny. TS i tak wie co funkcja zwraca
    }

    hello2(message: string, message2?: string) { //message 2 -> parameter jest opcjonalny. Inaczej tsc wyrzuci bład. typ zwracany dla message2 to undefinied
        console.log(message + " " + message2);
    }

    hello3(message: string, message2 = "Pizza") { //message 2 -> parameter jest opcjonalny z defaulowa wartoscia
        console.log(message + " " + message2);
    }

    hello4 = message => console.log("We are going to the" + " " + message);
    hello5 = (message: string): string => "We die in the" + " " + message;
    hello6 = (message: string): string => {
        return "We die in the" + " " + message
    };

}

let example = new BasicClass();
example.showMessage();
example.hello2("Hello Kitty");
example.hello2("Hello Kitty", "in the HELL");
example.hello3("We are going on the",);
example.hello4("Kamyk");
console.log(example.hello5("Polandia"));
console.log(example.hello6("Orange Retail"));

