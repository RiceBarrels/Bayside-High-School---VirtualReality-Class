class Cloud {
    constructor(positionX,positionY,positionZ){
        this.positionX=positionX;
        this.positionY=positionY;
        this.positionZ=positionZ;
        this.cloudEntity = document.createElement("a-entity");
        this.cloudEntity.setAttribute("position",{x:positionX,y:positionY,z:positionZ});
        this.cloudEntity.setAttribute("id","cloud");
        this.ballMap=[0,0,0,0,0]
        this.ballMap.map((ball)=>{
            ball = document.createElement("a-sphere");
            ball.setAttribute("scale",{x:rnd(1,2),y:rnd(1,2),z:rnd(1,2)});
            ball.setAttribute("position",{x:rnd(0,3),y:rnd(0,3),z:rnd(0,3)});
            this.cloudEntity.append(ball);

            return null;
        });
    }

    display(){
        const scene = document.querySelector("a-scene");
        scene.append(this.cloudEntity);
    }
}