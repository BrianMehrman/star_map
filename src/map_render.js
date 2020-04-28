const STAR_CLASS = "star";

const mapRender = (map, elementId = "space") => {
  // loop through and place
  const space = document.getElementById(elementId);
  return Object.keys(map).map((key) => {
    const cell = map[key];
    const star = cell.star || document.createElement("div");
    if (!cell.star) {
      const starIcon = document.createTextNode("*");
      star.classList.add(STAR_CLASS);
      star.appendChild(starIcon);
      space.appendChild(star);
    }

    star.style.transform = `translate(${cell.x}px, ${cell.y}px)`;

    return {
      ...cell,
      star,
    };
  });
};

export default mapRender;
