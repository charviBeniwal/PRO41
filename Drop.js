class Drop {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.7
        }
        this.body = Bodies.circle(x, y, 3, options);
        this.color = color(23, 2, 245);
        World.add(world, this.body);
    }

    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 500), y: 0 })
        }
    }

    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x, pos.y, 3, 8);
    }
}
