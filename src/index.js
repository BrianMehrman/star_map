const MapGenerator = require("./map_generator");

(function () {
  const gen = MapGenerator.generator(10, 600, 400);
  const aMap = gen.generate();

  MapGenerator.mapRender(aMap, "space");
}());
