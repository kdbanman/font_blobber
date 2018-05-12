function loadSampleTrainingText() {
  const textRequest = new XMLHttpRequest();
  textRequest.addEventListener("load", function () {
    const trainingTextRawElement = document.getElementsByClassName("trainingTextRaw")[0];
    trainingTextRawElement.innerHTML = this.responseText;

    renderRandomTrainingTextLine();
  });

  textRequest.open("GET", "https://raw.githubusercontent.com/tensorflow/tfjs-core/master/src/engine.ts");
  textRequest.send();
}

function renderTextLine(textLine) {
  const textHeight = 20;

  const canvas = document.getElementsByClassName("trainingTextCanvas")[0];
  const ctx = canvas.getContext("2d");

  ctx.canvas.height = textHeight;
  ctx.textBaseline = "bottom";
  ctx.font = "bold " + textHeight + "px Courier New";

  ctx.fillText(textLine, 0, textHeight);
}

function renderRandomTrainingTextLine() {
  const trainingTextRawElement = document.getElementsByClassName("trainingTextRaw")[0];
  const trainingTextLines = trainingTextRawElement.innerHTML.split(/\r?\n/);

  const trainingTextLine = trainingTextLines[Math.floor(Math.random() * trainingTextLines.length)].trim()
  renderTextLine(trainingTextLine);
}

renderTextLine("Hello World")

// Note: ImageData (https://developer.mozilla.org/en-US/docs/Web/API/ImageData) will be the interface between canvas and tensorflow.