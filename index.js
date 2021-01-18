class Circle{
  constructor(radius){
    this._radius = radius;
  }
  
  get diameter(){
    console.log(this.radius);
    return this.radius * 2;
  }
  
  get circumference(){
    return (Math.PI) * this.diameter;
  }
  
  get area(){
    
  }
  
  // set diameter(){
    
  // }
  
  // set circumference(){
    
  // }
  
  // set area(){
    
  // }
  
}