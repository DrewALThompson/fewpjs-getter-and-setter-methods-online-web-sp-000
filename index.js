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
  
  set diameter(newDiameter){
    this.radius = this.newDiameter/2;
  }
  
  set circumference(newCircumference){
    this.radius = this.newCircumference/(Math.PI);
  }
  
  set area(newArea){
    this.radius = Math.sqrt(this.newArea/(Math.PI)) 
  }
  
}