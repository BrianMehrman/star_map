
const STAR_CLASS = "star";


const mapRender = (map, elementId = "space") => {
  // loop through and place
  const space = document.getElementById(elementId);
  return Object.keys(map).map((cell) => {
    const star = document.createElement("div");
    star.classList.add(STAR_CLASS)
    const starIcon = document.createTextNode("*");

    star.appendChild(starIcon);
    space.appendChild(star);
    return {
      ...cell,
      star
    };
  });
}

export default mapRender
