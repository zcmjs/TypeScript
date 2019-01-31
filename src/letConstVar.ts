class LetConstVar {

    print() {
        let i = 99; //let nie pozwala deklarowac tego samej zmiennej w swoim zakresie. var juz tak. var dziala tutaj jak let
        // let i = 100; -->
        var it = 99;
        var it = 100;
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log("i : " + it);
        console.log("it :" + it);

    }

}

var ddd = new LetConstVar();
ddd.print();
