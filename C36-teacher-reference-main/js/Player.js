class Player{
constructor(){
 this.name = null;
 this.index = 0;
 this.distance = 0;
}

  getCount()
{
    var playerCountref  = database.ref("playerCount")
    playerCountref.on("value",(data)=>{
    playerCount = data.val()
    })


}
  updateCount(c){
      database.ref("/").update({
          playerCount:c
      })
    
  }
  update(){
 var playerIndex = "players/player"+this.index;
database.ref(playerIndex).set({
    name: this.name,
    distance:this.distance
})
}
}
