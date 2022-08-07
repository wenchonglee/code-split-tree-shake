// a function that imports foobar
async function getFoobarText() {
  const element = document.createElement("div");
  const { default: foobarString } = await import("./foobar");

  element.innerHTML = foobarString;

  return element;
}

// Render a button that calls the getFoobarText function
const button = document.createElement("button");
button.innerText = "foobar";
button.onclick = () =>
  getFoobarText().then((component) => {
    document.body.appendChild(component);
  });

document.body.appendChild(button);
