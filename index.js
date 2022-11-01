// Create new h1 element
const header = document.createElement("h1");
// Give it some textContent
const textContent = document.createTextNode("hello world");
// Give it a class name of "header"
header.appendChild(textContent);
// append it as a child of the div#root
document.getElementById("root").appendChild(header);
// my one is too much code

// Bob Ziroll way
// this way is easier
const h1 = document.createElement("h1");
h1.textContent = "Jeffery white is liking React";
h1.className = "header";
document.getElementById("root").appendChild(h1);

