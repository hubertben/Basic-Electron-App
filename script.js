let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

function mapValue(val, low, high, range_low, range_high) {
    let inc = (range_high - range_low) / (high - low)
    return range_low + ((val - low) * inc)
}

let WIDTH = c.width;
let HEIGHT = c.height;

function resize() {
    let W = window.innerWidth;
    let H = window.innerHeight;
    ctx.canvas.width = W;
    ctx.canvas.height = H;
    WIDTH = W;
    HEIGHT = H;
}

window.addEventListener("resize", (event) => {
    resize();
});

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    draw(r){
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "cyan";
        ctx.fill();
    }
}

let mouseX = 0;
let mouseY = 0;

c.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // console.log(mouseX, mouseY);
});

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(WIDTH / 2, HEIGHT / 2, mapValue(mouseY, 0, HEIGHT, 0, 300), 0, mapValue(mouseX, 0, WIDTH, 0, 2 * Math.PI));
    ctx.fill();
    
    setTimeout(draw, 1000/60);
}

resize();
draw();