import React from 'react';
import starrows from './Starrows'

document.getElementById("buttoneditscuti").addEventListener("click", editUYScuti);

function editUYScuti() {

  var showedit = document.getElementById("edit-input-scuti");
  if (showedit.style.display === "block") {
    showedit.style.display = "none";
  } else {
    showedit.style.display = "block";
  }
}

export default editUYScuti