const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', function(){
   
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    const ctx = canvasEl.getContext('2d');

    const mo = new Asteroid({
        pos: [150, 300]
    });
    
    // const mo = new MovingObject({
    //     pos: [0, 300],
    //     vel: [30, 30],
    //     radius: 50,
    //     color: "#00FF00"
    // });
    
    const mo2 = new MovingObject({
        pos: [150, 300],
        vel: [30, 30],
        radius: 50,
        color: "#00FF00"
    });
    
    function drawTest() {
        // debugger
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        mo.draw(ctx); 
        mo.move(ctx);
        mo2.move(ctx);
    }
    setInterval(drawTest.bind(null, ctx), 100)
    
})