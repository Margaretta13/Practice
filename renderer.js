// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var infoButton;
var para;

const {remote, clipboard} = require('electron');
const {Menu, MenuItem, dialog } = remote;

function handleInfoButton() {
//dialog.showOpenDialog("Look at that!!")

//  var test = document.getElementById("test");
//  test.append("check this out!!")

  //$('.test').append("check this out!!")

  dialog.showMessageBox({ message: "There is not much info! :-)",
   buttons: ["OK"] });

  //dialog.showOpenDialog({properties: ['openFile']}, function(filename) {
  //  onChosenFileToOpen(filename.toString()); });
}

onload = function() {
  infoButton = document.getElementById("info");

  infoButton.addEventListener("click", handleInfoButton);

};
