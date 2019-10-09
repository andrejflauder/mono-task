import React from 'react';

var elements = document.getElementsByClassName("star-item");

var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%"
  }
}



export default listView