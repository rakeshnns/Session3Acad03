//Assignment on class inheritance.
//Base class Animal
class Animal{
    Name: string;
    constructor(name: string){
    this.Name = name;
    }
    //move method
    move(distance: number =0){
      console.log(`${this.Name} runs ${distance}KMperhour.`);
    }
    //Sound method
    makeSound(){
        console.log(`${this.Name} make sound grrrh grrrh.`);  
    }

}
// Tiger extended class of Animal.
class tiger extends Animal{
    name: string;
    constructor(name: string){
        super(name);// superfucntion to access base class constructor 
    }
    move(distance){
         console.log(`Inorder to catch prey`)
        super.move(distance);
    }
    makeSound(){
        super.makeSound();
    }
}
// Deer extended class of Animal.
class Deer extends Animal{
    name: string;
    constructor(name: string){
        super(name);// superfucntion to access base class constructor 
    }
    move(distance){
         console.log(`Inorder to escape from predator`)
        super.move(distance);
    }
    makeSound(){
        console.log(`${this.Name} make sound brrrh brrrh.`);  
    }
}
// Creating Instance
let Sherkhan = new tiger("Sherkhan");
let Bambi = new Deer("Bambi");

Sherkhan.move(49);
Bambi.move(70);

Sherkhan.makeSound();
Bambi.makeSound();