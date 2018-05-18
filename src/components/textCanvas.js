

var MAX_DEFINITION_PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
  })();

  function setCanvasSizeWithDisplayPixelRatio(canvas, w, h, ratio) {
    if (!ratio) { ratio = MAX_DEFINITION_PIXEL_RATIO; }

    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
  }

  function renderTextLine(textLine) {
    const textHeight = 40;

    const canvas = document.getElementsByClassName("trainingTextCanvas")[0];
    const ctx = canvas.getContext("2d");

    setCanvasSizeWithDisplayPixelRatio(canvas, 1000, textHeight, 0.5);

    ctx.textBaseline = "bottom";
    ctx.font = "bold " + textHeight + "px Courier New";

    ctx.fillText(textLine, 0, textHeight);
  }

  function renderRandomTrainingTextLine() {
    const rawTrainingTextElement = document.getElementsByClassName("rawTrainingText")[0];
    const trainingTextLines = rawTrainingTextElement.innerHTML.split(/\r?\n/);

    const trainingTextLine = trainingTextLines[Math.floor(Math.random() * trainingTextLines.length)].trim()
    renderTextLine(trainingTextLine);
  }

  function getImageColumn(offset) {
    // canvas.height is true image pixel height.
    // canvas.style.height is height on actual layout.  woot.

    const canvas = document.getElementsByClassName("trainingTextCanvas")[0];
    const ctx = canvas.getContext("2d");

    return ctx.getImageData(offset, 0, 1, canvas.height);
  }

  function insertImageColumn(columnImageData, offset) {
    const canvas = document.getElementsByClassName("trainingTextCanvas")[0];
    const ctx = canvas.getContext("2d");

    return ctx.putImageData(columnImageData, offset, 0);
  }