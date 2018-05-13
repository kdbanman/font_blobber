function loadSampleTrainingText() {
    const textRequest = new XMLHttpRequest();
    textRequest.addEventListener("load", function () {
      const rawTrainingTextElement = document.getElementsByClassName("rawTrainingText")[0];
      rawTrainingTextElement.innerHTML = this.responseText;
  
      // this probably shouldn't be called here, should instead be done with data bindy magics
      renderRandomTrainingTextLine();
    });
  
    textRequest.open("GET", "https://raw.githubusercontent.com/tensorflow/tfjs-core/master/src/engine.ts");
    textRequest.send();
  }