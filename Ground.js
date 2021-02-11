class Ground 
{
    // Complete the constructor
    constructor(x,y,width,height) 
    {
      var options = 
      {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add(world,this.body)
    }

    // Complete the display function
    display()
    {
      rectMode(CENTER);
      fill("lightblue");
      rect(this.body.position.x,this.body.position.y,this.width,this.height)



    }

  };