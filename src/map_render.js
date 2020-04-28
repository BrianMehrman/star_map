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

    star.style.fontSize = `${cell.size + 3}px`;
    star.style.transform = `translate(${cell.x}px, ${cell.y}px)`;

    return {
      ...cell,
      step: 11 - cell.size,
      star,
    };
  });
};

export default mapRender;
