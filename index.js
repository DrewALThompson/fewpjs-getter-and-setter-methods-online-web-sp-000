class Circle{
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return (Math.PI) * this.diameter;
  }
  
  get area(){
    return (Math.PI) * (this.radius**2);
  }
  
  set diameter(){
    this.radius = this.diameter/2;
  }
  
  set circumference(){
    this.radius = this.circumference/(Math.PI);
  }
  
  set area(){
    this.radius = Math.sqrt(this.area/(Math.PI)) 
  }
  
}