class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("name:", this.name)
        console.log("health:", this.health)
        console.log("speed:", this.speed)
        console.log("strength:", this.strength)
    }
    drinkSake(){
        this.health += 10
    }
}
class Ninja extends Sensei {
    constructor(name){
        super(name, 200);
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
