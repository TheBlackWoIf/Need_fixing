class Rope{
    constructor(body1, body2,offsetx,offsety) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetx,y:this.offsety},
            stiffness: 0.04,
            length: 10
        }
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;
        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}