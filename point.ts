export class Point1{ //like a abstract class
    // x:number;
    // y:number;
    // z:number;
    constructor(private x?:number, public y?:number,public z?:number) {
            // this.x =x;
            // this.y =y;
            // this.z =z;
    }

    protected draw = ():any => {
        console.log('X:'+ this.x + " Y:" + this.y + ' Z:' + this.z)
    }
    drawRectangle = ():any => {
        console.log('Drawing Rectangle')
        this.draw()
     }

     get X(){
        return this.x;
     }

     set X(value){
        this.x = value;
     }
}

export class Point2{ //like a abstract class
    // x:number;
    // y:number;
    // z:number;
    constructor(private x?:number, public y?:number,public z?:number) {
            // this.x =x;
            // this.y =y;
            // this.z =z;
    }

    protected draw = ():any => {
        console.log('X:'+ this.x + " Y:" + this.y + ' Z:' + this.z)
    }
    drawRectangle = ():any => {
        console.log('Drawing Rectangle')
        this.draw()
     }

     get X(){
        return this.x;
     }

     set X(value){
        this.x = value;
     }
}