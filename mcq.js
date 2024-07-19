function Railway(ticket,price){
  this.ticket = ticket;
  this.price = price;
  this.hit = function(){
    console.log(this)
  }
}
const railway = new Railway("Salem",560)
railway.hit()