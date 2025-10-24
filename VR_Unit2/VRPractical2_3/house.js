class House {
    constructor(positionX,positionY,positionZ){
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;
        
        this.house = document.createElement("a-entity");

        this.top = document.createElement("a-cylinder");
        this.top.setAttribute("color", `rgb(${rnd(0,255)},${rnd(0,255)},${rnd(0,255)})`);
        this.top.setAttribute("position", "0 4 0");
        this.top.setAttribute("radius", "2");
        this.top.setAttribute("height", "4");
        this.top.setAttribute("segments-radial", "3");
        this.top.setAttribute("rotation", "270 0 0");

        this.house.append(this.top);


        this.bottom = document.createElement("a-box");
        this.bottom.setAttribute("color", `rgb(${rnd(200,255)},${rnd(200,255)},${rnd(200,255)})`);
        this.bottom.setAttribute("position", "0 1.5 0");
        this.bottom.setAttribute("height", "3");
        this.bottom.setAttribute("width", "3");
        this.bottom.setAttribute("depth", "4");
        this.bottom.setAttribute("rotation", "0 0 0");

        this.house.append(this.bottom);

        this.house.setAttribute("position",{x:positionX, y:positionY, z:positionZ});
        this.house.setAttribute("scale",{x:rnd(50,100)/100, y:rnd(50,100)/100, z:rnd(50,100)/100});
    }

    display(){
        const scene = document.querySelector("a-scene");
        scene.append(this.house)
    }
}