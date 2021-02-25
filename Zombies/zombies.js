let x=0, y=0;

const zombie = document.getElementById('zombie'),
        up = () => zombie.style.transform = `translate(${x}%, ${y -= 10}%)`
        down = () => zombie.style.transform = `translate(${x}%, ${y += 10}%)`
        right = () => zombie.style.transform = `translate(${x += 10}%, ${y}%)`
        left = () => zombie.style.transform = `translate(${x -= 10}%, ${y}%) scaleX(-1)`




   
// mover zombi
document.addEventListener('keydown', evento => {
    
    switch (evento.key) {
        case 'ArrowUp':
            if(y<=-60)return
            up()
            break

        case 'ArrowDown':
            if(y>=0)return
            down()
            break

        case 'ArrowRight':
            if(x>=670)return
            right()
            break

        case 'ArrowLeft':
            if(x<=-100)return
            left()
            break
    }
})



                 