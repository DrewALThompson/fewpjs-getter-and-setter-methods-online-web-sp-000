class Circle{
  constructor(radius){
    this._radius = radius;
  }
  
  get diameter(){
    return radius * this._radius;
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