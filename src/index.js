import mapRender from "src/map_render";
import MapGenerator from "src/map_generator";
import "./styles.css";

let animationLoopID;

const ONCLICK = "click";

const control_bar_elem = document.getElementById("control-bar");

const addButton = (name, callback) => {
  const button = document.createElement("button");
  button.type = "button";
  button.appendChild(document.createTextNode(name));
  button.addEventListener(ONCLICK, callback);

  control_bar_elem.appendChild(button);
  return button;
};

const repeatOften = (callback) => {
  const wrapper = () => {
    callback();
    animationLoopID = requestAnimationFrame(wrapper);
  };
  return wrapper;
};

const startLoop = (callback) => {
  if (!animationLoopID) {
    const wrapper = repeatOften(callback);
    animationLoopID = requestAnimationFrame(wrapper);
  }
};

const stopLoop = () => {
  cancelAnimationFrame(animationLoopID);
  animationLoopID = null;
};

const incrementMap = (starMap) => () => {
  Object.keys(starMap).forEach((key) => {
    const cell = starMap[key];
    if (cell.x > 640) {
      cell.x = -40;
    } else {
      cell.x += cell.step || -1;
    }
  });
  starMap = mapRender(starMap, "space");
};

const initStarMap = () => {
  const gen = new MapGenerator(100, 600, 400);
  let aMap = gen.generate();

  return mapRender(aMap, "space");
};

// Add stars to #space element
(function () {
  const starMap = initStarMap();
  const incrementHandler = incrementMap(starMap);
  // add start & stop buttons
  addButton("start", () => startLoop(incrementHandler));
  addButton("stop", () => stopLoop());
})();

/* TODO:
  - onces a star leave field of view queue up creation of new star to left of screen
*/
