class Uber{
    constructor(kilometer,price=25){
          this.kilometer= kilometer; 
          this.price=price;
  }
  get Price(){
      return this.kilometer*this.price
  }
   }
   var uberprice=new Uber(5);
   var uberprice2=new Uber(4,59)
  console.log(uberprice.Price);
  console.log(uberprice2.Price)