class Fly
{

  // Complete the constructor
  constructor(bodyA, pointB) 
  {
    var options = 
    {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
    };
      this.pointB = pointB
      this.rope = Constraint.create(options)
      World.add(world,this.rope)
  }

  // Complete the attach function
  attach(body) 
  {
    this.rope.bodyA = body
  }

  // Complete the fly function
  fly() 
  {
    this.rope.body = null
  }

  // Complete the display function
  display() 
  {
    if (this.rope.bodyA) 
    {
      var pointA = this.rope.bodyA.position
      var pointB = this.pointB
      push()
      strokeWeight(3)
      stroke("white")
      line(pointB.x,pointB.y,pointA.x,pointA.y)
      pop()
    }
  }

}
