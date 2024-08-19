const canvas = document.getElementById('flappyBirdCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 320;
canvas.height = 480;

let bird = {
    x: 50,
    y: 150,
    width: 20,
    height: 20,
    gravity: 0.6,
    lift: -15,
    velocity: 0,
    draw: function() {
        ctx.fillStyle = "#FF0";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update: function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
};

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        bird.velocity = bird.lift;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.draw();
    bird.update();
    requestAnimationFrame(draw);
}

draw();
