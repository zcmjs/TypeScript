// Moduły nie tworzą zmiennych globalnych
import One from "./modules.js"; //dajemy bez brackets, ponieważ robimy export default one. Dodatkowo wystarczy ./-> poniewaz to odwołuje sie do tego damego katalogu

let one = new One("SEX");
console.log(one.sayHello());
