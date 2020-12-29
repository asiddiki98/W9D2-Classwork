const { mo } = require("./moving_object.js");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', function(){
   
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    const ctx = canvasEl.getContext('2d');

    setInterval(mo.move.bind(mo, ctx),100)
})