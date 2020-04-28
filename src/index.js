import mapRender from "src/map_render";
import MapGenerator from "src/map_generator";
import "./styles.css";

const startLoop = (callback, interval = 200) => {
  window.loop = setInterval(callback, interval);
  return setInterval(callback, interval);
};

const stopLoop = () => clearInterval(window.loop);

// Add stars to #space element
(function () {
  const gen = new MapGenerator(100, 600, 400);
  let aMap = gen.generate();

  aMap = mapRender(aMap, "space");

  const increment = () => {
    Object.keys(aMap).forEach((key) => {
      const cell = aMap[key];
      cell.x += cell.step || -1;
    });
    aMap = mapRender(aMap, "space");
  };
  // on timer increment stars
  startLoop(increment);
})();

/* TODO:
  - onces a star leave field of view queue up creation of new star to left of screen
*/
