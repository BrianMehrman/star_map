import mapRender from "src/map_render"
import MapGenerator from "src/map_generator";

describe("mapRender", function() {
  let gen;

  beforeEach(function() {
    gen = new MapGenerator(4, 100, 100);

    document.body.innerHTML = `
      <div class="app">
        <div class="column">
          <div>space is big, really big</div>

          <div id="space"></div>
        </div>
      </div>
    `;

    document.body.innerHTML
  });

  it("creates nodes for each map key", function() {
    const starMap = gen.generate();
    mapRender(starMap);
    const stars = document.getElementsByClassName("star");
    expect(stars.length).toBe(4);
  });
});
