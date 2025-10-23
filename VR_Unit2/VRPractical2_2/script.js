let sunScale = 0;
let scene;

document.addEventListener("DOMContentLoaded",()=>{
    // scene = document.querySelector("a-scene")
    window.setInterval(loop,1)
    
    // scene.addEventListener("loaded",(()=>window.setInterval(loop,1)))
})

function loop(){
    // Make the car move to the left.
    const car = document.querySelector("#car")
    car.setAttribute("position",{x:car.getAttribute("position").x+=0.1,y:0,z:-8})

    // Make the pokeball rotate on the x axis
    const pokeball = document.querySelector("#pokemonball")
    pokeball.setAttribute("rotation",{x:pokeball.getAttribute("rotation").x+=1})

    // Make the rocket fly up.
    const rocket = document.querySelector("#rocket")
    const rocketPosition = {
        x:rocket.getAttribute("position").x,
        y:rocket.getAttribute("position").y,
        z:rocket.getAttribute("position").z
    }
    rocket.setAttribute("position",{
        x:rocketPosition.x, 
        y:rocket.getAttribute("position").y+=0.1, 
        z:rocketPosition.z
    })

    // Make the dude “grow”
    const dude = document.querySelector("#dude")
    dude.setAttribute("scale",{
        x:dude.getAttribute("scale").x+=0.001,
        y:dude.getAttribute("scale").y+=0.001,
        z:dude.getAttribute("scale").z+=0.001
    })
    dude.setAttribute("position",{
        x:-2,
        y:dude.getAttribute("position").y+=0.00075,
        z:-10
    })

    // Make the sun fade in
    const sun = document.querySelector("#sun")
    if(sunScale >= 1) sunScale = 1;
    else sunScale += 0.001
    
    sun.setAttribute("scale",{
        x: sunScale,
        y: sunScale,
        z: sunScale
    })
    
    sun.setAttribute("position",{
        y: 5*sunScale,
        z: -15
    })

    console.log(sun.getAttribute("scale").x)


}