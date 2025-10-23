let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  let clouds=[0];
  clouds.length=10;

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    new Tree(x, 0 , z);
  }

  clouds = clouds.map((cloud)=>{
    cloud = new Cloud(rnd(-20,20),10,rnd(-20,20));
    cloud.display()
  })

})
