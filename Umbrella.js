class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0.7
        }
        this.body = Bodies.circle(x, y, 30, options);
        //this.color = color(23, 2, 245);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        //fill(this.color);
        ellipse(pos.x, pos.y, 30, 80);
    }
}
