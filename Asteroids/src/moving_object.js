function MovingObject(options){

    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath()
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI
    )
    ctx.stroke()
}

MovingObject.prototype.move = function(ctx){
 
    this.draw(ctx)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.draw(ctx)

}

const mo = new MovingObject({
    pos: [250, 250],
    vel: [10, 10],
    radius: 50,
    color: "#00FF00"
});



module.exports ={
    MovingObject,
    draw: MovingObject.prototype.draw,
    mo,
} 