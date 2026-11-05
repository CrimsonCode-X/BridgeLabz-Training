class Animal{
    sound(){
        console.log("Animal makes a sound");
    }
}

const animal = new Animal();
animal.sound();

class cat extends Animal{
    sound(){
        console.log("Cat makes sound");
    }
}

const cat1 = new cat();
cat1.sound();