class Leg {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            friction:0.7
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        Matter.Body.setAngle(this.body, player.rotation);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y)
        rotate(player.rotation)
        pop();
      }
}