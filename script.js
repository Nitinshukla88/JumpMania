document.onkeydown= function(e){
    console.log(e.keyCode)
    if(e.keyCode==38){
        player1 = document.querySelector('imageclass')
        console.log(player1)
        player1.classList.add('animatedplayer')
    }
}