class Polygon{

    constructor(x, y, width, height) {
        var options = {

        }

        this.polygon_img = loadImage("polygon.png");

        this.body = Bodies.circle(50,200,20);
        World.add(world,this.body);

    }

    display(){

        imageMode(CENTER)
        image(this.polygon_img, this.body.position.x,this.body.position.y,40,40);

    }

}