//import $ from "jquery";
//import jQuery from 'jquery'; 

$(document).ready(function () {

  let foo = 'bar bar bar2';
  console.log(foo);
  var context = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
  context = new AudioContext();

  var singleNote;
  $('.stop').click(function () {
    singleNote.disconnect();
  });

  var generateNote = () => {
    console.log('this will eventually generate a sound');
  };

  $('.sound').click(function () {
    console.log('generate sound?');
    try {
      singleNote = context.createOscillator();
      stepper = getRandomIntInclusive(1, 10);
      if (stepper > 4) {
        stepper = getRandomIntInclusive(1, 10);
      }
      singleNote.frequency.value = stepper * 110;
      singleNote.type = "sine";
      singleNote.start(context.currentTime);
      singleNote.stop(context.currentTime + .5);
      singleNote.connect(context.destination);
      console.log('beeping at ' + stepper * 110);
    } catch (e) {
      console.log('Web Audio API is not supported in this browser');
    }
  });

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function createSquare(xPos, yPos, increment) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    svg.setAttribute('stroke', 'black');
    svg.setAttribute('x', xPos * 50);
    svg.setAttribute('y', yPos * 50);
    svg.setAttribute('fill', randomColor());
    svg.setAttribute('rx', '5');
    svg.setAttribute('class', 'square'), svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    document.getElementById("svg").appendChild(svg);
    try {
      console.log('trying');
      singleNote = context.createOscillator();
      stepper = getRandomIntInclusive(1, 10);
      if (stepper > 4) {
        stepper = getRandomIntInclusive(1, 10);
      }
      singleNote.frequency.value = stepper * 110;
      singleNote.type = "sine";
      singleNote.start(context.currentTime + 2.55);
      singleNote.stop(context.currentTime + 2.75);
      singleNote.connect(context.destination);
    } catch (e) {
      console.log('Web Audio API is not supported in this browser');
    }
  }

  function randomColor() {
    let colorCode = "rgb(" + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + ")";
    return colorCode;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let newArray = [];
  let sequence1 = null;

  function testArrays(values) {
    for (let i = 0; i++; i < values) {
      console.log(i);
    }
  }
  testArrays(16);

  $('.test').click(function () {
    createSquare(Math.floor(3), 7, 1);
  });
  $('.clear').click(function () {
    $("#svg").empty();
    clearInterval(sequence1);
    countVar = 0;
    if (sequence1) {
      console.log('failed to clear');
      clearInterval(sequence1);
    }
  });
  $('.generate').click(function () {
    console.log('clicky?');
    for (let i = 0; i < 64; i++) {
      newArray[i] = i;
    }
    newArray = shuffle(newArray);
    console.log('is sequence1 ' + sequence1);
    sequence1 = window.setInterval(countUp, 200);
  });

  function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  let countVar = 0;
  function countUp() {
    console.log('count ' + newArray[countVar] + " and countvar " + countVar);
    createSquare(Math.floor(newArray[countVar] / 8), newArray[countVar] % 8, countVar);
    countVar++;
    if (countVar > 63) {
      clearInterval(sequence1);
      countVar = 0;
    }
  }
});