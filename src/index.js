import mapRender from "src/map_render"
import MapGenerator from "src/map_generator";
import "./styles.css";

// Add stars to #space element
(function () {
  const gen = new MapGenerator(10, 600, 400);
  const aMap = gen.generate();

  mapRender(aMap, "space");
}());
