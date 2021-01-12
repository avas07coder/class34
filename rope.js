class Rope{
    constructor(bodyA,pointB){
        var option ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB=pointB
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
            var pointA =this.rope.bodyA.position;
            var pointB =this.pointB;
            push()
            strokeWeight(4);
            stroke('orange');
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop()
        }
    }
}