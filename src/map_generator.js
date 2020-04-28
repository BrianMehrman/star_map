function randInt(min = 0, max = 10) {
  return (
    Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min))) +
    Math.ceil(min)
  ); // The maximum is exclusive and the minimum is inclusive
}

// // returns a function that can be used to check the map object to validate the
// // new object being added
// function coordinateValidator(map) {
//   // Check that the position within the provided map to see if the
//   // new object will fit
//   return function (pos = { x: 0, y: 0 }, size = 1, space = 1) {
//     return map.forEach((cell) => cell);
//   };
// }

/*

Creates a placement map for a 2D plane for objects of any size represented as a unit
of the grid.

*/
const MapGenerator = class {
  constructor(count = 1, width = 1, height = 1) {
    this.objectCount = count;
    this.mapWidth = width;
    this.mapHeight = height;
    this.maxMapSize = width * height;
    this.genMap = {};
  }

  nextCoordinate() {
    if (Object.keys(this.genMap).length >= this.maxMapSize) return null;
    const x = randInt(0, this.mapWidth);
    const y = randInt(0, this.mapHeight);

    if (this.genMap[`${x},${y}`] !== undefined) {
      return this.nextCoordinate();
    }

    return [x, y];
  }

  generate() {
    let iterationCount = 0;

    for (let i = 0; i < this.objectCount; i += 1) {
      iterationCount += 1;
      const [x, y] = this.nextCoordinate();
      if (x === null || y == null) {
        console.error(
          "Grid is full could not find a place to put more objects"
        );
        break;
      }
      this.genMap[`${x},${y}`] = {
        size: 1,
        step: randInt(1, 10),
        x,
        y,
      };
    }
    return this.genMap;
  }
};

export default MapGenerator;
