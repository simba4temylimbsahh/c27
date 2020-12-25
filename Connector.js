class Connector{

constructor(bodyX, bodyY){

var options = {

bodyA: bodyX,
bodyB: bodyY,
stiffness: 0.04,
length: 10
}
this.connector = Constraint.create(options)
World.add(world, this.connector)
}
display(){

    var pointA = this.connector.bodyA.position
    var pointB = this.connector.bodyB.position
    line(pointA.x, pointA.y, pointB.x, pointB.y)
}
}