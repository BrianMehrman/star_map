import MapGenerator, { mapRender } from "./map_generator";

describe("MapGenerator", function() {
  describe(".generate", function() {
    it("works", function() {
      const gen = new MapGenerator(2, 10, 10);
      const theMap = gen.generate();
      expect(Object.keys(theMap).length).toEqual(2);
    })
  })
});
