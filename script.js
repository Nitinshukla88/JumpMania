document.onkeydown= (e)=>{
    console.log(e.keyCode)
    if(e.keyCode==38){
        player = document.getElementById("player-img")
        player.classList.add("animatedplayer")
    }
}