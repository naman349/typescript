class Greeting {
    text: string;
    constructor(message: string) {
       this.text = message; 
    }
    greet() {
      if(this.text=="")
        return "Welcome user";
      else
        return "Welcome to " + this.text;
    }
  }
  let greetingOne = new Greeting("");
  console.log(greetingOne.greet());
  let greetingTwo=new Greeting("UpGrad");
  console.log(greetingTwo.greet());