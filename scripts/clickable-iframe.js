// Get the image class
const img = document.querySelector(".img1");

// Add event listener to image
function showiframe() {
  createYTframe();
  // Remove the image
  img.remove();
}


// Create youtube iframe
function createYTframe() {
  // Create iframe element and set attributes
  var ifrm = document.createElement("iframe");
  const myDiv = document.querySelector(".giprn");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/69uOiPhOwp4");
  ifrm.style.width = "100%";
  ifrm.style.height = "400px";
  // Append the iframe to the div
  myDiv.appendChild(ifrm);
}