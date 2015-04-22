var links = document.querySelectorAll(".content-links");
var wrapper = document.querySelector("#content-wrap");

// activeLink displays current selection
var activeLink = 0;

// Event Listeners
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener('click', setClickedItem, false);

  // Idefentifies the item for activeLink
  link.itemID = i;
}

// set first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
  removeActiveLinks();

  var clickedLink = e.target;
  activeLink = clickedLink.itemID;

  changePosition(clickedLink);
}

function removeActiveLinks() {
  for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
  }
}

// Handle changing the slider position and ensures that
// the correct link is highlighted as being active
function changePosition(link) {
  var position = link.getAttribute("data-pos");
  wrapper.style.left = position;

  link.classList.add("active");
}
