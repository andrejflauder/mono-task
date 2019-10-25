import React from 'react';

var elements = document.getElementsByClassName("star-item");

var i;

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%"
  }
}

export default gridView