let ground = new Ground(0);
let raindrops = [];
let r = 255;
let g = 255;

function setup() {
    createCanvas(1000, 500);
    for(let i=0; i<15; i++) {
        raindrops.push(new RainDrop(random(10,950), -10, 10));
    }
    rect(10, 500, 1000, 50);
    fill(0, 0, rgb(r, g, 255));
}

function draw() {
    background(255);
    stroke(0,0, 0, 10);
    strokeWeight(3)
    for(let i=0; i<raindrops.length; i++) {
        raindrops[i].draw();
        if(raindrops.length > 10){
            raindrops.pop();
            r=r-10;
            g=g-5;
            Ground.create(r, g);
        }
    }
}

class Ground {
    constructor(r, g) {
        this.r = r;
        this.g = g;
    
    function create(r,g){
        rect(10, 500, 1000, 50);
        fill(0, 0, rgb(r, g, 255));
    }
}
}
