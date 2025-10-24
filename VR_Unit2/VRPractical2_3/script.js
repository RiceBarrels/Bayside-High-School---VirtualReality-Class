let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  let clouds = [];
  let houses = [];

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    new Tree(x, 0 , z);
  }

  for (let i = 0; i < 50; i++) {
    const cloud = new Cloud(rnd(-20,20), 10, rnd(-20,20));
    cloud.display();
    clouds.push(cloud);
  }

  for (let i = 0; i < 10; i++) {
    const house = new House(rnd(-20,20), 0, rnd(-20,20));
    house.display();
    houses.push(house);
  }

})
