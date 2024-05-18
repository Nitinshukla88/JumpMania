document.onkeydown= function(e){
    console.log(e.keyCode)
    if(e.keyCode==38){
        player1 = document.querySelector('.player')
        console.log(player1)
        player1.classList.add('animatedplayer')
        setTimeout(() => {
            player1.classList.remove('animatedplayer')
        }, 700);
        enemy= document.querySelector('.enemy')
        enemy.classList.add('animatedenemy')
    }
}