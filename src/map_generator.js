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

export function mapRender(map, elementId = "space") {
  // loop through and place
  const space = document.getElementById(elementId);
  return Object.keys(map).map((cell) => {
    const node = document.createElement("div");
    const starIcon = document.createTextNode("*");

    node.appendChild(starIcon);
    space.appendChild(node);
    return {
      ...cell,
      star: node
    };
  });
}

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

    const point = `${x},${y}`;
    if (this.genMap[point] !== undefined) {
      return this.nextCoordinate();
    }
    console.log(`nextCoordinate#point: ${point}`);

    return point;
  }

  generate() {
    let iterationCount = 0;

    for (let i = 0; i < this.objectCount; i += 1) {
      iterationCount += 1;
      const point = this.nextCoordinate();
      console.log(`point: ${point}`);
      if (point === null) {
        console.error(
          "Grid is full could not find a place to put more objects"
        );
        break;
      }
      this.genMap[point] = { size: 1 };
    }
    return this.genMap;
  }
};

export default MapGenerator;
