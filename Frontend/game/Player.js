export class Player{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 100;
        this.alive = true;
        this.image = new Image();
        this.image.src = 'PixelCharacter.png';
        this.speed = 350;
    }
    draw(){
        canvas.drawImage(this.image,this.x, this.y);
    }
}
