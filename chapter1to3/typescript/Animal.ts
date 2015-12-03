class Animal {
  name: string;
  constructor(theName: string) {this.name = theName;}
  move(meters: number = 0) {
    alert(this.name + " moved " + meters + "m.")
  }
}

class Horse extends Animal {
  constructor(name: string) {super(name);}
  move(meters = 45) {
    alert("Galloping...");
    super.move(meters); 
  }
}
