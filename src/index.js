import mapRender from "src/map_render";
import MapGenerator from "src/map_generator";
import "./styles.css";
import shipImage from "./images/rocket.svg";

const ONCLICK = "click";
const WIDTH = 600;
const HEIGHT = 400;
const STAR_COUNT = 100;
const SCREEN_BUFFER = 40;

const LEFT_EDGE = -1 * SCREEN_BUFFER;
const RIGHT_EDGE = WIDTH + SCREEN_BUFFER;

let animationLoopID;
const control_bar_elem = document.getElementById("control-bar");

const addButton = (name, callback) => {
  const button = document.createElement("button");
  button.type = "button";
  button.appendChild(document.createTextNode(name));
  button.addEventListener(ONCLICK, callback);

  control_bar_elem.appendChild(button);
  return button;
};

const addObject = (obj, domId) => {
  const location = document.getElementById(domId);
  location.appendChild(obj);
};

const repeatAnimationLoop = (callback) => {
  const wrappedCallback = () => {
    callback();
    animationLoopID = requestAnimationFrame(wrappedCallback);
  };
  return wrappedCallback;
};

const startLoop = (callback) => {
  if (!animationLoopID) {
    const wrappedCallback = repeatAnimationLoop(callback);
    animationLoopID = requestAnimationFrame(wrappedCallback);
  }
};

const stopLoop = () => {
  cancelAnimationFrame(animationLoopID);
  animationLoopID = null;
};

const incrementMap = (starMap) => () => {
  Object.keys(starMap).forEach((key) => {
    const cell = starMap[key];
    if (cell.x < LEFT_EDGE) {
      cell.x = RIGHT_EDGE;
    } else {
      cell.x -= cell.step || 1;
    }
  });
  starMap = mapRender(starMap, "space");
};

const initStarMap = () => {
  const gen = new MapGenerator(STAR_COUNT, WIDTH, HEIGHT);
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

  const ship = document.createElement("img");
  ship.id = "ship";
  ship.src = shipImage;

  addObject(ship, "space");
})();
