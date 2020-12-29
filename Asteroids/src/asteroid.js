const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");



function Asteroid(options) {
    
    this.pos = options.pos;
    const colors = ['gray', 'blue', 'purple']
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    let randNum = Math.floor(Math.random() * 60);
    this.COLOR = randColor;
    this.RADIUS = randNum;
    this.vel = Util.randomVec(20);
}

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid