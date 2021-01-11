class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=100;
		
		this.body1=Bodies.rectangle(this.x, this.y, this.width, 4, {isStatic:true});
		this.body2=Bodies.rectangle(this.x-100, this.y-50, 4, this.height, {isStatic:true});
		this.body3=Bodies.rectangle(this.x+100, this.y-50, 4, this.height, {isStatic:true});
		World.add(world, this.body1);
		World.add(world, this.body2);
		World.add(world, this.body3);

	}
	display()
	{
			var pos=this.body1.position;
			
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			
			stroke(255)
			
			rect(0,0,this.width, 4);
			rect(-100,-50,4,this.height);
			rect(100,-50,4,this.height);
			pop()

	}

}