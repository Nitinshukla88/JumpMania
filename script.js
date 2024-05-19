score=0
canjump = true;
document.onkeydown= function(e){
    console.log(e.keyCode)
    if(e.keyCode==38){
        player1 = document.querySelector('.player')
        player1.classList.add('animatedplayer')
        setTimeout(() => {
            player1.classList.remove('animatedplayer')
        }, 500);
    }
    if(e.keyCode==39){
        proplayer = document.querySelector('.player')
        pxvalue= parseInt(window.getComputedStyle(proplayer,null).getPropertyValue('left'))
        proplayer.style.left = pxvalue + 100 +"px"
    }
    if(e.keyCode==37){
        proplayer = document.querySelector('.player')
        pxvalue= parseInt(window.getComputedStyle(proplayer,null).getPropertyValue('left'))
        proplayer.style.left = pxvalue - 100 +"px"
    }
}

setInterval(() => {
    Player = document.querySelector('.player')
    Enemy = document.querySelector('.enemy')

    px= parseInt(window.getComputedStyle(Player,null).getPropertyValue('left'))
    ex= parseInt(window.getComputedStyle(Enemy,null).getPropertyValue('left'))

    py= parseInt(window.getComputedStyle(Player,null).getPropertyValue('top'))
    ey= parseInt(window.getComputedStyle(Enemy,null).getPropertyValue('top'))

    diffX= Math.abs(ex-px)
    diffY= Math.abs(ey-py)

    if(diffX<50 && diffY<52){
        Enemy.classList.remove('movingenemy')
    }else if(diffX<130 && canjump){
        score+=1
        displayscore(score)
        canjump = false
        setTimeout(() => {
            canjump  = true
        }, 1000);
    }
}, 10);

function displayscore(score){
    scoreelement = document.querySelector('.points')
    scoreelement.innerHTML = "Score: "+ score
}