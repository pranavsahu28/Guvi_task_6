class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
return this.radius;
    }
    set radiusCircle(radius){
      this.radius=radius; 
    }
    get colorCircle(){
return this.color;
    }
    set colorCircle(color){
this.color=color;
    }
    get toString(){
        return`"Circle[radius=${this.radius},color=${this.color}]"`
    }
get areaCicle(){
return Math.PI * this.radius * this.radius; 
}
get circumferenceCircle(){
    return 2*Math.PI*this.radius; 
}
}
var obj1=new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle=2.1;
console.log(obj1.radiusCircle)


console.log(obj1.colorCircle);
obj1.colorCircle="white";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCicle);

console.log(obj1.circumferenceCircle)