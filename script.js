//your JS code here. If required.
// Get elements
const statusText = document.getElementById("status");
const button = document.getElementById("enterBtn");

// Add click event
button.addEventListener("click", function () {
  
  // Change text inside <h1> tag
  statusText.innerHTML = "<h1>Entered Metaverse</h1>";
});