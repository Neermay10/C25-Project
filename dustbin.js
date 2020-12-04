class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //this.width = Box.width;
        //this.height = Box.height;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}